import { Link } from "@inertiajs/react";
import { useState } from "react";
import Logo from "../Atomos/Icons/Logo";
import NavLink from "../Atomos/Links/NavLink";
import NavLinkResponsivo from "../Atomos/Links/NavLinkResponsivo";
import PerfilDropdown from "../Moleculas/PerfilDropdown";
import Plus from "../Atomos/Icons/Plus";

export default function BarraDeNavegacao() {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav className="w-full border-b border-gray-100 bg-white ">
            <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="w-full flex h-16 justify-between">

                    <div className="flex">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink href={route("index")} ativo={route().current("index")}>Inicio</NavLink>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink href={route("eventos.index")} ativo={route().current("eventos.index")}>Eventos</NavLink>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink href="/" ativo={false}>
                                <Plus width={20} height={20} />
                                <span className="ml-2">Novo Evento</span>
                            </NavLink>
                        </div>

                        <PerfilDropdown />
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="space-y-1 pb-3 pt-2">
                    <NavLinkResponsivo
                        href="/"
                        active={route().current('index')}
                    >
                        Início
                    </NavLinkResponsivo>
                    <NavLinkResponsivo
                        href="/eventos"
                        active={route().current('eventos')}
                    >
                        Eventos
                    </NavLinkResponsivo>
                    <NavLinkResponsivo
                        href="/"
                        active={false}
                    >
                        <span>Novo Evento</span>
                    </NavLinkResponsivo>
                </div>

                <div className="border-t border-gray-200 pb-1 pt-4">
                    <div className="mt-2 space-y-1">
                        <NavLinkResponsivo href="/">
                            Perfil
                        </NavLinkResponsivo>
                        <NavLinkResponsivo href="/">
                            Meus Eventos
                        </NavLinkResponsivo>
                        <NavLinkResponsivo
                            method="post"
                            href="/"
                            as="button"
                        >
                            Sair
                        </NavLinkResponsivo>
                    </div>
                </div>
            </div>
        </nav>)
}
