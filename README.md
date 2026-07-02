# ThinkTest

A lightweight, multi-question quiz application built with React, TypeScript, and Tailwind CSS. Features a focused question-by-question flow with answer review and scoring.

## Overview

ThinkTest is a simple but fully functional quiz platform that allows users to navigate through questions at their own pace, review answers before submitting, and receive immediate scoring and feedback. Perfect for educational assignments, knowledge assessments, or practice tests.

## Features

- **5 Curated Questions**: Pre-loaded trivia covering geography, science, sports, and history
- **Free Navigation**: Move backward and forward through any question before final submission
- **Answer Review**: Select answers for all questions, then review before submitting
- **Full Score Calculation**: Instant score feedback with contextual remarks
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Session Tracking**: View current score and progress at a glance
- **One-Click Restart**: Reset the quiz to start over

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type-safe development
- **Vite** — Ultra-fast build tool with HMR
- **Tailwind CSS 4** — Utility-first styling
- **Flowbite React** — Pre-built component library

## Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn)

### Installation

```bash
# Clone or navigate to the project
cd ThinkTest

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

```bash
# Compile TypeScript and build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── main.tsx          # React root entry point
├── App.tsx           # App wrapper component
├── Home.tsx          # Quiz component (main logic)
├── App.css           # (empty, styles via Tailwind)
└── index.css         # Global Tailwind imports

public/              # Static assets
```

## How to Use

1. **Start Quiz**: Open the app to see the first question
2. **Select Answers**: Click any option (A, B, C, D) to choose your answer
3. **Navigate**: Use Previous/Next buttons to review or move between questions
4. **Review**: Verify all answers are selected before submitting
5. **Submit**: Click Submit Quiz (button is only enabled when at least half of the questions are answered)
6. **View Results**: See your score, feedback remark, and a restart button

## Quiz Questions

The quiz currently includes 5 questions covering:
1. Capital cities (Nigeria)
2. Astronomy (planets)
3. Marine biology (mammals)
4. Sports (professional athletes)
5. History (independence dates)

## Code Architecture

### Home Component
The entire quiz logic lives in `src/Home.tsx`:

- **State Management**: React hooks for question index, score, selected answers, and UI states
- **Question Interface**: TypeScript interface defines the structure of each question
- **Handler Functions**:
  - `nextQuestion()` — Navigate to the next question
  - `prevQuestion()` — Navigate to the previous question
  - `submitAnswers()` — Calculate score and display results
  - `restartQuiz()` — Reset all state to initial values

### Styling
- Tailwind utility classes for layout, spacing, colors, and responsive behavior
- No component-specific CSS files; all styling is via class names
- Supports customization through Tailwind configuration

## Customization

### Add More Questions

Edit the `questions` array in `src/Home.tsx`:

```typescript
const questions: Question[] = [
    {
        id: 6,
        question: "Your question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
    },
    // ... more questions
];
```

### Change Styling

Modify Tailwind classes in the component's `className` attributes. For global theme changes, update Tailwind configuration.

## ESLint

Run the linter to check for syntax and style issues:

```bash
npm run lint
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge) supporting ES2020+.

## Performance

- **Fast Builds**: Vite optimizes development and production builds for speed
- **Small Bundle**: ~200KB gzipped JavaScript+CSS for the production build
- **No External APIs**: Quiz data is embedded, no network latency

## Future Enhancements

Potential improvements for future versions:
- Load questions from an external API or database
- Add question categories and difficulty levels
- Track quiz history and statistics
- Support for timed quizzes
- Custom timer with auto-submit
- Analytics and detailed answer reviews
- Export results as PDF

## License

This is an educational assignment project. Use freely for learning purposes.

## Contributing

For bug reports or suggestions, please review the code and test the app thoroughly before proposing changes.

---

**Built with ❤️ for learning React, TypeScript, and modern web development.**