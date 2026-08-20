function Hero() {
  return (
    <section className="hero">

      <div className="hero-sticker sticker-star">
        ✦
      </div>

      <div className="hero-sticker sticker-heart">
        ♡
      </div>

      <div className="hero-intro">
        <span className="hero-tag">
          HMSI ITS · PILAR AKSI
        </span>

        <h1>
          External
          <span>Affairs</span>
        </h1>

        <p>
          Get to know about
          External Affairs.
        </p>
      </div>

      <div className="hero-photo-container">

        <div className="photo-note">
          MEET THE TEAM
        </div>

        <div className="hero-photo">
          <img
            src="/images/team.jpg"
            alt="External Affairs Team"
          />
        </div>

        <div className="photo-caption">
          <span>#</span>
          EAVOLVING
        </div>

      </div>

      <div className="scroll-text">
        Scroll to explore ↓
      </div>

    </section>
  );
}

export default Hero;