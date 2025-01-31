import { useState } from "react";

function Sidebar() {
    const [activeMenu, setActiveMenu] = useState<string>("");

    const toggleMenu = (menu: string) => {
        setActiveMenu(activeMenu === menu ? "" : menu);
    };

    return (
        <div className="h-screen bg-white shadow-lg">
            <div className="p-4 text-lg font-bold">Laravel</div>
            <div className="space-y-4">

                <div className="px-4">
                    <p className="text-xs text-gray-500 uppercase">Eventos</p>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer duration-200 mb-1">
                        <span className="text-zinc-600 font-[500]">Meus Eventos</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer duration-200">
                        <span className="text-zinc-600 font-[500]">Novo Evento</span>
                    </div>
                </div>

                <div className="px-4">
                    <p className="text-xs text-gray-500 uppercase">Other</p>
                    <div className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                        {/* <FaTags className="text-gray-600" /> */}
                        <span>About</span>
                    </div>
                </div>

                <div className="px-4">
                    <p className="text-xs text-gray-500 uppercase">Filament Shield</p>
                    <div className="flex items-center gap-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
                        {/* <FaLock className="text-gray-600" /> */}
                        <span>Roles</span>
                    </div>
                </div>

                <div className="px-4">
                    <p className="text-xs text-gray-500 uppercase">Shop</p>
                    <div
                        onClick={() => toggleMenu("shop")}
                        className="flex items-center justify-between gap-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            {/* <FaShoppingCart className="text-gray-600" /> */}
                            <span>Shop</span>
                        </div>
                        <span>{activeMenu === "shop" ? "-" : "+"}</span>
                    </div>
                    {activeMenu === "shop" && (
                        <div className="pl-8 space-y-2">
                            <div className="flex items-center gap-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer">
                                <span>Payments</span>
                            </div>
                            <div className="flex items-center gap-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer">
                                <span>Users</span>
                            </div>
                            <div className="flex items-center gap-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer">
                                <span>Products</span>
                            </div>
                            <div className="flex items-center gap-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer">
                                <span>Vouchers</span>
                            </div>
                            <div className="flex items-center gap-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer">
                                <span>Tags</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
