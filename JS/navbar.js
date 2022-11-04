import { NAV_LINKS, PROFILE } from './constants/nav-data.js';

const generateNavLink = (href, label) => `
  <li class="tab">
    <a class="nav-link fs-6 rounded" href="${href}" >
      ${label}
    </a>
  </li>
`
export const generateNavBtnIcon = (label, icon, url) => `
  <a class="d-flex gap-2 align-items-center" style="cursor: pointer; text-decoration:none;" href="${url}">
    <img class="w-100" style="filter: invert(1)" src="${icon}" alt="${label}-icon" />
    <p class="fw-semibold text-white fs-6 m-0">${label}</p>
  </a>
  `
export const generateNavDropdownBtn = (label, path, list) => `
  <div class="btn-group">
    <button class="btn btn-sm d-flex gap-2 align-items-center rounded dropdown-menu-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img class="w-100" style="filter: invert(1)" src="${path}" alt="${label}-icon" />
      <p class="fw-semibold text-white fs-6 m-0">${label}</p>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark border border-2 border-dark">
      ${list}
    </ul>
  </div>
`

const loadNavbar = (user) => {
  const navbarHTML = `
    <div class="navbar nav navbar-expand-lg navbar-light justify-content-center p-0" >
      <div class="container-fluid py-2 w-90">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/TwKBhCqZ/logo-basico.png"
            alt="logo"
            width="80"
            height="40"
            class="img-fluid"
            align="right"
          />
        </a>

    <!-- BOTÓN DE RESPONSIVE -->
    <button
      class="navbar-toggler border-white border-opacity-25 d-flex d-lg-none px-2"
      type="button"
      style="transform: scale(1.25)"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <img src="/assets/icons/burger.svg" class="fs-1 filter-invert" />
    </button>

    <!-- LINKS DE LA NAV -->
    <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
      <ul class="navbar-nav nav text-center pb-lg-0">
        ${Object.values(NAV_LINKS).map(({ path, label }) => generateNavLink(path, label)).join('')}
      </ul>

      <!-- ICONOS DE CARRITO Y LOGIN -->
        <div class="d-flex justify-content-center gap-3 py-2 align-items-center" >
        ${generateNavDropdownBtn(user ? user.username : PROFILE.label, PROFILE.icon, user ? PROFILE.list.online.join('') : PROFILE.list.offline.join(''))}
        </div>
      </div>
    </div>
  </div>
`

  document.getElementById('navbar').innerHTML = navbarHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('cur_user'));
  const offlinePages = ['/html/login.html', '/html/register.html'];
  const currentPage = window.location.pathname;
  if (offlinePages.includes(currentPage.toLocaleLowerCase()) && user) location.replace('/index.html');
  loadNavbar(user);


  if (user) {
    const btnLogoutEl = document.getElementById('btn-logout');
    btnLogoutEl?.addEventListener('click', () => {
      localStorage.removeItem('cur_user');
      window.location.reload();
    });
  }

});