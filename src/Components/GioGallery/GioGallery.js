import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import Gallery from "react-photo-gallery";
import { debounce } from "./utils";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import wait from "./wait1.png";

import './GioGallery.css'

const GioGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState(photos.slice(0, 22));
  const [loadedAll, setLoadedAll] = useState(false);
  const loadMorePhotos = debounce(() => {
    if (images.length >= photos.length) {
      setLoadedAll(true);
      return;
    }
    setImages(images.concat(photos.slice(images.length, images.length + 11)));
    }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 450) {
      loadMorePhotos();
    }
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gioGallery">
      <Helmet>
            <title>Geovanny Duran Photo Gallery</title>
        </Helmet>
      <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        {!loadedAll && (
        <div className="loading-msg" id="msg-loading-more">
          <img src={wait} alt="loading icon" />
          <p>Loading more photos</p>
        </div>)}
    </div>
  );
}
 
export default GioGallery;