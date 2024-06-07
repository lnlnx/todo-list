import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { authUserAPI } from '../../APIs/authAPIs';
// import './todo.css';
const Login = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     getTodosAPI().then((data)=>{
    //     dispatch(listTodos(data));
    //    });
    // },[])
    const handleLogin = async(e) => {
        e.preventDefault();
        if(name && password){
            const existUser = {
                name: name,
                password: password
            }
         const {accessToken} = await authUserAPI(existUser);
         document.cookie = `accessToken=${accessToken}`;
        }
    }
    const handleInputOnChange = (e) => {
        const val = e.target.value

        if(e.target.name == 'name') {
            setName(val);
        }
        if(e.target.name == 'password'){
            setPassword(val);
        }
    }
    return <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={handleInputOnChange}></input>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' name='password' onChange={handleInputOnChange}></input>
        <button onClick={handleLogin}>Login</button>
    </form>

}

export default Login;