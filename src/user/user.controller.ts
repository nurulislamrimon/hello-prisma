import { Request, Response } from "express";
import { addUserService, getUserService } from "./user.service";

export const getUserController = async (req: Request, res: Response) => {
  const result = await getUserService();
  res.send({ success: true, data: result });
};
export const addUserController = async (req: Request, res: Response) => {
  try {
    const result = await addUserService(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
};
