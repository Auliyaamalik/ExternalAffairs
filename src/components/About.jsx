import { useEffect, useState } from "react";

function About() {
  const words = ["connect", "collaborate", "make impact"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);

          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="about" id="about">
      <div className="about-decoration about-star">✦</div>

      <div className="about-decoration about-heart">♡</div>

      {/* LEFT */}
      <div className="about-left">
        <div className="section-label">01 · ABOUT US</div>

        <h2 className="about-title">
          <span className="about-we">We</span>

          <span className="changing-word">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </h2>
      </div>

      {/* RIGHT */}
      <div className="about-card">
        <div className="about-card-number">01</div>

        <div className="about-card-content">
          <span className="about-card-label">GET TO KNOW US</span>

          <h3>External Affairs</h3>

          <div className="about-divider">
            <span></span>
            <span>•</span>
            <span></span>
          </div>

          <p>
            External Affairs adalah departemen HMSI yang berperan menjadi
            pembangun jembatan dan penjaga hubungan eksternal HMSI. Selain itu
            juga bertanggung jawab dalam menjalin kerja sama dengan himpunan
            lain, alumni, mitra industri, serta berbagai stakeholder eksternal.
            External Affairs juga memperkuat relasi dengan IKASI (Ikatan Alumni
            Sistem Informasi) sebagai bentuk sinergi antara mahasiswa dan
            alumni. Tidak lupa memperkaya informasi terkait Internasionalisasi
            kepada mahasiswa Departemen Sistem Informasi dengan berbagai sarana.
          </p>
        </div>

        <div className="about-card-decoration">✦</div>
      </div>
    </section>
  );
}

export default About;
