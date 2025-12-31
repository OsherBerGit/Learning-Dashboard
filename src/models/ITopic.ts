export type TopicLevel = 'easy' | 'medium' | 'hard';

export interface ITopic {
  id: string;
  title: string;
  description: string;
  level: TopicLevel;
  completed: boolean;
}
