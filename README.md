# 📚 Learning Dashboard

A modern, interactive React application for tracking your learning journey. Manage your study topics, track completion status, and monitor your progress with an elegant dark/light theme interface.

## 🌟 Features

- **Topic Management**: Add, edit, and delete learning topics
- **Progress Tracking**: Mark topics as completed and track your learning progress
- **Difficulty Levels**: Categorize topics by difficulty (Easy, Medium, Hard)
- **Smart Filtering**: 
  - Filter by completion status (All, In Progress, Completed)
  - Filter by difficulty level
  - Search topics by name
- **Theme Toggle**: Switch between light and dark modes
- **Statistics Dashboard**: View total topics, completion rate, and progress bar
- **Persistent Storage**: All data saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Context API** for global state management
- **CSS3** with custom styling
- **localStorage** for data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd learning-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📖 Usage

1. **Add Topics**: Fill in the form with topic name, description, and difficulty level
2. **Filter Topics**: Use the filter buttons to view specific categories
3. **Search**: Type in the search box to find topics by name
4. **Mark Complete**: Click the "Mark Complete" button on any topic card
5. **Toggle Theme**: Click the moon/sun icon to switch between dark and light modes
6. **Track Progress**: View your learning statistics in the stats bar at the top

## 🎨 Features Breakdown

### Components
- `TopicForm` - Form for adding new topics
- `TopicList` - Displays filtered list of topics
- `TopicItem` - Individual topic card with actions
- `StatsBar` - Statistics and progress tracking
- `ThemeToggle` - Theme switcher button

### State Management
- Global state managed with React Context API
- Local state with useState for forms and filters
- Data persistence with localStorage
- Theme preferences saved across sessions

### Hooks Used
- `useState` - Local component state
- `useContext` - Accessing global context
- `useEffect` - Side effects and localStorage sync

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a learning project to demonstrate React, TypeScript, and modern web development practices.
