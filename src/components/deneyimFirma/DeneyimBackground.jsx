import React, { useCallback } from "react";
import Particles from "react-particles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";
const DeneyimBackground = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return <Particles options={particlesOptions} init={particlesInit} />;
};
export default DeneyimBackground;
