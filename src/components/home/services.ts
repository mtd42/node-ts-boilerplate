import { Request, Response } from "express";

export function getHome(request: Request, response: Response) {
    response.status(200).json({ message: "Api's working" });
}
