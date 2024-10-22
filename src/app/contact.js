"use client"

import Image from "next/image";
import contact_image from "./components/contact_image";

export default function Contact() {
  return (
    <section className="flex flex-col gap-5 mt-20 justify-center items-center">
      <p className="text-sm font-bold">Contacto</p>
      <p className="text-2xl font-bold">¿Conversamos?</p>
      <p className="text-sm">
        Será un placer colaborar contigo en cualquier proyecto que tengas en
        mente.
      </p>
      <button
        onClick={() => window.location.href = "mailto:stalinalejandro19@outlook.es"} 
        className="mt-6 bg-emerald-800 w-36 rounded-lg text-xs hover:bg-emerald-900 p-3"> 
            Cóntactame 
      </button>

      <div className="flex flex-row gap-10 mt-3">
            {contact_image.map((contact, index) => (
                <Image
                    key={index}
                    src={contact.image}
                    alt={`contact-${index}`}
                    width={40}
                    height={40}
                    onClick={() => window.open(contact.url, '_blank')}
                    className="cursor-pointer"
                />
            ))}
        </div>
    </section>
  );
}
