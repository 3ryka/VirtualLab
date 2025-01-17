export interface ModuleData {
    currentSection: string;
    progress: string;
  }
  
  export interface ModulesData {
    module1: ModuleData;
    module2: ModuleData;
    module3: ModuleData;
  }
  
  export interface QuizScores {
    overallScore: number | null;
    quiz1: number | null;
    quiz2: number | null;
    quiz3: number | null;
  }
  
  export interface UserData {
    email: string;
    displayName: string;
    module: ModulesData;
    quizScores: QuizScores;
  }
  
  export type FirebaseError = {
    code: string;
    message: string;
  };
  