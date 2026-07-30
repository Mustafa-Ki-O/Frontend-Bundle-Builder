import type React from "react";
import { useEffect, useState } from "react";
import { BundleContext } from "./BundleContext";
import type { BundleState } from "../types/bundle";
import catalogData from "@/data/catalog.json";

export function BundleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bundle, setBundle] = useState<BundleState>({
    currentStep: 1,
    cart: {
      "cam-v4": { "White": 1 },
      "cam-unlimited": { "First": 1 },
       "sense-hub": { "White": 1 }
    },
    selectedVariants: {
      "cam-v4": "White",
      "cam-unlimited": "First",
      "sense-hub": "White"
    },
  });

  const stepsLength = catalogData.steps.length;

  const updateVariant = (
    productId: string,
    variantId: string,
    quantity: number
  ) => {
    setBundle((prev) => {
      const currentProductVariants = prev.cart[productId] || {};

      const updatedVariants = {
        ...currentProductVariants,
        [variantId]: quantity,
      };

      if (quantity <= 0) {
        delete updatedVariants[variantId];
      }
      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: updatedVariants,
        },
      };
    });
  };

  const selectVariant = (productId: string, variantId: string) => {
    setBundle((prev) => ({
      ...prev,
      selectedVariants: {
        ...prev.selectedVariants,
        [productId]: variantId,
      },
    }));
  };

  const saveBundle = () => {
    localStorage.setItem("SavedBundle", JSON.stringify(bundle));
  };

  useEffect(() => {
    const savedBundle = localStorage.getItem("SavedBundle");
    if (savedBundle) {
      try {
        const parsedBundle = JSON.parse(savedBundle);
        setBundle(parsedBundle);
      } catch (error) {
        console.error("Failed to parse saved bundle:", error);
      }
    }
  }, []);

  // const goToNextStep = () => {
  //   setBundle((prev) => ({
  //     ...prev,
  //     currentStep: prev.currentStep < stepsLength ? prev.currentStep + 1 : 1,
  //   }));
  // };

const setStep = (stepNumber: number | null) => {
  setBundle((prev) => {
    const nextStep = stepNumber !== undefined 
      ? stepNumber 
      : (prev.currentStep < stepsLength ? prev.currentStep + 1 : 1);
      
    return {
      ...prev,
      currentStep: nextStep,
    };
  });
};

  const getSelectedProductsCountForStep = (stepProductIds: string[]) => {
    return stepProductIds.reduce((count, productId) => {
      const productVariants = bundle.cart[productId] || {};
      
      const hasSelectedVariants = Object.values(productVariants).some(
        (qty) => qty > 0
      );

      return hasSelectedVariants ? count + 1 : count;
    }, 0);
  };

  return (
    <BundleContext.Provider
      value={{
        bundle,
        updateVariant,
        selectVariant,
        // goToNextStep,
        saveBundle,
        getSelectedProductsCountForStep,
        setStep
      }}
    >
      {children}
    </BundleContext.Provider>
  );
}