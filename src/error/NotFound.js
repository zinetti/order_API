import ErroBase from "./ErroBase.js";

class NotFound extends ErroBase{
    constructor(message = "Página não encontrada!", details = []){
        super(message, 404, details)
    }
}

export default NotFound;