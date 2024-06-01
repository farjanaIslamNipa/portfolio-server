import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./projects.service";

const createProject = catchAsync(async(req, res)=> {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result
  })
})

const getAllProjects = catchAsync(async(req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved successfully',
    data: result
  })
})

const getSingleProject = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await ProjectServices.getSingleProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result
  })
})

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProjectIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is updated successfully',
    data: result,
  });
});


const deleteProject = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await ProjectServices.deleteProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result
  })
})



export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject
}

