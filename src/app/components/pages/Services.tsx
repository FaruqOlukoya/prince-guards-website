import {
  Shield,
  Users,
  Star,
  Eye,
  Building,
  UserCheck,
  Camera,
  Clock,
} from "lucide-react";
import { Link } from "react-router";

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3080] via-[#2a47a8] to-[#1e3080] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive security solutions designed to
              protect what matters most. From manned guarding to
              advanced surveillance, we have the expertise to
              keep you safe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Manned Guarding */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 text-white">
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#1e3080]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Manned Guarding
                </h2>
                <p className="text-gray-300">
                  Professional on-site security personnel
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Our highly trained security officers provide
                  visible deterrence and immediate response to
                  any security concerns. Perfect for retail
                  locations, corporate offices, residential
                  complexes, and construction sites.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      24/7 on-site presence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Access control and visitor management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Regular patrols and inspections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Incident reporting and documentation
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Event Security */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 text-white">
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-[#1e3080]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Event Security
                </h2>
                <p className="text-gray-300">
                  Specialized teams for events of all sizes
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  From intimate gatherings to large-scale
                  concerts and conferences, our event security
                  teams ensure smooth operations while
                  maintaining a safe environment for all
                  attendees.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Crowd management and control
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      VIP and artist protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Entry and exit management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Emergency response planning
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VIP Protection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 text-white">
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#1e3080]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  VIP Protection
                </h2>
                <p className="text-gray-300">
                  Elite close protection services
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Our VIP protection specialists provide
                  discreet, professional security for
                  high-profile individuals, executives, and
                  celebrities. We ensure your safety without
                  compromising your lifestyle.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Personal bodyguard services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Secure transportation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Threat assessment and planning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Residential security
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Surveillance & Monitoring */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 text-white">
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-[#1e3080]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Surveillance & Monitoring
                </h2>
                <p className="text-gray-300">
                  Advanced security technology
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  State-of-the-art surveillance systems with
                  24/7 monitoring capabilities. Our control
                  center provides real-time oversight and rapid
                  response to any security incidents.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      CCTV installation and monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Remote monitoring services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Alarm response and verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1e3080]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Video analytics and reporting
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized solutions for unique security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] transition-colors">
              <Building className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-semibold text-[#1e3080] mb-2">
                Corporate Security
              </h3>
              <p className="text-sm text-gray-600">
                Tailored security programs for corporate
                environments
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] transition-colors">
              <UserCheck className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-semibold text-[#1e3080] mb-2">
                Security Consulting
              </h3>
              <p className="text-sm text-gray-600">
                Expert advice on security planning and risk
                assessment
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] transition-colors">
              <Camera className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-semibold text-[#1e3080] mb-2">
                Mobile Patrols
              </h3>
              <p className="text-sm text-gray-600">
                Regular security patrols for multiple locations
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-[#d4af37] transition-colors">
              <Clock className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-semibold text-[#1e3080] mb-2">
                Emergency Response
              </h3>
              <p className="text-sm text-gray-600">
                Rapid deployment teams for urgent situations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3080] via-[#2a47a8] to-[#1e3080] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your security needs and
            receive a customized solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] text-[#1e3080] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8941f] transition-all shadow-lg"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}