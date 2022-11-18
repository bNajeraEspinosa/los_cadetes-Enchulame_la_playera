export const loadFooter = () => {
  const navbarHTML = `
  <!-- Footer -->
  <div class="footer text-center text-white">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
      <section>
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5 g-2">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="text-white text-decoration-none">Home</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/html/productos.html" class="text-white text-decoration-none">Productos</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/html/contactanos.html" class="text-white text-decoration-none">Contáctanos</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/html/about-us.html" class="text-white text-decoration-none">Nosotros</a>
            </h6>
          </div>
          <!-- Grid column -->

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/html/terminos.html" class="text-white text-decoration-none">Términos</a>
            </h6>
          </div>
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-6" />

      <!-- Section: Social -->
      
      <section class="text-center pb-3">
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/instagram.svg" alt="Icono instagram"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/facebook.svg" alt="Icono"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/whatsapp.svg" alt="Icono Whats App"> </a>
          </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

  </div>
  <!-- Footer -->
`;
  document.getElementById("footer").innerHTML = navbarHTML;
};

loadFooter();
