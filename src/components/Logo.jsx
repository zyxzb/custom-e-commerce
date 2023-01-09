import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h3`
  color: var(--clr-grey-1);
  margin: 0;
  ::first-letter {
    text-transform: lowercase;
  }
  span {
    color: var(--clr-primary-5);
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      my<span>Smart</span>Home
    </Wrapper>
  );
};

export default Logo;
