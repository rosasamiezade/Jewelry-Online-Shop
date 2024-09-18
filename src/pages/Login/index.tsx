import AuthLogin from "../../components/Auth/AuthLogin";
interface ILoginProps {
    
}
 
const Login:React.FC<ILoginProps> = () : JSX.Element=> {
    return ( <>
    <AuthLogin/>
    </> );
}
 
export default Login;