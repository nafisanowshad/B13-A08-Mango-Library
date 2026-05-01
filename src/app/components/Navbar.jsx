"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiBook } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [user, setUser] = useState(null);

  return (
    <div className="navbar bg-base-100 shadow-sm glass-panel sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </label>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/books">All Books</Link></li>
              {user && <li><Link href="/profile">My Profile</Link></li>}
            </ul>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl flex gap-2 items-center text-primary font-bold">
          <FiBook size={28} />
          Mango Library
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/books">All Books</Link></li>
          {user && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        
          <Link href="/login" className="btn btn-primary rounded-full px-6">Login</Link>
        
      </div>
    </div>
  );
}
