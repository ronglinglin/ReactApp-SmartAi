import "./signoutpage.css";
import { SignUp } from "@clerk/clerk-react";

const Signoutpage = () => {
  return (
    <div className="Signoutpage">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default Signoutpage;
