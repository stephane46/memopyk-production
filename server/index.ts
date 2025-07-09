import express from "express";
import { registerRoutes } from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Register all routes
const server = await registerRoutes(app);

// Start server with proper binding for Docker
server.listen(port, "0.0.0.0", () => {
  console.log(`🚀 MEMOPYK server running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});