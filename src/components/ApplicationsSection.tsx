import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function ApplicationsSection() {
  const applications = [
    {
      name: "Dineros",
      description: "Gestión financiera personal inteligente",
      url: "https://dineros.macintech.it.com",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTczMTUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "PlayoffsPath", 
      description: "Plataforma de análisis deportivo profesional",
      url: "https://playoffspath.com",
      image: "https://images.unsplash.com/photo-1714865212999-a9817814b080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiZXR0aW5nJTIwYXBwfGVufDF8fHx8MTc1NzM3MDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "QuinielaMX",
      description: "App de predicciones deportivas mexicana",
      url: "https://quinielamx.netlify.app", 
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3MzY1MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Aplicaciones Desarrolladas
          </h2>
          <div className="w-24 h-1 bg-[#00C853] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos creado para impulsar negocios digitales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={app.image}
                  alt={`Screenshot de ${app.name}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl text-gray-900 group-hover:text-[#00C853] transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {app.description}
                  </p>
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white group"
                >
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visitar App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}