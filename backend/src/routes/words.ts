import { Router } from "express";

const router = Router();

const mockWords: Record<string, { synonyms: string[]; antonyms: string[] }> = {
    happy: {
        synonyms: ["joyful", "cheerful", "glad"],
        antonyms: ["sad", "unhappy", "miserable"],
    },
    big: {
        synonyms: ["large", "huge", "giant"],
        antonyms: ["small", "tiny", "little"],
    },
    fast: {
        synonyms: ["quick", "rapid", "speedy"],
        antonyms: ["slow", "sluggish"],
    },
};

router.get("/:term", (req, res) => {
    const term = req.params.term.toLowerCase();
    const entry = mockWords[term];

    if (!entry) {
        return res.status(404).json({
            message: `No results found for "${term}"`,
        });
    }

    return res.json({
        word: term,
        synonyms: entry.synonyms,
        antonyms: entry.antonyms,
    });
});

export default router;