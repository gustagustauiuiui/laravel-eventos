export default function EventoImagem({ imagemUrl }: { imagemUrl: string; }) {

    return (
        <div className="w-full bg-white flex flex-col sm:flex-row gap-y-2 items-start justify-center rounded-2xl border border-zinc-200 overflow-hidden max-h-[400px]">
            <img src={imagemUrl} alt="imagem do evento" className="bg-gray-400 flex w-full " />
        </div>
    );
}
