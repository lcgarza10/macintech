export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-[#00C853] mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Macintech es tu socio estratégico en transformación digital. Ofrecemos consultoría especializada en arquitectura de software, 
            optimización de bases de datos en la nube y desarrollo de aplicaciones de clase empresarial. 
            <span className="text-[#00C853]">Soluciones escalables que impulsan el crecimiento sostenible.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#00C853] rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#00B848] transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-gray-900">Arquitectura Cloud</h3>
              <p className="text-gray-600 text-sm">Diseño e implementación de arquitecturas escalables en AWS, Azure y GCP</p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-gray-900">Bases de Datos</h3>
              <p className="text-gray-600 text-sm">Optimización y migración de bases de datos NoSQL y relacionales en la nube</p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-purple-600 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-gray-900">Desarrollo Web</h3>
              <p className="text-gray-600 text-sm">Aplicaciones web modernas con React, Node.js y tecnologías de última generación</p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-600 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-gray-900">Apps Móviles</h3>
              <p className="text-gray-600 text-sm">Desarrollo nativo y multiplataforma para iOS y Android</p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">Áreas de Especialización</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                  <span className="text-gray-900">Microservicios & APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                  <span className="text-gray-900">DevOps & CI/CD</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                  <span className="text-gray-900">Containerización</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-900">MongoDB & DynamoDB</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-900">PostgreSQL & MySQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-900">Redis & ElastiCache</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-900">AWS & Azure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-900">Kubernetes & Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-900">Terraform & IaC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}