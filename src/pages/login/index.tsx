import { AUTH_PAGE_TYPE } from "@/shared/enums";
import PublicLayout from "@/layouts/public/PublicLayout";
import AuthMainView from "@/mainViews/authMainView/AuthMainView";

const Login = () => {


  return (
    <PublicLayout>
      <AuthMainView authPageType={AUTH_PAGE_TYPE.LOGIN} />
    </PublicLayout>
  );
};

export default Login;
