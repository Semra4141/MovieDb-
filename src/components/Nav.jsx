import React from "react";

const Nav = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-danger ">
            <div class="container-fluid">
                <a class="navbar-brand" href="<App.js/>">
                    Filmizle.Net
        </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                Anasayfa
              </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="<App.js/>">
                                En Çok İzlenenler
              </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Yeni Çıkanlar
              </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        En Çok Puan Alanlar
                  </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Another action
                  </a>

                                    <a class="dropdown-item" href="#">
                                        Something else here
                  </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                                Disabled
              </a>
                        </li>
                    </ul>
                    <form class="d-flex" action="" onSubmit={e => props.handleSubmit(e)}>
                        <input
                            placeholder="Film Ara"
                            type="text"
                            onChange={e => props.handleChange(e)}
                        />
                        <button class="btn btn-outline-light mt-2 ms-5 me-5" type="submit">
                            Ara
            </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
