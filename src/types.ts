export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Entry {

}

export interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
export type NewPatientEntry = Omit<Patient, 'id' | 'entries'>;

export enum Gender {
  Male = 'male',
  Famale = 'female',
  Other = 'other'
}