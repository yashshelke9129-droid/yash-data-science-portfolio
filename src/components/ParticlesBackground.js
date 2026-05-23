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

        particles: {

          number: {
            value: 50
          },

          size: {
            value: 2
          },

          move: {
            speed: 1
          },

          opacity: {
            value: 0.3
          },

          color: {
            value: "#22d3ee"
          },

          links: {
            enable: true,
            color: "#22d3ee",
            opacity: 0.2
          }

        }

      }}
    />

  );

}