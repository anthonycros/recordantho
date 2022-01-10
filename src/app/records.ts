export interface Record {
    id: number;
    chaine: string;
    debut: string;
    fin: string;
    description: string;
  }
  
  export const records = [
    {
      id: 1,
      chaine: 'Amazon Prime 9 SD',
      debut: 'Dimanche 09/01/2022 à 17h00',
      fin: 'Dimanche 09/01/2022 à 18h00',
      description: 'Emission culte sur le foot'
    },
    {
      id: 2,
      chaine: 'Amazon Prime 9 HD',
      debut: 'Lundi 10/01/2022 à 21h00',
      fin: 'Lundi 10/01/2022 à 22h30',
      description: 'Match OM-PSG'
    },
    {
      id: 3,
      chaine: 'Canal Plus FHD',
      debut: 'Mardi 11/01/2022 à 21h00',
      fin: 'Mardi 11/01/2022 à 23h00',
      description: 'Film du mardi soir'
    }
  ];