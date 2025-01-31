export function EventoDescricao({ descricao = "" }: { descricao: String; }) {

    return (
        <div className="w-full bg-white flex flex-col items-center justify-between p-8 sm:p-12 rounded-2xl border">
            <h2 className="w-full text-2xl mb-4 font-semibold text-zinc-800 text-start">Descrição do evento</h2>
            <p className="text-base text-zinc-600">{descricao}</p>
        </div>
    );
}
