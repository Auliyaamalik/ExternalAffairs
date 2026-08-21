import { useState } from "react";

const feedbacks = {
  1: "Aku tidak sukaaaa 😭",
  2: "Hmm... masih bisa lebih baik sih 👀",
  3: "Lumayan, tidak mengecewakan.",
  4: "Oke ini mulai seru sih...",
  5: "WAH GILA ABIS SINI KEREN, SUKA SEKALI PENGEN MASUK EA SEKARANG JUGA!!!!",
};

function Feedback() {
  const [rating, setRating] = useState(0);

  return (
    <section className="feedback" id="feedback">

      <div className="feedback-inner">

        <span className="section-label">
          03 · TELL US
        </span>

        <h2>
          How was your
          <span>experience?</span>
        </h2>

        <p className="feedback-subtitle">
          Be honest. We can take it... probably.
        </p>


        <div className="feedback-card">

          <p className="feedback-question">
            How would you rate your
            <strong>External Affairs</strong> experience?
          </p>


          <div
            className="rating-container"
            role="radiogroup"
            aria-label="Experience rating"
          >

            {[1, 2, 3, 4, 5].map((number) => (

              <button
                key={number}
                type="button"
                className={`rating-star ${
                  rating >= number ? "active" : ""
                }`}
                onClick={() => setRating(number)}
                aria-label={`${number} out of 5`}
                aria-pressed={rating === number}
              >
                ★
              </button>

            ))}

          </div>


          <div className={`feedback-response ${rating ? "show" : ""}`}>

            {rating ? (
              <>
                <span className="feedback-rating">
                  {rating}/5
                </span>

                <p>
                  {feedbacks[rating]}
                </p>
              </>
            ) : (
              <p>
                Pick a star. We promise no judgment.
              </p>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Feedback;