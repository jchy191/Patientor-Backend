"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const patientsServices_1 = __importDefault(require("../services/patientsServices"));
const utils_1 = require("../utils");
router.get('/', (_req, res) => {
    res.status(200).json(patientsServices_1.default.getNonSensitiveEntriesPatients());
});
router.post('/', (req, res) => {
    const newPatient = utils_1.toNewPatientEntry(req.body);
    const addedPatient = patientsServices_1.default.addPatient(newPatient);
    res.status(201).json(addedPatient);
});
exports.default = router;
