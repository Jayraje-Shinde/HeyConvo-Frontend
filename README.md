# 💬 Chat UI — Frontend

A React + TypeScript frontend for a real-time chat application.  
Built as a **learning project** focused on MUI and UI/UX fundamentals.

---

## 🎯 What This Project Is For

This isn't just a UI — it's a deliberate practice ground for:

- **MUI (Material UI)** — learning the component library, theming, `sx` prop, and layout system
- **UI/UX thinking** — making intentional decisions about layout, spacing, feedback states, and user flow
- **TypeScript with React** — typing props, events, API responses, and socket payloads
- **Connecting a React app to a real backend** — REST for data fetching, Socket.io for real-time updates

The backend (Node + Express + Socket.io + PostgreSQL) is developed separately.  
This repo is purely the frontend.

---

## 🖥️ Screens

| Screen | Purpose |
|---|---|
| Login / Register | Auth forms — practice controlled inputs and validation feedback |
| Room List | Sidebar layout — learn MUI `Drawer`, `List`, `ListItem` |
| Chat Window | Core UI — message bubbles, scroll behaviour, input area |
| Online Presence | Avatar badges — learn MUI `Badge`, `Avatar`, `Tooltip` |

---

## 🛠️ Tech Stack

| Tool | Why |
|---|---|
| React + TypeScript | Component UI with type safety |
| MUI (Material UI) | Component library — main learning focus |
| Socket.io Client | Real-time messaging |
| Axios | HTTP requests to the backend |
| React Router | Client-side routing |

---

## 🚀 Running Locally

### Prerequisites

- Node.js v18+
- The backend server running (see backend repo)

### Steps

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd chat-ui

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
```

Open `.env` and set:

```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

```bash
# 4. Start the dev server
npm run dev
```

App will be available at **http://localhost:5173**

---

## 📁 Folder Structure

```
src/
├── api/          # Axios calls to the backend
├── components/   # Reusable MUI-based UI pieces
├── pages/        # Route-level screens
├── hooks/        # useSocket, useAuth, etc.
├── context/      # Auth and Socket context providers
├── types/        # TypeScript types (shared with backend where possible)
└── utils/        # Helpers
```

---

## 📖 MUI Learning Notes

> Add your own notes here as you go — this section is for you.

- [ ] Understand the difference between `sx`, `styled()`, and `theme`
- [ ] Build one component using only MUI primitives (no custom CSS)
- [ ] Customise the MUI theme (primary colour, typography, border radius)
- [ ] Use `useMediaQuery` to make the layout responsive

---

## 🔗 Related
- [Backend Repo]() — Node + Express + Socket.io + PostgreSQL (not yet done rn developing frontend)
- [MUI Docs](https://mui.com/material-ui/)
- [Socket.io Client Docs](https://socket.io/docs/v4/client-api/)

NOTE : Currently the project is under development and not complete
