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

  const Star = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400 inline"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  };

  return (
    <div className="w-3/4 mx-auto mb-20">
      {reviews.map((item) => {
        return (
          <div className="flex my-4">
            <div className="w-1/6">
              <img src={item.image} alt="User Avatar" className="w-full" />
            </div>
            <div className="w-5/6 ml-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">{item.username}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
                <div className="text-red-500 cursor-pointer">Delete</div>
              </div>
              <div className="my-4">{item.description}</div>
              <div className="flex items-center">
                <div className="mr-2">Stars:</div>
                {[...Array(Math.floor(item.rate / 10))].map(
                  (
                    e,
                    i //vrne tolko zvezdic kolko je rating popvprecje ne dela na decimalkah
                  ) => (
                    <Star key={i} />
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
