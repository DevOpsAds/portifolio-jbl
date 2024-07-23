import React, { Suspense } from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { Detailsto } from '../components/details/Detailsto'; // Importar o componente

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Details = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Resume />
      </div>
      <SideNavbar />
      {/* Envolver Detailsto com Suspense e fornecer um fallback */}
      <Suspense fallback={<div>Carregando...</div>}>
        <Detailsto />
      </Suspense>
      <About />
      <Contact />
    </>
  );
};
