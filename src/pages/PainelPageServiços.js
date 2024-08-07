import React, { Suspense } from 'react';

import { LogoLink } from '../components/logo/LogoLink';
import { ContentScripts } from '../components/content/ContentServicos/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const PainelPageServiços = () => {
  const classes = useStyles();

  return (
    
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <LogoLink />
        
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
       
        
      </Suspense>
      
      </>
 
  );
};

export const PainelPageServiçosScript = () => {
  

  const classes = useStyles();
 

  return (
    
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <LogoLink />
        <ContentScripts />;
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
       
        
      </Suspense>
      
      </>
 
  );
};

