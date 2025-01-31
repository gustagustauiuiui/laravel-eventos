import { Atividade } from "@/Features/Evento/Evento";
import { useState } from "react";

export function EventoAtividades({ atividades }: { atividades: Array<Atividade>; }) {

    type tab = {
        nome: string;
        atividades: Array<Atividade>;
    };

    const atividadesPorData = atividades.reduce((acc, atividade) => {
        const { data_inicio } = atividade;
        if (!acc[data_inicio]) {
            acc[data_inicio] = [];
        }
        acc[data_inicio].push(atividade);
        return acc;
    }, {} as Record<string, typeof atividades>);


    const tabs = Object.entries(atividadesPorData).map((item) => {
        return { nome: item[0], atividades: item[1] } as tab;
    });


    const [tabSelecionado, setTabSelecionado] = useState<tab | null>(tabs[0] ?? null);

    return (
        <div className="w-full bg-white flex flex-col items-center justify-between p-8 sm:p-12 rounded-2xl border">
            <h2 className="w-full text-2xl mb-4 font-semibold text-zinc-800 text-start">Atividades</h2>

            <div className="w-full">
                <div className="w-full flex overflow-x-auto">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setTabSelecionado(tab)}
                            className={`px-4 py-4 focus:outline-none transition lowercase whitespace-nowrap border-zinc-300 ${tabSelecionado?.nome === tab.nome
                                ? "border rounded-t-sm border-b-0 text-zinc-800 font-normal border-b-white"
                                : "text-zinc-400 hover:text-zinc-800 border-b"}`}
                        >
                            {tab.nome}
                        </button>
                    ))}
                </div>
                <div className="py-4 flex flex-col gap-2">
                    {tabSelecionado?.atividades.map((atividade, index) => (
                        <div
                            key={index}
                            className="px-2 py-2.5 border-2 border-zinc-100 hover:border-emerald-400 rounded-md duration-200 cursor-pointer flex items-center justify-between text-zinc-600"
                        >
                            <p>{atividade?.titulo}</p>
                            <p className="whitespace-nowrap mr-1 text-sm ">{atividade?.horario_inicio} - {atividade?.horario_fim}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
