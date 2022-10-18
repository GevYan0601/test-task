import { Button } from "antd";

const MyButton = ({name,onClick})=>{
    return(
        <Button onClick={onClick}  type="primary" htmlType="submit">
            {name}
        </Button>
    )
}

export default MyButton;