"use client";

import { useEffect } from "react";

import { useWindowSize } from "usehooks-ts";
import { useWindowStore } from "@/store/window";

import { AppWindow } from "@/components/UI/Window";
import { Biography } from "./Biography";
import { getWindowPositionAndSize } from "@/lib/utils";

export const Apps = () => {
  const { width, height } = useWindowSize();

  const { openedWindows, openWindow } = useWindowStore();

  useEffect(() => {
    openWindow({
      id: "biography",
      title: "Biografia",
      imageSrc: "/icons/computer.png",
      altImage: "Computer",
      isFullScreen: false,
      isMinimized: false,
      component: <Biography />,
      ...getWindowPositionAndSize(width, height - 40, []),
    });
  }, [height, openWindow, width]);

  return (
    <>  
      {openedWindows.map((window) => 
        !window.isMinimized && <AppWindow key={window.id} window={window} />
      )}
    </>
  );
};
