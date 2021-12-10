import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import "./subscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="sub-page-container">
      <div className="blue-line"></div>
      <div className="heading">
        <h2>
          The payment from subscription goes to Meliora Impact, so we can help
          you get great digital content and strategies to grow your business
        </h2>
      </div>
      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
