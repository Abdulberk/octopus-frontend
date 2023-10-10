import AuthNavbar from "../components/AuthNavbar";
import RegisterForm from "../components/register/RegisterForm";
import SocialIcons from "../components/register/icons/SocialIcons";
import { SocialProps } from "../components/register/icons/SocialIcons";


const socialPlatforms = [
    { iconType: "facebook"},
    { iconType: "apple" },
    { iconType: "google" },
  ]  as SocialProps[];
  
  const RegisterFormHeader = () => {
    return (
      <section className="w-auto h-auto flex flex-col gap-y-[22px] items-center justify-center font-['Helvetica'] font-bold text-[18px] text-center">
        <p className="leading-[140%] text-[#2D3748]">Register with</p>
        <div className="w-auto h-auto flex flex-row gap-x-[15px]">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="w-[75px] h-[75px] border border-[#E2E8F0] rounded-[15px] bg-white flex items-center justify-center"
            >
              <SocialIcons iconType={platform.iconType} />
            
            </div>
          ))}
        </div>
        <p className="leading-[140%] text-[#A0AEC0]">or</p>
      </section>
    );
  };


const Register = () => {

return (
   
    <div className="min-h-[120vh] flex flex-col items-center relative p-6">

    <div className="h-[520.5px] w-full bg-cover bg-center rounded-[15px]" style={{ backgroundImage: 'url(src/assets/register-cover.png)' }}>

</div>

    <div className="absolute top-0 w-full flex flex-col items-center">
   
      <div className = "absolute top-[58.5px]" >
      <AuthNavbar mode="dark" bg={false} labelsColor="white" color="white" />
        </div>

      <div className = "absolute top-[148.5px] w-[452.5px] h-[868px] flex flex-col items-center justify-center gap-y-[66.5px] text-white text-center " >
        <section className = "flex flex-col gap-y-[9.5px] ">
        <h1 className = "text-[32px] font-bold " >Welcome!</h1>
         <p className = "text-[14px] text-center w-auto max-w-[333px]" >Use these awesome forms to login or create new account in your project for free.
        </p>
        </section>


        <div className = "w-full h-auto min-h-[713.5px] flex flex-col gap-y-[17px] bg-white rounded-[15px] shadow-authNavbar pl-[51.5px] pr-[51px] pt-[45.5px] pb-[45.5px]" >
        <RegisterFormHeader />
      <RegisterForm />
      </div>


      </div>
     
    </div>
  </div>
)

}

export default Register;

{/* <section className = "" >
               
            </section>
            <div className = "" >
                <RegisterForm />
            </div> */}