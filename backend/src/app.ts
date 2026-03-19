import express from "express";
import cors from "cors";
import wordsRouter from "./routes/words";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.use("/api/words", wordsRouter);

export default app;