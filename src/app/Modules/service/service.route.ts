import { Router } from "express";
import {
  createServiceIntoDB,
  deleteServiceById,
  getAllServiceFromDB,
  getAllServiceNames,
  getServiceById,
  updateServiceById,
} from "./service.controller";
import serviceValidationSchema from "./service.validation";
import { validSchema } from "../../middlewares/validator";
const router = Router();
router.post("/", validSchema(serviceValidationSchema), createServiceIntoDB);

router.get("/", getAllServiceFromDB);
router.get("/g/names", getAllServiceNames);
router.get("/:id", getServiceById);
router.put("/:id", updateServiceById);
router.delete("/:id", deleteServiceById);

const serviceRoutes = router;

export default serviceRoutes;
