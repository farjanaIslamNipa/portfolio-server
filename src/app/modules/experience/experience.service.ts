/* eslint-disable no-console */

import {TExperience} from "./experience.interface";
import {Experience} from "./experience.model";

//CREATE COURSE
const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);

  return result;
};

// GET ALL COURSES
const getAllExperiencesFromDB = async () => {
;
  const result = await Experience.find();

  return result;
};

// GET SINGLE COURSE
const getSingleExperienceFromDB = async (id: string) => {
  const result = await Experience.findById(id)

  return result;
};

// UPDATE COURSE
const updateExperienceIntoDB = async (id: string, payload: Partial<TExperience>) => {
 console.log(id, payload)
 
};

// DELETE COURSE
const deleteExperienceFromDB = async (id: string) => {
  const result = await Experience.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};


export const ExperienceServices = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
  getSingleExperienceFromDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB
};
