"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
    ChevronLeft,
    ChevronRight,
    Scissors,
    Syringe,
    CarTaxiFront,
    PillBottle,
    Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

const services = [
    {
        title: "Banho & Tosa",
        description:
            "Inclui banho com produtos especificos para a pelagem e pele do animail, corte de unhas, limpeza das orelhas e tosa personalizada(higiênica ou estilizada).",
        duration: "1h",
        price: "R$ 110,00",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
    },
    {
        title: "Consulta Veterinária",
        description:
            "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "R$80",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
    },
    {
        title: "Delivery",
        description:
            "Oferece a comodidade de receber produtos em casa. Realiza o transporte seguro de rações, medicamentos e acessórios, garantindo agilidade na entrega da sua encomenda.",
        duration: "2h",
        price: "R$80",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre o Delivery e gostaria de mais informações.",
    },
    {
        title: "Farmácia",
        description:
            "Oferece medicamentos para diversos tratamentos, além de produtos dermatológicos e vitamínicos essenciais para a manutenção da saúde e bem-estar do animal.",
        duration: "-",
        price: "Variável",
        icon: <PillBottle />,
        linkText:
            "Olá, vi no site sobre a Farmácia e gostaria de verificar a disponibilidade de um medicamento.",
    },
];

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: { "(min-width:768px)": { slidesToScroll: 3 } },
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">

            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl font-bold mb-12">Nossos serviços</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                                >
                                    <article className="bg-[#81A96D] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col select-none">

                                        <div className="flex-1 flex items-start justify-between">

                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>

                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 my-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-black text-sm ">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="border-t border-white-700 pt-4 flex items-center justify-between">

                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className=" w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                href="#"
                                                className="flex items-center justify-center gap-2 hover:text-green-600 transition-colors duration-430 ease-in-out"
                                            >
                                                <WhatsappLogoIcon className="w-5 h-5" />
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>

                                </div>
                            ))}

                        </div>

                    </div>

                    <button
                        onClick={scrollPrev}
                        className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 " />
                    </button>
                    <button
                        onClick={scrollNext}
                        className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 " />
                    </button>

                </div>

            </div>

        </section>
    );
}
