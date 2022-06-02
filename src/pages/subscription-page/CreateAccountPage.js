/* components */

import CreateAccount from "../../components/Subscription/CreateAccount";
import BackButton from "../../components/Subscription/backButton";
/* css */
import "./subscriptionPage.css";

const CreateAccountPage = () => {
  return (
    <div className="sub-page-container">
      <BackButton />
      <div className="circle">
        <span className="circle-top-right" />
        <span className="circle-bottom-left" />
        <span className="circle-bottom-right" />
      </div>
      <div className="stepper">
        <div className="line-stepper">
          <div className="dot" />
          <div className="active-dot" />
          <span className="dot" />
        </div>
        <div className="text-stepper">
          <div>Choose subscription</div>
          <div>Create Account</div>
          <div>Payment</div>
        </div>
      </div>

      <CreateAccount />
    </div>
  );
};

export default CreateAccountPage;
