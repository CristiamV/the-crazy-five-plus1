export interface Course {
    id: number,
    level: Level,
    category: string,
    status: string   
  }
  
  export interface Level {
    name: string,
    number: number
  }