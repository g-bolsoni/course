import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";


export function Header() {
  return (
    <header className="container mx-auto">
      <div className=" flex items-center justify-center p-2.5 lg:justify-start">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={30}
            height={30}
            layout="responsive"   
          />
        </Link>
      </div>
    </header>
  )
}
