import { useAppContext } from '../context/AppContext';

export const StatsBar = () => {
  const { topics } = useAppContext();

  const completedCount = topics.filter((topic) => topic.completed).length;
  const totalCount = topics.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  
  // Count topics by difficulty level
  const easyCount = topics.filter((topic) => topic.level === 'easy').length;
  const mediumCount = topics.filter((topic) => topic.level === 'medium').length;
  const hardCount = topics.filter((topic) => topic.level === 'hard').length;

  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-label">Total Topics:</span>
        <span className="stat-value">{totalCount}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Completed:</span>
        <span className="stat-value">{completedCount}</span>
      </div>
      <div className="stat">
        <span className="stat-label">In Progress:</span>
        <span className="stat-value">{totalCount - completedCount}</span>
      </div>
      <div className="stat">
        <span className="stat-label">By Level:</span>
        <span className="stat-value">
          <span className="level-count easy">Easy: {easyCount}</span>
          {' | '}
          <span className="level-count medium">Medium: {mediumCount}</span>
          {' | '}
          <span className="level-count hard">Hard: {hardCount}</span>
        </span>
      </div>
      <div className="stat progress-stat">
        <span className="stat-label">Progress:</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="stat-value">{Math.round(progressPercentage)}%</span>
      </div>
    </div>
  );
};