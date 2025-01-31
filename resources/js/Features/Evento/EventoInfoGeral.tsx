import Calendar from "@/Components/Atomos/Icons/Calendar";
import { Evento } from "@/Features/Evento/Evento";

export function EventoInfoGeral({ evento }: { evento: Evento; }) {

    return (
        <div className="w-full bg-white flex flex-col sm:flex-row gap-y-2 items-center justify-between p-8 sm:p-12 rounded-2xl border">
            <div className="w-full sm:w-[80%]">
                <h2 className="text-2xl mb-4 font-semibold text-zinc-800">{evento.titulo}</h2>

                <div className="w-full flex flex-col items-start justify-center">
                    <span className="flex items-center justify-start gap-1 text-zinc-600">
                        <Calendar width={16} height={16} />
                        {evento.data} - {evento.data}
                    </span>
                    <span className="flex items-center justify-start gap-2 text-zinc-600">
                        <span className="bg-emerald-400 w-[9px] h-[9px] rounded-full"></span>
                        {evento.formato}
                    </span>
                </div>
            </div>

            <div className="w-full sm:w-[20%] h-full flex items-center justify-center">
                <button
                    className="py-2.5 px-8 rounded-3xl bg-emerald-400 hover:bg-emerald-500 hover:text-white font-[600] text-zinc-50 text-sm duration-200 ease-in whitespace-nowrap"
                >
                    Realizar Inscrição
                </button>
            </div>
        </div>
    );
}
