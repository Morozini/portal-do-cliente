"use client";

import { MinusCircle } from "lucide-react";
import { CiCircleAlert } from "react-icons/ci";
import { useState } from "react";

const Boleto = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-1xl p-5 bg-white rounded shadow mt-6 flex flex-col md:flex-row gap-6 border h-[340px]
        ">
            {/* Coluna da Esquerda */}
            <div className="flex-1">
                <p className="text-sm text-orange-500 font-semibold flex items-center gap-1">
                    <span className="text-xl"><CiCircleAlert /></span> Fatura em aberto
                </p>
                <h1 className="text-3xl font-bold mt-2">R$283,11</h1>

                <div className="text-sm mt-4 space-y-1">
                    <p>
                        <strong>Vencimento:</strong>{" "}
                        <span className="text-black font-medium">22/05/2025</span>
                    </p>
                    <p>
                        <strong>Empresa:</strong> Empresa Teste
                    </p>
                    <p>
                        <strong>Período Ano:</strong> 2025-1
                    </p>
                    <p className="flex items-center gap-1">
                        <strong>Mês referência:</strong> 03 / 2025
                    </p>
                </div>

                <div className="mt-6">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="font-semibold text-red-600 flex items-center gap-1"
                    >
                        <MinusCircle className={`w-5 h-5 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                        Veja sua fatura detalhada
                    </button>

                    <div
                        className={`text-sm mt-2 ml-6 space-y-1 overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p>
                            <strong>Valor original (Parcela 3)</strong>: R$566,23
                        </p>
                        <p className="text-green-600">(-) Bolsa padrão: R$-283,12</p>
                    </div>
                </div>
            </div>

            {/* Coluna da Direita */}
            <div className="flex flex-col gap-3 justify-center items-center md:w-72 ml-5 ">
                <button className="bg-blue-800 hover:bg-blue-950 text-white rounded-xl py-1 w-48 font-bold">
                    Cartão de Crédito
                </button>
                <button className="bg-blue-800 hover:bg-blue-950 text-white rounded-xl py-1 w-48 font-bold">
                    Gerar boleto
                </button>
                <button className="border-2 border-blue-400 text-blue-600 rounded-xl py-1 w-48 font-semibold">
                    Copiar código de barras
                </button>
                <button className="border-2 border-blue-400 text-blue-600 rounded-xl py-1 w-48 font-semibold">
                    Nota Fiscal
                </button>
            </div>
        </div>
    );
};

export default Boleto;