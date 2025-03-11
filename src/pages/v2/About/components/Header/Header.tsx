import React from 'react';
import {
  Main,
  Header,
  Menu,
  MenuItem,
  SettingsButton,
  Settings,
  TitleEmphasis,
  Title,
  DownloadButton,
  SocialMenu,
  SocialMenuItem,
  TitleWrapper,
} from './Header.styled';
import { ReactComponent as SettingsLogo } from '../../../../../assets/settings.svg';
import { ReactComponent as EmailLogo } from '../../../../../assets/email.svg';
import { ReactComponent as GithubLogo } from '../../../../../assets/github.svg';
import { ReactComponent as InstagramLogo } from '../../../../../assets/instagram.svg';
import { ReactComponent as LinkedinLogo } from '../../../../../assets/linkedin.svg';

export default function HeaderContainer() {
  return (
    <Main>
      <Header>
        <Settings />

        <Menu>
          <MenuItem href='#aboutme' active>
            About Me
          </MenuItem>
          <MenuItem href='#experience'>Experience</MenuItem>
          <MenuItem href='#contactme'>Contact Me</MenuItem>
        </Menu>

        <SettingsButton>
          <SettingsLogo />
        </SettingsButton>
      </Header>
      <TitleWrapper>
        <Title>
          Hello, I&apos;m <TitleEmphasis>Juliana Negreiros</TitleEmphasis>
        </Title>
        <DownloadButton>Download CV</DownloadButton>
      </TitleWrapper>

      <SocialMenu>
        <SocialMenuItem href='#linkedin'>
          <LinkedinLogo />
        </SocialMenuItem>
        <SocialMenuItem href='#github'>
          <GithubLogo />
        </SocialMenuItem>
        <SocialMenuItem href='#instagram'>
          <InstagramLogo />
        </SocialMenuItem>
        <SocialMenuItem href='#email'>
          <EmailLogo />
        </SocialMenuItem>
      </SocialMenu>
    </Main>
  );
}
