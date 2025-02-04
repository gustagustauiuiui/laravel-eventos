import { EventoInfoGeral } from "@/Features/Evento/EventoInfoGeral";
import ModeloPadrao from "@/Layouts/ModeloPadrao";
import { Entrada, Evento } from "@/Features/Evento/Evento";
import { EventoDescricao } from "../../Features/Evento/EventoDescricao";
import { EventoAtividades } from "@/Features/Evento/EventoAtividades";
import { EventoConvidados } from "@/Features/Evento/EventoConvidados";
import EventoImagem from "@/Features/Evento/EventoImagem";
import { Plus } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export default function PaginaEvento({ evento }: { evento: Evento }) {

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
        convidados: [
            { nome: "Nome Bem Feito Costa e Silva ", email: "NomeBemLegaldaSilva@gmail.com" },
            { nome: "Outro Nome dos Bem Bacanas ", email: "OhNomeBacanaEin@gmail.com" },
        ],
        entradas: [
            { categoria: "Estudante", quantidade_limitada: false, num_inscricoes: 0, expira: false, tipo: "Gratuita", valdiade_inicio: "20/02/2025", validade_fim: "25/03/2025" },
            { categoria: "Público Externo", quantidade_limitada: true, num_maximo_entradas: 100, num_inscricoes: 100, expira: true, tipo: "Gratuita", valdiade_inicio: "20/02/2025", validade_fim: "25/03/2025" },
        ],
    };

    return (
        <ModeloPadrao>
            <div className="flex items-center justify-center py-4 mb-32">
                <div className="w-full sm:w-[70%] flex items-center justify-center flex-col gap-12">

                    <EventoImagem imagemUrl={evento.imagemUrl} />
                    <EventoInfoGeral evento={evento} />
                    <EventoDescricao descricao={evento.descricao} />
                    <EventoAtividades atividades={evento.atividades} />
                    <EventoConvidados convidados={evento.convidados} />
                    <EventoEntradas entradas={evento.entradas} />

                </div>
            </div>
        </ModeloPadrao>
    )
}

export function EventoEntradas({ entradas }: { entradas: Array<Entrada> }) {

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("submit");
    }

    const [pacote, setPacote] = useState({});

    const adicionarAoPacote = (entrada: Entrada) => {
        //TODO: transformar isso em uma espécie de reduce;
        setPacote((prev) => ({ ...prev, [entrada.categoria]: 1 }));
    }

    console.log(pacote);
    

    return (
        <form onSubmit={(e) => onSubmit(e)} className="w-full bg-white flex flex-col gap-y-2 items-center justify-between p-8 rounded-2xl border">
            <h2 className="w-full text-2xl mb-4 font-semibold text-zinc-800">Entradas</h2>

            {entradas.map((entrada, index) => (
                <SelecaoEntrada key={index} entrada={entrada} onClick={adicionarAoPacote} />
            ))}

            <div className="w-full sm:w-[20%] h-full flex items-center justify-center mt-8">
                <button
                    type="submit"
                    className="py-4 px-16 rounded-full bg-emerald-400 hover:bg-emerald-500 hover:text-white font-[600] text-zinc-50 text-base duration-200 ease-in whitespace-nowrap"
                >
                    Realizar Inscrição
                </button>
            </div>
        </form>
    )
}

function SelecaoEntrada({ entrada, onClick }: { entrada: Entrada, onClick: (entrada: Entrada) => void }) {

    const ativo = !entrada.quantidade_limitada || entrada.num_inscricoes !== entrada.num_maximo_entradas;

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className={"w-full p-2 border rounded-md flex items-center justify-between duration-200 " + (ativo ? " hover:ring-1 hover:ring-blue-400 bg-white" : " bg-gray-50 opacity-70")}>
                <p>{entrada.categoria}</p>
                <div className="flex gap-2 flex-row">
                    <button
                        type="button"
                        disabled={!ativo}
                        className="flex items-center justify-center border h-[50px] w-[50px] rounded-md hover:bg-gray-100 hover:text-zinc-900 text-zinc-600 duration-200"
                    >
                        -
                    </button>
                    <button
                        onClick={() => onClick(entrada)}
                        type="button"
                        disabled={!ativo}
                        className="flex items-center justify-center border h-[50px] w-[50px] rounded-md hover:bg-gray-100 hover:text-zinc-900 text-zinc-600 duration-200"
                    >
                        <Plus />
                    </button>
                </div>
            </div>
        </div>
    )
}


