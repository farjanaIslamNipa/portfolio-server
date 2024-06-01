import express from 'express'
import { ProjectControllers } from './projects.controller'
import validateRequest from '../../middleware/validateRequest'
import { ProjectValidations } from './projects.validation'

const router = express.Router()

router.post(
  '/create-Project',
  ProjectControllers.createProject
  )
router.get('/', ProjectControllers.getAllProjects)

router.get('/:id', ProjectControllers.getSingleProject)

router.patch('/:id', validateRequest(ProjectValidations.updateProjectValidationSchema), ProjectControllers.updateProject)

router.delete('/:id', ProjectControllers.deleteProject)


 
export const ProjectRoutes = router