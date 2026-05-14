import { Schema, model } from "mongoose";

/**
 * Employee Schema Definition
 * - name: Required employee name
 * - email: Required, unique identifier for each employee
 * - mobile: Optional phone number
 * - designation: Required job title/position
 * - companyName: Required company affiliation
 */
const empSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of employee is required"],
    },
    email: {
      type: String,
      required: [true, "Email of employee is required"],
      unique: true,  // Enforces uniqueness at the database level
    },
    mobile: {
      type: Number,
    },
    designation: {
      type: String,
      required: [true, "Designation of employee is required"],
    },
    companyName: {
      type: String,
      required: [true, "Name of company is required"],
    },
  },
  {
    strict: "throw",     // Throws error for unknown fields
    versionKey: false,   // Removes __v field
    timestamps: true,    // Adds createdAt and updatedAt
  },
);

// Create and export the Mongoose model (collection name: "emps")
export const EmpModel = model("emp", empSchema);
