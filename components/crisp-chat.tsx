"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2a270cb8-d4c0-4355-a598-e78b8b847d83");
  }, []);

  return null;
};
