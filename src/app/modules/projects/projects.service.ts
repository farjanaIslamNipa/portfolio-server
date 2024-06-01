/* eslint-disable no-console */
import { TProject } from './projects.interface';
import { Project } from './projects.model';

//CREATE COURSE
const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);

  return result;
};

// GET ALL COURSES
const getAllProjectsFromDB = async () => {
;
  const result = await Project.find();

  return result;
};

// GET SINGLE COURSE
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id)

  return result;
};

// UPDATE COURSE
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
 console.log(id, payload)
 
};

// DELETE COURSE
const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};


export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB
};
