export default function Contact() {
  return (
    <div className="w-full bg-white text-white">
      {/* Header Section */}
      <div className="bg-white">
        <div className="absolute bg-white opacity-50"></div>
        <img
          src="assets/yellow.svg" // Coloca aquí tu imagen de fondo
          className="w-full h-[400px] object-contain"
        />
        
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 -mt-32 mb-20 z-10">
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-center text-[40px] mb-8">Contactenos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-sm">Nombre</label>
              <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" defaultValue="Bonnie" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Apellido</label>
              <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" defaultValue="Green" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Correo electronico</label>
              <input type="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" defaultValue="name@flowbite.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm">telefono de contacto</label>
              <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" defaultValue="+12 345 6789" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Mensaje</label>
            <textarea className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" placeholder="Leave a comment..." />
          </div>
          <p className="text-xs text-gray-400 mb-4">
            By submitting this form you agree to our <a href="#" className="text-blue-400 underline">terms and conditions</a> and our <a href="#" className="text-blue-400 underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">Enviar</button>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-800 py-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div>
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold mb-1">Email us:</h3>
            <p className="text-sm text-gray-400 mb-2">Email us for general queries, including marketing and partnership opportunities.</p>
            <p className="text-blue-400">info@sagastumeyramos.com.sv</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📞</div>
            <h3 className="font-semibold mb-1">Call us:</h3>
            <p className="text-sm text-gray-400 mb-2">Call us to speak to a member of our team. We are always happy to help.</p>
            <p className="text-blue-400">+503 2260 3389</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🧰</div>
            <h3 className="font-semibold mb-1">Support</h3>
            <p className="text-sm text-gray-400 mb-2">Email us for general queries, including marketing and partnership opportunities.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-sm rounded">Support center</button>
          </div>
        </div>
      </div>
    </div>
  );
}
