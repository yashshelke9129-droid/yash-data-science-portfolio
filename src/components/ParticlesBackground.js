"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {

  return (

    <Particles
      className="absolute inset-0 -z-10"

      options={{

        background: {
          color: "transparent"
        },

        fpsLimit: 120,

        particles: {

          color: {
            value: "#22d3ee"
          },

          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },

          number: {
            density: {
              enable: true
            },
            value: 50
          },

          opacity: {
            value: 0.3
          },

          shape: {
            type: "circle"
          },

          size: {
            value: { min: 1, max: 3 }
          }

        }

      }}
    />

  );

}