import express from "express";
import bookingRoutes from "../Modules/booking/booking.route";

// import userRoutes from "../modules/user/user.route";
const router = express.Router();

const moduleRoute = [
  {
    path: "/bookings",
    route: bookingRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
