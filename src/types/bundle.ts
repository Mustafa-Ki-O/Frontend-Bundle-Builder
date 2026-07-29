export type VariantMap = Record<string, number>;

export type Cart= Record<string,VariantMap> 

export type BundleState = {
  currentStep: number;
  cart: Cart ,
  selectedVariants: Record<string, string>;
};



export type BundleContextType = {
  bundle: BundleState;

  updateVariant: (productId: string, variantId: string, quantity: number) => void;

  goToNextStep: () => void;
  goToPreviousStep: () => void;

  saveBundle: () => void;
};