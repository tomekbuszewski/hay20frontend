import React from "react";
import { render } from "react-dom";
import { Application } from "@containers/Application";

const rootId = "#app";
const root = document.querySelector(rootId);

if (process.env.MOCKS) {
  const { worker } = require("../mocks/browser");
  worker.start();
}

if (root) {
  render(<Application />, root);
} else {
  console.error(`No element ${rootId} found in the document!`);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
