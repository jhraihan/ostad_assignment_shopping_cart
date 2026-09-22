import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo">amazon</span>
        <p className="footer-company">ACME Industries Ltd.</p>
        <p className="footer-tagline">Providing reliable tech since 1992</p>
      </div>

      <div className="footer-column">
        <h4>Services</h4>
        <a href="#services">Branding</a>
        <a href="#services">Design</a>
        <a href="#services">Marketing</a>
        <a href="#services">Advertisement</a>
      </div>

      <div className="footer-column">
        <h4>Company</h4>
        <a href="#company">About us</a>
        <a href="#company">Contact</a>
        <a href="#company">Jobs</a>
        <a href="#company">Press kit</a>
      </div>

      <div className="footer-column">
        <h4>Legal</h4>
        <a href="#legal">Terms of use</a>
        <a href="#legal">Privacy policy</a>
        <a href="#legal">Cookie policy</a>
      </div>
    </footer>
  );
}

export default Footer;
