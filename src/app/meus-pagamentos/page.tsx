"use client";

import React, { useState } from "react";
import { GrDocumentTime } from "react-icons/gr";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoIosArrowForward, IoIosNotifications } from "react-icons/io";
import { RiFilePaper2Fill, RiNewspaperLine } from "react-icons/ri";
import { LiaNewspaperSolid } from "react-icons/lia";
import Boleto from "@/components/boleto";
import Footer from "@/components/footer";



const MeusPagamentos = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between bg-white w-full h-16 px-8 drop-shadow-sm">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/portal-do-cliente/">
                        {/* <img src="" alt="Logo Portal Cliente" className="w-12 h-12  rounded-full" /> */}
                    </a>
                </div>
                <div className="flex items-center gap-5">
                    <nav className="flex items-center gap-8 text-sm text-blue-600 font-medium">
                        {/* DropDown */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-1"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Serviços
                                <span
                                    className={`text-xs transition-transform duration-300 ${isDropdownOpen ? "rotate-90" : "rotate-0"
                                        }`}
                                >
                                    <IoIosArrowForward />
                                </span>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                                    <ul className="flex flex-col text-black">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Conta
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Atendimento
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Fianceiro
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* href de central de ajuda = WhatsApp */}
                        <a href="#">Central de Ajuda</a>
                    </nav>
                    {/* Ícones de usuário e notificação */}
                    <div className="w-7 h-7 bg-slate-700 rounded-full" />
                    <div className="w-7 h-7 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 text-sm">
                        <IoIosNotifications className="size-4" />
                    </div>
                </div>
            </header>

            <section className="bg-[#e5e5e5] min-h-screen px-4">
                <section className="flex justify-center items-center mr-96">
                    <div className="mt-20">
                        <h1 className="text-4xl font-extrabold text-[#102050]">
                            Meus Pagamentos
                        </h1>
                        <p className="mt-4 text-gray-800">
                            Área para pagamento de boletos e extratos.
                        </p>
                    </div>
                </section>

                <section className="flex justify-center items-center mt-10">
                    <div className=" bg-white w-[980px] h-16 px-8 drop-shadow-sm rounded-t-lg">
                        <nav className="flex items-center justify-start h-full">
                            <ul className="flex gap-8 text-xl text-[#26496c] font-bold">
                                <li>
                                    <a
                                        href=""
                                        className="hover:bg-orange-100 p-2 flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <GrDocumentTime />A vencer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="hover:bg-green-100 p-2 flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <BiMoneyWithdraw />
                                        Pagos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="hover:bg-red-100 p-2 flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <RiFilePaper2Fill />
                                        Atrasados
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="hover:bg-yellow-100 p-2 flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <LiaNewspaperSolid /> Extrato semestral
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="hover:bg-blue-100 p-2 flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <RiNewspaperLine />
                                        Comprovante
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
                    <Boleto />
                    <Boleto />
                    <Boleto />
                    <Boleto />
                    <Boleto />
                    <Boleto />
                    <Boleto />
                </section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default MeusPagamentos;
