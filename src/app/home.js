import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center mt-30 gap-8">
      <Image src="/Images/logo3.png" width={350} height={350} />
      <p className="text-xl font-semibold text-center">
        Hola, Soy Stalin Alejandro, FrontDeveloper
      </p>
    </div>
  );
}
