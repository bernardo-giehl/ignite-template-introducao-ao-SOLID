import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id  = request.header("user_id");
      const all = this.listAllUsersUseCase.execute({user_id});
      return response.json(all);
    } catch (error) {
      return response.status(400).json({error});
    }
  }
}

export { ListAllUsersController };
