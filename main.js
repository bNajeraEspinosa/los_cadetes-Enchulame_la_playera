const navLinks = [
  {
    href: '#Home',
    label: 'Home'
  },
  {
    href: '#Personaliza',
    label: 'Personaliza'
  },
  {
    href: '#Products',
    label: 'Productos'
  },
  {
    href: '#Contact',
    label: 'Contactanos'
  },
  {
    href: '#About',
    label: 'Nosotros'
  },
]
function loadNavbar(){
  const navbarHTML = `<nav
  class="navbar nav about-us navbar-expand-lg navbar-light justify-content-center px-3 py-0"
>
  <!-- CONTAINER BARRA DE NAVEGACION -->
  <div class="container-fluid py-2">
    <!-- INCRUSTACIÓN DEL LOGO -->
    <a class="navbar-brand" href="#">
      <img
        src="https://i.postimg.cc/TwKBhCqZ/logo-basico.png"
        alt=""
        width="65"
        height="40"
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
    <div
      class="collapse navbar-collapse justify-content-end gap-2"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav nav text-center pb-3 pb-lg-0">
      ${navLinks.map(link => generateNavLink(link.href,link.label)).join('')}
      </ul>

      <!-- ICONOS DE CARRITO Y LOGIN -->
      <div class="d-flex justify-content-center gap-3 gap-lg-0" >
        <button class="btn rounded-circle text-white">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span class="fw-semibold d-lg-none">Carrito</span>
        </button>

        <button class="btn rounded-circle text-white">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <span class="fw-semibold d-lg-none">Perfil</span>
        </button>
      </div>
    </div>
  </div>
</nav>`

  document.getElementById('navbar').innerHTML = navbarHTML;
}

loadNavbar()

function generateNavLink(href,label){
  return `
  <li class="tab">
    <a
      class="nav-link fs-6 rounded"
      href="${href}"
    >
      ${label}
    </a>
  </li>`
}