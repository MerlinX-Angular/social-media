import {Request, Response} from 'express';

export function logout(req: Request, res: Response) {
    res.clearCookie("siteCookie");
    res.status(200).json({message: 'Logout Successful'});
}
