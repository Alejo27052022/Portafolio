import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col mt-20 gap-12">
      <section className="text-center text-2xl font-bold">
        <p>Acerca de mí</p>
      </section>

      <section className="flex flex-col md:flex-row gap-10 items-center md:justify-around">
        <Image
          className="rounded-lg"
          src={"/Images/profile.jpeg"}
          width={320}
          height={80}
        />

        <aside className="flex flex-col max-w-xl border-emerald-700 border-2 rounded-lg p-7">
          <p className="text-sm italic mb-3">Bienvenido 👋</p>
          <p className="font-bold text-2xl">Stalin Alejandro</p>

          <div className="flex flex-col text-sm gap-6 mt-8 text-justify">
            <p>
              Soy desarrollador web y de aplicaciones móviles con experiencia en
              tecnologías como React, HTML5, CSS, Javascript, WordPress, Bubble
              y Kotlin. He trabajado 3 años en desarrollo web y 1 año en
              desarrollo móvil, con un enfoque en la creación de soluciones
              eficientes y de alta calidad. Me destaco por ser una persona
              honesta, responsable y proactiva, lo que me permite adaptarme
              rápidamente a los desafíos de cada proyecto. Mi compromiso es
              superar las expectativas de los clientes y usuarios mediante un
              trabajo constante y colaborativo. Actualmente, me encuentro
              disponible para nuevos proyectos y oportunidades, dispuesto a
              aportar mis habilidades en entornos dinámicos y en constante
              evolución.
            </p>
          </div>

          <button
            onClick={""} 
            className="flex flex-row mt-7 bg-emerald-800 p-3 w-32 rounded-lg text-xs hover:bg-emerald-900 items-center gap-2 justify-center">
            
            Resumen
            <img
              width="14"
              height="14"
              src="/Images/download.png"
              alt="download"
            />
          </button>
        </aside>
      </section>
    </div>
  );
}
