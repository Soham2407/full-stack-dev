import "./Card.css";
import CardDetails from "./CardDetails";

const Card = ({ imageUrl, courseName, price, originalPrice, discount }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img">
          <img src={imageUrl} alt="web dev" className="img" />
        </div>
        <CardDetails
          courseName={courseName}
          price={price}
          originalPrice={originalPrice}
          discount={discount}
        />
      </div>
    </div>
  );
};

export default Card;
