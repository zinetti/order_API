import ErroBase from "./ErroBase.js";

class BadRequest extends ErroBase{
    constructor(message = "Um ou mais dados estão incorretos: ", details = []){
    super(message,400, details)
    }
}

export default BadRequest;