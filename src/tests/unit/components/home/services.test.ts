import { getHome } from "../../../../components/home/services";
import { mockRequest, mockResponse } from "../../../mocks";

describe("getHome", () => {
    it("should return an object with message Api's working", () => {
        getHome(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Api's working",
        });
    });
});
