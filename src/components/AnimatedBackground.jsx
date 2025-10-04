import React, { useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';

const AnimatedBackground = () => {
  const particlesInit = async (engine) => {
    await loadConfettiPreset(engine);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: ["#4a9d84", "#2d8a72", "#ffffff", "#f0f0f0"],
        },
        shape: {
          type: ["circle", "triangle"],
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: { min: 0.5, max: 2 },
          direction: "none",
          random: true,
          straight: false,
          outModes: "bounce",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

export default AnimatedBackground;