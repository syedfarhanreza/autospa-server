import express from "express";
import bookingRoutes from "../Modules/booking/booking.route";
import serviceRoutes from "../Modules/service/service.route";
import slotRoutes from "../Modules/slot/slot.route";

// import userRoutes from "../modules/user/user.route";
const router = express.Router();

const moduleRoute = [
  {
    path: "/services",
    route: serviceRoutes,
  },
  {
    path: "/services",
    route: slotRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
