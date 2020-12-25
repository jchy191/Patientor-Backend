import patientsData from '../../data/patients';
import { NewPatientEntry, NonSensitivePatient, Patient } from '../types';

const patients: Array<Patient> = patientsData;
const getAllPatients = (): Array<Patient> => {
  return patients;
};

const getNonSensitiveEntriesPatients = (): Array<NonSensitivePatient> => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newEntry = {
    id: "d2773598-f723-11e9-8f0b-362b9e155667",
    ...entry
  };
  patients.push(newEntry);
  return newEntry;
};

export default {
  getAllPatients,
  getNonSensitiveEntriesPatients,
  addPatient
};