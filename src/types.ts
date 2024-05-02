export interface Question {
  question: string;
  options: Option[];
  multipleOptions?: boolean
}

export interface Option {
  text: string;
  correct: boolean;
}

export interface Questions {
  name: string;
  questions: Question[];
}