import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {ExperienceServices} from "./experience.service";

const createExperience = catchAsync(async(req, res)=> {
  const result = await ExperienceServices.createExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully',
    data: result
  })
})

const getAllExperiences = catchAsync(async(req, res) => {
  const result = await ExperienceServices.getAllExperiencesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experiences retrieved successfully',
    data: result
  })
})

const getSingleExperience = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await ExperienceServices.getSingleExperienceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved successfully',
    data: result
  })
})

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceServices.updateExperienceIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience is updated successfully',
    data: result,
  });
});


const deleteExperience = catchAsync(async(req, res) => {
  const {id} = req.params;

  const result = await ExperienceServices.deleteExperienceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: result
  })
})



export const ExperienceControllers = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience
}

