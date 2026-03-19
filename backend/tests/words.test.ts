import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app";

describe("GET /", () => {
    it('returns the backend status message', async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Backend is working!");
    });
});

describe("GET /api/words/:term", () => {
    it("returns synonyms and antonyms for a known word", async () => {
        const response = await request(app).get("/api/words/happy");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            word: "happy",
            synonyms: ["joyful", "cheerful", "glad"],
            antonyms: ["sad", "unhappy", "miserable"],
        });
    });

    it("handles uppercase input by matching it to lowercase entries", async () => {
        const response = await request(app).get("/api/words/HAPPY");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            word: "happy",
            synonyms: ["joyful", "cheerful", "glad"],
            antonyms: ["sad", "unhappy", "miserable"],
        });
    });


    it("returns 404 for an unknown word", async () => {
        const response = await request(app).get("/api/words/unknown");

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: 'No results found for "unknown"',
        });
    });
});