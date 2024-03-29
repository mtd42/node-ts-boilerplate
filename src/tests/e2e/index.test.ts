import request from "supertest";
import { type Express } from "express-serve-static-core";
import { initApp } from "../../app";

describe("/", () => {
    let app: Express;

    beforeAll(() => {
        app = initApp();
    });

    it("should return an object with message Api's working", async () => {
        const response = await request(app).get("/");
        expect(response.body).toStrictEqual({ message: "Api's working" });
    });
});
