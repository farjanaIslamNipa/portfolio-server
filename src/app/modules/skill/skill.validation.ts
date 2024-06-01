import { z } from 'zod';

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    icon: z.string(),
    years: z.string().optional(),
    isDeleted: z.boolean().optional()
  }),
});


const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
    years: z.string().optional(),
    isDeleted: z.boolean().optional()
  }),
});

export const SkillValidations = {
  createSkillValidationSchema,
  updateSkillValidationSchema
};