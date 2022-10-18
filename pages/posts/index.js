import { useDispatch, useSelector } from "react-redux";
import fetchPosts from "../../store/reducer/posts/operations/fetchPosts";
import { useEffect } from "react";
import { postsSelector } from "../../store/reducer/posts/selector";
import { userSelector } from "../../store/reducer/user/selector";
import deletePost from "../../store/reducer/posts/operations/deletePost";
import NewPost from "../../components/NewPostForm";
import addNewPost from "../../store/reducer/posts/operations/addNewPost";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { logoutAction } from "../../store/reducer/posts/action";
import MyButton from "../../components/Button";
import { Image } from "antd";


const Posts = ()=>{
    const dispatch = useDispatch();
    const posts = useSelector(postsSelector);
    const user = useSelector(userSelector);
    const router = useRouter();

    useEffect(()=>{
        if(user.id){
            dispatch(fetchPosts())
        }
    },[user]);

    const deletePostById = (id)=>{
        dispatch(deletePost(id))
    }

    const onFinish = (values)=>{
        dispatch(addNewPost({title: values.title}))
    }

    const logout = ()=>{
        dispatch(logoutAction)
        router.push("/")
    }

    return(
        <div>
                <div className={styles.newPost}>
                    <div>
                    <NewPost onFinish={onFinish}/>
                        <div>  
                                {posts.map((item,index)=><div key={index.toString()}>
                                <div className={styles.deleteButton}>
                                    <MyButton name='delete' 
                                    onClick={()=>{deletePostById(item.id)}}/>
                                    <span>{item.title}</span> 
                                </div>            
                                                        </div>)}
                        </div> 
                    </div>
                    <div>
                    {user && <p className={styles.userFullName}>{user.firstName} {user.lastName}</p>}
                        <div className={styles.userProfileImg}>
                            <Image 
                            width={200}
                            src="https://www.kindpng.com/picc/m/24-248273_profile-image-png-of-a-woman-female-profile.png" />
                        </div>
                        
                    </div>  
                    <div>
                        <MyButton name='Log out' onClick={logout}/>
                    </div>
                </div>
            <br/> 
        </div>
    )
}

export default Posts;