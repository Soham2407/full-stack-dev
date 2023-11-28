import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="main">
        <h1>Courses</h1>
        <div className="cards-list">
          <Card
            imageUrl="https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg"
            courseName="Web Development Master Course @dot Batch"
            price="4500"
            originalPrice="6500"
            discount="42"
          />
          <Card
            imageUrl="https://dgyugonj9a9mu.cloudfront.net/63ac9183e4b0f1067f1b7b32_scaled_cover_daabaae21b.jpg"
            courseName="Data Structures and Algorithms Bootcamp @Supreme Batch"
            price="3500"
            originalPrice="7000"
            discount="50"
          />
        </div>
      </div>
    </>
  );
}

export default App;
