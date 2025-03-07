import Image from 'next/image'
import comp_experience from './components/components_experience'

export default function Experience(){
    return(
        <section>
            <div className="flex flex-col gap-5 mt-20">
                <p className='text-center md:text-left text-2xl font-semibold'>
                    Experiencia
                </p>
                <p className='text-center md:text-left text-xs font-light md:max-w-sm'>
                    Algunas de mis experiencias laborales que he tenido
                </p>
            </div>

            <div className='flex flex-col mt-10 p-8 border-emerald-700 border-2 rounded-xl'>
                {comp_experience.map((comp_experience, index) => (
                    <article
                        key={comp_experience.empresa}
                        className='flex flex-col gap-6'
                    >
                        <section className='gap-3'>
                            <p className='text-xl font-bold'>
                                {comp_experience.empresa}
                            </p>
                            <p className='text-sm italic'>
                                {comp_experience.cargo}
                            </p>
                            <p className='text-sm italic'>
                                {comp_experience.tiempo}
                            </p>
                        </section>
                        <ul className='list-disc list-inside text-sm'>
                            {comp_experience.descripcion.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                        <section className='flex flex-row gap-6'>
                            {comp_experience.tecnologias.map((tecnologiasImg, imgIndex) => (
                                <Image
                                    key={imgIndex}
                                    src={tecnologiasImg}
                                    width={35}
                                    height={35}
                                />
                            ))}
                        </section>
                    </article>
                ))}
            </div>
        </section>
    )
}