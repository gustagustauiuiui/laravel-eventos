import { PropsWithChildren, useState } from "react";

export default function Acordeao({ texto = "", children }: { texto: String } & PropsWithChildren) {

    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-start justify-center flex-col gap-1 bg-red-200 p-2">
            <div
                className="py-2.5 px-4 rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => setVisible((prev) => !prev)}
            >
                {texto}
            </div>
            <div className="flex flex-col gap-1 ml-6 bg-gray-50">
                {visible ? children : null}
            </div>
        </div>
    )

}