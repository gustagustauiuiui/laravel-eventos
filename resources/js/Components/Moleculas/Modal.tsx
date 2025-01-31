import { PropsWithChildren } from "react";

export default function Modal({ openModal, onClose = () => {}, children }: { openModal: boolean, onClose: () => void } & PropsWithChildren) {

    return (
        <div
            className={`${openModal
                ? "visible  duration-500 ease-in-out bg-black/50 transition-all"
                : "invisible"
                } fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full `}
            id="modalAddUser"
            onClick={onClose}
            aria-labelledby="modalAddUser"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-lg bg-white p-6 rounded "
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <button
                        type="button"
                        className="absolute cursor-pointer top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        onClick={() => onClose()}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Fechar modal</span>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
}


// export default function Modal({ openModal, onClose = () => {}, children }: { openModal: boolean, onClose: () => void } & PropsWithChildren) {

//     return (
//         <div
//             className={`${openModal
//                 ? "visible  duration-500 ease-in-out bg-black/50 transition-all"
//                 : "invisible"
//                 } fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full `}
//             id="modalAddUser"
//             onClick={onClose}
//             aria-labelledby="modalAddUser"
//             aria-hidden="true"
//         >
//             <div
//                 className="modal-dialog modal-lg bg-white p-6 rounded "
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div>
//                     <button
//                         type="button"
//                         className="absolute cursor-pointer top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
//                         onClick={() => onClose()}
//                     >
//                         <svg
//                             className="w-3 h-3"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 14 14"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                             />
//                         </svg>
//                         <span className="sr-only">Fechar modal</span>
//                     </button>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }

