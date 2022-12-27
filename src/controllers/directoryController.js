var directoryService = require('../services/directoryService')
let handleGetAllNationD = async (req, res) => {
    let data = await directoryService.getAllNationD()
    return res.status(200).json(data)
}
let handleGetAllTypeOfTrainingD = async (req, res) => {
    let message = await directoryService.getAllTypeOfTrainingD();
    return res.status(200).json(message);
}
let handleGetAllCultivationFormD = async (req, res) => {
    let message = await directoryService.getAllCultivationFormD();
    return res.status(200).json(message)
}
let handleGetAllRewardD = async (req, res) => {
    let message = await directoryService.getAllRewardD();
    return res.status(200).json(message)
}
let handleGetAllDisciplineD = async (req, res) => {
    let message = await directoryService.getAllDisciplineD();
    return res.status(200).json(message)
}
let handleGetAllReligionD = async (req, res) => {
    let message = await directoryService.getAllReligionD();
    return res.status(200).json(message)
}
let handleGetAllAcademicRank = async (req, res) => {
    let message = await directoryService.getAllAcademicRank();
    return res.status(200).json(message)
}
let handleGetAllDegree = async (req, res) => {
    let message = await directoryService.getAllDegree();
    return res.status(200).json(message)
}
let handleGetAllMajors = async (req, res) => {
    let message = await directoryService.getAllMajors();
    return res.status(200).json(message)
}
let handleGetAllSubject = async (req, res) => {
    let message = await directoryService.getAllSubject();
    return res.status(200).json(message)
}
let handleGetTrainingLevel = async (req, res) => {
    let message = await directoryService.getTrainingLevel();
    return res.status(200).json(message)
}
let handleGetAllContractType = async (req, res) => {
    let message = await directoryService.getAllContractType();
    return res.status(200).json(message)
}
let handleGetAllCivilServantRank = async (req, res) => {
    let message = await directoryService.getAllCivilServantRank();
    return res.status(200).json(message)
}
let handleGetAllSalaryScale = async (req, res) => {
    let message = await directoryService.getAllSalaryScale();
    return res.status(200).json(message)
}
let handleGetAllPosition = async (req, res) => {
    let message = await directoryService.getAllPosition();
    return res.status(200).json(message)
}
let handleGetAllRelationShip = async (req, res) => {
    let message = await directoryService.getAllRelationShip();
    return res.status(200).json(message)
}
let handleGetAllTypeOfOfficer = async (req, res) => {
    let message = await directoryService.getAllTypeOfOfficer();
    return res.status(200).json(message)
}
module.exports = {
    handleGetAllNationD,
    handleGetAllTypeOfTrainingD,
    handleGetAllCultivationFormD,
    handleGetAllRewardD,
    handleGetAllDisciplineD,
    handleGetAllReligionD,
    handleGetAllAcademicRank,
    handleGetAllDegree,
    handleGetAllMajors,
    handleGetAllSubject,
    handleGetTrainingLevel,
    handleGetAllContractType,
    handleGetAllCivilServantRank,
    handleGetAllSalaryScale,
    handleGetAllPosition,
    handleGetAllRelationShip,
    handleGetAllTypeOfOfficer
}