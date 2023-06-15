import {Router} from "express";
import controller from "../controllers/projects.controller.js"


  const router= Router();

//   GET Lista de proyetos
  router.get("/", controller.all);


// POST de crear un proyecto
  router.post("/", controller.create) 

// GET un proyecto
  app.get("/:id", controller.one);

// elimina elemento
  app.delete("/:id", controller.destroy);

// actualizar
  app.put("/:id", controller.update)

export default router;