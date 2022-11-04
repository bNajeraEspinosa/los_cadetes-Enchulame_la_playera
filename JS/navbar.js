import { navLinks, excludeLinks, pathIcons } from './constants/index.js';


const generateNavLink = (href, label) => `
  <li class="tab">
    <a
      class="nav-link fs-6 rounded"
      href="${href}"
    >
      ${label}
    </a>
  </li>`

const generateNavBtnIcon = (label, path, url) => `
    <a class="d-flex gap-2" style="cursor: pointer; text-decoration:none;" href="${url}">
      <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
      <p class="fw-semibold text-white f-6 m-0">${label}</p>
    </a>
  `

const loadNavbar = () => {
  if (window.location.pathname === '/index.html') window.location.href = '/'
  const currentSite = navLinks.find((navLink) => window.location.pathname.toLowerCase() === navLink.href)

  const navbarHTML = `
    <div class="navbar nav ${currentSite.style} navbar-expand-lg navbar-light justify-content-center p-0" >
      <div class="container-fluid py-2">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/TwKBhCqZ/logo-basico.png"
            alt=""
            width="80"
            height="40"
            class="img-fluid"
            align="right"
          />
        </a>

    <!-- BOTÓN DE RESPONSIVE -->
    <button
      class="navbar-toggler border-white border-opacity-25"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        width="32"
        height="32"
        fill="#fff"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>

    <!-- LINKS DE LA NAV -->
    <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
      <ul class="navbar-nav nav text-center pb-3 pb-lg-0">
      ${navLinks
      .filter(link => !excludeLinks.includes(link.href))
      .map(link => generateNavLink(link.href, link.label))
      .join('')}
      </ul>

      <!-- ICONOS DE CARRITO Y LOGIN -->
        <div class="d-flex justify-content-center gap-3" >
          ${pathIcons.map(icon => generateNavBtnIcon(icon.label, icon.path,icon.url)).join('')}
        </div>
      </div>
    </div>
  </div>
`

  document.getElementById('navbar').innerHTML = navbarHTML;
}

loadNavbar()
