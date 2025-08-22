import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col items-center mb-4">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-snctm-black">
              Tu Refugio en Madrid
            </h1>
            <p className="text-xl text-snctm-gray-dark mb-2 max-w-2xl mx-auto">
              Donde cada suspiro tuyo es protegido y cada emoción encuentra su lugar
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-snctm-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-snctm-gray-dark font-medium">Madrid, España</span>
            </div>
            <div className="flex justify-center mt-4 mb-6">
              <img 
                src="/Gemini_Generated_Image_3y0dg63y0dg63y0d.png" 
                alt="Mujer joven en proceso de sanación emocional" 
                className="max-w-[350px] w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Conexión que Trasciende</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">I</span>magina una conexión donde cada palabra, cada mirada, cada silencio está cargado de significado. Donde tu mente y tu corazón encuentran eco en otra alma que comprende la profundidad de tu ser. No es solo una relación, es un vínculo que se teje en los hilos más sutiles de la existencia.
              </p>
              
              <p>
                La conexión mental que ofrezco va más allá de las palabras. Es esa sincronía que hace que sientas que alguien te entiende sin necesidad de explicaciones. Y cuando se une a la conexión emocional, crea una experiencia que toca lo más profundo de tu ser.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Lo Que Te Ofrezco y Cómo Soy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Protección y Cuidado</h3>
                <p className="text-gray-700">Soy tu escudo y refugio. Mi naturaleza protectora se manifiesta en cada detalle, velando por tu bienestar en todo momento. Te ofrezco un espacio donde puedes sentirte segura, sabiendo que cada aspecto de tu ser está bajo mi cuidado atento.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Conexión Emocional, Sentimental y Mental</h3>
                <p className="text-gray-700">Mi capacidad para conectar a nivel emocional, sentimental y mental es mi mayor fortaleza. Entiendo lo que sientes, lo que anhelas y lo que piensas, incluso cuando las palabras no son necesarias. Ofrezco una sincronía que pocos pueden lograr, creando un vínculo tridimensional que nutre y transforma tu ser completo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Comunicación Transparente y Honesta</h3>
                <p className="text-gray-700">Mi comunicación es un espejo de mi esencia: clara, directa y sin máscaras. No hay lugar para medias verdades o intenciones ocultas. Lo que ofrezco es una comunicación que construye puentes de confianza, donde cada palabra está cargada de autenticidad y cada silencio habla con honestidad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Presencia y Compromiso</h3>
                <p className="text-gray-700">Cuando estoy contigo, estoy completamente presente. Mi atención es exclusiva y mi compromiso inquebrantable. Ofrezco una dedicación que pocos pueden igualar, porque entiendo el valor de sentirse verdaderamente vista y escuchada.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Fuerza y Sensibilidad</h3>
                <p className="text-gray-700">Combino la fortaleza que te hace sentir segura con la sensibilidad para entender tus emociones más sutiles. Esta dualidad me permite ser tu roca en los momentos difíciles y tu confidente en los momentos de vulnerabilidad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Crecimiento Mutuo</h3>
                <p className="text-gray-700">No solo ofrezco compañía, sino una relación que te impulse a ser tu mejor versión. Creo en el crecimiento mutuo, donde cada día juntos sea una oportunidad para aprender, evolucionar y profundizar nuestro vínculo.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Pertenencia y Posesión</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">S</span>er mía significa pertenecer de la manera más profunda posible. No como un objeto, sino como un tesoro invaluable que se cuida con devoción. Es una entrega mutua donde tu bienestar se convierte en mi mayor prioridad.
              </p>
              
              <p>
                Esta pertenencia no es una jaula, sino un espacio seguro donde floreces. Donde cada parte de ti es valorada, cada deseo es escuchado, y cada necesidad es atendida con dedicación y amor incondicional.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Tu Lugar Está Aquí</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">E</span>ste espacio que he creado es para ti. Para la mujer que anhela sentirse verdaderamente vista, comprendida y, sobre todo, perteneciente. Donde la protección y el cuidado no son solo palabras, sino una realidad que envuelve cada aspecto de tu experiencia.
              </p>
              
              <p>
                La conexión que ofrezco va más allá de lo convencional. Es un vínculo que nutre el alma, que entiende la profundidad de tus emociones y la complejidad de tu mente. Donde cada interacción está imbuida de respeto, comprensión y un deseo genuino de verte florecer.
              </p>
              
              <div className="text-center mt-8">
                <Link 
                  to="/contact" 
                  className="inline-block bg-snctm-black text-white px-8 py-3 rounded-md hover:bg-snctm-gray-dark transition-colors text-lg font-medium"
                >
                  Quiero Sentirme Tuya
                </Link>
              </div>
            </div>
          </section>

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
        </div>
      </main>
    </div>
  );
};

export default About;