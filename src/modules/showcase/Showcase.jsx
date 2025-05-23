import React, { useEffect } from "react";
import showcase2Img from "../../assets/showcase2.png";

const Showcase = () => {
  return (
    <section className="container-fluid px-5 min-vh-100 d-flex align-items-center py-5 container-90 showcase-section ">
      <div className="row align-items-center showcase-container showcase-container-first animate-content mobile-section-view p-0">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="display-3 fw-bold mb-4 lh-sm animate-section">
            Crafting designs
            <br />
            that prioritize users.
          </h1>
          <p className="lead mb-5 fs-4 text-secondary animate-section2">
            Dignissim a, velit odio sed convallis facilisi vulputate.
            Consectetur ultricies metus porttitor id urna, sapien mauris sed.
            Quis placerat ac urna, massa lectus. Consequat eu eu quam id sit
            consequat condimentum.
          </p>
          <div className="d-flex gap-3 showcase-btn animate-section3">
            <a
              href="#contact"
              className="btn btn-primary px-4 py-3 fw-semibold"
            >
              Contact Me
            </a>
            <button className="btn btn-outline-primary px-4 py-3 fw-semibold">
              View Resume
            </button>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-center animate-section4">
          <img
            src={showcase2Img}
            alt="Browser window with video player"
            className="img-fluid showcase-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
