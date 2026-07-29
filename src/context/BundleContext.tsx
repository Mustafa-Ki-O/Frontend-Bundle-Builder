import { createContext, useEffect, useState } from "react";
import type { BundleState } from "../types/bundle";
import type { BundleContextType } from "../types/bundle";
import catalogData from '@/data/catalog.json'

export const BundleContext = createContext<BundleContextType | null>(null);

export function BundleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bundle, setBundle] = useState<BundleState>({
    currentStep: 1,
    cart: {},
    selectedVariants: {},
  });

  const updateVariant = (productId: string, variantId: string, quantity: number) => {
    
    setBundle((prev) => {
        const currentProductVariants = prev.cart[productId] || {};

        const updatedVariants = {
            ...currentProductVariants,
            [variantId]:quantity
        }
        
        if(quantity<=0){
            delete updatedVariants[variantId]
        }
        return{
            ...prev,
            cart:{
                ...prev.cart,
                [productId]:updatedVariants
            }
        }
    }
    )
  }

  const saveBundle = () => {
    localStorage.setItem("SavedBundle",JSON.stringify(bundle))
  }


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

 
 const goToNextStep = () =>{
    // setBundle(prev => ({
    //     ...prev,
    //     currentStep: [prev].currentStep < steps ? [prev].currentStep +1 : 1
    // }))
 }


  return (
    <BundleContext.Provider
      value={{
        bundle,
        updateVariant,
        goToNextStep,
        saveBundle,
     
      }}
    >
      {children}
    </BundleContext.Provider>
  );
}