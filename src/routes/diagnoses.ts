import express from 'express';
const router = express.Router();
import diagnosesService from '../services/diagnosesService';

router.get('/', (_req, res) => {
  res.status(200).json(diagnosesService.getDiagnoses());
});


export default router;