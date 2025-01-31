import BarraDeNavegacao from '@/Components/Organismos/BarraDeNavegacao';
import Sidebar from '@/Components/Organismos/SideBar';
import { PropsWithChildren, useState } from 'react';

export default function ModeloMenuLateral({ children }: PropsWithChildren) {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-gray-100 flex flex-col">
            <BarraDeNavegacao />
            <div className='flex'>
                <button
                    className="p-4 bg-blue-500 text-white md:hidden"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? "Close Menu" : "Open Menu"}
                </button>

                {
                    isSidebarOpen && (
                        <div className="w-64">
                            <Sidebar />
                        </div>
                    )
                }
                <main className="min-h-full w-full p-2">{children}</main>
            </div>
        </div>
    );
}
