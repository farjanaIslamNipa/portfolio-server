/* eslint-disable no-console */

import {TSkill} from "./skill.interface";
import {Skill} from "./skill.model";

//CREATE COURSE
const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);

  return result;
};

// GET ALL COURSES
const getAllSkillsFromDB = async () => {
;
  const result = await Skill.find();

  return result;
};

// GET SINGLE COURSE
const getSingleSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id)

  return result;
};

// UPDATE COURSE
const updateSkillIntoDB = async (id: string, payload: Partial<TSkill>) => {
 console.log(id, payload)
 
};

// DELETE COURSE
const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};


export const SkillServices = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
  updateSkillIntoDB,
  deleteSkillFromDB
};
