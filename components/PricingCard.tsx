type ServicePropTypes = {
    serviceName: string;
    serviceDescription: string;
    features: Array<ServiceFeaturesTypes>;
    isBetterChoise?: boolean;
    startPrice: number | string;
    endPrice: number | string;
}

type ServiceFeaturesTypes = {
    feature: string;
    availablity: boolean;
}

export default function PricingCard({ serviceName, serviceDescription, features, isBetterChoise, startPrice, endPrice }: ServicePropTypes) {
    return (
        <div className={ `flex flex-col gap-8 sm:px-8 sm:pt-10 p-6 ${isBetterChoise ? 'bg-black' : 'border-2 border-black'} rounded-lg max-w-[500px]` }>
            <div className="w-full flex flex-col gap-4">
                <div>
                    <h1 className={ `text-3xl font-bold ${isBetterChoise ? 'text-white' : 'text-black'}` }>{ serviceName }</h1>
                    <p className={ `text-sm ${isBetterChoise ? 'text-[#d3d3d3]' : 'text-slate-600'} ` }>{ serviceDescription }</p>
                </div>
                <div className="flex items-center">
                    <h1 className={ `font-bold text-4xl ${isBetterChoise ? 'text-white' : 'text-black'}` }> ${ startPrice } { endPrice && `- $${endPrice}` } </h1> <span className={ `text-md ${isBetterChoise ? 'text-[#d3d3d3]' : 'text-slate-500'} ml-1` }>/project</span>
                </div>
            </div>
            <ul className="flex flex-col">
                { features.map((item, i) => (
                    <li key={ i } className={ `flex items-center gap-4 text-sm ${isBetterChoise ? 'text-[#d3d3d3]' : 'text-slate-600'} ` }>
                        <span>{ item.availablity ? "y" : "x" }</span>
                        <p className="text-sm leading-7">{ item.feature }</p>
                    </li>
                )) }
            </ul>
            <div className="w-full">
                <button className={ `${isBetterChoise ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} transition font-semibold w-full py-2 rounded-lg` }>Subscribe</button>
            </div>
        </div>
    )
}