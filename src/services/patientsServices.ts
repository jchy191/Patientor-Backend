import patientsData from '../../data/patients';
import { NewPatientEntry, Patient, PublicPatient } from '../types';

const patients: Array<Patient> = patientsData;
const getAllPatients = (): Array<Patient> => {
  return patients;
};

const getNonSensitiveEntriesPatients = (): Array<PublicPatient> => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const getPatient = (id: number): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newEntry = {
    id: Math.max(...patients.map(p => p.id)) + 1,
    entries: [],
    ...entry
  };
  patients.push(newEntry);
  return newEntry;
};

export default {
  getAllPatients,
  getNonSensitiveEntriesPatients,
  getPatient,
  addPatient
};