import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().optional(),
    techStack: z.array(z.string()),
    tools: z.array(z.string()).optional(),
    gitLink: z.string(),
    liveLink: z.string(),
    projectDetails: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});


const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    techStack: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    gitLink: z.string().optional(),
    liveLink: z.string().optional(),
    projectDetails: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema
};