import { useDispatch } from "react-redux"
import { createUser } from "../../redux/states/user"
import { getMorty } from "../../services"

function Login() {

    const login = async () => {
        const dispatch = useDispatch()
        try {
            const result = await getMorty()
            dispatch(createUser(result))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <button onClick={login}>LOGIN PAGE</button>
        </div>
    )
}

export default Login