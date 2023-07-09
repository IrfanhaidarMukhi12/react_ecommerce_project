import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/home.css"; // Import your custom CSS file

const Home = () => {
  const imagePaths = [
    "/assets/main.png.jpg",
    "/assets/main.png1.jpg",
    "/assets/main.png2.jpg",
    // Add more image paths here
  ];

  return (
    <div className="hero border-1 pb-3">
      <Carousel className="custom-carousel m-3" >
        {imagePaths.map((path, index) => {
          return (
            <Carousel.Item key={index} style={{ borderRadius: '30px' }}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + path}
                alt={`Slide ${index + 1}`}
                height={1500}
              />
              <Carousel.Caption>
                <div className="container">
                  <h1 className="card-title fs-1 fw-bold text">
                    Slide {index + 1}
                  </h1>
                  <p className="card-text fs-5 d-none d-sm-block">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      
    </div>
  );
};

export default Home;
