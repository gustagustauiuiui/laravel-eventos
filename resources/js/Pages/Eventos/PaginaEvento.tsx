import { EventoInfoGeral } from "@/Features/Evento/EventoInfoGeral";
import ModeloPadrao from "@/Layouts/ModeloPadrao";
import { Evento } from "@/Features/Evento/Evento";
import { EventoDescricao } from "../../Features/Evento/EventoDescricao";
import { EventoAtividades } from "@/Features/Evento/EventoAtividades";
import { EventoConvidados } from "@/Features/Evento/EventoConvidados";
import EventoImagem from "@/Features/Evento/EventoImagem";

export default function PaginaEvento({ evento }: {evento: Evento}) {

    evento = {
        imagemUrl: "/images/banner.png",
        titulo: "I Semana Nacional de Ciência e Tecnologia",
        data: "13/13/1313",
        formato: "Online",
        descricao: "Consequuntur repudiandae eaque optio cum, nisi beatae eius sit eos? Aperiam magni eius incidunt officiis aspernatur, doloremque non accusantium perferendis rerum voluptatum molestiae illo? Incidunt, cumque qui! Neque molestias perspiciatis minima qui quae, dolor doloribus? Blanditiis, dicta labore aut aperiam ducimus magni ad incidunt quaerat corporis, possimus inventore nemo maiores tempore laboriosam repudiandae quia excepturi obcaecati expedita provident? Molestias alias et, nemo facilis laboriosam.",
        atividades: [
            { uuid: "1", titulo: "Palestra: Cyber Security aplicada na cozinha. Vamos Cozynhar!", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
            { uuid: "2", titulo: "Oficina: IFRO na cozinha. Vamos fritar um ovo!", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "20:00", horario_fim: "21:00" },
            { uuid: "3", titulo: "Atividade de teste!", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "21:30", horario_fim: "22:30" },
            { uuid: "4", titulo: "Minicurso: Docker.", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
            { uuid: "5", titulo: "Palestra: Como identificar um stalker.", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
            { uuid: "6", titulo: "Palestra: Como utilizar IA para criar imagens do Seu Madruga só de calcinha.", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
            { uuid: "7", titulo: "Palestra: Como saber se sou um ser humano ou um alienígena?", data_fim: "", data_inicio: "20/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
            { uuid: "8", titulo: "Minicurso: Ensinando a contar até 10.", data_fim: "", data_inicio: "21/02/2025", horario_inicio: "19:00", horario_fim: "21:00" },
        ],
        convidados: [],
    };

    return (
        <ModeloPadrao>
            <div className="flex items-center justify-center py-4 mb-32">
                <div className="w-full sm:w-[70%] flex items-center justify-center flex-col gap-12">

                    <EventoImagem imagemUrl={evento.imagemUrl} />
                    <EventoInfoGeral evento={evento} />
                    <EventoDescricao descricao={evento.descricao} />
                    <EventoAtividades atividades={evento.atividades} />
                    <EventoConvidados convidados={[]} />

                    <div className="w-full bg-white flex flex-col sm:flex-row gap-y-2 items-center justify-between p-8 rounded-2xl border">
                        <h2 className="text-2xl mb-4 font-semibold text-zinc-800">Entradas</h2>
                    </div>
                </div>
            </div>
        </ModeloPadrao>
    )
}


