import React from "react";
import beimg from "../../images/beimg.png";
import beimg2 from "../../images/beimg2.png";
import beimg3 from "../../images/beimg3.png";
import "../Best/Best.css";
const Best = () => {
  return (
    <div id="jewellery" className="Best">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Best jewellery</h2>
              <p>
                {" "}
                a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using LoremIt is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="best_main">
              <div className="row d_flex">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="best_text">
                    <p>
                      A reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using
                      LoremIt is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <a href="#">See More</a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="best_img">
                    <h4>Best Design Of Ring</h4>
                    <figure>
                      <img src={beimg} alt="beimg" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="best_main">
              <div className="row d_flex">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="best_img croos_rt">
                    <h4>Best Design Of Ring</h4>
                    <figure>
                      <img src={beimg2} alt="beimg2" />
                    </figure>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="best_text flot_left">
                    <p>
                      A reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using
                      LoremIt is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="best_main pa_bot">
              <div className="row d_flex">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="best_text">
                    <p>
                      A reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using
                      LoremIt is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <a href="#">See More</a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="best_img d_none">
                    <h4>Best Design Of Ring</h4>
                    <figure>
                      <img src={beimg3} alt="beimg3" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Best;
