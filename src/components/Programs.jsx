const programs = [
  {
    number: "01",
    title: "Alumni Career Talk",
    year: "2026",
    description:
      "Sesi sharing bersama alumni Sistem Informasi ITS mengenai pengalaman, dunia kerja, dan perjalanan karier untuk membantu mahasiswa mengenal berbagai peluang karier setelah kuliah.",
    image: "/images/act.jpg",
  },
  {
    number: "02",
    title: "Ormawa Visit",
    year: "2026",
    description:
      "Kegiatan tatap muka dalam bentuk acara benchmarking demi menjalin hubungan baik dan mendapatkan insight dengan organisasi mahasiswa (ormawa) yang ada di dalam maupun di luar ITS.",
    image: "/images/ov.jpg",
  },
  {
    number: "03",
    title: "Abroad Preparation Program",
    year: "2026",
    description:
      "Abroad Preparation Program/APP adalah sebuah program panduan yang dirancang untuk membantu mahasiswa Sistem Informasi mempersiapkan diri untuk kesempatan internasional seperti pertukaran pelajar, program singkat, atau magang. APP tidak hanya memberikan informasi, pada program ini juga menawarkan pengalaman nyata, tips and trick, sampai simulasi IELTS di acara utama.",
    image: "/images/app.jpg",
  },
  {
    number: "04",
    title: "Company Visit",
    year: "2026",
    description:
      "Program eksplorasi dan kunjungan ke perusahaan yang menarik untuk mencari pengalaman baru dan menambah wawasan.",
    image: "/images/comvis.jpg",
  },
];


const agendas = [
  {
    number: "01",
    title: "English Clinic",
    description:
      "Deskripsi singkat mengenai agenda.",
  },
  {
    number: "02",
    title: "HMSI Connect",
    description:
      "Menghimpun data alumni Sistem Informasi serta melakukan wawancara (Podcast) dengan alumni SI sebagai narasumber dari berbagai bidang yang hasilnya akan disampaikan melalui OA HMSI.",
  },
  {
    number: "03",
    title: "Joint Gate",
    description:
      "Wadah kolaborasi antara HMSI (Himpunan Mahasiswa Sistem Informasi) dengan berbagai pihak eksternal/industri melalui sesi sharing maupun program lainnya.",
  },
];


function Programs() {
  return (
    <section className="programs" id="programs">

      {/* HEADER */}
      <div className="programs-header">

        <div>
          <span className="section-label">
            02 · WHAT WE DO
          </span>

          <h2>
            <span className="programs-our">
              Our
            </span>

            <span>
              Programs.
            </span>
          </h2>
        </div>

        <p className="programs-intro">
          A glimpse into the programs,
          collaborations, and activities
          of External Affairs.
        </p>

      </div>


      {/* PROGRAM KERJA */}

      <div className="subsection-heading">
        <span>PROGRAM KERJA</span>
        <span>04 PROGRAMS</span>
      </div>


      <div className="program-grid">

        {programs.map((program) => (

          <article
            className="program-card"
            key={program.number}
          >

            {/* FOTO */}
            <div className="program-image">

              <img
                src={program.image}
                alt={program.title}
              />

              <span className="program-number">
                {program.number}
              </span>

            </div>


            {/* CONTENT */}
            <div className="program-content">

              <div className="program-meta">
                <span>PROGRAM KERJA</span>
                <span>{program.year}</span>
              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.description}
              </p>

              <a
                href="#contact"
                className="program-arrow"
              >
                Explore ↗
              </a>

            </div>

          </article>

        ))}

      </div>


      {/* AGENDA */}

      <div className="agenda-section">

        <div className="subsection-heading">
          <span>AGENDA</span>
          <span>03 UPCOMING</span>
        </div>


        <div className="agenda-list">

          {agendas.map((agenda) => (

            <article
              className="agenda-card"
              key={agenda.number}
            >

              <span className="agenda-number">
                {agenda.number}
              </span>

              <h3 className="agenda-title">
                {agenda.title}
              </h3>

              <p className="agenda-description">
                {agenda.description}
              </p>

              <span className="agenda-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Programs;