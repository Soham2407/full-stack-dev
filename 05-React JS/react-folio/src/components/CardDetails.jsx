import "./CardDetails.css";

const CardDetails = ({ courseName, price, originalPrice, discount }) => {
  return (
    <div className="details-section">
      <h2>{courseName}</h2>
      <hr />
      <div className="price">
        <span className="amount">₹{price}</span>
        <span className="org-amount">₹{originalPrice}</span>
        <span className="discount-tag">{discount}% off</span>
      </div>
    </div>
  );
};

export default CardDetails;
