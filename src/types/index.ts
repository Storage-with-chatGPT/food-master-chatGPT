export interface IngredientType {
  type?: string;
  name: string;
  state: boolean;
}

export interface Useage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}
export interface Choices {
  finish_reason: string;
  index: number;
  logprobs: null | undefined;
  text: string;
}

export interface DataResponse {
  choices: Choices[];
  created: number;
  id: string;
  model: string;
  object: string;
  useage: Useage[];
}
