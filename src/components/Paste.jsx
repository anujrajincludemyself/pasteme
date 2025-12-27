import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromPaste } from '../redux/PasteSlice'
import toast from 'react-hot-toast'

const Paste = () => {
  const dispatch = useDispatch()

  // get all pastes safely
  const pastes = useSelector(state => state.paste?.pastes || [])

  const handleDelete = (id) => {
    dispatch(removeFromPaste(id))
    toast.success("Paste deleted")
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Your Pastes
            </h1>
            <p className="text-slate-400 mt-1">
              All your locally saved pastes in one place
            </p>
          </div>

          <Link
            to="/"
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition shadow-lg"
          >
            + New Paste
          </Link>
        </div>

        {/* Empty State */}
        {pastes.length === 0 && (
          <div className="text-center text-slate-400 mt-32">
            <p className="text-lg">No pastes created yet</p>
            <p className="text-sm mt-2">
              Click <span className="text-indigo-400">“New Paste”</span> to create one
            </p>
          </div>
        )}

        {/* Paste Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {pastes.map((paste) => (
            <div
              key={paste._id}
              className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-indigo-500 transition"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-white truncate">
                {paste.title}
              </h2>

              {/* Content Preview */}
              <p className="text-slate-400 text-sm mt-2 line-clamp-4 font-mono">
                {paste.content}
              </p>

              {/* Date */}
              <p className="text-xs text-slate-500 mt-4">
                {new Date(paste.createdat).toLocaleString()}
              </p>

              {/* Actions */}
              <div className="mt-5 flex gap-2">

                <Link
                  to={`/pastes/${paste._id}`}
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm transition"
                >
                  View
                </Link>

                <Link
                  to={`/?pasteid=${paste._id}`}
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm transition"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="px-3 py-2 rounded-lg bg-red-500/90 hover:bg-red-600 text-white text-sm transition"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Paste
