import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HGroupHomePage() {
  return (
    <div className="bg-gray-100 text-gray-900 scroll-smooth scroll-pt-[220px]">
      {/* Header with Logo and Navigation */}
      <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center">
        <div className="text-lg sm:text-xl font-bold">H-Group SARL</div>
        <nav className="space-x-6 font-medium hidden md:block">
          <a href="#about" className="hover:text-blue-300 transition duration-200">About</a>
          <a href="#expertise" className="hover:text-blue-300 transition duration-200">Expertise</a>
          <a href="#portfolio" className="hover:text-blue-300 transition duration-200">Portfolio</a>
          <a href="#contact" className="hover:text-blue-300 transition duration-200">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1713799159280-5e879d00fdee?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl max-w-3xl text-center">
          <h1 className="text-white text-2xl sm:text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Building Tomorrow, Today</h1>
          <p className="text-white text-sm sm:text-base sm:text-lg md:text-xl mb-6">Comprehensive development, construction, and interior solutions since 1999.</p>
          <a href="#portfolio">
            <Button className="bg-slate-700 text-white px-6 py-2 text-lg transition duration-300 hover:scale-105">Explore Our Work</Button>
          </a>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <a href="#" className="fixed bottom-6 right-6 bg-slate-800 text-white px-4 py-2 text-sm rounded-full shadow-lg hover:bg-blue-700 transition duration-200 z-50">Top</a>

      {/* About Section */}
      <section id="about" className="scroll-mt-[48px] py-20 px-6 md:px-20 text-center bg-white">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold mb-6 text-slate-800">Leading with Excellence</h2>
          <p className="text-base sm:text-lg max-w-4xl mx-auto mb-4 text-gray-700">
            H-Group SARL is a leading name in premium real estate development, construction, and interior fit-out across Lebanon and the region—renowned for our dedication to expert craftsmanship, client relationships, and timeless design. With over two decades of expertise, H-Group SARL delivers end-to-end construction and bespoke interior solutions, redefining high-end living and commercial spaces across Lebanon.
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto mb-6 text-gray-700">
            With a vision centered on quality and personalization, we create enduring spaces that balance architectural integrity with bespoke elegance. Our legacy is built on delivering transformative environments for discerning clients.
          </p>
          <img src="https://images.unsplash.com/photo-1600585154600-bd5a23e0ed40?auto=format&fit=crop&w=1200&q=80" alt="About H-Group SARL" className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mt-8" />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="scroll-mt-[200px] bg-gradient-to-b from-slate-100 to-white py-16 px-6 md:px-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Our Expertise</h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive capabilities across the full spectrum of design, development, construction, and fit-out execution.</p>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              title: "Development",
              desc: "We manage feasibility, planning, approvals, and project delivery with long-term value in mind.",
              img: "https://images.unsplash.com/photo-1600585154132-59b9c88e7b7c?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Construction",
              desc: "From foundations to finishes, our builds meet top-tier safety, quality, and performance standards.",
              img: "https://images.unsplash.com/photo-1590650046871-2c9ad63f0f20?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Interior Fit-Out",
              desc: "We tailor interior experiences through high-end finishes, technology, and spatial harmony.",
              img: "https://images.unsplash.com/photo-1600585154600-bd5a23e0ed40?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Joinery & Finishes",
              desc: "In-house craftsmanship enhances identity—from custom cabinetry to standout millwork.",
              img: "https://images.unsplash.com/photo-1582582494700-1c3a8a8e308b?auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-xl overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="scroll-mt-[48px] bg-gradient-to-b from-white to-slate-100 py-16 px-6 md:px-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Portfolio Highlights</h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">A curated selection of our recent works, showcasing our craftsmanship, vision, and dedication to excellence.</p>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              src: "https://images.unsplash.com/photo-1628744445128-33c1c91e598c?auto=format&fit=crop&w=800&q=80",
              title: "Urban Loft Interior"
            },
            {
              src: "https://images.unsplash.com/photo-1613553489776-6f4a735c8265?auto=format&fit=crop&w=800&q=80",
              title: "Modern Residential Complex"
            },
            {
              src: "https://images.unsplash.com/photo-1529429611270-66d9abf00576?auto=format&fit=crop&w=800&q=80",
              title: "Contemporary Commercial Space"
            }
          ].map((project, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img src={project.src} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-center text-base sm:text-lg font-medium text-gray-800">{project.title}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-[48px] bg-slate-800 text-white py-16 px-6 md:px-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Connect with Us</h2>
        <p className="mb-2">Telephone: 01 800 640 - 03 366 253</p>
        <p className="mb-2">Address: Raouche, Austria St., Saad Bldg</p>
        <p className="mb-2">P.O.Box: 6907</p>
        <p className="mb-2">Fax: 01 787 190</p>
        <p className="mb-6">Email: info@hgroup-lb.com</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mt-8">
          <input type="text" placeholder="Name" className="p-3 rounded bg-white text-black" required />
          <input type="email" placeholder="Email" className="p-3 rounded bg-white text-black" required />
          <textarea placeholder="Message" className="md:col-span-2 p-3 rounded bg-white text-black h-32" required></textarea>
          <Button type="submit" className="md:col-span-2 w-full bg-slate-700 text-white px-6 py-2 text-lg">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-sm text-center py-4">
        <p>&copy; {new Date().getFullYear()} H-Group SARL. All rights reserved.</p>
      </footer>
    </div>
  );
}
