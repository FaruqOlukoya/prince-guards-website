import {
  Shield,
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import ceoImg from "../../../imports/WhatsApp_Image_2026-05-17_at_19.41.46.jpeg";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3080] via-[#2a47a8] to-[#1e3080] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Prince Guards
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Leading the industry in professional security
              services since 2019. Our commitment to excellence
              and client satisfaction has made us the trusted
              choice for businesses and individuals nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Prince Guards was established
                  with a simple yet powerful mission: to provide
                  world-class security services that prioritize
                  professionalism, reliability, and client
                  satisfaction above all else.
                </p>
                <p>
                  What started as a small team of dedicated
                  security professionals has grown into one of
                  the region's most trusted security service
                  providers. Our growth is a testament to our
                  unwavering commitment to excellence and the
                  strong relationships we've built with our
                  clients over the years.
                </p>
                <p>
                  Today, we serve a diverse range of clients
                  including corporate offices, retail
                  establishments, special events, and
                  high-profile individuals. Each assignment
                  receives the same level of dedication and
                  attention to detail that has become our
                  hallmark.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  7+
                </div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  500+
                </div>
                <div className="text-sm">Clients Served</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  1000+
                </div>
                <div className="text-sm">Events Secured</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  24/7
                </div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#d4af37]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3080] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional security services through
                highly trained professionals, cutting-edge
                technology, and a client-first approach. We
                strive to create safe environments where
                businesses thrive and individuals feel
                protected, ensuring peace of mind for all our
                clients.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#d4af37]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3080] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the premier security
                services provider, setting industry standards
                for professionalism, innovation, and
                reliability. We envision a future where security
                is seamlessly integrated with modern technology,
                providing unparalleled protection and peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3080] mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all
                our operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3080] mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Commitment to delivering superior service
                quality every time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3080] mb-3">
                Professionalism
              </h3>
              <p className="text-gray-600">
                Highly trained personnel dedicated to your
                security needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3080] mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Embracing technology to enhance security
                effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals committed to your
              security
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={ceoImg}
                  alt="Prince Taofeek Oba Olukoya - CEO"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3080]/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3080] mb-1">
                  Prince Taofeek Oba Olukoya
                </h3>
                <p className="text-[#d4af37] font-semibold mb-3">
                  Founder & CEO
                </p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of security industry
                  experience, Prince Taofeek leads our strategic vision
                  and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
