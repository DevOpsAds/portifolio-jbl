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
      viewBox="0 0 200 200"
      className={classes.svgHover}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_5" data-name="Layer 5">
          {/* Contorno da cabeça de perfil */}
          <path 
            d="M50 60 C40 40, 30 20, 50 10 Q70 0, 90 10 
            Q110 20, 130 10 Q150 0, 170 10 Q190 20, 180 50 
            C170 80, 150 100, 120 120 Q100 130, 80 120 
            Q60 110, 50 100 Q40 90, 50 60 Z"
            fill="gray" stroke="black" strokeWidth="2"
          />
          
          {/* Orelha */}
          <path 
            d="M70 20 L60 5 L80 30 Z" 
            fill="gray" stroke="black" strokeWidth="2"
          />
          
          {/* Olho */}
          <ellipse cx="110" cy="70" rx="8" ry="5" fill="white" stroke="black" strokeWidth="2"/>
          <circle cx="110" cy="70" r="3" fill="black"/>
          <circle cx="111" cy="69" r="1" fill="white"/>
          
          {/* Focinho */}
          <path 
            d="M140 100 C145 105, 150 110, 155 105 
            C160 100, 155 95, 150 90 Z" 
            fill="gray" stroke="black" strokeWidth="2"
          />
          
          {/* Nariz */}
          <circle cx="155" cy="100" r="3" fill="black"/>
          
          {/* Boca */}
          <path 
            d="M130 110 C135 115, 140 120, 145 115" 
            stroke="black" strokeWidth="2" fill="none"
          />
        </g>
      </g>
    </svg>
  );
};
