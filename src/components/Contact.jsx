function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-orbit contact-orbit-one">
        ✦
      </div>

      <div className="contact-orbit contact-orbit-two">
        ♡
      </div>


      <div className="contact-inner">

        <span className="section-label">
          03 · GET IN TOUCH
        </span>

        <h2>
          Let's
          <span>Connect.</span>
        </h2>

        <p>
          Have a question, idea, or opportunity?
          We'd love to hear from you.
        </p>


        <div className="contact-links">

          {/* EMAIL */}
          <a
            href="mailto:ea.pilaraksi@gmail.com"
            className="contact-link"
            aria-label="Email External Affairs"
          >

            <svg
              className="contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M4 7L12 13L20 7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Email</span>

          </a>


          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/easikinazza/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Instagram External Affairs"
          >

            <svg
              className="contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="17.3"
                cy="6.7"
                r="1"
                fill="currentColor"
              />
            </svg>

            <span>Instagram</span>

          </a>

        </div>

      </div>


      <div className="contact-footer">

        <span>
          HMSI ITS · PILAR AKSI
        </span>

        <span>
          EXTERNAL AFFAIRS · 2026
        </span>

      </div>

    </section>
  );
}

export default Contact;