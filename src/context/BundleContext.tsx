import { createContext, useContext } from "react";
import type { BundleContextType } from "../types/bundle";

export const BundleContext = createContext<BundleContextType | null>(null);

// Hook مخصص للوصول للـ Context بأمان
export const useBundle = () => {
  const context = useContext(BundleContext);
  if (!context) {
    throw new Error("useBundle must be used within a BundleProvider");
  }
  return context;
};