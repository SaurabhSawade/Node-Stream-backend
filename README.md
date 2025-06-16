# 🎬 Video Streaming App (Node.js + React)

This project implements a video streaming application using:

- 📦 **Express.js** (Node.js backend) to serve video content using byte-range streaming.
- 🎨 **React.js** frontend to display the video using the HTML5 `<video>` tag.

---

## 🧠 Project Structure

video-streaming-app/
├── backend/
│   ├── public/
│   │   ├── video.mp4        # Video file to stream
│   │   └── index.html       # (for testing HTML directly)
│   ├── server.js            # Express server
│   └── package.json
└── frontend/
├── src/
│   ├── App.jsx          # React component with video player
│   └── …
├── public/
├── vite.config.js
└── package.json

---
