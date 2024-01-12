const express = require("express");

const admin = require("firebase-admin");
const cors = require('cors')
const serviceAccount = require("./key.json");
const app = express();
app.use(cors())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/addemployee", async (req, res) => {
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  };

  const response = db.collection("employees").add(employee);
  res.send(response);
});

app.get("/getEmployees", async (req, res) => {
  try {
    const userRef = db.collection("employees");
    const employees = await userRef.get();
    let responseArr = [];

    employees.forEach(doc => {
      responseArr.push(doc.data());
    });

    res.json(responseArr);
  } catch (error) {

    res.status(500).json({error:error.message})
  }
});

const POST = process.env.POST || 8080;

app.listen(POST, () => {
  console.log("SERVER RUNNING");
});
