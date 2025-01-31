import { PropsWithChildren } from "react";
import Acessibilidade from "../Atomos/Icons/Acessibilidade";
import { Book } from "@phosphor-icons/react/dist/ssr";
import { Info, MapTrifold, Phone, Question } from "@phosphor-icons/react";

export default function Rodape({ }) {

    return (
        <footer className="w-full py-16 px-4 min-h-64 bg-gray-50 border-t mt-8">
            <div className="flex items-start justify-center flex-col sm:flex-row mt-4 gap-4">
                <div className="flex flex-col items-start justify-start">
                    <h4 className="text-lg font-semibold uppercase mb-2 text-emerald-600">Sobre o sistema de eventos</h4>
                    <p className="text-sm text-zinc-600 max-w-[420px]">O sistema de eventos tem o objetivo de organizar, gerenciar o acesso e divulgação das atividades em eventos, sendo o portal responsável pela emissão de certificados de participação.</p>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <h4 className="text-lg font-semibold uppercase mb-2 text-emerald-600">Links</h4>
                    <RodapeLinks />
                </div>
            </div>

            <div className="w-full flex items-center justify-center my-4">
                <span className="text-zinc-800 font-semibold">&copy; 2025</span>
            </div>

        </footer>
    )
}

function RodapeLinks() {

    return (
        <div className="flex flex-row gap-8">
            <ul className="text-base flex flex-col flex-wrap text-zinc-600 whitespace-nowrap">
                <RodapeLinkItem>
                    <Acessibilidade width={16} height={16} /> Acessibilidade
                </RodapeLinkItem>
                <RodapeLinkItem>
                    <Book size={16} weight="bold" /> Documentação
                </RodapeLinkItem>
                <RodapeLinkItem>
                    <MapTrifold size={16} weight="bold" /> Mapa do Site
                </RodapeLinkItem>
            </ul>
            <ul className="text-base flex flex-col flex-wrap text-zinc-600 whitespace-nowrap">
                <RodapeLinkItem>
                    <Phone size={16} weight="bold" /> Contatos
                </RodapeLinkItem>
                <RodapeLinkItem>
                    <Info size={16} weight="bold" /> Ajuda
                </RodapeLinkItem>
                <RodapeLinkItem>
                    <Question size={16} weight="bold" /> Perguntas Frequentes
                </RodapeLinkItem>
            </ul>
        </div>
    )
}

function RodapeLinkItem({ children }: PropsWithChildren) {

    return (
        <li className="hover:text-indigo-400 hover:underline hover:cursor-pointer p-1 flex gap-1 items-center justify-start">
            {children}
        </li>
    )
}