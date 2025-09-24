import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Durée",
        subheading: "Plus de 5 années d’engagement pour le développement local.",
    },
    {
        heading: "Bénéficiaires",
        subheading: "Des centaines de bénéficiaires (élèves, stagiaires, communautés).",
    },
    {
        heading: "Vision",
        subheading: "Une vision tournée vers l’autonomie et la durabilité.",
    }
]





const Why = () => {
    return (
        <div id="about">
            {/* Trait séparateur */}
            {/* <hr className="my-1 border-gray-300%" /> */}

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/why/image-4.jpg" alt="Remise de codeaux" width={800} height={1200} style={{ borderRadius: '20%' }} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-0 font-semibold sm:leading-tight mt-0 text-center lg:text-start">Qui sommes nous ?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">La Fondation est une organisation à vocation éducative, sociale et communautaire. Elle investit dans l’éducation, la santé, l’agriculture et l’entrepreneuriat social afin de transformer durablement les communautés.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            {/* Espace */}
            <div className="py-20"></div>

        </div>
    )
}

export default Why;
