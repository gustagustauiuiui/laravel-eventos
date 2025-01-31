import { PropsWithChildren } from "react";

export default function Botao({children}: PropsWithChildren) {

    return (
        <button className="py-2.5 px-4 border rounded-md hover:opacity-50">
            {children}
        </button>       
    )
}