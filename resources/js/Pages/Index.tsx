
import EventoSlide from "@/Components/Atomos/EventoSlide";
import Carrossel from "@/Components/Moleculas/Carrossel";
import PadraoLayout from "@/Layouts/ModeloPadrao";

export default function Eventos() {

    const slides = [
        <EventoSlide evento={{imagemUrl: "/images/banner.png", titulo: "I Semana Nacional de Ciência e Tecnologia", data: "13/13/1313", formato: "Online"}}  />,
    ];

    return (
        <PadraoLayout>
            <div className="w-full p-2 flex flex-col items-center justify-center ">

                <div className="w-full sm:w-[60%] flex flex-col items-start justify-center ">
                    <h2 className="w-full text-2xl font-semibold text-zinc-800">Eventos: </h2>
                    <div className="w-full flex items-center justify-center">

                        <Carrossel slides={slides} />
                    </div>
                </div>

            </div>
        </PadraoLayout>
    )
}
