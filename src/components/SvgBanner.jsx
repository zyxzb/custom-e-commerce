import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { ReactComponent as HeroImage } from '../assets/Mobile Phone_Two Color.svg';

const Wrapper = styled.div`
  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SvgBanner = () => {
  const image = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const { current: e } = image;
    const dotsBox = e.getElementById('dots-box');
    const dot1 = e.getElementById('dot-1');
    const dot2 = e.getElementById('dot-2');
    const dot3 = e.getElementById('dot-3');
    const envelopeBoxShadow = e.getElementById('envelope-box-shadow');
    const characterBoxShadow = e.getElementById('character-box-shadow');
    const home = e.getElementById('home');
    const arm = e.getElementById('arm');
    const hand = e.getElementById('hand');
    const envelopeBox = e.getElementById('envelope-box');
    const envelopeWhiteEl = e.getElementById('envelope-white');
    const envelopeDarkEl = e.getElementById('envelope-dark');
    const envelopeLine1 = e.getElementById('envelope-line-1');
    const envelopeLine2 = e.getElementById('envelope-line-2');
    const characterBox = e.getElementById('character-box');
    const chacacterCircle = e.getElementById('circle');
    const chacacterCircleWhite = e.getElementById('circle-white');
    const chacacterBody = e.getElementById('body');
    const chacacterLine1 = e.getElementById('character-line-1');
    const chacacterLine2 = e.getElementById('character-line-2');

    const dotsInBox = [dotsBox, dot1, dot2, dot3];
    const envelopeElements = [
      envelopeBox,
      envelopeBoxShadow,
      envelopeWhiteEl,
      envelopeDarkEl,
      envelopeLine1,
      envelopeLine2,
    ];

    const characterElements = [
      characterBox,
      characterBoxShadow,
      chacacterCircle,
      chacacterCircleWhite,
      chacacterBody,
      chacacterLine1,
      chacacterLine2,
    ];

    tl.current = gsap.timeline();
    tl.current
      .set([image.current], { autoAlpha: 0 })
      .set([dotsInBox], { autoAlpha: 0, y: '-=200' })
      .set(image.current, { y: '+=200' })
      .to(image.current, { autoAlpha: 1, duration: 1.6, y: '-=200' })
      .to([dotsInBox], { autoAlpha: 1, duration: 1.6, y: '+=200' }, '-=0.3')
      .to(dotsInBox[1], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[1], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to(dotsInBox[2], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[2], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to(dotsInBox[3], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[3], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to([arm, hand], { duration: 0.5, y: '+=3', x: '+=3' })
      .to(home, { duration: 0.5, fill: '#818cf8' })
      .to(
        [envelopeBoxShadow, characterBoxShadow],
        {
          duration: 1,
          autoAlpha: 0.9,
          fill: '#818cf8',
        },
        '-=0.1'
      )
      .to(
        envelopeElements,
        {
          duration: 0.1,
          scale: 1.2,
          x: '-=15',
        },
        '-=0.2'
      )
      .to(envelopeElements, {
        duration: 0.6,
        scale: 0,
        x: '+=200',
      })
      .to(characterBoxShadow, {
        duration: 1,
        autoAlpha: 0,
      })
      .to(characterElements, {
        duration: 1,
        x: '-=52.65',
        y: '-=70.5',
      })
      .to(
        characterBox,
        {
          duration: 1,
          fill: '#217c3cb8',
        },
        '-=0.5'
      );
  }, []);

  return (
    <Wrapper>
      <HeroImage ref={image} />
    </Wrapper>
  );
};

export default SvgBanner;
