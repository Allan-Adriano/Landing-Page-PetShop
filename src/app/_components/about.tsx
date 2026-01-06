import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check } from "lucide-react";
import { WhatsappLogoIcon, MapPinAreaIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDf6ec] py-16">
            
            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto de um cachorro e um gatinho"
                                fill
                                className="object-cover hover:scale-110 duration-500"
                                quality={100}
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 overflow-hidden rounded-lg border-4  border-white-smolk">
                            <Image
                                src={about2Img}
                                alt="Foto do gatinho"
                                fill
                                quality={100}
                                priority
                            />
                        </div>

                    </div>

                    <div className="space-y-6 mt-10">

                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>
                            Until one has loved an animal, a part of one's soul remains unawakened.
                            We believe in it and we believe in easy access to things that are good
                            for our mind, body and spirit. With a clever offering, superb support
                            and a secure checkout you're in good hands.
                        </p>

                        <ul className="space-y-4">

                            <li className="flex items-center gap-2">
                                <Check className="text-[#81A96D]" />
                                Aberto desde 2026
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-[#81A96D]" />
                                Equipe com profissionais qualificados
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-[#81A96D]" />
                                Qualidade e atendimento humano é nossa prioridade
                            </li>

                        </ul>

                        <div className="flex gap-2">

                            <a
                                href=""
                                className="bg-[#105E4D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a
                                href="#"
                                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md border-3 "
                            >
                                <MapPinAreaIcon className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
