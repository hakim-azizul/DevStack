export type Category = 
  | "Frontend" 
  | "Backend" 
  | "Database" 
  | "Language" 
  | "Styling" 
  | "DevOps" 
  | "Tools";

export type Difficulty = 
  | "Beginner-Friendly" 
  | "Intermediate" 
  | "Advanced";

export interface Itech {
  id: number;
  name: string;
  category: Category;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
}