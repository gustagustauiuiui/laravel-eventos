import { useState, useEffect, createContext } from "react";

type CarrosselContextType = {
    slides: Array<JSX.Element>,
    proximo: Function,
    anterior: Function,
    irPara: Function,
}

const CarrosselContexto = createContext<CarrosselContextType | undefined>({
    slides: [],
    proximo: () => { },
    anterior: () => { },
    irPara: () => { },
});

export default function Carrossel({ slides }: { slides: Array<JSX.Element> }) {

    const [indexAtual, setIndexAtual] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            proximo();
        }, 5000);

        return () => clearInterval(timer);
    }, [indexAtual, 5000]);

    const proximo = () => {
        const isLastSlide = indexAtual === slides.length - 1;
        setIndexAtual(isLastSlide ? 0 : indexAtual + 1);
    };

    const anterior = () => {
        const isFirstSlide = indexAtual === 0;
        setIndexAtual(isFirstSlide ? slides.length - 1 : indexAtual - 1);
    };

    const irPara = (index: number) => {
        setIndexAtual(index);
    };

    return (
        <CarrosselContexto.Provider value={{ slides, proximo, anterior, irPara }}>
            <div className="flex flex-col items-center justify-center gap-4">

                <div className="flex items-center justify-between">
                    <BotaoAnterior acao={anterior} />

                    <div className=" overflow-hidden sm:p-12">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${indexAtual * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className="min-w-[100%] p-2">
                                    {slide}
                                </div>
                            ))}
                        </div>
                    </div>

                    <BotaoProximo acao={proximo} />
                </div>

                <div className="flex space-x-1 sm:space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => irPara(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === indexAtual ? "bg-indigo-400" : "bg-zinc-300"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </CarrosselContexto.Provider>
    )
}

function BotaoProximo({ acao = () => { } }) {
    return (
        <button
            onClick={acao}
            className="min-w-[32px] h-[32px] overflow-hidden p-2 flex items-center justify-center bg-white text-indigo-400 text-2xl font-normal shadow-md shadow-gray-300 rounded-full hover:bg-indigo-100 duration-200 ease-in-out"
        >
            &#8250;
        </button>
    );
}

function BotaoAnterior({ acao = () => { } }) {
    return (
        <button
            onClick={acao}
            className="min-w-[32px] h-[32px] overflow-hidden p-2 flex items-center justify-center bg-white text-indigo-400 text-2xl font-normal shadow-md shadow-gray-300 rounded-full hover:bg-indigo-100 duration-200 ease-in-out"
        >
            &#8249;
        </button>
    );
}




