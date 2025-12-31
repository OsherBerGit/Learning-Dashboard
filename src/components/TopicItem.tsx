import { useAppContext } from '../context/AppContext';
import type { ITopic } from '../models/ITopic';

interface TopicItemProps {
  topic: ITopic;
}

export const TopicItem = ({ topic }: TopicItemProps) => {
  const { toggleCompleted, deleteTopic } = useAppContext();

  const getLevelClass = (level: string) => {
    return `level-${level}`;
  };

  return (
    <div className={`topic-item ${topic.completed ? 'completed' : ''}`}>
      <div className="topic-header">
        <h3>{topic.title}</h3>
        <span className={`level-badge ${getLevelClass(topic.level)}`}>
          {topic.level}
        </span>
      </div>
      
      <p className="topic-description">{topic.description}</p>
      
      <div className="topic-actions">
        <button
          onClick={() => toggleCompleted(topic.id)}
          className={`btn-toggle ${topic.completed ? 'btn-uncomplete' : 'btn-complete'}`}
        >
          {topic.completed ? '✓ Completed' : 'Mark Complete'}
        </button>
        <button
          onClick={() => deleteTopic(topic.id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};