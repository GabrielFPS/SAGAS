import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="mx-auto max-w-7xl  px-4 py-24 sm:px-6 lg:px-8 text-center items-center justify-center">
        <h1 className="text-4xl titillium font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Sagastume y Ramos 
        </h1>
        <p className="font-sans italic titillium font-medium text-[30px] mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Profesionales que generan confianza
        </p>
        <div className="mt-10 grid md:flex justify-center gap-4">
          <Link
            to="/servicios"
            className="titillium inline-block rounded-lg w-[250px] bg-blue-700 px-6 py-3 text-white font-semibold shadow hover:bg-purple-700 transition"
          >
            Ver nuestros servicios
          </Link>
          <Link
            to="/contactenos"
            className="titillium inline-block rounded-lg  w-[250px] px-6 py-3 text-white bg-sky-600 font-semibold hover:underline hover:bg-purple-700 transition"
          >
            Contactenos
          </Link>
        </div>
      </div>
    </div>
  );
};

