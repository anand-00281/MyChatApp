# 💬 Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, Socket.IO, and MongoDB. Features include user authentication, real-time messaging, image sharing, online status tracking, and a beautiful responsive UI.

Live App : https://mychatapp-mb-anand.onrender.com/

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration & Login**: Secure authentication with JWT tokens
- **Profile Management**: Update profile information and avatar
- **Password Security**: Bcrypt hashing for secure password storage
- **Session Management**: Persistent login sessions with cookies

### 💬 Real-Time Messaging
- **Instant Messaging**: Real-time message delivery using Socket.IO
- **Text Messages**: Send and receive text messages instantly
- **Image Sharing**: Upload and share images in conversations
- **Message History**: Persistent message storage in MongoDB
- **Online Status**: Real-time online/offline user indicators

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and DaisyUI components
- **Theme Support**: Multiple beautiful themes (light, dark, and 25+ others)
- **Real-time Updates**: Live updates for messages and online status
- **Loading States**: Smooth loading animations and skeleton screens

### 🔧 Technical Features
- **Real-time Socket.IO**: Bidirectional communication for instant messaging
- **Cloudinary Integration**: Image upload and storage
- **RESTful API**: Clean and organized backend architecture
- **State Management**: Zustand for efficient client-side state management
- **Error Handling**: Comprehensive error handling with user-friendly notifications

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Zustand** - Lightweight state management
- **Socket.IO Client** - Real-time communication
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Cloud image management
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware

## 📁 Project Structure

```
CHATAPP/
├── backend/                 # Backend server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── lib/            # Utility libraries
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── index.js        # Server entry point
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand stores
│   │   ├── lib/            # Utility functions
│   │   └── App.jsx         # Main app component
│   └── package.json
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CHATAPP
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   ```

4. **Start the development servers**

   **Option 1: Start both servers from root**
   ```bash
   # Start backend server
   npm run start
   
   # In another terminal, start frontend
   cd frontend
   npm run dev
   ```

   **Option 2: Start servers individually**
   ```bash
   # Backend (from backend directory)
   cd backend
   npm run dev
   
   # Frontend (from frontend directory)
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📱 Usage

### Authentication
1. **Sign Up**: Create a new account with email, password, and full name
2. **Login**: Sign in with your credentials
3. **Profile**: Update your profile information and avatar

### Messaging
1. **Select Contact**: Choose a user from the sidebar to start chatting
2. **Send Messages**: Type text messages or upload images
3. **Real-time**: Messages appear instantly for both sender and receiver
4. **Online Status**: See who's currently online with green indicators

### Features
- **Theme Switching**: Change themes from the settings page
- **Online Filter**: Toggle to show only online users
- **Image Sharing**: Upload images directly in chat
- **Responsive Design**: Works on all device sizes

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/send/:userId` - Send message to user

## 🎨 Available Themes

The application includes 30+ beautiful themes:
- Light, Dark, Cupcake, Bumblebee
- Emerald, Corporate, Synthwave, Retro
- Cyberpunk, Valentine, Halloween, Garden
- Forest, Aqua, Lofi, Pastel, Fantasy
- Wireframe, Black, Luxury, Dracula
- And many more...

## 🚀 Deployment

### Build for Production
```bash
# Build the entire application
npm run build

# Start production server
npm start
```

### Environment Variables for Production
Make sure to set the following environment variables:
- `NODE_ENV=production`
- `MONGODB_URI` - Your production MongoDB URI
- `JWT_SECRET` - Secure JWT secret
- `CLOUDINARY_*` - Cloudinary credentials

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [DaisyUI](https://daisyui.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Cloudinary](https://cloudinary.com/) for image management
- [Zustand](https://github.com/pmndrs/zustand) for state management

If you have any questions or need help, please open an issue in the repository.

---

**Happy Chatting! 💬** 