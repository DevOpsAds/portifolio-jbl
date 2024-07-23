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
          {/* Contorno da cabeça */}
          <path d="M100 10 C 60 30, 40 60, 50 90 Q 50 120, 70 140 Q 100 180, 130 140 Q 150 120, 150 90 C 160 60, 140 30, 100 10 Z" fill="gray" stroke="black" strokeWidth="2"/>
          
          {/* Orelhas */}
          <path d="M50 90 L30 50 Q50 30, 70 50 Z" fill="gray" stroke="black" strokeWidth="2"/>
          <path d="M150 90 L170 50 Q150 30, 130 50 Z" fill="gray" stroke="black" strokeWidth="2"/>
          
          {/* Olhos */}
          <circle cx="75" cy="90" r="5" fill="black"/>
          <circle cx="125" cy="90" r="5" fill="black"/>
          
          {/* Nariz */}
          <path d="M90 110 Q100 120, 110 110" fill="black"/>
          
          {/* Boca */}
          <path d="M80 130 Q100 140, 120 130" stroke="black" strokeWidth="2" fill="none"/>
        </g>
      </g>
    </svg>
  );
};
