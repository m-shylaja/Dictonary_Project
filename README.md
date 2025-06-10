# Dictonary_Project


# Project Overview
The English Dictionary Web Application is a responsive and user-friendly tool that allows users to search for any English word and instantly retrieve its meaning, phonetic spelling, part of speech, example usage, and pronunciation audio. It uses the Free Dictionary API to fetch real-time data and provides a smooth UI experience with proper error handling and loading indicators.

# Features Implemented
🔍 1. Word Search
Users can type a word and press Enter or click the Search button.

Auto-focus is enabled on the search input when the page loads.

🔗 2. Live API Integration
Uses dictionaryapi.dev to fetch:

Word

Phonetics

Part of speech

Definitions

Example usages

Pronunciation audio

🔊 3. Audio Pronunciation
Users can click the 🔊 Play button to hear the pronunciation.

Audio is dynamically loaded and played using the HTML5 <audio> element.

🚫 4. Error Handling
Graceful handling of:

Invalid or nonexistent words

Network errors

Displays custom error messages like:

“Word not found.”

“No internet connection.”

⏳ 5. Loading State
Shows a “Loading…” indicator while fetching data.
