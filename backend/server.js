import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/greet", (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});


app.listen(5000, () => console.log(`Server running on port 5000`));
