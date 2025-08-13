'use client';

import React, { useState } from 'react';
import { GrDocumentTime } from 'react-icons/gr';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { IoIosArrowForward, IoIosNotifications } from 'react-icons/io';
import { RiFilePaper2Fill, RiNewspaperLine } from 'react-icons/ri';
import { LiaNewspaperSolid } from 'react-icons/lia';
import Boleto from '@/components/boleto';
import Footer from '@/components/footer';

// Componentes de exemplo para cada aba
const AVencerContent = () => (
  <div className="grid gap-4">
    <Boleto status="a-vencer" />
    <Boleto status="a-vencer" />
    <Boleto status="a-vencer" />
  </div>
);

const PagosContent = () => (
  <div className="grid gap-4">
    <Boleto status="pago" />
    <Boleto status="pago" />
  </div>
);

const AtrasadosContent = () => (
  <div className="grid gap-4">
    <h1 className="text-red-500 flex justify-center mt-5">Sem Boletos Atrasados!</h1>
  </div>
);

const ExtratoSemestralContent = () => (
  <div className="p-6 bg-yellow-100 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Extrato Semestral</h2>
    <p>Conteúdo do extrato semestral será exibido aqui.</p>
  </div>
);

const ComprovanteContent = () => (
  <div className="p-6 bg-blue-100 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Comprovante</h2>
    <p>Lista de comprovantes será exibida aqui.</p>
  </div>
);

const MeusPagamentos = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('a-vencer');

  // Lista de abas
  const tabs = [
    { id: 'a-vencer', label: 'A vencer', icon: <GrDocumentTime />, hoverColor: 'hover:bg-orange-100' },
    { id: 'pagos', label: 'Pagos', icon: <BiMoneyWithdraw />, hoverColor: 'hover:bg-green-100' },
    { id: 'atrasados', label: 'Atrasados', icon: <RiFilePaper2Fill />, hoverColor: 'hover:bg-red-100' },
    { id: 'extrato', label: 'Extrato semestral', icon: <LiaNewspaperSolid />, hoverColor: 'hover:bg-yellow-100' },
    { id: 'comprovante', label: 'Comprovante', icon: <RiNewspaperLine />, hoverColor: 'hover:bg-blue-100' },
  ];

  // Função para renderizar o conteúdo da aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 'a-vencer':
        return <AVencerContent />;
      case 'pagos':
        return <PagosContent />;
      case 'atrasados':
        return <AtrasadosContent />;
      case 'extrato':
        return <ExtratoSemestralContent />;
      case 'comprovante':
        return <ComprovanteContent />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="flex items-center justify-between bg-white w-full h-16 px-8 drop-shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/portal-do-cliente/">
            {/* <img src="" alt="Logo Portal Cliente" className="w-12 h-12 rounded-full" /> */}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-8 text-sm text-blue-600 font-medium">
            {/* Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Serviços
                <span
                  className={`text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : 'rotate-0'}`}
                >
                  <IoIosArrowForward />
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <ul className="flex flex-col text-black">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Conta</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Atendimento</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fianceiro</li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#">Central de Ajuda</a>
          </nav>
          <div className="w-7 h-7 bg-slate-700 rounded-full" />
          <div className="w-7 h-7 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 text-sm">
            <IoIosNotifications className="size-4" />
          </div>
        </div>
      </header>

      <section className="bg-[#e5e5e5] min-h-screen px-4">
        <section className="flex justify-center items-center mr-96">
          <div className="mt-20">
            <h1 className="text-4xl font-extrabold text-[#102050]">Meus Pagamentos</h1>
            <p className="mt-4 text-gray-800">Área para pagamento de boletos e extratos.</p>
          </div>
        </section>

        <section className="flex justify-center items-center mt-10">
          <div className="bg-white w-[980px] h-16 px-8 drop-shadow-sm rounded-t-lg">
            <nav className="flex items-center justify-start h-full">
              <ul className="flex gap-8 text-xl text-[#26496c] font-bold">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`p-2 flex items-center justify-center gap-3 rounded-2xl transition-colors duration-200 ${
                        activeTab === tab.id ? tab.hoverColor.replace('hover:', 'bg-') : tab.hoverColor
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="flex justify-center items-center mt-4">
          <div className="w-[980px]">{renderContent()}</div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default MeusPagamentos;