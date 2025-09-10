import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play, Star, Users, Zap, Globe, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl text-white">
                Macintech<span className="text-[#00C853]">.</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Proyectos</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
              <Button 
                asChild
                size="sm"
                className="bg-[#00C853] hover:bg-[#00B848] text-white"
              >
                <a href="mailto:contact@macintech.it.com">Empezar</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C853] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00C853] to-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex items-center min-h-screen pt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-[#00C853]/20 text-[#00C853] border-[#00C853]/30">
                  <Star className="w-3 h-3 mr-1" />
                  Desarrollo Profesional
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Seguro
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Respuesta 24h
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl text-white tracking-tight leading-tight">
                  <span className="block">Arquitectura</span>
                  <span className="block text-[#00C853]">Cloud</span>
                  <span className="block">& Desarrollo</span>
                  <span className="block text-blue-400">Integral</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  Empresa SaaS especializada en soluciones B2B: consultoría cloud, desarrollo de aplicaciones empresariales 
                  e integración de inteligencia artificial. 
                  <span className="text-[#00C853]"> Tu socio tecnológico de confianza.</span>
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl text-[#00C853] mb-1">3+</div>
                  <div className="text-gray-400 text-sm">Apps Lanzadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-blue-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-yellow-400 mb-1">24h</div>
                  <div className="text-gray-400 text-sm">Respuesta</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[#00C853] hover:bg-[#00B848] text-white px-8 py-6 text-lg group"
                >
                  <a href="mailto:contact@macintech.it.com" className="flex items-center gap-2">
                    Empezar Proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-gray-600 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Ver Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">Confiado por empresas innovadoras</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">Alcance global</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-700">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MzcwMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Desarrollo de tecnología moderna"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 z-20 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl p-4 animate-bounce delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00C853] rounded-full animate-pulse"></div>
                  <div className="text-white text-sm">Sistema Online</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 z-20 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 animate-pulse">
                <div className="space-y-2">
                  <div className="text-[#00C853] text-2xl">+150%</div>
                  <div className="text-gray-300 text-sm">Crecimiento</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 z-20 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 animate-pulse delay-1000">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <div className="text-blue-400 text-sm">Ultra Rápido</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#00C853] rounded-2xl opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-ping delay-2000"></div>
              <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-3000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}