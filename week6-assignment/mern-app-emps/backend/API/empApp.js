import exp from "express";
import { EmpModel } from "../models/EmpModel.js";
export const empRoute = exp.Router();

// ==========================================
// POST /employees — Create a new employee
// Expects: { name, email, mobile, designation, companyName }
// ==========================================
empRoute.post("/employees", async (req, res) => {
  const newEmp = req.body;
  const empDoc = new EmpModel(newEmp);  // Create Mongoose document
  await empDoc.save();                   // Persist to MongoDB
  res.status(201).json({ message: "Emp created" });
});

// ==========================================
// GET /employees — Read all employees
// Returns the full list of employee documents
// ==========================================
empRoute.get("/employees", async (req, res) => {
  let empList = await EmpModel.find();  // Fetch all documents from collection
  res.status(200).json({ message: "list of emps", payload: empList });
});

// ==========================================
// PUT /employees/:id — Update an employee by MongoDB _id
// Uses findByIdAndUpdate with $set to update only provided fields
// ==========================================
empRoute.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;
  // Find by _id and update, returning the updated document
  let updatedEmp = await EmpModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },  // Spread to update only provided fields
    },
    { returnDocument: "after" },  // Return the updated doc (not the old one)
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

// ==========================================
// DELETE /employees/:id — Delete an employee by MongoDB _id
// Permanently removes the document from the collection
// ==========================================
empRoute.delete("/employees/:id", async (req, res) => {
  let deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});
