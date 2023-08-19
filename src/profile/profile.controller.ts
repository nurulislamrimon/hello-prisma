import { Request, Response } from "express";
import { addProfileService, getProfileService } from "./profile.service";

export const getProfileController = async (req: Request, res: Response) => {
  const result = await getProfileService();
  res.send({ success: true, data: result });
};
export const addProfileController = async (req: Request, res: Response) => {
  try {
    const result = await addProfileService(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
};
