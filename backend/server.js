import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";

// Middleware
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(cors({ origin: ORIGIN }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Health route
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

// Contact/messages route
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }
    // Basic email check
    if (!/.+@.+\..+/.test(email)) {
      return res.status(400).json({ success: false, error: "Invalid email." });
    }

    // For now, just log instead of saving
    console.log("📩 New message:", { name, email, message });

    return res.status(201).json({ success: true, msg: "Message received" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API listening on port ${PORT}`);
});
