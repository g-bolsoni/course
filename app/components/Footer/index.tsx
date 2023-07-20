import logo from "@/public/logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-blue px-8 py-6">
        <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="py-4 border-b-2 border-white lg:border-0 lg:w-4/12 lg:px-8">
                <Image
                    src={logo}
                    alt="Logo"
                />
            </div>
            <div className="py-4 border-b-2 border-white lg:border-0 lg:w-4/12 lg:px-8">
                <span className="text-lg lg:text-xl text-white mt-2">
                    Dúvidas ou quer falar algo?
                </span>
                <p className="text-base text-white flex flex-wrap mt-4">
                    Caso queira falar com a gente ou tirar alguma dúvida sobre sua compra envie um e-mail para:
                    <span className="text-lg text-white font-medium w-100 mt-2">guilherme@meucurso.com</span>
                </p>
            </div>
            <div className="py-4 lg:w-4/12 lg:px-8">
                <span className="text-lg lg:text-xl text-white mt-2">
                    Guilherme.com é um site seguro.
                </span>
                <p className="text-base text-white mt-2">CNPJ 34.699.395/0001-84</p>
                <p className="text-base text-white mt-2">*Pagamentos por boletos podem levar até 3 dias úteis para a liberação do material.</p>
            </div>
        </div>
    </footer>
  )
}
