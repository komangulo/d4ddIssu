import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="snctm-title text-6xl mb-8 tracking-widest">
            HABLA CONMIGO
          </h1>
          <p className="snctm-subtitle text-lg mb-6 tracking-widest">
            Tu Voz es Importante
          </p>
          <div className="flex justify-center mb-12">
            <img 
              src="/unnamed (6).png" 
              alt="Decorative element" 
              className="max-w-56 h-auto"
            />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="snctm-body text-lg leading-relaxed text-center mb-8">
              Este es tu espacio, un lugar seguro donde cada palabra cuenta. ¿Tienes preguntas sobre cómo podemos crecer juntos? ¿Necesitas orientación en tu viaje emocional de mi mano? O simplemente quieres compartir cómo te sientes y sentir que alguien te escucha, le importa lo que dices y eres valorada en absolutamente todos los aspectos. 
              <br/><br/>
              Estoy aquí para escucharte pequeña.
              <br/><br/>
              Háblame y te responderé personalmente. Tu confianza es sagrada, y te responderé con respeto y confidencialidad.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/myzprjyp"
            method="POST"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="snctm-nav block mb-3 text-sm">
                  Nombre *
                </label>
                <Input 
                  name="name" 
                  required 
                  className="border-snctm-gray-light focus:border-snctm-black"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="snctm-nav block mb-3 text-sm">
                  Apellido *
                </label>
                <Input 
                  name="surname" 
                  required 
                  className="border-snctm-gray-light focus:border-snctm-black"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Teléfono *
              </label>
              <Input 
                type="tel"
                name="phone" 
                required 
                className="border-snctm-gray-light focus:border-snctm-black" 
                placeholder="+34 123 456 789"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Redes Sociales
              </label>
              <Input 
                type="text" 
                name="social_media"
                className="border-snctm-gray-light focus:border-snctm-black" 
                placeholder="@usuario"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Asunto *
              </label>
              <Input 
                name="subject" 
                required 
                className="border-snctm-gray-light focus:border-snctm-black"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Mensaje *
              </label>
              <Textarea 
                name="message" 
                required 
                rows={5}
                className="border-snctm-gray-light focus:border-snctm-black"
                placeholder="Cuéntame más sobre lo que necesitas..."
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
Mensaje *
              </label>
              <Textarea 
                name="message"
                required
                className="border-snctm-gray-light focus:border-snctm-black min-h-[150px]"
                placeholder="Por favor comparta su consulta o mensaje..."
              />
            </div>

            <div className="text-center pt-8">
              <button 
                type="submit"
                className="w-full max-w-xs mx-auto bg-black text-white px-12 py-3 rounded-md text-sm font-bold tracking-wider hover:bg-gray-900 transition-colors shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                ENVIAR MENSAJE
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="snctm-body text-sm text-snctm-gray-medium leading-relaxed">
              Para asuntos urgentes o consultas sobre membresías, también puede contactarnos a través de 
              nuestro portal privado para miembros. Todas las comunicaciones son tratadas con la máxima 
              confidencialidad y discreción.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;