import { Separator } from "./ui/separator";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Dineros", url: "https://dineros.macintech.it.com" },
    { name: "PlayoffsPath", url: "https://playoffspath.com" },
    { name: "QuinielaMX", url: "https://quinielamx.netlify.app" }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "GitHub", url: "#", icon: "github" },
    { name: "Twitter", url: "#", icon: "twitter" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl">
              Macintech<span className="text-[#00C853]">.</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Consultoría especializada en arquitectura cloud, bases de datos y desarrollo de aplicaciones. 
              Tu socio tecnológico para soluciones escalables y seguras.
            </p>
            <div className="pt-4">
              <a 
                href="mailto:contact@macintech.it.com" 
                className="text-[#00C853] hover:text-[#00B848] transition-colors"
              >
                contact@macintech.it.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Aplicaciones</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Síguenos</h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors w-fit"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Macintech. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="mailto:contact@macintech.it.com" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}