import BarraDeNavegacao from '@/Components/Organismos/BarraDeNavegacao';
import Rodape from '@/Components/Organismos/Rodape';
import { PropsWithChildren } from 'react';

export default function ModeloPadrao({ children }: PropsWithChildren) {

    return (
        <div className="w-full min-h-[100vh] overflow-hidden bg-gray-100">
            <BarraDeNavegacao />
            <main className="min-h-full w-full p-2">{children}</main>
            <Rodape />
        </div>
    );
}
