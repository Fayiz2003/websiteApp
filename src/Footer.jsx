import React from 'react'
import banner from './assets/banner2.png'

const Footer = () => {
  return (
    <>
    {/* <!-- Section: Social media --> */}
<section className="d-flex justify-content-center justify-content-lg-between ps-2 pt-2 border-bottom">
  {/* <!-- Left: Social Media Text --> */}
  <div className="d-none d-lg-block">
    <span><b>Get connected with us on social networks:</b></span>
  </div>

  {/* <!-- Right: Social Media Links --> */}
  <footer className="text-center mt-1">
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
      {/* <!-- Section: Social media --> */}
      <section className="mb-1">
        {/* <!-- WhatsApp --> */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#059200' }}
          onClick={() => sendWhatsAppMessage()}
          role="button"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        {/* <!-- Facebook --> */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#3b5998' }}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        {/* <!-- Instagram --> */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#ac2bac' }}
          href="https://www.instagram.com/jazz_service?igsh=cTRuNmttcXQ0enJ3"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </section>
    </div>
  </footer>
</section>

{/* <!-- Section: Links --> */}
<section className="">
  <div className="container text-center text-md-start mt-5">
    {/* <!-- Grid row --> */}
    <div className="row mt-3">
      {/* <!-- Grid column: Company Info --> */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3"></i>JAZZ MARKETING & SERVICING
        </h6>
        <img src={banner} width="100px" alt="" />
      </div>

      {/* <!-- Grid column: Services --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Services</h6>
        <p>General Cleaning</p>
        <p>Industrial cleaning</p>
        <p>Comprehensive General cleaning</p>
        <p>Internal and external High Rise FaÇade cleaning</p>
      </div>

      {/* <!-- Grid column: Contact --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i>Ernakulam, Aluva, Kottapuram</p>
        <p>
          <i className="fas fa-envelope me-3"></i>jazzmarketing5@gmail.com
        </p>
        <p><i className="fas fa-phone me-3"></i> +91 8113056305</p>
        <p><i className="fas fa-print me-3"></i> +91 7994414305</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer