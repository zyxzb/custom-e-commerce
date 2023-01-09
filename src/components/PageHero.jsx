import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to={`/`}>
            <FaHome /> Home
          </Link>
          {product && <Link to='/products'>/ products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  h3 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1rem;
    font-weight: 300;
    padding: 1.5rem 0;
    margin-bottom: 0;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  svg {
    margin-right: 10px;
  }
`;

export default PageHero;
