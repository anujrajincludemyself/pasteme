🔗 Live Demo: https://pasteme-pearl.vercel.app/

PasteMe is a modern, fast, and minimal paste management web application built using React, Redux Toolkit, Tailwind CSS, and Vite.
It allows users to create, edit, view, and manage text/code pastes locally with a clean UI and smooth UX.

✨ Features

➕ Create new pastes

✏️ Edit existing pastes

👁️ View individual pastes

🗑️ Delete pastes

🔍 Prevent duplicate pastes

💾 LocalStorage persistence (data survives refresh)

🔔 User feedback using toast notifications

🎨 Modern animated UI using Tailwind CSS

🌐 Deployed on Vercel

🛠️ Tech Stack

Frontend: React (with Hooks)

State Management: Redux Toolkit

Routing: React Router v6

Styling: Tailwind CSS

Build Tool: Vite

Notifications: react-hot-toast

Deployment: Vercel

🧠 Architecture & Best Practices

This project follows clean and scalable frontend architecture:

✅ Proper use of Redux Toolkit slices

✅ Single source of truth for state

✅ Immutable state updates handled by Redux Toolkit

✅ Separation of concerns (components, redux, routing)

✅ No side-effects inside reducers

✅ Toast notifications handled at component level

✅ Route-based editing (/pastes/:id/edit)

✅ Safe duplicate prevention logic

✅ Responsive and accessible UI
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Paste.jsx
│   └── ViewPaste.jsx
│
├── redux/
│   ├── PasteSlice.js
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css


⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/pasteme.git
cd pasteme


Install dependencies:

npm install


Run locally:

npm run dev


Build for production:

npm run build

🚀 Deployment

The project is deployed on Vercel.

Output directory: dist

Build command: npm run build

SPA routing handled via vercel.json

Live URL 👉 https://pasteme-pearl.vercel.app/📌 Future Improvements

🔍 Search & filter pastes

📋 Copy to clipboard

🌈 Syntax highlighting

🌙 Dark/Light theme toggle

🧠 Auto-save drafts
