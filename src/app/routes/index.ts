import { Router } from "express";
import { CategoryRoutes } from "../modules/category/category.route";
import { ProjectRoutes } from "../modules/projects/projects.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;