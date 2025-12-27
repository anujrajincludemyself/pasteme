import { createSlice } from '@reduxjs/toolkit'

const getPastesFromStorage = () => {
  try {
    const data = localStorage.getItem("pastes")
    return data ? JSON.parse(data) : []
  } catch {
    localStorage.removeItem("pastes")
    return []
  }
}

const initialState = {
  pastes: getPastesFromStorage()
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

    addToPastes: (state, action) => {
      const exists = state.pastes.some(
        paste =>
          paste.title.trim().toLowerCase() === action.payload.title.trim().toLowerCase() &&
          paste.content.trim() === action.payload.content.trim()
      )

      if (exists) {
        return { ...state, error: "EXISTS" }
      }

      state.pastes.push(action.payload)
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
    },

    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex(
        paste => paste._id === action.payload._id
      )

      if (index !== -1) {
        state.pastes[index] = action.payload
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
      }
    },

    removeFromPaste: (state, action) => {
      state.pastes = state.pastes.filter(
        paste => paste._id !== action.payload
      )
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
    },

    resetAllPastes: (state) => {
      state.pastes = []
      localStorage.removeItem("pastes")
    },
  },
})

export const {
  addToPastes,
  updateToPastes,
  resetAllPastes,
  removeFromPaste
} = PasteSlice.actions

export default PasteSlice.reducer
