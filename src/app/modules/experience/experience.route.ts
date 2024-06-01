import express from 'express'
import {ExperienceControllers} from './experience.controller'
import validateRequest from '../../middleware/validateRequest'
import {ExperienceValidations} from './experience.validation'


const router = express.Router()

router.post(
  '/create-experience',
  ExperienceControllers.createExperience
  )
router.get('/', ExperienceControllers.getAllExperiences)

router.get('/:id', ExperienceControllers.getSingleExperience)

router.patch('/:id', validateRequest(ExperienceValidations.updateExperienceValidationSchema), ExperienceControllers.updateExperience)

router.delete('/:id', ExperienceControllers.deleteExperience)


 
export const ExperienceRoutes = router