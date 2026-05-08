import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { close, herobg, logo, menu } from "../assets";
import {
  experiences,
  projects,
  publicUrls,
  services,
  technologies,
} from "../constants";

const gltfLoader = new GLTFLoader();

const imageAssets = [
  herobg,
  logo,
  menu,
  close,
  ...services.map(({ icon }) => icon),
  ...technologies.map(({ icon }) => icon),
  ...experiences.map(({ icon }) => icon),
  ...projects.map(({ image }) => image),
  ...Object.values(publicUrls.socialProfiles).map(({ icon }) => icon),
].filter(Boolean);

const modelAssets = ["/desktop_pc/scene.gltf", "/planet/scene.gltf"];

const preloadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    const finish = () => resolve();

    image.onload = finish;
    image.onerror = finish;
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });

const preloadModel = (src) =>
  new Promise((resolve) => {
    gltfLoader.load(
      src,
      () => resolve(),
      undefined,
      () => resolve()
    );
  });

export const preloadInitialAssets = () => {
  const uniqueImages = [...new Set(imageAssets)];

  return Promise.all([
    ...uniqueImages.map(preloadImage),
    ...modelAssets.map(preloadModel),
  ]);
};

export const waitForWindowLoad = () =>
  new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }

    window.addEventListener("load", resolve, { once: true });
  });

export const waitForFonts = () => {
  if (!("fonts" in document)) {
    return Promise.resolve();
  }

  return document.fonts.ready.catch(() => undefined);
};
