export default function Header () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#">Leo's Website</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <button className="btn btn-outline-primary px-3">Hire Me</button>
                    </span>
                </div>
            </div>
        </nav>
    )
}