"use client";

import {
    FaCircle,
    FaFileAlt,
    FaRegFile,
    FaHistory,
    FaBriefcase,
    FaPen,
    FaLaptop,
} from "react-icons/fa";
import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { LuFileMinus } from "react-icons/lu";

import { IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/footer";

const services = [
    { icon: <FaLaptop />, label: "Suporte" },
    { icon: <FaBriefcase />, label: "Solicitar Visita Técnica" },
    { icon: <FaHistory />, label: "Histórico de Pagamentos" },
    { icon: <FaPen />, label: "Atualizar Dados Cadastrais" },
    { icon: <FaFileAlt />, label: "Contrato" },
    { icon: <FaRegFile />, label: "Solicitar Revisão de Contrato" },
];

const Page = () => {
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

            {/* Section Boas Vindas */}
            <section className="bg-[#e5e5e5] min-h-screen px-4">
                <section className="flex justify-center items-center mr-96">
                    <div className="mt-20">
                        <h1 className="text-4xl font-extrabold text-[#102050]">
                            Bem-vindo ao Portal do Cliente
                        </h1>
                        <p className="mt-4 text-gray-800">
                            Aqui você pode acessar seus debitos e pagamentos.
                        </p>
                    </div>
                </section>
                {/* Secion Pergunta */}
                <section className="flex justify-center items-center mr-[760px] mt-16">
                    <h1 className="text-2xl font-bold text-[#525252] mb-4 text-center">
                        O que deseja fazer?
                    </h1>
                </section>

                {/* Card Boletos */}
                <section className="flex grid-cols-2 gap-4 justify-center items-center mt-10">
                    <a
                        href="/meus-pagamentos/"
                        className="w-96 h-40 bg-[#f8f8f8] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-sm"
                    >
                        <span className="flex flex-col items-center justify-center h-full">
                            <LuFileMinus className="size-12 text-[#102050]" />
                            <h2 className="text-xl font-bold text-[#102050]">Consultar Débitos</h2>
                            <div className="flex flex-col gap-1 mt-2 text-sm">
                                <span className="flex items-center gap-2">
                                    <FaCircle className="text-green-500" />
                                    <h1>4 pagas</h1>
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCircle className="text-yellow-500" />
                                    <h1>2 a vencer</h1>
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCircle className="text-red-500" />
                                    <h1>0 em atraso</h1>
                                </span>
                            </div>
                        </span>
                    </a>

                    {/* Card Documentos / contrato */}
                    <a
                        href=""
                        className="w-96 h-40 bg-[#f8f8f8] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-sm"
                    >
                        <span className="flex flex-col items-center justify-center h-full">
                            <GrDocumentText className="size-12 text-[#102050]" />
                            <h2 className="text-xl font-bold text-[#102050]">
                                Envio de Documentos
                            </h2>
                            <div className="flex flex-col gap-1 mt-2 text-sm">
                                <span className="flex items-center gap-2">
                                    <FaCircle className="text-yellow-500" />
                                    <h1>4 não enviados</h1>
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCircle className="text-green-500" />
                                    <h1>0 invalidados</h1>
                                </span>
                            </div>
                        </span>
                    </a>
                </section>

                <section className="flex justify-center items-center mr-[880px] mt-10">
                    <h1 className="text-2xl font-bold text-[#525252] mb-4">Serviços</h1>
                </section>

                <section className="flex justify-center items-center mt-10">
                    <div className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 text-black hover:text-blue-700 cursor-pointer"
                            >
                                <div className="bg-blue-600 text-white p-3 rounded-full shadow-md text-xl">
                                    {service.icon}
                                </div>
                                <span className="text-sm">{service.label}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Page;
