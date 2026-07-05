import app from "./src/app.js";

const PORT = 80;

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
