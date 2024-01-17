// import {Router} from 'express'
// import jwtAuth from 'jsonwebtoken'
// import { JobSchema } from '../database/Jobs';
// const router2=Router()
// const Job = require("../database/Jobs");
// // To add new job
// router2.post("/jobs", jwtAuth, (req:any, res:any) => {
//     const user = req.user;
  
//     if (user.type != res.body.getUserById()) {
//       res.status(401).json({
//         message: "You don't have permissions to add jobs",
//       });
//       return;
//     }
  
//     const data = req.body;
  
//     let job = new JobSchema({
//       userId: user._id,
//       title: data.title,
//       maxApplicants: data.maxApplicants,
//       maxPositions: data.maxPositions,
//       dateOfPosting: data.dateOfPosting,
//       acceptedCandidates:data.acceptedCandidates
//     });
  
//     job
//       .save()
//       .then(() => {
//         res.json({ message: "Job added successfully to the database" });
//       })
//       .catch((err:any) => {
//         res.status(400).json(err);
//       });
//   });

//   export default router2