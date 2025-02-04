import { Evento } from "@/Features/Evento/Evento";
import Calendar from "./Icons/Calendar";

export default function EventoSlide({ evento }: {evento: Evento}) {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full ">
                <img src={evento.imagemUrl} alt="imagem do evento" className="bg-gray-400 flex h-[288px] w-[720px]" />
            </div>

            <div className="w-full ">
                <h2 className="text-xl font-semibold text-zinc-800">{evento.titulo}</h2>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-start">
                    <span className="flex items-center justify-start gap-1 text-zinc-600">
                        <Calendar width={16} height={16} />
                        {evento.data}
                    </span>
                    <span className="flex items-center justify-start gap-2 text-zinc-600">
                        <span className="bg-emerald-400 w-[9px] h-[9px] rounded-full"></span>
                        {evento.formato}
                    </span>
                </div>
            </div>
        </div>
    )
}
