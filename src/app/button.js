"use client";

import React from "react";

function tryToggle() {
  if (window) window.toggleOverlay();
}

export default function ButtonToggle() {
  return (
    <>
      <button id="toggleOverlay" onClick={tryToggle}>
        Toggle Overlay
      </button>
    </>
  );
}
