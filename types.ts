
export interface UserState {
  userName: string;
  hasCompletedTutorial: boolean;
  xp: number;
  level: number;
  streak: number;
  badges: string[];
  lastActiveDate: string | null;
}

export enum FollowerType {
  ALIENATED = "소외형",
  CONFORMIST = "순응형",
  PRAGMATIST = "실무형",
  PASSIVE = "수동형",
  EXEMPLARY = "모범형",
  UNKNOWN = "진단전"
}

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  stage: string;
  isLocked: boolean;
}

export interface AppConfig {
  theme: 'light' | 'dark';
}
