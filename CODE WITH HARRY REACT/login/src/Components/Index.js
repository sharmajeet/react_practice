import React from 'react'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import footer from './images/footer.jpg';
import Login from './Login';

export default function Index() {




  return (
    <div className="container-fluid-main">
      {/* <!-- Navbar Content here --> */}
      <div class="sticky-sm-top">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: " #e3f2fd" }} >
          <div className="container-fluid">


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item  badge bg-light  mx-3 ">
                  <a className="nav-link" href="./Login" >Login</a>
                </li>
                <li className="nav-item badge text-bg-light" >
                  <a className="nav-link" href="/signup">Sign-Up</a>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* crausel starting  */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Footer start */}
      <div className="card text-bg-dark mt-4">
        <img src={footer} className="card-img" alt="..." />
        <div className="card-img-overlay ">
          <h5 className="card-title ">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci alias deserunt magnam quam quisquam, corporis voluptatum odit commodi! Hic rem doloremque quae, autem quidem amet libero debitis repellat molestiae sit labore excepturi, fugiat praesentium illum culpa pariatur sunt laborum, explicabo perspiciatis! Eum voluptatem voluptates dicta illum inventore eius corporis.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <h3>Favicon icons for social media handels.</h3>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>

    </div>
  )
}

