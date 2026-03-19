# word-finder-app

A small personal learning project with a TypeScript frontend and backend.

## Structure

- `frontend/` - Vite + TypeScript frontend
- `backend/` - Express + TypeScript backend

## Current Status

This project is in early setup.

Right now:
- the backend includes a simple mock word API
- the frontend is still close to the default Vite starter
- the app is not fully connected end-to-end yet

## Backend API

Current example route:

`GET /api/words/:term`

Example terms currently supported:
- `happy`
- `big`
- `fast`

Example response:

    {
      "word": "happy",
      "synonyms": ["joyful", "cheerful", "glad"],
      "antonyms": ["sad", "unhappy", "miserable"]
    }

## Goals

- connect the frontend to the backend API
- let users search for a word
- display synonyms and antonyms in the UI