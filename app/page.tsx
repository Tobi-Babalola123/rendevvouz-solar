"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  Menu,
  X,
  Star,
  Zap,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold text-primary">
                Rendezvous Solar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-accent transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-accent transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-accent transition"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent transition"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("quote")}
                className="bg-accent text-white hover:bg-accent/90"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("quote")}
                className="w-full bg-accent text-white hover:bg-accent/90"
              >
                Get Free Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
              Power Your Home & Business With Reliable Solar Energy Solutions
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed text-balance">
              Professional solar installations, inverter systems, battery
              storage and energy consulting trusted by homes and businesses
              across Lagos and beyond.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">
                  Serving Nigeria Since 2018
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">Certified Installers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">
                  Residential & Commercial Projects
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("quote")}
                className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg"
              >
                Get Free Quote
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-primary text-white hover:bg-primary/5 px-8 hover:text-primary py-6 text-lg"
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <Image
              src="/hero-solar.png"
              alt="Solar panel installation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-primary text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">100+</div>
                <p className="text-white/80 mt-2">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold">7+</div>
                <p className="text-white/80 mt-2">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold">95%</div>
                <p className="text-white/80 mt-2">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            Why Choose Rendezvous Solar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Certified Experts",
                desc: "Highly trained and certified solar professionals",
              },
              {
                icon: Zap,
                title: "Quality Equipment",
                desc: "Premium solar panels and equipment suppliers",
              },
              {
                icon: Clock,
                title: "Warranty Protection",
                desc: "10-year warranty on all installations",
              },
              {
                icon: Phone,
                title: "Ongoing Support",
                desc: "24/7 customer support and maintenance",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition"
              >
                <item.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Solar Panel Installation",
                desc: "Professional installation of high-efficiency solar panels for your home or business",
              },
              {
                title: "Inverter Installation",
                desc: "Advanced inverter systems to convert solar energy efficiently",
              },
              {
                title: "Battery Storage Solutions",
                desc: "Store energy for use during night or cloudy days",
              },
              {
                title: "Commercial Solar Systems",
                desc: "Large-scale solar solutions for businesses and industrial facilities",
              },
              {
                title: "Energy Audits",
                desc: "Comprehensive assessment of your energy needs and usage",
              },
              {
                title: "Solar Maintenance",
                desc: "Regular maintenance and support for optimal performance",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition"
              >
                <Zap className="text-accent mb-4" size={28} />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-4">{service.desc}</p>
                <Button className="w-full bg-accent/20 text-accent hover:bg-accent/30">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Solar Installation",
                location: "Lekki, Lagos",
                capacity: "5kW System",
                img: "/project-lekki.png",
              },
              {
                title: "Commercial Solar Installation",
                location: "Ikeja, Lagos",
                capacity: "25kW System",
                img: "/project-ikeja.png",
              },
              {
                title: "School Solar Project",
                location: "Ogun State",
                capacity: "15kW System",
                img: "/project-ogun.png",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-lg transition group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-accent" />
                      {project.capacity}
                    </div>
                  </div>
                  <p className="mt-4 text-foreground/70">
                    Professional solar installation providing reliable renewable
                    energy solution for this property.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Consultation",
                desc: "Discuss your energy needs and goals",
              },
              {
                step: 2,
                title: "Site Assessment",
                desc: "Professional evaluation of your property",
              },
              {
                step: 3,
                title: "Installation",
                desc: "Expert installation by certified team",
              },
              {
                step: 4,
                title: "Ongoing Support",
                desc: "Continuous monitoring and maintenance",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.desc}</p>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-6 -right-6 w-12 h-1 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Chioma Adeyemi",
                location: "Lagos",
                text: "Rendezvous Solar transformed my home. My electricity bills have reduced by 80% and the installation was smooth and professional.",
                rating: 5,
              },
              {
                name: "Tunde Okonkwo",
                location: "Abuja",
                text: "Excellent service and quality installation. The team was professional, punctual, and the system works perfectly.",
                rating: 5,
              },
              {
                name: "Amara Nwosu",
                location: "Port Harcourt",
                text: "Best decision for my business. The commercial system installed by Rendezvous has been reliable and cost-effective.",
                rating: 5,
              },
              {
                name: "Seun Adebayo",
                location: "Lagos",
                text: "Outstanding customer service and technical expertise. They answered all my questions and provided great support.",
                rating: 5,
              },
              {
                name: "Ife Olayinka",
                location: "Ibadan",
                text: "Professional team, quality products, and excellent warranty support. Highly recommended for solar installations.",
                rating: 5,
              },
              {
                name: "Kunle Ademiluyi",
                location: "Lagos",
                text: "Rendezvous Solar provided complete transparency in pricing and excellent after-sales support. Very satisfied.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-border text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-foreground/70">Based on 100+ customer reviews</p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 bg-primary text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-balance">
            Get My Free Solar Assessment
          </h2>

          <form className="bg-primary/80 p-8 rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:border-accent"
              />
              <input
                type="text"
                placeholder="Location"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent">
                <option value="" className="text-primary">
                  Property Type
                </option>
                <option value="residential" className="text-primary">
                  Residential
                </option>
                <option value="commercial" className="text-primary">
                  Commercial
                </option>
                <option value="industrial" className="text-primary">
                  Industrial
                </option>
              </select>
              <input
                type="text"
                placeholder="Monthly Electricity Cost (₦)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:border-accent"
              />
            </div>

            <Button className="w-full bg-accent text-primary hover:bg-accent/90 py-6 text-lg font-semibold">
              Get My Free Solar Assessment
            </Button>
          </form>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-balance">
            Service Areas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Lagos", "Ogun", "Ibadan", "Abuja", "Port Harcourt"].map(
              (area) => (
                <div
                  key={area}
                  className="bg-white border-2 border-primary p-6 rounded-lg text-center hover:bg-primary hover:text-white transition cursor-pointer"
                >
                  <MapPin className="mx-auto mb-2 text-accent" size={24} />
                  <p className="font-semibold">{area}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready To Reduce Your Electricity Bills?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have switched to solar
            energy and reduced their electricity costs significantly.
          </p>
          <Button
            onClick={() => scrollToSection("quote")}
            className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg"
          >
            Request A Free Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Zap className="text-black" size={20} />
                </div>
                <span className="text-white font-bold">Rendezvous Solar</span>
              </div>
              <p className="text-sm">
                Professional solar energy solutions for Nigeria.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-accent transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-accent transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-accent transition"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>+234 (0) 123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>info@rendezvous-solar.com</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-accent/20 rounded hover:bg-accent hover:text-black transition flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 bg-accent/20 rounded hover:bg-accent hover:text-black transition flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaTwitter size={14} />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 bg-accent/20 rounded hover:bg-accent hover:text-black transition flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={14} />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 bg-accent/20 rounded hover:bg-accent hover:text-black transition flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>&copy; 2024 Rendezvous Solar. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
