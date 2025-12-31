import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { ITopic, TopicLevel } from '../models/ITopic';

export type Theme = 'light' | 'dark';

interface AppContextType {
  topics: ITopic[];
  theme: Theme;
  addTopic: (title: string, description: string, level: TopicLevel) => void;
  toggleCompleted: (id: string) => void;
  deleteTopic: (id: string) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Default topics for initial state
const DEFAULT_TOPICS: ITopic[] = [
  {
    id: crypto.randomUUID(),
    title: 'React Hooks',
    description: 'Learn about useState, useEffect, useContext and custom hooks',
    level: 'medium',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'TypeScript Basics',
    description: 'Understanding types, interfaces, and generics in TypeScript',
    level: 'easy',
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Context API',
    description: 'Master React Context for global state management',
    level: 'hard',
    completed: false,
  },
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [theme, setTheme] = useState<Theme>('light');

  // useEffect #1: Load initial data from localStorage
  useEffect(() => {
    const savedTopics = localStorage.getItem('learning_topics');
    const savedTheme = localStorage.getItem('learning_theme');

    if (savedTopics) {
      // Load topics from localStorage if they exist
      try {
        const parsedTopics = JSON.parse(savedTopics);
        setTopics(parsedTopics);
      } catch (error) {
        console.error('Error parsing saved topics:', error);
        setTopics(DEFAULT_TOPICS);
      }
    } else {
      // Initialize with default topics if no saved data
      setTopics(DEFAULT_TOPICS);
    }

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme as Theme);
    }
  }, []); // Run only once when component mounts

  // useEffect #2: Save topics to localStorage whenever they change
  useEffect(() => {
    if (topics.length > 0) {
      localStorage.setItem('learning_topics', JSON.stringify(topics));
    }
  }, [topics]); // Run whenever topics array changes

  // useEffect #3: Apply theme to document body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('learning_theme', theme);
  }, [theme]); // Run whenever theme changes

  const addTopic = (title: string, description: string, level: TopicLevel) => {
    const newTopic: ITopic = {
      id: crypto.randomUUID(),
      title,
      description,
      level,
      completed: false,
    };
    setTopics((prevTopics) => [...prevTopics, newTopic]);
  };

  const toggleCompleted = (id: string) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, completed: !topic.completed } : topic
      )
    );
  };

  const deleteTopic = (id: string) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== id));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ topics, theme, addTopic, toggleCompleted, deleteTopic, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};