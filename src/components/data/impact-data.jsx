import { render } from "react-dom";
import PrimaryText from "../atoms/primary-text";
import SpanTextPrimary from "../atoms/span-text";

const Impact = [
    {
        title: "Cultivation",
        image: '/impact3.webp',
        description: (
            <PrimaryText>
               We intend to plant a coconut tree at 10m X 10m to allows sunlight and nutrient to be <SpanTextPrimary>well distributed among the trees</SpanTextPrimary> and increases productivity.
            </PrimaryText>
        )
    },
    {
        title: "Waste Management",
        image: '/impact4.webp',
        description: (
            <PrimaryText>
                We are going to segregate waste, and compost organic waste to <SpanTextPrimary>produce organic</SpanTextPrimary> fertilizer for our farm.
            </PrimaryText>
        )
    },
]

export default Impact;