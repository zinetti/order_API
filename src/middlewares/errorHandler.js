import mongoose from "mongoose";
import BadRequest from "../error/BadRequest.js";
import InvalidData from "../error/InvalidData.js";
import NotFound from "../error/NotFound.js";
import ErroBase from "../error/ErroBase.js";

function errorHandler(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new BadRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new InvalidData(error).sendResponse(res);
  } else if (error instanceof NotFound) {
    error.sendResponse(res);
  } else if (error instanceof ErroBase) {
    error.sendResponse(res);
  } else {
    // fallback para qualquer outro erro
    res.status(500).json({
      status: 500,
      message: "Erro interno no servidor",
      details: [error.message]
    });
  }
}

export default errorHandler;
