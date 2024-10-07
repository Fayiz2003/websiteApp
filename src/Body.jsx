import React from 'react'
// photos
import c5 from './assets/c5.jpeg'
import c8 from './assets/c8.jpg'
// import c10 from './assets/c8.webp'
import c13 from './assets/cl1.avif'
import cl1 from './assets/c13.jpg'
import cl2 from './assets/cl2.jpg'
import cl3 from './assets/cl3.jpg'
import f3 from './assets/f3.jpg'
import f4 from './assets/f4.jpg'
// import p4 from './assets/p1.webp'
import s1 from './assets/s1.jpg'
import s2 from './assets/s2.png'
import s3 from './assets/s3.jpeg'
import s4 from './assets/s4.jpg'
import s5 from './assets/s5.jpg'

const Body = () => {
  return (
    <>
    <div>
  <div id="front"></div>
  <h1 id="bantext"> JAZZ MARKETING & SERVICES</h1>
</div>

<div className="text-center my-4"data-aos="fade-up">
  <h1 className="heading"><b>OUR EXPERTISE & SERVICES</b></h1>
</div>

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cdiv">
        <div className="ccdiv ms-1 p-1 mb-1 rounded">
          <img className="cimg" src={c8} alt="" />
        </div>
        <div className="ccdiv mx-1 p-1 mb-1 rounded">
          <img className="cimg" src={c13} alt="" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="cdiv">
        <div className="ccdiv ms-1 p-1 mb-1 rounded">
          <img className="cimg" src={c5} alt="" />
        </div>
        <div className="ccdiv mx-1 p-1 mb-1 rounded">
          <img className="cimg" src={s5} alt="" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row px-1">
        <div className="cdiv">
          <div className="ccdiv ms-1 p-1 mb-1 rounded">
            <img className="cimg" src={f4} alt="" />
          </div>
          <div className="ccdiv mx-1 p-1 mb-1 rounded">
            <img className="cimg" src={s1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="text-center my-4"data-aos="fade-up">
  <h1 className="heading"><b>WE PROVIDE WORKS ON</b></h1>
</div><br />

<div className="grid-container px-2" data-aos="fade-up">
  <div className="grid-item" >
    <i className="ss fa-solid fa-school fa-fade" style={{ color: 'blac' }}></i>
    <b className="ss ps-3">Schools</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-regular fa-hospital fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Hospitals</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-solid fa-hotel fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Hotels</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-solid fa-house fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Villas</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-solid fa-place-of-worship fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Worshiping Places</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-solid fa-box fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Auditoriums</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-regular fa-building fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Banks</b>
  </div>
  <div  className="grid-item">
    <i className="ss fa-solid fa-building fa-fade" style={{ color: '#ffffff' }}></i>
    <b className="ss ps-3">Other Buildings</b>
  </div>
</div>
<hr />

<div className="text-center my-4"data-aos="fade-up">
  <h1 className="heading"><b>OUR SERVICES</b></h1>
</div><br />

<div className="flip"data-aos="fade-up">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-4 mb-5 d-flex justify-content-center" >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cl1} alt="Avatar" style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
              <h6 className="pt-2 fw-bolder fs-5 my-3">Hygiene & Maintenance</h6>
            </div>
            <div className="flip-card-back text-center">
              <h1>Hygiene & Maintenance</h1>
              <p style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px' }}>
                At Jazz, we customize cleaning contracts to ensure hygiene and maintenance, with safety-trained specialists handling hazardous industrial tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 mb-5 mt-3 d-flex justify-content-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cl2} alt="Avatar" style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
              <h6 className="pt-2 fw-bolder fs-5 my-3">FaÇade Cleaning</h6>
            </div>
            <div className="flip-card-back text-center">
              <h1>FaÇade Cleaning</h1>
              <p style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px' }}>
                At Jazz, we customize cleaning contracts for facade maintenance, using safety-trained specialists to handle challenging and hazardous tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 mb-5 mt-3 d-flex justify-content-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cl3} alt="Avatar" style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
              <h6 className="pt-2 fw-bolder fs-5 my-3">General cleaning</h6>
            </div>
            <div className="flip-card-back text-center">
              <h1>General cleaning</h1>
              <p style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px' }}>
                At Jazz, we tailor cleaning contracts for general cleaning, ensuring safety-trained specialists handle all tasks efficiently and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div className="flip">
  <div className="d-flex justify-content-center">
    <div className="text-dark mt-5">
      <button id="srbutton2" className="btn btn-lg btn-outline-light fw-bold border border-2 border-dark fs-3">MORE SERVICES</button>
    </div>
  </div>
</div>

<div className="service">
  <div id="sr" data-aos="fade-up">
    {/* Hygiene & Maintenance Services */}
    <div className="d-flex my-3 p-1">
      <div className="col-6">
        <img className="serimg w-100 border border-2 border-dark" src={cl1} alt="Hygiene & Maintenance Services" />
      </div>
      <div className="ps col-6 px-5">
        <p className="pt-1 ps-2">
          <b className="b1">Hygiene & Maintenance Services</b><br /><br />
          <span className="p2">At Jazz, all of our cleaning contracts are developed and customized according to customer needs and budget. We perform both light and heavy cleaning work for industries such as processing plants, manufacturers, and warehouses. The work in industries is often performed in unsafe and hazardous conditions, requiring specialized machinery and safety equipment. All of our cleaning specialists are trained in safety procedures before conducting general cleaning and ongoing maintenance at industrial sites and cleanrooms.</span>
        </p>
      </div>
    </div>
    <hr />
    {/* FaÇade Cleaning */}
    <div className="d-flex my-3 p-1">
      <div className="ps col-6 px-5">
        <p>
          <b className="b1">FaÇade Cleaning</b><br /><br />
          <span className="p3">Our comprehensive housekeeping service is the foundation of our company. We offer a tailor-made cleaning service for businesses. Our experienced team ensures healthy and safe environments for our clients every day.</span>
        </p>
      </div>
      <div className="col-6">
        <img className="serimg w-100 border border-2 border-dark" src={cl2} alt="FaÇade Cleaning" />
      </div>
    </div>
    <hr />
    {/* General Cleaning */}
    <div className="d-flex my-3 p-1">
      <div className="col-6">
        <img className="serimg w-100 border border-2 border-dark" src={cl3} alt="General Cleaning" />
      </div>
      <div className="ps col-6 px-5">
        <p className="pt-1 ps-2">
          <b className="b1">General Cleaning</b><br /><br />
          <span className="p2">Our comprehensive housekeeping service is tailored for your business. Our experienced professionals ensure healthy and safe work environments for all our clients every day.</span>
        </p>
      </div>
    </div>
  </div>
  {/* More Services Button */}
  <div className="service">
    <div className="d-flex justify-content-center">
      <div className="text-dark mt-5">
        <button id="srbutton" className="btn btn-lg btn-outline-light fw-bold border border-2 border-dark fs-3">
          MORE SERVICES
        </button>
      </div>
    </div>
  </div>
  <hr />
  {/* All Kinds of Maintenance Works Heading */}
  <div className="text-center my-5"data-aos="fade-up">
    <h1 className="heading"><b>ALL KIND OF MAINTENANCE WORKS</b></h1>
  </div>

  {/* Maintenance Services Sections */}
  <div className="row text-center text-light w-100 ps-3"data-aos="fade-up">
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={s1} alt="" />
        <div className="content">
          <h4>FaÇade Cleaning</h4>
          <p>Clear of any dirt, grime, stains, and pollutants.</p>
        </div>
      </div>
    </div>
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={f3} alt="" />
        <div className="content">
          <h4>House Shifting</h4>
          <p>We Make Things Easier</p>
        </div>
      </div>
    </div>
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={s2} alt="" />
        <div className="content">
          <h4>General Cleaning</h4>
          <p>Both Interior and Exterior</p>
        </div>
      </div>
    </div>
  </div>

  <div className="row text-center text-light my-4 w-100 ps-3">
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={s3} alt="" />
        <div className="content">
          <h4>Painting</h4>
          <p>We Change your Theme</p>
        </div>
      </div>
    </div>
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={s4} alt="" />
        <div className="content">
          <h4>Glass Changing</h4>
          <p>We feed your Shade Of Light</p>
        </div>
      </div>
    </div>
    <div className="wrapper col-4">
      <div className="image">
        <img className="imgg" src={s5} alt="" />
        <div className="content">
          <h4>Siliconing</h4>
          <p>Fixes the tile Gaps</p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  {/* Get Connected Section */}
  <div className="text-center my-5">
    <h1 id="ct" className="heading"><b>GET CONNECTED WITH US</b></h1>
  </div>

  {/* WhatsApp Enquiry Button */}
  <div className="d-flex justify-content-center my-4">
    <button className="btn btn-success btn-lg p-3">
      <b>ENQUIRE NOW &nbsp;<i className="fa-brands fa-whatsapp fa-beat"></i></b>
    </button>
  </div>

  {/* Contact Section */}
  <div className="container-fluid px-2 mt-5">
    <div className="row g-0">  {/* g-0 removes gutter spacing to prevent overflow */}
      <div className="col-12 col-md-6">
        {/* Google Map */}
        <div className="ratio ratio-16x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62848.47272435842!2d76.30063092838527!3d10.096664847389635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080edf9cac58af%3A0x1d2e7149d0f37101!2sAluva%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723365876797!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="col-12 col-md-6 my-3 px-4">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Body