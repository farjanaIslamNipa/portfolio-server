import { Schema, model } from "mongoose";
import {TExperience} from "./experience.interface";

const ExperienceSchema = new Schema<TExperience>({
  jobTitle: {
    type: String,
    trim: true,
    required: true,
  },
  companyName: {
    type: String,
    trim: true,
    required: true
  },
  companyDetails: {
    type: String,
    trim: true,
  },
  fromDate: {
    type: String,
    trim: true,
  },
  toDate: {
    type: String,
    trim: true,
  },
  keyResponsibilities:{
    type: [String],
    required: true
  },
  projectLink: [String],
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

export const Experience =  model<TExperience>('Experience', ExperienceSchema)