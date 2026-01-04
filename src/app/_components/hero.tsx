import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/bg-hero.png";
import Image from "next/image";

export function Hero() {
    return (
        <section className="bg-[#105E4D] text-white relative overflow-hidden">
            {/*Imagem para o fundo mobile  */}
            <div>
                <Image
                    src={dogImg}
                    alt="foto de um cachorro"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-70 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-9">
                            Mais que um Pet Shop: amor e cuidado para o seu melhor Companheiro.
                        </h1>

                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade
                            do seu Pet
                        </p>

                        <a
                            href="#"
                            className="bg-white text-gray-800 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className="w-5 h-5 " />
                            Contato via WhatsApp
                        </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <span className="bg-gray-900 px-2 py-1 rounded-md">5%</span> de
                                desconto na primeira consulta
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                            src={dogImg}
                            alt="foto de um cachorro"
                            className="object-contain lg:scale-150 origin-bottom"
                            fill
                            sizes="(max-width:768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}
