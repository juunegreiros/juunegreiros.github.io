import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 1rem;
  font-weight: 400;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 2rem;

  &:hover {
    text-decoration: underline;
  }

  ${({ active }) =>
    active &&
    `
    text-decoration: underline;
  `}
`;

export const SettingsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Settings = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const TitleEmphasis = styled.span`
  font-size: 6rem;
  display: block;
`;

export const DownloadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
`;

export const SocialMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialMenuItem = styled.a``;
