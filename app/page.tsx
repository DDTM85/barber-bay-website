'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTop / docHeight > 0.8 && !dismissed) {
        setShowModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, phone });
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setDismissed(true);
    }, 3000);
  };

  const handleClose = () => {
    setShowModal(false);
    setDismissed(true);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Barber Bay logo" className="h-12 md:h-16 w-auto" />
          <div className="flex gap-8 text-sm font-medium items-center flex-wrap justify-end">
            <a href="#benefits" className="hover:text-blue-600 transition">Why Us</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#barbers" className="hover:text-blue-600 transition">Team</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <div className="flex gap-4 items-center">
              <a href="https://wa.me/97455553333" target="_blank" className="hover:opacity-75 transition" title="WhatsApp">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
            <a
              href="tel:+97451856566"
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <img src="/logo.png" alt="Barber Bay logo" className="h-[432px] w-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            Barber Bay
          </h1>
          <p className="text-xl text-gray-600 mb-6">West Bay's Premier Barbershop</p>
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="text-red-600 text-2xl font-bold">5.0★</span>
            <span className="text-gray-600 text-lg">330 Reviews</span>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Located in the heart of West Bay with stunning views. A garden oasis atmosphere where precision grooming meets exceptional hospitality.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+97451856566"
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition inline-block"
            >
              Call to Book
            </a>
            <a
              href="https://maps.app.goo.gl/wyPFm36CQh3jCaod6"
              target="_blank"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition inline-block"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-8 bg-white border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-blue-900 text-center">Why Barber Bay</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Prime Location</h3>
              <p className="text-gray-600">Heart of West Bay with easy access and stunning surroundings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Garden Oasis</h3>
              <p className="text-gray-600">Serene, relaxing atmosphere perfect for unwinding</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Late Hours</h3>
              <p className="text-gray-600">Open late to fit your schedule—convenient access anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Classic Haircut", desc: "Precision cuts with expert fade work" },
              { title: "Beard Trim & Shape", desc: "Professional beard sculpting and conditioning" },
              { title: "Full Shave", desc: "Traditional hot towel shave with meticulous care" },
              { title: "Head Shave", desc: "Clean, smooth head shaving" },
              { title: "Hair Styling", desc: "Modern styling techniques for any look" },
              { title: "Grooming Package", desc: "Complete grooming for special occasions" },
            ].map((service) => (
              <div key={service.title} className="p-6 bg-white rounded-lg border border-blue-200 hover:border-red-400 transition shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Promise */}
      <section className="py-20 px-8 bg-white border-t border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 text-center">Our Hygiene Promise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-blue-900 mb-2">Deep Disinfection</h3>
              <p className="text-gray-600">All tools sterilized between every client</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-blue-900 mb-2">Single-Use Towels</h3>
              <p className="text-gray-600">Fresh, clean towels for every appointment</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-blue-900 mb-2">Protective Gloves</h3>
              <p className="text-gray-600">Professional safety standards for all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Barbers */}
      <section id="barbers" className="py-20 px-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-blue-900 text-center">Meet the Barbers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/owners.png" alt="Barber" className="w-full rounded-lg shadow-lg mb-4 h-64 object-cover" />
            </div>
            <div className="text-center">
              <img src="/barber-cutting.png" alt="Barber" className="w-full rounded-lg shadow-lg mb-4 h-64 object-cover" />
            </div>
            <div className="text-center">
              <img src="/barber2.png" alt="Barber" className="w-full rounded-lg shadow-lg mb-4 h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-8 bg-white border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 text-center">The Space</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/barberbay-shop.png" alt="Barber Bay shop interior" className="w-full h-80 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/barbers-tools.png" alt="Professional barber tools" className="w-full h-80 object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 text-center">What Customers Say</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div id="testimonial-carousel" className="flex transition-transform duration-500">
                {[
                  {
                    text: "Truly excellent experience. Modern, clean, welcoming atmosphere with highly skilled barbers where you can really feel the quality of the service. Great location next to City Center Mall, easy parking, and a peaceful garden setting.",
                    author: "Verified Customer"
                  },
                  {
                    text: "Top-class barbers who are friendly, professional and attentive. They really care about their work and about the client. Easy-to-reach location, big parking area, and a nice view while waiting.",
                    author: "Mohamed & Erhan - Customer"
                  },
                  {
                    text: "Exceptional and highly professional barber with extreme hygiene standards. Equipment disinfected on the spot, single-use towels, gloves throughout. Highly recommend asking for Erhan.",
                    author: "Hygiene-Focused Customer"
                  },
                  {
                    text: "The best barbers in Doha. Professional, friendly, experienced with superb customer service. I'm a returning client and you won't be disappointed!",
                    author: "Repeat Customer"
                  },
                  {
                    text: "Amazing service and haircuts. Memet is the best.",
                    author: "Memet - Customer"
                  }
                ].map((review, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-12 rounded-lg border border-blue-200">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-red-600 text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                        "{review.text}"
                      </p>
                      <p className="font-semibold text-blue-900">{review.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => {
                const carousel = document.getElementById('testimonial-carousel');
                if (carousel) {
                  const width = (carousel.children[0] as HTMLElement).offsetWidth;
                  carousel.parentElement!.scrollLeft -= width;
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-10"
            >
              ◀
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('testimonial-carousel');
                if (carousel) {
                  const width = (carousel.children[0] as HTMLElement).offsetWidth;
                  carousel.parentElement!.scrollLeft += width;
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-10"
            >
              ▶
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  const carousel = document.getElementById('testimonial-carousel');
                  if (carousel) {
                    const width = (carousel.children[0] as HTMLElement).offsetWidth;
                    carousel.parentElement!.scrollLeft = idx * width;
                  }
                }}
                className="w-3 h-3 rounded-full bg-blue-300 hover:bg-blue-600 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-blue-900 text-white border-t border-blue-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">Phone</p>
              <a href="tel:+97451856566" className="text-3xl font-bold hover:text-red-400 transition">
                +974 5185 6566
              </a>
            </div>
            <div>
              <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">Hours</p>
              <p className="text-blue-100"><strong>Mon-Thu:</strong> 10am–11pm</p>
              <p className="text-blue-100"><strong>Fri:</strong> 1pm–11pm</p>
              <p className="text-blue-100"><strong>Sat-Sun:</strong> 10am–11pm</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">Location</p>
              <address className="not-italic text-blue-100 mb-4">
                West Bay, Doha<br />
                Qatar
              </address>
              <a href="https://maps.app.goo.gl/P1AVaLVN8LdPvwxcA" target="_blank" className="text-red-400 hover:text-red-300 text-sm font-semibold transition">
                Get Directions →
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800">
            <a href="tel:+97451856566" className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Call Now
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://instagram.com" target="_blank" className="hover:opacity-75 transition" title="Instagram">
              <img src="/Inst.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://wa.me/97455553333" target="_blank" className="hover:opacity-75 transition" title="WhatsApp">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-blue-950 text-blue-300 text-sm text-center">
        <p>Barber Bay © 2026 | West Bay's Premier Barbershop</p>
      </footer>

      {/* Email/Phone Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Stay Connected</h3>
                <p className="text-gray-600 mb-6">Get special offers and updates from Barber Bay</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Get Updates
                  </button>
                </form>
                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-gray-500 hover:text-gray-700 text-sm"
                >
                  No thanks
                </button>
              </>
            ) : (
              <div className="text-center">
                <p className="text-green-600 font-semibold text-lg mb-2">✓ Thanks!</p>
                <p className="text-gray-600">We'll be in touch soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
