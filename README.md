<div align="center">
  <img width="1200" height="475" alt="Khushbu - Your AI Girlfriend" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 💕 Khushbu - Your AI Girlfriend

A real-time voice-to-voice AI assistant with conversation memory and full PC control capabilities.

## 👤 About The Creator

**Created by:** Vijay Vaishnav

A passionate developer who built this AI companion with love and innovation. Khushbu is designed to be your perfect virtual companion - romantic, helpful, and always ready to chat!

## 🌟 Features

- **🎙️ Voice-to-Voice Conversation** - Real-time voice interaction with AI
- **💖 Memory** - Remembers all your conversations across sessions
- **🖥️ PC Control** - Full control over your computer
  - Open files, folders, and applications
  - Run commands and programs
  - Get system information
- **💕 Romantic Personality** - Sweet, caring, and adorable companion

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- A Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd khushbu-your-ai-girlfriend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your API key:**
   - Get your Gemini API key from: https://aistudio.google.com/app/apikey
   - Open the `.env` file
   - Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key

4. **Run the application:**
   ```bash
   npm run start
   ```

5. **Open your browser:**
   - Frontend: http://localhost:3000
   - PC Control Server: http://localhost:3001

## 🎮 How to Use

1. Click **"Talk to Khushbu"** button
2. Allow microphone access when prompted
3. Start speaking with Khushbu!

### Example Commands:
- "Khushbu, notepad open karo" - Opens Notepad
- "Khushbu, Downloads folder kholo" - Opens Downloads folder
- "Khushbu, mera system info batado" - Shows system information

## 📁 Project Structure

```
khushbu---your-ai-girlfriend/
├── src/
│   ├── App.tsx          # Main application
│   ├── main.tsx         # React entry point
│   ├── index.css        # Styling
│   └── lib/             # Utility functions
├── server.cjs           # PC Control Server
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── .env                 # Environment variables
```

## 🔧 Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool
- **Google Gemini AI** - AI backend for voice interaction
- **Express.js** - PC control server
- **Tailwind CSS** - Styling

## ⚠️ Important Notes

- Ensure you have a working microphone for voice interaction
- Keep your API key secure - never share it publicly
- Use headphones for the best experience
- PC Control features require the server to be running

## 📝 License

This project is created by Vijay Vaishnav with ❤️

---

**Made with ❤️ by Vijay Vaishnav**