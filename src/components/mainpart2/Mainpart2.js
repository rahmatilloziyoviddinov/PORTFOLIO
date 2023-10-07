import React, { useEffect, useRef } from 'react';
import './Mainpart2.css';
import img2 from '../../images/direktor bilan birga.jpg';
import img3 from '../../images/for websitemine.jpg';
import img4 from '../../images/me1.jpg';
import gsap from 'gsap'

function Mainpart2() {
  const photosRef = useRef([]);
  const photoBundleRef = useRef(null);
  const photoDirectionsRef = useRef([]);

const getGsap=()=>{
    const photos = photosRef.current;
    const photoBundle = photoBundleRef.current;
    angleAllPhotos();
    function initPhotoAngles() {
      let prevDirection;
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        const direction = prevDirection === 'away' ? 'toward' : 'away';
        // const direction = prevDirection === 'toward' ? 'away' : 'toward';
        photoDirectionsRef.current.push(direction);
        prevDirection = direction;
      }
    }

    function initPhotoInteraction() {
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        photo.addEventListener('mouseover', () => {
          straightenAllPhotos();
        });
        photo.addEventListener('mouseout', () => {
          angleAllPhotos();
        });
        document.body.addEventListener('pointerdown', () => {
          angleAllPhotos();
        });
      }
    }

    function adaptPhotoPositions() {
      let parentX = gsap.getProperty(photos[0], 'x');
      let parentZ = gsap.getProperty(photos[0], 'z');
      let parentRot = gsap.getProperty(photos[0], 'rotateY');
      let parentWidth = gsap.getProperty(photos[0], 'offsetWidth');
      for (let i = 1; i < photos.length; i++) {
        const photo = photos[i];

        const xOffset = getAdjLength(parentRot, parentWidth);
        const zOffset = -getOppLength(parentRot, parentWidth);

        gsap.set(photo, {
          x: parentX + xOffset,
          z: parentZ + zOffset,
        });

        parentX = gsap.getProperty(photo, 'x');
        parentZ = gsap.getProperty(photo, 'z');
        parentRot = gsap.getProperty(photo, 'rotateY');
        parentWidth = gsap.getProperty(photo, 'offsetWidth');
      }

      const containerWidth = parentX + getAdjLength(parentRot, parentWidth);
      gsap.set(photoBundle, {
        width: containerWidth,
      });

      requestAnimationFrame(adaptPhotoPositions);
    }

    function straightenAllPhotos() {
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        straighten(photo);
      }
    }

    function angleAllPhotos() {
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        if (photoDirectionsRef.current[i] === 'toward') {
          angleToward(photo);
        } else {
          angleAway(photo);
        }
      }
    }

    function angleAway(el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        rotateY: randBetween(30, 60),
        duration: randBetween(0.5, 1.5),
        ease: 'elastic.out(1, 0.5)',
      });
    }
    function angleToward(el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        rotateY: randBetween(-30, -60),
        duration: randBetween(0.5, 1.5),
        ease: 'elastic.out(1, 0.5)',
      });
    }
    function straighten(el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        rotateY: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    }

    function getAdjLength(angle, hyp) {
      const rad = (Math.PI / 180) * angle;
      const adj = hyp * Math.cos(rad);
      return adj;
    }

    function getOppLength(angle, hyp) {
      const rad = (Math.PI / 180) * angle;
      const opp = hyp * Math.sin(rad);
      return opp;
    }

    function randBetween(lowerLim, upperLim) {
      const range = upperLim - lowerLim;
      return lowerLim + Math.random() * range;
    }

    initPhotoAngles();
    initPhotoInteraction();
    adaptPhotoPositions();
}
  useEffect(() => {
   return getGsap()
  }, []);

  return (
    <div className="Mainpart2">
      <article className="photo-bundle" ref={photoBundleRef}>
        <figure className="photo" ref={(el) => (photosRef.current[0] = el)}>
          <img src={img4} alt="" />
          <figcaption>HTML</figcaption>
        </figure>
        <figure className="photo" ref={(el) => (photosRef.current[1] = el)}>
          <img src={img2} alt="" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="photo" ref={(el) => (photosRef.current[2] = el)}>
          <img src={img3} alt="" />
          <figcaption>JAVASCRIPT</figcaption>
        </figure>
        <figure className="photo" ref={(el) => (photosRef.current[3] = el)}>
          <img src={img4} alt="" />
          <figcaption>FULSTAGE</figcaption>
        </figure>
      </article>
    </div>
  );
}

export default Mainpart2;
