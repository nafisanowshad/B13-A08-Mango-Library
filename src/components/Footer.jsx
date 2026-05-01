import Link from "next/link";
import { FiBook, FiTwitter, FiGithub, FiLinkedin, FiMail, FiHeadphones, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-base-content border-t border-base-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between gap-10 lg:gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4 w-full md:w-[45%] lg:w-auto lg:max-w-xs">
            <div className="flex items-center gap-2 text-primary mb-2">
              <FiBook size={32} />
              <span className="text-2xl font-bold tracking-wide">Mango Library</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-base-content/80 font-medium">
              <FiHeadphones className="text-primary text-lg shrink-0"/> 09611-262020 <span className="font-normal text-xs text-base-content/60">(Hotline)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-base-content/80 font-medium">
              <FiPhone className="text-primary text-lg shrink-0"/> <span className="underline">01322918236</span> <span className="font-normal text-xs text-base-content/60">(Corporate Sales)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-base-content/80 font-medium">
              <FiMail className="text-primary text-lg shrink-0"/> mangolibrary@gmail.com
            </div>
            <div className="flex items-start gap-3 text-sm text-base-content/80 font-medium">
              <FiMapPin className="text-primary text-lg shrink-0 mt-0.5"/> <span>31/1, Toyenbee Circular Road, Motijheel<br/>L/M , Dhaka-1200.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 w-[45%] sm:w-[30%] md:w-auto">
            <h6 className="text-base font-semibold text-base-content mb-2 pt-2">Quick Links</h6>
            <Link href="/" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Home</Link>
            <Link href="/books" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">All Books</Link>
            <Link href="/login" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Login</Link>
            <Link href="/register" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Register</Link>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4 w-[45%] sm:w-[30%] md:w-auto">
            <h6 className="text-base font-semibold text-base-content mb-2 pt-2">Categories</h6>
            <Link href="/books?category=Story" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Story</Link>
            <Link href="/books?category=Tech" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Tech</Link>
            <Link href="/books?category=Science" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Science</Link>
          </div>

          {/* Policy */}
          <div className="flex flex-col gap-4 w-[45%] sm:w-[30%] md:w-auto">
            <h6 className="text-base font-semibold text-base-content mb-2 pt-2">Policy</h6>
            <Link href="/terms" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/return" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">Return Policy</Link>
            <Link href="/faq" className="flex items-center text-sm text-base-content/70 hover:text-primary transition-colors">FAQ</Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 w-[45%] sm:w-[30%] md:w-auto">
            <h6 className="text-base font-semibold text-base-content mb-2 pt-2">Stay Connected With Us</h6>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"><FiTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-white hover:opacity-90 transition-opacity"><FiGithub size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"><FiLinkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-base-content/10 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-base-content/60">
          <p>Copyright © 2026 Mango Library</p>
        </div>
      </div>
    </footer>
  );
}
