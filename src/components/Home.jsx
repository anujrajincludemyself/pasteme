import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/PasteSlice'
import toast from 'react-hot-toast'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id: pasteid } = useParams()
  const pastes = useSelector(state => state.paste?.pastes || [])

  useEffect(() => {
    if (pasteid) {
      const existingPaste = pastes.find(p => p._id === pasteid)
      if (existingPaste) {
        setTitle(existingPaste.title)
        setValue(existingPaste.content)
      }
    }
  }, [pasteid, pastes])

  const createpaste = () => {
    if (!title.trim() || !value.trim()) {
      toast.error("Title and content cannot be empty")
      return
    }

    const duplicate = pastes.some(
      p =>
        p.title.trim().toLowerCase() === title.trim().toLowerCase() &&
        p.content.trim() === value.trim()
    )

    if (duplicate && !pasteid) {
      toast.error("Paste already exists")
      return
    }

    const paste = {
      _id: pasteid || Date.now().toString(36),
      title: title.trim(),
      content: value.trim(),
      createdat: new Date().toISOString(),
    }

    if (pasteid) {
      dispatch(updateToPastes(paste))
      toast.success("Paste updated successfully")
    } else {
      dispatch(addToPastes(paste))
      toast.success("Paste created successfully")
    }

    setTitle('')
    setValue('')
    navigate('/pastes')
  }

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      flex justify-center px-4 py-16
      animate-fade-in
    ">

      <div className="
        w-full max-w-4xl
        bg-slate-900/80 backdrop-blur
        border border-slate-800
        rounded-2xl shadow-2xl
        transition-all duration-500
        animate-scale-in
      ">

        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-800">
          <h1 className="text-2xl font-semibold text-white animate-slide-down">
            {pasteid ? "Edit Paste" : "Create New Paste"}
          </h1>
          <p className="text-slate-400 text-sm mt-1 animate-fade-in delay-100">
            Write, save, and manage your pastes effortlessly
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-6 animate-fade-in delay-200">

          {/* Title */}
          <div className="transition-all duration-300 hover:scale-[1.01]">
            <label className="block text-sm text-slate-300 mb-2">
              Paste Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your paste a meaningful title..."
              className="
                w-full bg-slate-950
                border border-slate-700
                rounded-xl px-4 py-3
                text-white
                outline-none
                transition-all duration-300
                focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/30
              "
            />
          </div>

          {/* Content */}
          <div className="transition-all duration-300 hover:scale-[1.01]">
            <label className="block text-sm text-slate-300 mb-2">
              Paste Content
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={14}
              placeholder="Write your code, notes, or content here..."
              className="
                w-full bg-slate-950
                border border-slate-700
                rounded-xl px-4 py-3
                text-white font-mono text-sm
                outline-none
                transition-all duration-300
                focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/30
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-slate-800 flex justify-between items-center animate-fade-in delay-300">
          <p className="text-xs text-slate-500">
            Stored locally • Private
          </p>

          <button
            onClick={createpaste}
            className="
              px-6 py-3 rounded-xl
              bg-gradient-to-r from-indigo-500 to-indigo-600
              text-white shadow-lg
              transition-all duration-300
              hover:from-indigo-600 hover:to-indigo-700
              hover:-translate-y-0.5 hover:shadow-indigo-500/30
              active:scale-95
            "
          >
            {pasteid ? "Update Paste" : "Create Paste"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home
