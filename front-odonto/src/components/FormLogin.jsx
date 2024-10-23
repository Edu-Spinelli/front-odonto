import React from 'react';

const FormLogin = () => {
  return (
    <div className="p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Digite seu email:</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
            placeholder="Digite seu email..."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Digite sua senha:</label>
          <input 
            type="password" 
            id="password" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
            placeholder="Digite sua senha..."
          />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" className="mr-2"/>
          <label htmlFor="remember" className="text-sm text-gray-700">Mantenha-me conectada</label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Esqueceu sua senha? <a href="#" className="text-blue-500 hover:underline">Clique aqui</a>
        </p>
        <p className="mt-4 text-center text-sm">
          Ainda não possui acesso? <a href="#" className="text-blue-500 hover:underline">Crie sua conta aqui</a>
        </p>
      </form>
    </div>
  );
}

export default FormLogin;
