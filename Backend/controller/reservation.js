import { Reservation } from "../models/reservation.js";



export const reservationController=async(req,res)=>{
    try {
      const { firstName, lastName, email, date, time, phone } = req.body;
  
      if (!firstName || !lastName || !email || !date || !time || !phone) {
        return res.status(400).json({ message: "Please fill all the fields." });
      }
  
      await Reservation.create({ firstName, lastName, email, date, time, phone });
  
      res.status(201).json({
        success: true,
        message: "Reservation sent successfully!",
      });
    } catch (error) {
     console.log("error",error)
  
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
};
  
