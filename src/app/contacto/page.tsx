"use client";

export default function Contacto() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 animate-slideUp">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Contáctanos</h1>
        <p className="text-gray-300 text-center mb-8">
          ¿Listo para digitalizar tu negocio? Escríbenos y empecemos juntos.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Tu Nombre
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Tu Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Asunto
            </label>
            <div className="mt-1">
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Tu Mensaje
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-400">
          También escríbenos a: <a href="mailto:jorjai.digitalizaciones@gmail.com" className="font-medium text-blue-400 hover:text-blue-300">jorjai.digitalizaciones@gmail.com</a>
        </p>
        <div className="mt-4 text-center">
          <a href="https://wa.me/56930973700" target="_blank" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all">WhatsApp: +569 30973700</a>
        </div>
      </div>
    </div>
  );
}