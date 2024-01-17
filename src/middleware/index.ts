import express from 'express';
 import { merge, get } from 'lodash';

import { getUserBySessionToken } from '../database/users'; 

export const isAuthenticated = async (req: any, res: any, next: any) => {
  try {
    const sessionToken = req.cookies['Secret-AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
//for delete operation :if the user is the owner of the account then only he can elete the account
export const isOwner = async (req: any, res: any, next: any) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.SendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}