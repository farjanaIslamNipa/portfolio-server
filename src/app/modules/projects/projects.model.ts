import { Schema, model } from "mongoose";
import { TProject} from "./projects.interface";

const projectSchema = new Schema<TProject>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    trim: true,
  },
  techStack:[String],
  tools: [String],
  gitLink: String,
  liveLink: String,
  projectDetails: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

export const Project =  model<TProject>('Project', projectSchema)