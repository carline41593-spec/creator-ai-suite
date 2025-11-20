import express from "express";
import cors from "cors";
import generateRoutes from "./routes/generate.js";

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Dollhouse Flux Backend is running");
});

// AI generator route
app.use("/generate", generateRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
