import { AUTH_PAGE_TYPE } from "@/shared/enums";
import PublicLayout from "@/layouts/public/PublicLayout";
import AuthMainView from "@/mainViews/authMainView/AuthMainView";

const Signup = () => {
  return (
    <PublicLayout>
      <AuthMainView authPageType={AUTH_PAGE_TYPE.SIGNUP} />
    </PublicLayout>
  );
};

export default Signup;
