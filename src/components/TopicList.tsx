import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { TopicItem } from './TopicItem';
import type { TopicLevel } from '../models/ITopic';

type FilterType = 'all' | 'active' | 'completed';
type LevelFilter = 'all' | TopicLevel;

export const TopicList = () => {
  const { topics } = useAppContext();
  // Local state for filtering
  const [filter, setFilter] = useState<FilterType>('all');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');
  const [searchText, setSearchText] = useState('');

  // Filter topics based on all filters
  const filteredTopics = topics.filter((topic) => {
    // Filter by completion status
    if (filter === 'active' && topic.completed) return false;
    if (filter === 'completed' && !topic.completed) return false;
    
    // Filter by difficulty level
    if (levelFilter !== 'all' && topic.level !== levelFilter) return false;
    
    // Filter by search text
    if (searchText && !topic.title.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  if (topics.length === 0) {
    return (
      <div className="empty-state">
        <p>No topics yet. Add your first learning topic above! 📚</p>
      </div>
    );
  }

  return (
    <div className="topic-list">
      <div className="topic-list-header">
        <h2>My Learning Topics ({filteredTopics.length})</h2>
        
        <div className="filters-container">
          {/* Status Filter */}
          <div className="filter-buttons">
            <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            >
              All ({topics.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            >
              In Progress ({topics.filter(t => !t.completed).length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            >
              Completed ({topics.filter(t => t.completed).length})
            </button>
          </div>

          {/* Level Filter */}
          <div className="filter-buttons">
            <button
              onClick={() => setLevelFilter('all')}
              className={`filter-btn ${levelFilter === 'all' ? 'active' : ''}`}
            >
              All Levels
            </button>
            <button
              onClick={() => setLevelFilter('easy')}
              className={`filter-btn level-easy ${levelFilter === 'easy' ? 'active' : ''}`}
            >
              Easy ({topics.filter(t => t.level === 'easy').length})
            </button>
            <button
              onClick={() => setLevelFilter('medium')}
              className={`filter-btn level-medium ${levelFilter === 'medium' ? 'active' : ''}`}
            >
              Medium ({topics.filter(t => t.level === 'medium').length})
            </button>
            <button
              onClick={() => setLevelFilter('hard')}
              className={`filter-btn level-hard ${levelFilter === 'hard' ? 'active' : ''}`}
            >
              Hard ({topics.filter(t => t.level === 'hard').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search topics..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
            {searchText && (
              <button
                onClick={() => setSearchText('')}
                className="clear-search"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
      
      {filteredTopics.length === 0 ? (
        <div className="empty-state">
          <p>No topics match your filters. Try adjusting your search! 🔍</p>
        </div>
      ) : (
        <div className="topics-grid">
          {filteredTopics.map((topic) => (
            <TopicItem key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};