export default function Footer () {

  const socialLinks = [
    { href: "https://www.facebook.com/leo.lou.50", iconClass: "fab fa-facebook-f" },
    { href: "https://www.instagram.com/leojtlou/", iconClass: "fab fa-instagram" },
    { href: "https://github.com/LeoJTLou", iconClass: "fab fa-github" },
    { href: "https://www.linkedin.com/in/leojtlou/", iconClass: "fab fa-linkedin-in" },
    { href: "https://www.twitch.tv/inferneoxd", iconClass: "fab fa-twitch" },
  ];
  
  return (
    <footer style={{ backgroundColor: '#0b1f3a' }} className="text-white pt-4 mt-5">
      <div className="container text-center">
        <ul className="nav justify-content-center mb-3">
          {socialLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link px-3 text-white fs-4">
                <i className={link.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
        <hr className="border-light" />
        <p className="mb-0 py-2">© {new Date().getFullYear()} Leo Lou. All rights reserved.</p>
      </div>
    </footer>
  );
}