import { useState } from "react";

export default function TabelaComAbas() {

    const [activeTab, setActiveTab] = useState("atividades");

    const tabs = [
        { id: "atividades", label: "Atividades" },
        { id: "convidados", label: "Convidados" },
        { id: "locais", label: "Locais" },
        { id: "cupons", label: "Cupons de desconto" },
        { id: "configuracoes", label: "Configurações" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "atividades":
                return <div>Conteúdo de Atividades</div>;
            case "convidados":
                return <div>Conteúdo de Convidados</div>;
            case "locais":
                return <div>Conteúdo de Locais</div>;
            case "cupons":
                return <div>Conteúdo de Cupons de Desconto</div>;
            case "configuracoes":
                return <div>Conteúdo de Configurações</div>;
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            <div className="w-full flex border-gray-300 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-4 focus:outline-none transition lowercase whitespace-nowrap
              ${activeTab === tab.id
                                ? "border border-zinc-200 rounded-t-sm border-b-0 text-zinc-800 font-normal"
                                : "text-zinc-400 hover:text-zinc-800 border-b"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="py-4 bg-white">
                {renderContent()}
            </div>
        </div>
    );
};
