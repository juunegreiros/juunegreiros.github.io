import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Name = styled.span`
  font-family: 'Luckiest Guy';
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.green};
  text-underline-offset: 0.75rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.green};
  transition: all 0.2s;

  &:hover {
    -webkit-text-fill-color: inherit;
    -webkit-text-stroke-width: 0;
  }

  ::selection {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.secondary};
  }
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  background-image: linear-gradient(
    transparent 80%,
    ${({ theme }) => theme.colors.green} 0 90%,
    transparent 0 100%
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: ${({ theme }) => theme.colors.green};
  display: inline-block;
  font-weight: 500;
  text-decoration: none;
  transition: background-size 0.25s;

  &:hover {
    background-size: 100% 100%;
  }
`;
