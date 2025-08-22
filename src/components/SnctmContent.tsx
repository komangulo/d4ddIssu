import React from 'react';
import { Link } from 'react-router-dom';

export const SnctmContent: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-12 pb-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-snctm-black leading-tight">
          Imagina un Refugio Donde Cada Suspiro<br/>Te Hace Sentir Viva
        </h1>
        
        <h2 className="text-xl md:text-2xl text-snctm-gray-dark mb-8 max-w-3xl mx-auto leading-relaxed">
          Un lugar donde la intensidad de tus emociones encuentra su hogar, donde cada mirada, cada palabra, cada instante está cargado de una conexión que trasciende lo común.
        </h2>
        
        <div className="flex justify-center gap-4 mt-12">
          <Link 
            to="/contact" 
            className="bg-snctm-black text-white px-8 py-3 rounded-md hover:bg-snctm-gray-dark transition-colors"
          >
            Comenzar Ahora
          </Link>
          <Link 
            to="/about" 
            className="border border-snctm-black text-snctm-black px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Conócenos
          </Link>
        </div>
        
        <div className="mt-12 max-w-xl mx-auto flex justify-center">
          <img 
            src="/Gemini_Generated_Image_o8xi3to8xi3to8xi.png" 
            alt="Mujer joven sintiéndose empoderada y segura" 
            className="max-w-full h-auto max-h-[350px] object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16 max-w-3xl mx-auto">
        {/* Understanding Your Journey */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Sé Lo Que <span className="text-snctm-black">Tu Corazón Anhela</span></h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">E</span>se vacío que llevas dentro, esa sed de ser vista, comprendida, deseada... lo conozco. Es como un fuego que arde en tu pecho, una llamada silenciosa que nadie más parece escuchar. No es solo amor lo que buscas, es la intensidad de una conexión que te haga sentir viva, que te haga sentir que por fin has llegado a casa.
            </p>
            
            <p className="italic text-gray-700 border-l-4 border-snctm-black pl-4 py-2">
              "Si alguna vez has sentido que tu corazón late más fuerte cuando imaginas ser la única en sus pensamientos, cuando anhelas esa mirada que te desnuda el alma... entonces sabes de lo que hablo."
            </p>
            
            <p>
              Aquí no juzgamos ese anhelo. Lo entendemos. Lo celebramos. Porque mereces experimentar esa pasión, esa entrega total, ese vínculo que va más allá de lo físico para tocar las fibras más profundas de tu ser.
            </p>
          </div>
        </section>

        {/* How I Can Help You */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Tu Viaje Hacia La <span className="text-snctm-black">Plenitud Emocional</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-snctm-black">La Conexión Que Siempre Soñaste</h3>
              <p className="text-gray-700">
                Imagina por un momento que cada palabra que pronuncias es escuchada con atención, cada emoción es recibida con comprensión. Hombres que no solo te desean, sino que anhelan ser tu refugio, tu roca, tu confidente en las noches más oscuras.
              </p>
            </div>
            
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-snctm-black">Un Vínculo Que Te Haga Estremecer</h3>
              <p className="text-gray-700">
                No se trata solo de compañía. Es esa chispa eléctrica que recorre tu espalda cuando sientes que alguien te entiende de verdad. Es la seguridad de saber que, por primera vez, no tienes que explicarte. Simplemente... eres.
              </p>
            </div>
            
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-snctm-black">Protección Sin Jaulas</h3>
              <p className="text-gray-700">
                La verdadera protección no limita, empodera. Aquí aprenderás a distinguir entre el control y el cuidado genuino. A reconocer cuando alguien quiere poseer tu corazón, no dominar tu alma. Tu seguridad es sagrada, y así la tratamos.
              </p>
            </div>
            
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-snctm-black">La Intensidad Que Mereces</h3>
              <p className="text-gray-700">
                No hay nada de malo en anhelar pasión, en desear ser el centro de los pensamientos de alguien. Aquí no juzgamos esos deseos. Los celebramos. Porque mereces experimentar esa intensidad que hace que el mundo desaparezca cuando están juntos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-snctm-black to-snctm-gray-dark text-white rounded-lg p-8 shadow-xl">
          <h2 className="text-4xl font-bold mb-6">¿Lista Para Dejar de Imaginar<br/>Y Empezar a Sentir?</h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            El amor que anhelas no es una fantasía. La conexión que buscas existe. La seguridad que necesitas está al alcance de tu mano.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              to="/contact" 
              className="bg-white text-snctm-black px-10 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Quiero Vivir Esta Experiencia
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-lg"
            >
              Cuéntame Más
            </Link>
          </div>
          
          <p className="text-sm text-gray-300 mt-6 max-w-md mx-auto">
            Da el primer paso hacia la conexión que tu corazón siempre ha anhelado. Sin compromisos, sin presiones. Solo la posibilidad de encontrar lo que siempre has deseado.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-24 h-px bg-snctm-gray-light"></div>
        </div>

        {/* SEO Keywords Section - Hidden from view but helps with SEO */}
        <div className="hidden">
          <p>daddy issues, problemas con el padre, herida paterna, complejo de Electra, síntomas de daddy issues, 
          cómo sanar daddy issues, efectos de la ausencia paterna, relación padre-hija tóxica, inseguridad en relaciones 
          por falta de padre, miedo al abandono en relaciones, buscar validación masculina, patrones de relación poco 
          saludables, psicología de la figura paterna, terapia para superar daddy issues, hombres maduros, diferencia de 
          edad en parejas, relaciones con diferencia de edad, búsqueda de figura paterna, necesidad de protección masculina, 
          seguridad emocional, apego inseguro, relaciones de dependencia emocional, sanación de la herida paterna, 
          autoestima y relaciones, patrones de apego en relaciones, búsqueda de estabilidad emocional, relaciones 
          intergeneracionales, dinámicas de poder en pareja, necesidad de aprobación masculina</p>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-24 h-px bg-snctm-gray-light"></div>
        </div>

      </div>
    </main>
  );
};