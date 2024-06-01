import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import {SkillControllers} from './skill.controller'
import {SkillValidations} from './skill.validation'


const router = express.Router()

router.post(
  '/create-skill',
  SkillControllers.createSkill
  )
router.get('/', SkillControllers.getAllSkills)

router.get('/:id', SkillControllers.getSingleSkill)

router.patch('/:id', validateRequest(SkillValidations.updateSkillValidationSchema), SkillControllers.updateSkill)

router.delete('/:id', SkillControllers.deleteSkill)


 
export const SkillRoutes = router