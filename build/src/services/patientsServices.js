"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const patients = patients_1.default;
const getAllPatients = () => {
    return patients;
};
const getNonSensitiveEntriesPatients = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (entry) => {
    const newEntry = Object.assign({ id: "d2773598-f723-11e9-8f0b-362b9e155667" }, entry);
    patients.push(newEntry);
    return newEntry;
};
exports.default = {
    getAllPatients,
    getNonSensitiveEntriesPatients,
    addPatient
};
