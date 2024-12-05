import "./signinpage.css";
import { SignIn } from "@clerk/clerk-react";

const Signinpage = () => {
  return (
    <div className="Signinpage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default Signinpage;
