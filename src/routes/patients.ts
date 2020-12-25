import express from 'express';
const router = express.Router();
import patientsServices from '../services/patientsServices';
import { toNewPatientEntry } from '../utils';

router.get('/', (_req, res) => {
  res.status(200).json(patientsServices.getNonSensitiveEntriesPatients());
});

router.post('/', (req, res) => {
  const newPatient = toNewPatientEntry(req.body);
  const addedPatient = patientsServices.addPatient(newPatient);
  res.status(201).json(addedPatient);
});


export default router;