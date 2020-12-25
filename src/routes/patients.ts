import express from 'express';
const router = express.Router();
import patientsServices from '../services/patientsServices';
import { toNewPatientEntry } from '../utils';

router.get('/', (_req, res) => {
  res.status(200).json(patientsServices.getNonSensitiveEntriesPatients());
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(patientsServices.getPatient(id));
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);
    const addedPatient = patientsServices.addPatient(newPatient);
    res.status(201).json(addedPatient);    
  } catch (error) {
    res.status(400).send(error.message);
  }

});


export default router;