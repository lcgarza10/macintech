import { Badge } from "./ui/badge";

export function CertificationsSection() {
  const certifications = [
    {
      name: "AWS Solutions Architect",
      category: "Arquitectura Cloud Empresarial",
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "AWS Cloud Practitioner", 
      category: "Fundamentos Cloud",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "MongoDB Certified",
      category: "Bases de Datos NoSQL",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Scrum Master",
      category: "Metodologías Ágiles",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const skills = [
    "Arquitectura de Microservicios",
    "Consultoría Cloud (AWS/Azure)",
    "Optimización de Bases de Datos",
    "DevOps & Infrastructure as Code", 
    "Kubernetes & Containerización",
    "MongoDB & PostgreSQL",
    "React, Node.js & TypeScript",
    "CI/CD & Automatización"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Certificaciones & Experiencia
          </h2>
          <div className="w-24 h-1 bg-[#00C853] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Certificaciones oficiales y experiencia comprobada en consultoría de arquitectura cloud, 
            optimización de bases de datos y desarrollo de soluciones empresariales escalables
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900 text-center lg:text-left">
              Certificaciones Oficiales
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#00C853] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#00C853] rounded-full"></div>
                      <span className="text-gray-900">{cert.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{cert.category}</p>
                  </div>
                  <Badge className={cert.color}>
                    Certificado
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900 text-center lg:text-left">
              Tecnologías & Competencias
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white text-sm py-2 px-4 transition-all cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl text-[#00C853] mb-2">3+</div>
                <div className="text-gray-600">Aplicaciones</div>
                <div className="text-gray-600 text-sm">Lanzadas</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl text-blue-500 mb-2">100%</div>
                <div className="text-gray-600">Uptime</div>
                <div className="text-gray-600 text-sm">Garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}