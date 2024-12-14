import Heading from "@/components/Heading";
import PricingCard from "@/components/PricingCard";
import { servicies } from '@/constants'

export default function Servicies() {
    return (
        <section className="py-16 px-4" id="servicies">
            <Heading title="Servicies" subTitle="Let's Get in Touch!" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet saepe atque sint quas aliquam, facilis est quae doloribus possimus optio fugiat. Dolor nemo unde obcaecati officiis adipisci animi placeat?" />

            <div className="w-full h-full flex justify-evenly items-center gap-8 px-4 flex-wrap mt-32">
                { servicies.map((service, i) => (
                    <PricingCard key={ i } { ...service } />
                )) }
            </div>
        </section>
    )
}

