import React from 'react';

const FormLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Senha
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Não tem uma conta? <a href="#" className="text-blue-500 hover:underline">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
