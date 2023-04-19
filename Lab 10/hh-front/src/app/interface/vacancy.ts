import { Company } from '../interface/company';

export interface Vacancy {
    id: number;
    title: string;
    description: string;
    salary: number;
    company: Company;
  }

  
