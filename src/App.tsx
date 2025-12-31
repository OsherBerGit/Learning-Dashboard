import { AppProvider, useAppContext } from './context/AppContext';
import { TopicForm } from './components/TopicForm';
import { TopicList } from './components/TopicList';
import { StatsBar } from './components/StatsBar';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
  const { theme } = useAppContext();
  
  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>📚 Learning Dashboard</h1>
        <p>Track your learning journey</p>
        <ThemeToggle />
      </header>
      
      <main className="app-main">
        <StatsBar />
        <TopicForm />
        <TopicList />
      </main>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;