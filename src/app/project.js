import Image from 'next/image'
import projectos from './components/projectos'

export default function Projects(){
    return(
        <section className='flex flex-col gap-8'>
            <div className="flex flex-col gap-5 mt-20">
                <p className='text-center md:text-left text-2xl font-semibold'>
                    Projectos
                </p>
                <p className='text-center md:text-left text-xs font-light md:max-w-sm'>
                    Algunos de mis proyectos
                </p>
            </div>

            <section className='flex flex-wrap gap-10 justify-center'>
                {projectos.map((projectos, index) => (
                    <div key={projectos.title} className='flex flex-col p-8 md:p-0 md:flex-row max-w-lg gap-8 border-emerald-700 border-2 rounded-2xl'>
                        <Image
                            className='hidden md:flex object-cover md:rounded-s-2xl'
                            src={projectos.image}
                            width={200}
                            height={150}
                        />
                        <aside className='flex flex-col gap-4 md:pt-6 md:pr-6 md:pb-6'>
                            <p className='text-xl font-bold'>
                                {projectos.title}
                            </p>

                            <p className='text-xs text-justify'>
                                {projectos.description}
                            </p>

                            <div className='flex flex-row gap-2'>
                                {projectos.image2.map((image2, imgIndex) => (
                                    <Image
                                        key={imgIndex}
                                        src={image2}
                                        width={30}
                                        height={30}
                                    />
                                ))}
                            </div>
                            
                    
                            <section className='flex flex-wrap gap-5'>
                                {projectos.web_url && (
                                    <a 
                                        href={projectos.web_url}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className='flex justify-center p-3 mt-5 bg-emerald-800 w-28 rounded-lg text-xs hover:bg-emerald-900'
                                    >
                                        {projectos.button_web}
                                    </a>
                                )}
                                
                                {projectos.web_repo && (
                                    <a 
                                        href={projectos.web_repo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex justify-center p-3 mt-5 bg-emerald-800 w-28 rounded-lg text-xs hover:bg-emerald-900'
                                    >
                                        {projectos.button_repositorio}
                                    </a>
                                )}
                            </section>

                        </aside>
                    </div>
                ))}
            </section>
        </section>
    )
}