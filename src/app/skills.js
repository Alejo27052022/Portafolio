import skills_array from './components/skills_array'
import skills_image from './components/skills_image'
import Image from 'next/image'

export default function Skills(){
    return(
        <section>
            <div className="flex flex-col gap-5 mt-36">
                <p className="text-center md:text-left text-2xl font-semibold">
                    Habilidades
                </p>
                <p className="text-center md:text-left text-xs font-light">
                    Herramientas & Tecnologías
                </p>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                {skills_array.map((skills_array, index) => (
                    <div key={skills_array.title} className='flex justify-center'>
                        <div className='flex flex-row max-w-sm p-7 mt-10 bg-transparent gap-12 items-center border-emerald-700 border-2 rounded-2xl mr-0 lg:mr-5'>
                            <div className='flex flex-col gap-4 text-justify'>
                                <p className='text-bold text-lg font-bold'>
                                    {skills_array.title}
                                </p>
                                <p className='text-xs'>
                                    {skills_array.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-8 items-center justify-center flex-wrap mt-16'>
                {skills_image.map((skills_image, index) => (
                    <div>
                        <Image
                            src={skills_image}
                            width={50}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}