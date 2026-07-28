import { useState } from "react"
import Accordion from "../UI/Accordion"
import logo from '@/assets/vectors/livestream.svg'
import catalogData from '@/data/catalog.json'
import Card from "../UI/CounterCard"
const Steps = () => {


   
    const [openStepId, setOpenStepId] = useState<string | null>("cameras")

    const handleToggle = (stepId: string) => {
        setOpenStepId(prev => (prev === stepId ? null : stepId))
    }

    return (
        <section className="flex-1 min-w-[768px] bg-background rounded-[10px]">
            {catalogData.steps.map((step) => (
                <Accordion
                    key={step.id}
                    open={openStepId === step.id}
                    title={step.title}
                    step={`STEP ${step.stepNumber} OF ${catalogData.steps.length}`}
                    logo={logo}
                    selectedNum={0} 
                    onToggle={() => handleToggle(step.id)}
                >
                    <div className="grid grid-cols-2 items-start  gap-[19px] w-full">
                        {step.products.map((product) => (
                            <Card
                                key={product.id}
                                id={product.id}
                                nextStep={step.stepNumber + 1}
                                className="custom-card-class"
                                name={product.title}
                                text={product.description}
                                image={product.image}
                                badge={product.discountText || undefined}
                                price={product.price}
                                comparePrice={product.comparePrice || 0}
                                variants={product.variants.map(v => ({
                                    name: v.label,
                                    img: v.thumbnail || "",
                                    count: 0
                                }))}
                            />
                        ))}
                    </div>
                </Accordion>
            ))}
        </section>
    )
}

export default Steps