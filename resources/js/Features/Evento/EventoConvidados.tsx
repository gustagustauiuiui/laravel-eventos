import { Convidado } from "@/Features/Evento/Evento";

export function EventoConvidados({ convidados }: { convidados: Array<Convidado> }) {

    convidados = [
        { nome: "Nome Bem Feito da Silva", email: "NomeBemLegal@gmail.com" },
        // { nome: "Nome Legal e Bem Grande", email: "EmailDeTesasdasdte@gmail.com" },
        // { nome: "Nome Legal e Bem Grande", email: "EmailDeTesasdasdte@gmail.com" },
    ]

    return (
        <div className="w-full bg-white flex flex-col gap-y-2 items-center justify-between p-8 rounded-2xl border">
            <h2 className="w-full text-2xl mb-4 font-semibold text-zinc-800">Convidados</h2>
            <div className="w-full flex flex-row gap-16 sm:justify-center justify-start items-center flex-1 relative overflow-x-auto">
                {convidados.map((convidado) => (
                    <div className="flex flex-col items-center justify-start gap-4 max-w-[200px] py-2 px-8">
                        <span className="w-[150px] h-[150px] bg-blue-600 rounded-full text-4xl text-white flex items-center justify-center capitalize">{convidado.nome[0]}</span>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-zinc-800 font-semibold text-base text-center max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{convidado.nome}</p>
                            <p className="text-sm text-zinc-600 font-normal max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{convidado.email}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );

}
