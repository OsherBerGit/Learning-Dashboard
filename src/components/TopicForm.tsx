import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { TopicLevel } from '../models/ITopic';

export const TopicForm = () => {
  const { addTopic } = useAppContext();
  
  // State for form fields - title, description, level
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState<TopicLevel>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that fields are not empty
    if (title.trim() && description.trim()) {
      // Call Context function to add new Topic
      addTopic(title, description, level);
      
      // Reset form after successful submission
      setTitle('');
      setDescription('');
      setLevel('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="topic-form">
      <h2>Add New Topic</h2>
      
      <div className="form-group">
        <label htmlFor="title">Topic Name:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., React Hooks"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description of the topic..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="level">Difficulty Level:</label>
        <select
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value as TopicLevel)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button type="submit" className="btn-add">Add Topic</button>
    </form>
  );
};