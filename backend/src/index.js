// backend/src/index.js
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "../routes/auth.routes.js";
import messageRoutes from "../routes/message.routes.js";
import { connectDb } from "../lib/db.js";
import { initSocket } from "../lib/socket.js";

// __dirname replacement for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const server = http.createServer(app);

// Initialize socket server
initSocket(server);

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    const staticPath = path.join(__dirname, "../../frontend/dist");
    app.use(express.static(staticPath));
    app.get("*", (req, res) => {
        res.sendFile(path.join(staticPath, "index.html"));
    });
}

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start server
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    connectDb();
});
