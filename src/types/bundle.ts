export type VariantMap = Record<string, number>;

export type Cart= Record<string,VariantMap> 

export type BundleState = {
  currentStep: number | null;
  cart: Cart ,
  selectedVariants: Record<string, string>;
};



export type BundleContextType = {
  bundle: BundleState;
  updateVariant: (productId: string, variantId: string, quantity: number) => void;
  selectVariant: (productId: string, variantId: string) => void;
  // goToNextStep: () => void;
  saveBundle: () => void;
  setStep: (num?:number) => void;
 getSelectedProductsCountForStep: (stepProductIds: string[]) => number;
};