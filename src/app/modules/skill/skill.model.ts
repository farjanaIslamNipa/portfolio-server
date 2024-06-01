import { Schema, model } from "mongoose";
import {TSkill} from "./skill.interface";

const skillSchema = new Schema<TSkill>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  icon: {
    type: String,
    trim: true,
    required: true
  },
  years: {
    type: String,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

export const Skill =  model<TSkill>('Skill', skillSchema)