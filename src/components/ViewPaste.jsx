import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/PasteSlice'
import toast from 'react-hot-toast'

const ViewPaste = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get all pastes safely
  const pastes = useSelector(state => state.paste?.pastes || [])

  // find current paste
  const paste = pastes.find(p => p._id === id)

  // delete handler
  const handleDelete = () => {
    dispatch(removeFromPaste(id))
    toast.success("Paste deleted")
    navigate('/pastes')
  }

  // if paste not found
  if (!paste) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Paste not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16">

      <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              {paste.title}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Created on {new Date(paste.createdat).toLocaleString()}
            </p>
          </div>

          <Link
            to="/pastes"
            className="text-sm text-indigo-400 hover:underline"
          >
            ← Back
          </Link>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <pre className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-slate-200 text-sm font-mono whitespace-pre-wrap break-words">
            {paste.content}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3 sm:justify-end">

          {/* Edit */}
          <Link
            to={`/?pasteid=${paste._id}`}
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-center transition"
          >
            Edit
          </Link>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default ViewPaste
