import { initApp } from "./app";

const app = initApp();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});
