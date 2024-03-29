import express from "express";
import homeRouter from "./components/home/routes";

export function initApp() {
    const app = express();

    app.use("/", homeRouter);

    return app;
}
