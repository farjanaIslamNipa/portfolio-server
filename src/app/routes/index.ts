import { Router } from "express";
import { CategoryRoutes } from "../modules/category/category.route";
import { ProjectRoutes } from "../modules/projects/projects.route";
import {ExperienceRoutes} from "../modules/experience/experience.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;