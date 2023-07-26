import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const [btnText, setBtnText] = useState("edit review");

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
    setBtnText(viewEditForm ? "edit review" : "see review");
  };

  let reviewStar = "";
  for (let i = 0; i < review.rating; i++) {
    reviewStar += "⭐️";
  }
  for (let i = review.rating; i < 5; i++) {
    reviewStar += "☆";
  }
  
  return (
    <div className="Review">
      <button onClick={toggleView} >{btnText}</button>
      <button onClick={() => handleDelete(review.id)} >delete</button>
      {viewEditForm ? 
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleEdit}
        />
        :
        <div>
          <h4>
          {review.title} <span>{reviewStar}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </div>
      }
    </div>
  );
}
  
export default Review;
