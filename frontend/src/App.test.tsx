import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("renders the main heading", () => {
        render(<App />);

        expect(screen.getByRole("heading", { name: /word finder/i })).toBeInTheDocument();
    });

    it("renders the search controls", () => {
        render(<App />);

        expect(screen.getByLabelText(/enter a word/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    });

    it("toggles the theme when the switch is clicked", () => {
        render(<App />);

        const toggle = screen.getByRole("button", { name: /toggle color theme/i });

        expect(document.documentElement.dataset.theme).toBe("light");

        fireEvent.click(toggle);

        expect(document.documentElement.dataset.theme).toBe("dark");
    });
});