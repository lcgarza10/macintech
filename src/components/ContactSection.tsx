import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00C853] to-[#00B848]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-white">
              ¿Necesitas consultoría tecnológica?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Desde arquitectura cloud hasta desarrollo de aplicaciones. Hablemos sobre cómo podemos impulsar tu proyecto tecnológico
            </p>
          </div>

          <Card className="max-w-md mx-auto border-0 shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00C853] rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl text-gray-900">Contacto Directo</h3>
                <p className="text-gray-600">Escríbenos y te responderemos en menos de 24 horas</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <p className="text-gray-900 break-all">contact@macintech.it.com</p>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-[#00C853] hover:bg-[#00B848] text-white py-6 text-lg group"
                >
                  <a href="mailto:contact@macintech.it.com" className="flex items-center justify-center gap-2">
                    Escríbenos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white">Respuesta Rápida</h4>
              <p className="text-green-100 text-sm">En menos de 24 horas</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2v-6a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h4 className="text-white">Consulta Gratuita</h4>
              <p className="text-green-100 text-sm">Análisis inicial sin costo</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white">Garantía de Calidad</h4>
              <p className="text-green-100 text-sm">Desarrollo profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}