import React, { useState, useEffect, useCallback, useRef } from 'react';
import Slider from 'react-slick';
import './ImageGallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = ({ title, description, folder, count }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const handleImageClick = (src) => {
    setSelectedImage(null);
    requestAnimationFrame(() => setSelectedImage(src));
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const escHandler = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClose();
    } else if (selectedImage === 'glass') {
      if (e.key === 'ArrowLeft') {
        sliderRef.current?.slickPrev();
      } else if (e.key === 'ArrowRight') {
        sliderRef.current?.slickNext();
      }
    }
  }, [selectedImage]);

  useEffect(() => {
    window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
  }, [escHandler]);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedImage]);

  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const sliderSettings = {
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    infinite: count > 3,
    speed: 500,
    slidesToShow: Math.min(3, count),
    slidesToScroll: 1,
    arrows: true,
    initialSlide: count === 3 ? 1 : 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: false,
          initialSlide: 0
        },
      },
    ],
  };

  return (
    <section className="gallery-section">
      {/* Main Glass Card */}
      <div
        className="glass-card"
        onClick={(e) => {
          const isImage = e.target.classList.contains('gallery-image');
          const isArrow = e.target.closest('.slick-arrow');
          if (!isImage && !isArrow) {
            setSelectedImage('glass');
          }
        }}
      >
        <h2 className="gallery-title">{title}</h2>
        <p className="gallery-description">{description}</p>

        <div className="slider-wrapper">
          {count > 1 ? (
            <Slider {...sliderSettings}>
              {Array.from({ length: count }).map((_, i) => {
                const src = `/images/${folder}/${folder}${i + 1}.png`;
                return (
                  <div key={i} className="slide-container">
                    <img
                      tabIndex="-1"
                      src={src}
                      alt={`${folder} ${i + 1}`}
                      className="gallery-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(src);
                      }}
                    />
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className="slide-container center-image">
              <img
                src={`/images/${folder}/${folder}1.png`}
                alt={`${folder} 1`}
                className="gallery-image"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(`/images/${folder}/${folder}1.png`);
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Single Image Modal */}
      {typeof selectedImage === 'string' && selectedImage !== 'glass' && (
        <div className="modal-overlay" onClick={handleClose}>
          <img src={selectedImage} alt="Enlarged" className="modal-image" />
        </div>
      )}

      {/* Full Glass Card Modal */}
      {selectedImage === 'glass' && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content-scrollable"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card enlarged-glass-card">
              <h2 className="gallery-title">{title}</h2>
              <p className="gallery-description">{description}</p>

              <div className="slider-wrapper">
                {count > 1 ? (
                  <Slider {...sliderSettings} ref={sliderRef}>
                    {Array.from({ length: count }).map((_, i) => {
                      const src = `/images/${folder}/${folder}${i + 1}.png`;
                      return (
                        <div key={i} className="slide-container">
                          <img
                            src={src}
                            alt={`${folder} ${i + 1}`}
                            className="gallery-image"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageClick(src);
                            }}
                          />
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <div className="slide-container center-image">
                    <img
                      src={`/images/${folder}/${folder}1.png`}
                      alt={`${folder} 1`}
                      className="gallery-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(`/images/${folder}/${folder}1.png`);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
