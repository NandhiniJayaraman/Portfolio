import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaEnvelope,
  FaBookOpen,
  FaCode,
} from "react-icons/fa";

import Profile from "../assets/profile.jpeg";
import { GrGithub, GrProjects } from "react-icons/gr";
import { BsThreads } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SidePanel() {
  return (
    <aside className="min-h-screen bg-[#040b14] text-white p-6 flex flex-col items-center space-y-6 shadow-lg">
      {/* Profile Image */}
      <img
        src={Profile} // Replace with your image path
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white object-cover"
      />

      {/* Name */}
      <h1 className="text-xl font-bold text-center">Nandhini J</h1>

      {/* Social Icons */}
      <div className="flex justify-center gap-5">
        <a href="https://x.com/home?lang=en" className="w-10 h-10 flex items-center justify-center rounded-full  bg-gray-900 hover:border-blue-400 transition">
          <FaTwitter className="hover:text-blue-400" size={20} />
        </a>
        <a href="https://www.threads.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900  hover:border-blue-400 transition">
          <BsThreads className="hover:text-blue-400" size={20} />
        </a>
        <a href="https://www.instagram.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:border-blue-400 transition">
          <FaInstagram className="hover:text-blue-400" size={20} />
        </a>
        <a href="https://github.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:border-blue-400 transition">
          <GrGithub className="hover:text-blue-400" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nandhini-jayaraman-8b7bb9253/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:border-blue-400 transition">
          <FaLinkedinIn className="hover:text-blue-400" size={20} />
        </a>
      </div>

      {/* Menu */}
      <nav className="w-full mt-6">
        <ul className="flex flex-col gap-6 text-base">
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <FaHome size={20} /> <Link to="/" className="flex-1 block hover:text-blue-400">Home</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <FaUser size={20} /> <Link to="/about" className="flex-1 block hover:text-blue-400">About</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <FaBookOpen size={20} /> <Link to="/equcation" className="flex-1 block hover:text-blue-400">Education</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <FaCode size={20} /> <Link to="/skills" className="flex-1 block hover:text-blue-400">Skills</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <GrProjects size={20} /> <Link to="/projects" className="flex-1 block hover:text-blue-400">Projects</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-blue-400 transition-colors h-12">
        <FaEnvelope size={20} /> <Link to="/contact" className="flex-1 block hover:text-blue-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
