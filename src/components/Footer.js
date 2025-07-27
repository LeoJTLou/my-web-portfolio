export default function Footer () {
    return (
      <footer style={{ backgroundColor: '#0b1f3a' }} className="text-white pt-4 mt-5">
        <div className="container text-center">
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-white fs-4">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-white fs-4">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-white fs-4">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-white fs-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-white fs-4">
                <i className="fab fa-twitch"></i>
              </a>
            </li>
          </ul>
          <hr className="border-light" />
          <p className="mb-0 py-2">© {new Date().getFullYear()} Leo Lou. All rights reserved.</p>
        </div>
      </footer>
    )
}