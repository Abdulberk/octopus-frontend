
import AuthNavbar from '../components/AuthNavbar';
import LoginForm from '../components/login/LoginForm';

const Login = () => {


  return (
    <div className="w-full min-h-screen flex items-start justify-start relative">
      <div className = "absolute top-6 z-[999999] translate-x-1/2" >
      <AuthNavbar mode = "light" bg = {true} />
      </div>
     
      <div className="absolute right-0 h-[872px] w-[862px] bg-loginCover bg-center bg-cover z-40"></div>
      <div className="w-full ">
        <div className="w-full h-screen  flex-col rounded-[25px] bg-white flex items-start justify-center">

            <div className = "absolute left-[464px] top-[282px]">
            <LoginForm />
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
