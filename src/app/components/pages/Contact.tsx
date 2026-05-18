import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2349011187971";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Prince Guards! I'd like to enquire about your services.`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone || "Not provided"}`,
      `*Service Needed:* ${formData.service || "Not specified"}`,
      ``,
      `*Message:*`,
      formData.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Maps embed for 125 Mumuni Adio Badmus Way Ijegun, Satellite Town, Lagos
  const mapSrc =
    "https://maps.google.com/maps?q=ijegun+satellite+town+lagos+nigeria&output=embed&iwloc=near&z=15";

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3080] via-[#2a47a8] to-[#1e3080] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about our services? Fill in the form below and we'll
              connect with you directly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-[#1e3080]">Contact Information</h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3080] mb-1">Phone</h3>
                  <p className="text-gray-600">+2349011187971</p>
                  <p className="text-sm text-gray-500">Mon–Sun, 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3080] mb-1">Email</h3>
                  <p className="text-gray-600 break-all">theprinceguards@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3080] mb-1">Office Location</h3>
                  <p className="text-gray-600">125 Mumuni Adio Badmus Way Ijegun,</p>
                  <p className="text-gray-600">Satellite Town,</p>
                  <p className="text-gray-600">Lagos, Nigeria.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3080] to-[#2a47a8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3080] mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday – Friday: 8am – 6pm</p>
                  <p className="text-gray-600">Emergency: 24/7 Available</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1e3080] to-[#2a47a8] p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-2 text-lg">Emergency Hotline</h3>
                <p className="text-3xl font-bold text-[#d4af37] mb-2">+234 901 118 7971</p>
                <p className="text-sm text-gray-300">Available 24/7 for urgent security needs</p>
              </div>
            </div>

            {/* WhatsApp Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  <h2 className="text-2xl font-bold text-[#1e3080]">Send Us a Message</h2>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in the form below — clicking <strong>Send on WhatsApp</strong> will open
                  a pre-filled WhatsApp chat with our team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1e3080] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1e3080] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#1e3080] mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select a service…</option>
                        <option>Manned Guarding</option>
                        <option>Event Security</option>
                        <option>VIP Protection</option>
                        <option>Surveillance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1e3080] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your security needs…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1e3080] to-[#2a47a8] hover:from-[#2a47a8] hover:to-[#1e3080] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              125 Mumuni Adio Badmus Way Ijegun, Satellite Town, Lagos, Nigeria
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 border border-gray-200">
            <iframe
              title="Prince Guards Office Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3080] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly can you respond to an emergency?",
                a: "Our emergency response teams are available 24/7 and can typically arrive on-site within 15–30 minutes depending on your location.",
              },
              {
                q: "Are your security personnel licensed and insured?",
                a: "Yes, all our security professionals are fully licensed, bonded, and insured. They undergo rigorous background checks and continuous training.",
              },
              {
                q: "Can you provide security for short-term events?",
                a: "Absolutely! We offer flexible security solutions for events ranging from single-day conferences to multi-week festivals and everything in between.",
              },
              {
                q: "Do you offer free security assessments?",
                a: "Yes, we provide complimentary security assessments to help identify your specific needs and recommend the most effective solutions.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-[#1e3080] mb-2 text-lg">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
