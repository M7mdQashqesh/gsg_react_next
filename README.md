# GSG React and Next.js Course Homework Projects

This repository contains two homework projects completed as part of the Gaza Sky Geeks (GSG) React and Next.js course.

## Projects Overview

### 1. Calculator App
A React-based calculator application built with TypeScript and Vite. The calculator features:
- Basic arithmetic operations
- Modern and responsive UI
- TypeScript implementation for type safety
- Component-based architecture
  - KeyPad component for number and operation inputs
  - ResultDisplay component for showing calculations

**Tech Stack:**
- React
- TypeScript
- Vite
- CSS Modules

### 2. Todo App
A React todo list application that demonstrates state management and component composition. Features include:
- Add, delete, and toggle todo items
- Clean and intuitive user interface
- State management using React Reducer
- TypeScript for enhanced development experience

**Components:**
- Dashboard: Main application container
- TodoList: Displays list of todo items
- TodoItem: Individual todo item component
- Form: Add new todo items

**Tech Stack:**
- React
- TypeScript
- Vite
- CSS Modules
- React Reducer for state management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation and Running Projects

#### Calculator App
```bash
cd calculator
npm install
npm run dev
```

#### Todo App
```bash
cd todo-app
npm install
npm run dev
```

Both applications will be available at `http://localhost:5173` (or the next available port) when running in development mode.

## Project Structure

### Calculator App
```
calculator/
├── src/
│   ├── components/
│   │   ├── key-pad/
│   │   └── result-display/
│   ├── App.tsx
│   └── main.tsx
└── [configuration files]
```

### Todo App
```
todo-app/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── form/
│   │   ├── todo-item/
│   │   └── todo-list/
│   ├── state/
│   │   └── reducer.ts
│   ├── App.tsx
│   └── main.tsx
└── [configuration files]
```

## Learning Objectives

These projects demonstrate proficiency in:
- React component architecture
- TypeScript integration in React projects
- State management patterns
- CSS styling and layout
- Project structure and organization
- Modern development tooling (Vite)

## Course Context
These projects are assignments for the Gaza Sky Geeks (GSG) React and Next.js course, demonstrating practical implementation of course concepts and best practices.

## Development
- Both projects use ESLint for code quality
- TypeScript for type safety
- Vite for fast development and building
- Modern React practices and hooks

## Build
To build either project for production:
```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

---
Projects created as part of the GSG React and Next.js course curriculum.
