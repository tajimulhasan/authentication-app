import AuthMainView from "@/mainViews/authMainView/AuthMainView";
import { AUTH_PAGE_TYPE } from "@/shared/enums";

const Signup = () => {
  return (
    <>
    <AuthMainView authPageType={AUTH_PAGE_TYPE.SIGNUP}/>
    </>
  );
};

export default Signup;
