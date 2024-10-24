import { Carousel } from "flowbite-react";
import imlog1 from "../assets/imlog1.png";
import imlog2 from "../assets/imlog2.png";
import imlog3 from "../assets/imlog3.png";
import imlog4 from "../assets/imlog4.png";
import imlog5 from "../assets/imlog5.png";
import FormRegister from "../components/FormRegister";


const Register = () => {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-teal-50 to-green-100 justify-center items-center">
      {/* Aqui aumentamos o tamanho máximo para 'max-w-8xl' */}
      <div className="bg-white w-full  max-w-screen-2xl h-5/6  shadow-lg rounded-3xl flex">

        {/* Esquerda: Carrossel */}
        <div className="w-1/2 rounded-3xl p-5">
          <Carousel>
            <img
              src={imlog1}
              className="object-cover w-full h-full"
              alt="Imagem 1"
            />
            <img
              src={imlog2}
              className="object-cover w-full h-full"
              alt="Imagem 2"
            />
            <img
              src={imlog3}
              className="object-cover w-full h-full"
              alt="Imagem 3"
            />
            <img
              src={imlog4}
              className="object-cover w-full h-full"
              alt="Imagem 4"
            />
            <img
              src={imlog5}
              className="object-cover w-full h-full"
              alt="Imagem 5"
            />
          </Carousel>
        </div>

        {/* Direita: Formulário de Login */}
        <div className="w-1/2 p flex justify-center items-center">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
