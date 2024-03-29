import express from 'express';

import { deleteUserById, getUsers, getUserById } from '../database/users';
import { createJob, ApplyJob, } from '../database/jobs';


export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
//deleting the user
export const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);
    console.log("DELETED USER");
    

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
//updating the profile of the userr
export const updateUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);
    
    user.username = username;
    console.log("UPDATED USERNAME");
    
    await user.save();
    
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


//CreateJob

export const CreateJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const CreatedJob = await CreateJob(id);
    console.log("CreatedJob");
    

    return res.json(CreatedJob);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);




    //ApplyforJob
export const ApplyJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const AppliedJob = await ApplyJob(id);
    console.log("AppliedJob");
    

    return res.json(AppliedJob);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);

    
  
