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
        method: "POST",
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

  const Star = ({ filled }) => {
    return (
      <svg
        aria-hidden="true"
        className={`w-5 h-5 text-yellow-400 inline ${
          filled ? "fill-current" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L8 8l-6 1 4 4-1 6 6-3 6 3-1-6 4-4-6-1z"></path>
      </svg>
    );
  };

  return (
    <div className="w-3/4 mx-auto mb-20">
      {reviews.map((item) => {
        const roundedRating = Math.round(item.rate);
        return (
          <div className="flex my-4 mr-20" key={item.reviewId}>
            <div className="w-1/6">
              <div className="ml-10">
                <img
                  className="rounded-full h-16 w-16 object-cover object-center border-2 mt-4 ml-20"
                  src={`http://127.0.0.1/matura-backend/profile/images/${item.userid}.png`}
                  alt="User avatar"
                />
              </div>
            </div>
            <div className="w-5/6 ml-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">{item.username}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
              <div className="my-4 text-justify">{item.description}</div>
              <div className="flex items-center">
                <div className="mr-2">Stars:</div>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < roundedRating} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
