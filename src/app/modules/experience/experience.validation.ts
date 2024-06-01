import { z } from 'zod';

const createExperienceValidationSchema = z.object({
  body: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    companyDetails: z.string().optional(),
    fromDate: z.string(),
    toDate: z.string(),
    keyResponsibilities: z.array(z.string()),
    projectLink: z.array(z.string()).optional(),
    isDeleted: z.boolean().optional(),
  }),
});


const updateExperienceValidationSchema = z.object({
  body: z.object({
    jobTitle: z.string().optional(),
    companyName: z.string().optional(),
    companyDetails: z.string().optional(),
    fromDate: z.string().optional(),
    toDate: z.string().optional(),
    keyResponsibilities: z.array(z.string()).optional(),
    projectLink: z.array(z.string()).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ExperienceValidations = {
  createExperienceValidationSchema,
  updateExperienceValidationSchema
};