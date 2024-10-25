import Logo from "../assets/LogoOdontoSoft.png";
import { FiMail, FiLock, FiUser, FiPhone } from "react-icons/fi";

import React from "react";

interface FormRegisterProps {
  toggleForm: () => void;
}

const FormRegister: React.FC<FormRegisterProps> = ({ toggleForm }) => {
  return (
    <div className=" w-full pl-12 pr-12 h-full py-20">
      <div className="flex justify-center pb-10">
        <img src={Logo} alt="Logo OdontoSoft" />
      </div>

      <h2 className="text-4xl font-bold mb-6">Crie sua conta</h2>
      <p className="text-sm text-gray-700 mb-8">
        Já possui uma conta?{" "}
        <span onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
          Faça login para acessar o sistema.
        </span>
      </p>

      <form>
        <div className="mb-4 relative">
          <FiUser className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="text"
            id="name"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite seu nome..."
          />
        </div>

        <div className="mb-4 relative">
          <FiPhone className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="text"
            id="phone"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite seu telefone..."
          />
        </div>

        <div className="mb-4 relative">
          <FiMail className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="email"
            id="email"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite seu melhor email..."
          />
        </div>

        <div className="mb-4 relative">
          <FiLock className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="password"
            id="password"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Crie sua senha..."
          />
        </div>

        <div className="mb-4 relative">
          <FiLock className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="password"
            id="confirmPassword"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite novamente sua senha..."
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p>
            Ao criar sua conta, você declara que concorda com os{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Termos de Serviço.
            </span>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
