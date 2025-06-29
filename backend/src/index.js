import express from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.routes.js"
import cors from "cors"
import { app,server } from "./lib/socket.js";

import path from "path";
    
dotenv.config();

const __dirname = path.resolve();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// API routes should come before the catch-all route
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve static files and handle SPA routing only in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

server.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT || 5000}`);

    connectDb();
});