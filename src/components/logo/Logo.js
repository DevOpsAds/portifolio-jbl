import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
      {/* Nuvens */}
      <g>
        {/* Primeira nuvem */}
        <rect x="50" y="30" width="81" height="23" rx="10" className={classes.cloud} />
        <rect x="60" y="20" width="60" height="20" rx="15" className={classes.cloud} />
        <rect x="70" y="10" width="40" height="20" rx="10" className={classes.cloud} />

        {/* Segunda nuvem */}
        <rect x="150" y="90" width="100" height="35" rx="15" className={classes.cloud} />
        <rect x="100" y="80" width="100" height="30" rx="15" className={classes.cloud} />
        <rect x="110" y="70" width="80" height="30" rx="20" className={classes.cloud} />
        <rect x="220" y="60" width="60" height="30" rx="15" className={classes.cloud} />
      </g>
        
      </svg>
    );
};
