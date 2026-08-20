function Navbar() {
  return (
    <nav className="navbar">

      <a href="#" className="brand">
        <img
          src="/images/Logo-ea.png"
          alt="External Affairs"
          className="brand-logo"
        />
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
      </div>

      <a href="#contact" className="contact-button">
        Contact Us ↗
      </a>

    </nav>
  );
}

export default Navbar;