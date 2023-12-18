
const express = required('express')
const mongoose = required('mongoose')
const patient = required('/modules/patientInfo')
const app = express
const port = 3000

// Handle POST request to create a new patient
app.post('/patients', async (req, res) => {
  try {
    const newPatient = new patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handle GET request to retrieve all patients

app.get('/patients', async (req, res) => {
  try {
    const patients = await patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handle GET request to retrieve a specific patient by patientId
app.get('/patients/:patientId', async (req, res) => {
  try {
    const patient = await patient.findOne({ patientId: req.params.patientId });
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Handle PUT request to update a specific patient by patientId
app.put('/patients/:patientId', async (req, res) => {
  try {
    const updatedPatient = await Patient.findOneAndUpdate(
      { patientId: req.params.patientId },
      req.body,
      { new: true }
    );
    if (updatedPatient) {
      res.json(updatedPatient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handle DELETE request to delete a specific patient by patientId
app.delete('/patients/:patientId', async (req, res) => {
  try {
    const deletedPatient = await Patient.findOneAndDelete({ patientId: req.params.patientId });
    if (deletedPatient) {
      res.json(deletedPatient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.
connect('mongodb+srv://fanboi:Jerrina200@fanboi.q4wyhqa.mongodb.net/Node+API')
.then(() => {
   console.log('connected to MongoDB')
   app.listen(3000,()=>{
     console.log('first node trials runnig on port 3000')
   })
 }).catch(() =>{
   console.log(error)
 })