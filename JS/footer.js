
export const loadFooter = () => {
  const navbarHTML = `
    <div class="footer">
      <div class="text-end py-2">
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/telegram.svg" alt=""></a>
              
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/instagram.svg" alt="Icono instagram"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/facebook.svg" alt="Icono"> </a>
        
        <a href="#" type="button" class="btn btn-outline btn-md filter-invert"> <img class="img-fluid" 
        src="/assets/icons/whatsapp.svg" alt="Icono Whats App"> </a>
        <div class="row">
        <div class="col-md-7">
          <p color:"black;" >copyright 2022</p>
        </div>
        <nav class="col-md-5">
          <a href="HTML/terminos.html">Términos y condiciones</a>
        </nav>
      </div>  
    </div>
  `
  document.getElementById('footer').innerHTML = navbarHTML;
}

loadFooter();