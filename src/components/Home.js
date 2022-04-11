import React from "react";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-50 mx-auto"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              className="d-block w-100 rounded mx-auto d-block "
              src="https://m.media-amazon.com/images/M/MV5BMTQ2MjA0NDAwNF5BMl5BanBnXkFtZTcwOTU4MTM5MQ@@._V1_.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 rounded mx-auto d-block "
              src="https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 rounded mx-auto d-block "
              src="https://upload.wikimedia.org/wikipedia/en/4/4c/By_The_Sea_Teaser.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon font-weight-bold text-black"
            aria-hidden="true"
          ></span>
          <span className="sr-only font-weight-bold text-black">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon font-weight-bold text-black"
            aria-hidden="true"
          ></span>
          <span className="sr-only font-weight-bold text-black">Next</span>
        </a>
      </div>
    </div>
  );
}
