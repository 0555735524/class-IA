const express = required('express')
const mongoose = required('mongoose')
const patient = required('/modules/patientInfo')
const app = express


const vitalInfo = [];
app.post('/vitals',(req,res) =>{
  const { patientId, bloodPressure,temperature,pulse,SP02} = req.body;
  
  const patient = patients.find(p => p.patientId === patientId);
  if (!patient){
    return res.status(404).json({message: 'patient not found'});
  }
})

const newVitalInfo = {patientId, bloodPressure,temperature,pulse,SP02};
vitalInfo.push(newVitalInfo);