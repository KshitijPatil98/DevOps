import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#93c5fd",
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.4,
            random: true,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.25,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: { enable: false },
            onhover: { enable: false },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
