export const loadFooter = () => {
  const navbarHTML = `
  <!-- Footer -->
  <footer class="text-center text-white" style="background-color: #333">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
      <section class="mt-5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="" class="text-white">Home</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Productos</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Contáctanos</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Nosotros</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Ayuda</a>
            </h6>
          </div>
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Términos</a>
            </h6>
          </div>
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-6" />

      <!-- Section: Text -->
      <section class="mb-7">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      
      <section class="text-center mb-4">
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

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: #000"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->
`;
  document.getElementById("footer").innerHTML = navbarHTML;
};

loadFooter();


