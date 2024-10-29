import AuthMainView from "@/mainViews/authMainView/AuthMainView";
import { AUTH_PAGE_TYPE } from "@/shared/enums";

const Login = () => {


  return (
    <>
      <AuthMainView authPageType={AUTH_PAGE_TYPE.LOGIN} />
    </>
  );
};

export default Login;
