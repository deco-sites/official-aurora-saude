import { Section } from "deco/blocks/section.ts";

export interface IColorfullWrapper {
    sections: Section[];
}

function ColorfullWrapper({ sections }: IColorfullWrapper) {
    return (
        <>
            <div className="flex flex-col gap-10 py-8 bg-orange4 lg:bg-gradient-to-b from-orange4 via-orange4 to-pink1">
                <div className="hidden lg:flex lg:bg-fixed lg:bg-center lg:bg-no-repeat lg:bg-cover flex-col gap-10">
                    {sections.map((section, index) => (
                        <section.Component key={index} {...section.props} />
                    ))}
                </div>

                <div className="lg:hidden flex flex-col gap-5">
                    {sections.map((section, index) => (
                        <section.Component key={index} {...section.props} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ColorfullWrapper;
