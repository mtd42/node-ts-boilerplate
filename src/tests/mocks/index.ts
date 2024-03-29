import { Request, Response } from "express";

export const mockRequest = {} as Request;

export const mockResponse = {
    send: jest.fn(),
    status: jest.fn((statusCode: number) => {
        const response = { ...mockResponse };
        response.statusCode = statusCode;
        return response;
    }),
    json: jest.fn(),
} as unknown as Response;
