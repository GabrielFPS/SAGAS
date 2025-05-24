import { Link } from 'react-router-dom';

export const features = [
  { title: 'Rápido', description: 'Cargado al instante con React y Tailwind.' },
  { title: 'Responsivo', description: 'Se adapta perfectamente a todos los dispositivos.' },
  { title: 'Fácil de usar', description: 'Código limpio y fácil de mantener.' },
];

export const Features = () => {
  return (
    <>
      <div className="bg-gray-100 w-full">
        <div className="mx-auto px-3 max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto py-16 sm:py-24  lg:py-32">
            <h2 className="text-2xl titillium font-bold text-gray-900">Servicios y Productos</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-8 lg:gap-x-8">
              <div className="group relative">
                <img src="assets/polgrafo.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                  <h3 className="mt-6 text-sm titillium font-semibold">
                    <a href="#">
                      <span className="absolute inset-0 font-semibold"></span>
                      Poligráfia
                    </a>
                  </h3>
                  <p className="text-base titillium  text-gray-500 text-justify">Evaluaciones con tecnología de polígrafo para verificar la veracidad de información en procesos de selección, investigaciones internas o controles periódicos de confianza.</p>
              </div>
              <div className="group relative">
                <img src="assets/coach.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                  <h3 className="mt-6 titillium text-sm font-semibold">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Coaching y PNL
                    </a>
                  </h3>
                  <p className="text-base titillium  text-gray-500 text-justify">Programas personalizados de desarrollo profesional y personal que impulsan el liderazgo, la toma de decisiones y el rendimiento organizacional.</p>
              </div>
              <div className="group relative">
                <img src="assets/instrument.png" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                  <h3 className="titillium mt-6 text-sm font-semibold">
                    <a href="#">
                      <span className="absolute inset-0 font-semibold"></span>
                      Equipos certificados
                    </a>
                  </h3>
                  <p className="text-base titillium text-gray-500 text-justify">Comercialización de equipos especializados para seguridad, monitoreo, evaluación y diagnóstico, con asesoría técnica incluida.</p>
              </div>
               <div className="group relative">
                <img src="assets/consultoria_legal.png" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                  <h3 className="titillium mt-6 text-sm font-semibold">
                    <a href="#">
                      <span className="absolute inset-0 font-semibold"></span>
                      Consultoría legal
                    </a>
                  </h3>
                  <p className="text-base titillium text-gray-500 text-justify">Asesoría jurídica integral en materia laboral, corporativa y de cumplimiento normativo, adaptada a las necesidades de tu empresa.</p>
              </div>
               <div className="group relative">
                <img src="assets/rh.png" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                  <h3 className="titillium mt-6 text-sm font-semibold">
                    <a href="#">
                      <span className="absolute inset-0 "></span>
                      Consultoría en capital humano
                    </a>
                  </h3>
                  <p className="text-base titillium text-gray-500 text-justify ">Servicios estratégicos para la gestión del talento: reclutamiento, clima organizacional, capacitación y desarrollo de competencias.</p>
              </div>
            </div>
            <div className="flex item-center  text-center justify-center mt-10">
            <Link to="/contactenos" className="titillium inline-block rounded-lg  w-[250px] px-6 py-3 text-white bg-sky-600 font-semibold hover:underline hover:bg-purple-700 transition" >Contactenos</Link>
          </div>
          </div>
          
        </div>
      </div>

    </>
  );
};

