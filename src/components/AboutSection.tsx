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
            Macintech es una empresa SaaS especializada en consultoría tecnológica B2B. Ofrecemos soluciones integrales desde 
            arquitectura cloud hasta desarrollo de aplicaciones empresariales con integración de inteligencia artificial. 
            <span className="text-[#00C853]">Tu socio estratégico en transformación digital.</span>
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
              <h3 className="text-gray-900">Desarrollo SaaS</h3>
              <p className="text-gray-600 text-sm">Plataformas web modernas y aplicaciones SaaS escalables para empresas</p>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-600 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-gray-900">Inteligencia Artificial</h3>
              <p className="text-gray-600 text-sm">Integración de IA en aplicaciones empresariales y automatización de procesos</p>
            </div>
          </div>

          {/* B2B Services Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">Servicios B2B Especializados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-[#00C853] rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-gray-900">Consultoría Empresarial</h4>
                <p className="text-gray-600 text-sm">Asesoramiento tecnológico estratégico para empresas en crecimiento</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-gray-900">Soluciones Corporativas</h4>
                <p className="text-gray-600 text-sm">Sistemas integrados y plataformas personalizadas para grandes organizaciones</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-gray-900">Automatización IA</h4>
                <p className="text-gray-600 text-sm">Implementación de inteligencia artificial para optimizar procesos empresariales</p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">Tecnologías & Especialización</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="text-[#00C853] text-sm uppercase tracking-wide">Cloud & DevOps</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                    <span className="text-gray-900 text-sm">AWS & Azure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                    <span className="text-gray-900 text-sm">Kubernetes & Docker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
                    <span className="text-gray-900 text-sm">Terraform & IaC</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-500 text-sm uppercase tracking-wide">Bases de Datos</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">MongoDB & DynamoDB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">PostgreSQL & MySQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Redis & ElastiCache</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-purple-500 text-sm uppercase tracking-wide">Desarrollo</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">React & Node.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">TypeScript & Next.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Microservicios</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-yellow-500 text-sm uppercase tracking-wide">Inteligencia Artificial</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">OpenAI & LLMs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Automatización IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}