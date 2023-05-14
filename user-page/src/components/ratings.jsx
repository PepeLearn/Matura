import { useEffect, useState } from "react";

const Ratings = ({ productID, handleRating }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    let data = {
      productID: productID,
    };
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getReviews=true",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setReviews(data.reviews);
        handleRating(data.rating);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (reviews) {
    return (
      <div>
        {reviews.map((item) => {
          <div>
            <div>{item.username}</div>
            <div>{item.description}</div>
            <div>{item.rating}</div>
          </div>;
        })}
      </div>
    );
  }
};
export default Ratings;
