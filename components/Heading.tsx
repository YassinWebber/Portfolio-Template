type HeadingPropsType = {
    title?: string;
    subTitle: string;
    description: string;
    containerClassNames?: string;
    subTitleClassNames?: string;
    descriptionClassNames?: string;
}

export default function Heading({ title, subTitle, description, containerClassNames, subTitleClassNames, descriptionClassNames }: HeadingPropsType) {
    return (
        <div className={ `flex flex-col justify-center items-center gap-0 relative ${containerClassNames}` }>
            { title &&
                <span
                    className="title sm:text-8xl text-6xl text-center"
                >
                    { title }
                </span>
            }
            <div className="px-2 flex flex-col items-center gap-6">
                { subTitle &&
                    <h2
                        className={ `text-center font-bold sm:text-6xl text-5xl max-w-[700px] ${subTitleClassNames}` }
                    >
                        { subTitle }
                    </h2>
                }
                { description &&
                    <p
                        className={ `text-center font-normal text-slate-600 max-w-[800px] ${descriptionClassNames}` }
                    >
                        { description }
                    </p>
                }
            </div>
        </div>
    )
}