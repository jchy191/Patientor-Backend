import express from 'express';
const router = express.Router();
import diagnoses from '../../data/diagnoses.json';

router.get('/', (_req, res) => {
  res.status(200).json(diagnoses);
});


export default router;