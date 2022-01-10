export interface Channel {
    id: number;
    name: string;
    description: string;
  }
  
  export const channels = [
    {
      id: 1,
      name: 'Amazon Prime 9 SD',
      description: 'La chaîne Amazon Prime canal 9 en basse définition'
    },
    {
      id: 2,
      name: 'Amazon Prime 9 HD',
      description: 'La chaîne Amazon Prime canal 9 en haute définition'
    },
    {
      id: 3,
      name: 'Canal Plus FHD',
      description: 'La chaîne Canal Plus en très haute définition'
    }
  ];