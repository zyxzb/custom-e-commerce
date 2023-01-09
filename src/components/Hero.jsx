import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SvgBanner from './SvgBanner';
// import heroBcg from '../assets/undraw_smart_home.svg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article>
        <h1>
          We enjoy
          <br />
          our gadgets
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          praesentium vero sunt dolore cupiditate natus excepturi tempora
          inventore amet ipsum!
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <SvgBanner />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  /* .img-container {
    display: none;
  } */

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: flex;
      width: 100%;
    }
    /* .main-img {
      width: 100%;
      height: 550px;
    } */
  }
`;

export default Hero;
