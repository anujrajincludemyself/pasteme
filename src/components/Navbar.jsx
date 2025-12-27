import { NavLink } from "react-router-dom"
import React from "react"

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <h1 className="text-xl font-semibold text-indigo-400">
          Pastery
        </h1>

        {/* Center: Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition
              ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition
              ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Pastes
          </NavLink>
        </div>

        {/* Right: Created By (Animated Branding) */}
        <div className="hidden sm:block">
          <span
            className="
              text-xs font-medium
              bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
              bg-clip-text text-transparent
              animate-pulse
              select-none
            "
          >
            Created by Anujraj
          </span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
