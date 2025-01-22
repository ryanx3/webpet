import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 p-10">
        <div className="flex items-center justify-center gap-6">
          <Image src="https://github.com/ryanx3.png" className="object-cover rounded-full border-background border" width={80} height={80} alt="Avatar do Ryan" />
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 text-center tracking-tighter dark:from-white dark:to-gray-400">Full Stack Web Developer </h1>
        </div>
          <p className="text-muted-foreground text-center text-xl leading-loose max-w-2xl">Bem-vindo ao meu portfólio! Eu sou <span className="text-foreground font-bold tracking-wide">Ryan Gabriel</span>, apaixonado por tecnologia e desenvolvimento web.</p>
      </div>
    </div>
  );
}
