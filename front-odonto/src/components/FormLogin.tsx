
import Logo from "../assets/LogoOdontoSoft.png";
import { FiMail, FiLock } from "react-icons/fi";

interface FormLoginProps {
  toggleForm: () => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ toggleForm }) => {
  return (
    <div className=" w-full pl-12 pr-12 h-full py-20">
      <div className="flex justify-center pb-10">
        <img src={Logo} alt="Logo OdontoSoft" />
      </div>

      <h2 className="text-4xl font-bold mb-6">Login</h2>
      <p className="text-sm text-gray-700 mb-12">
        Boas vindas! Faça login para acessar o sistema.
      </p>
      <form>
        <div className="mb-4 relative">
          <FiMail className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="email"
            id="email"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite seu email..."
          />
        </div>
        <div className="mb-4 relative">
          <FiLock className="absolute left-3 top-3 text-blue-400" size={20} />
          <input
            type="password"
            id="password"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Digite sua senha..."
          />
        </div>
        <div className="mb-20 flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Mantenha-me conectado.</span>
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Esqueci minha senha.
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Ainda não possui acesso?{" "}
          <span onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
            Crie sua conta aqui.
          </span>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
