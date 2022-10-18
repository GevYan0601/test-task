import LoginForm from "../components/loginForm"
import { useDispatch } from "react-redux";
import fetchLogin from "../store/reducer/user/operations/fetchLogin";

export default function Home() {
  const dispatch = useDispatch();


  const onFinish = (values) => {
      dispatch(fetchLogin(values))
  };


  return (
    <div>
      <LoginForm 
      onFinish={onFinish}
      />
    </div>
  )
}
