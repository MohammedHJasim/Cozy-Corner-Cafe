
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cozy Corner Cafe</h3>
            <p className="text-amber-100 leading-relaxed">
              Your neighborhood gathering place for exceptional coffee, delicious food, and warm conversations.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-amber-100">
              <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
              <p>Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 7:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-amber-100">
              <p>123 Main Street</p>
              <p>Hometown, ST 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@cozycornercafe.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Cozy Corner Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
