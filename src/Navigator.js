import { Link } from "react-router-dom";

function handleChangeLink(event) {
    let nav = document.querySelector(".navbar");
    let links = [...nav.querySelectorAll(".nav-link")];
    links.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
}

function Navigator() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    ООО "РИТМ"
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className="nav nav-tabs me-auto mb-2 mb-lg-0"
                        onClick={handleChangeLink}
                    >
                        <li className="nav-item">
                            <Link
                                id="driversLink"
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Drivers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                id="ordersLink"
                                className="nav-link"
                                to="/orders"
                            >
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/trucks"
                                id="trucksLink"
                            >
                                Trucks
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigator;
