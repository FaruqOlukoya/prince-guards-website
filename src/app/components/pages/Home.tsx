import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Link } from "react-router";
import {
  Shield,
  Eye,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import logoImg from "../../../imports/Prince_Guard_Logo__3_.png";
import heroImg from "../../../imports/photo_4.jpeg";

const WHATSAPP_NUMBER = "2349011187971";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const SERVICES = [
  {
    title: "Manned Guarding",
    desc: "Professional security personnel providing on-site protection and 24/7 surveillance at your premises.",
    img: "https://images.unsplash.com/photo-1652739758426-56a564265f9e?w=600&q=80",
  },
  {
    title: "Event Security",
    desc: "Specialized security teams for events of all sizes, ensuring smooth and safe operations throughout.",
    img: "https://images.unsplash.com/photo-1581568736305-49a04e012c13?w=600&q=80",
  },
  {
    title: "VIP Protection",
    desc: "Elite close protection services for high-profile individuals, executives, and dignitaries.",
    img: "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=600&q=80",
  },
  {
    title: "Surveillance",
    desc: "Advanced CCTV monitoring systems with 24/7 surveillance and rapid incident response.",
    img: "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=600&q=80",
  },
  {
    title: "Retail Security",
    desc: "Dedicated retail officers trained to prevent shoplifting and maintain a safe shopping environment.",
    img: "https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?w=600&q=80",
  },
  {
    title: "Construction Security",
    desc: "Round-the-clock protection for construction sites, preventing theft, vandalism, and unauthorised access.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Corporate Security",
    desc: "Comprehensive security solutions for offices, protecting staff, assets, and sensitive information.",
    img: "https://images.unsplash.com/photo-1641155049992-8cba3e42f632?w=600&q=80",
  },
  {
    title: "Bank & Court Escorts",
    desc: "Secure escort services for cash-in-transit, court appearances, and sensitive document transfers.",
    img: "https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?w=600&q=80",
  },
];

function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const next = useCallback(
    () => setActive((p) => (p + 1) % SERVICES.length),
    [],
  );
  const prev = useCallback(
    () =>
      setActive(
        (p) => (p - 1 + SERVICES.length) % SERVICES.length,
      ),
    [],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setActive((p) => (p + 1) % SERVICES.length),
      3000,
    );
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setActive((p) => (p + 1) % SERVICES.length),
      3000,
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };
  const handleDot = (i: number) => {
    setActive(i);
    resetTimer();
  };

  const indices = [
    (active - 1 + SERVICES.length) % SERVICES.length,
    active,
    (active + 1) % SERVICES.length,
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">
            Our Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to meet
            your unique needs
          </p>
        </div>

        <div className="relative px-8 md:px-12">
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {indices.map((idx, pos) => {
              const isActive = pos === 1;
              const svc = SERVICES[idx];
              return (
                <div
                  key={`${idx}-${pos}`}
                  onClick={() => handleDot(idx)}
                  className="cursor-pointer rounded-2xl overflow-hidden shadow-xl flex-shrink-0 transition-all duration-500"
                  style={{
                    width: isActive ? "300px" : "180px",
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? "none" : "blur(3px)",
                    transform: isActive
                      ? "scale(1.06)"
                      : "scale(0.9)",
                    zIndex: isActive ? 10 : 1,
                    transition:
                      "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      height: isActive ? "220px" : "160px",
                      transition: "height 0.5s",
                    }}
                  >
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3080]/90 via-[#1e3080]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-bold text-base leading-tight">
                        {svc.title}
                      </h3>
                    </div>
                    {isActive && (
                      <div className="absolute top-3 right-3 bg-[#d4af37] rounded-full w-3 h-3" />
                    )}
                  </div>
                  {isActive && (
                    <div className="bg-white p-4 border-t-4 border-[#d4af37]">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20 transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#1e3080" }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20 transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#1e3080" }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={SERVICES[i].title}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  active === i ? "#d4af37" : "#1e3080",
                opacity: active === i ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, duration = 800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

export function Home() {
  const { count, ref: counterRef } = useCountUp(7);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32"
        style={{ minHeight: "560px" }}
      >
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center md:bg-[center_25%]"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        />
        {/* Dark blue overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#1e3080]/75" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37] px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37]">
                Trusted Security Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Security You Can{" "}
              <span className="text-[#d4af37]">Trust</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protecting what matters most. Prince Guards
              delivers comprehensive security solutions with
              experienced professionals dedicated to your safety
              and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4af37] text-[#1e3080] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8941f] transition-all shadow-lg hover:shadow-xl text-center"
              >
                Contact Us
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1e3080] transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-6">
                Why Choose Prince Guards?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With decades of combined experience, we deliver
                unparalleled security services that protect your
                assets, people, and reputation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <CheckCircle className="w-6 h-6 text-[#d4af37]" />
                    ),
                    title: "Trusted & Reliable",
                    desc: "Industry-leading standards with fully licensed and vetted security professionals.",
                  },
                  {
                    icon: (
                      <Clock className="w-6 h-6 text-[#d4af37]" />
                    ),
                    title: "24/7 Availability",
                    desc: "Round-the-clock protection and support whenever you need it most.",
                  },
                  {
                    icon: (
                      <Star className="w-6 h-6 text-[#d4af37]" />
                    ),
                    title: "Proven Experience",
                    desc: "Over 15 years protecting businesses, events, and individuals across the region.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                        {icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e3080] mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo + Animated Counter */}
            <div
              className="relative flex justify-center lg:justify-end"
              ref={counterRef}
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Main logo card */}
                <div className="w-full h-full bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <ImageWithFallback
                    src={logoImg}
                    alt="Prince Guards logo"
                    className="w-56 h-56 object-contain drop-shadow-xl"
                  />
                </div>

                {/* Animated experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-[#1e3080] p-6 rounded-xl shadow-xl text-center min-w-[110px]">
                  <div className="text-5xl font-bold leading-none tabular-nums">
                    {count}+
                  </div>
                  <div className="text-xs font-semibold mt-1 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Banner */}
      <section className="bg-[#d4af37] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/contact"
            className="flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1e3080]/70 mb-1">
                Ready to work with us?
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3080]">
                Get In Touch With Prince Guards
              </h3>
            </div>
            <div className="flex-shrink-0 w-12 h-12 bg-[#1e3080] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight className="w-6 h-6 text-[#d4af37]" />
            </div>
          </Link>
        </div>
      </section>

      {/* Clients / Companies We Work For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-3">
              Some Companies We Work For
            </h2>
            <p className="text-lg text-gray-500">
              Trusted by leading organisations across Nigeria
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Medlog Transport Logistics",
                initials: "ML",
                color: "#1e3080",
                accent: "#d4af37",
                sub: "Transport & Logistics",
              },
              {
                name: "AKT",
                initials: "AKT",
                color: "#c0392b",
                accent: "#e74c3c",
                sub: "lighting Production",
              },
              {
                name: "Oriade Local Government",
                initials: "OLG",
                color: "#1a7a4a",
                accent: "#27ae60",
                sub: "Local Government",
              },
              {
                name: "Cranburg Construction",
                initials: "CC",
                color: "#e67e22",
                accent: "#f39c12",
                sub: "Construction",
              },
              {
                name: "Conterm Logistics",
                initials: "CTL",
                color: "#2c3e50",
                accent: "#3498db",
                sub: "Logistics",
              },
              {
                name: "Amarisel School",
                initials: "AS",
                color: "#16a085",
                accent: "#1abc9c",
                sub: "Education",
              },
              {
                name: "Wellmax Pharmacy",
                initials: "WP",
                color: "#8e44ad",
                accent: "#9b59b6",
                sub: "Healthcare",
              },
              {
                name: "Kidcity Lagos",
                initials: "KL",
                color: "#d35400",
                accent: "#e67e22",
                sub: "Entertainment",
              },
              {
                name: "La Paris Hotel",
                initials: "LPH",
                color: "#2c3e50",
                accent: "#34495e",
                sub: "Hospitality",
              },
            ].map(({ name, initials, color, accent, sub }) => (
              <div
                key={name}
                className="group bg-white border-2 border-gray-100 hover:border-[#d4af37] rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl"
              >
                {/* Logo badge */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${accent})`,
                  }}
                >
                  <span className="text-white font-black text-sm tracking-wide leading-none">
                    {initials}
                  </span>
                </div>
                <p className="font-bold text-[#1e3080] text-sm leading-tight mb-1">
                  {name}
                </p>
                <p className="text-xs text-gray-400">{sub}</p>
                {/* Gold underline on hover */}
                <div className="w-0 group-hover:w-8 h-0.5 bg-[#d4af37] mt-2 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3080] via-[#2a47a8] to-[#1e3080] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Peace of Mind?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and
                discover how Prince Guards can protect what
                matters most to you.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4af37] text-[#1e3080] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8941f] transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1e3080]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">
                      Call Us Now
                    </div>
                    <div className="text-lg font-semibold">
                      +23411187971
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1e3080]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">
                      Email Us
                    </div>
                    <div className="text-base font-semibold break-all">
                      theprinceguards@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1e3080]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">
                      Available
                    </div>
                    <div className="text-lg font-semibold">
                      24/7 Emergency Response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
