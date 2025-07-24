class ErroBase extends Error{
    constructor(message = "Erro interno no servidor!", status = 500 , details = []){
        super();
        this.message = message;
        this.status = status;
        this.details = details;
    }

    sendResponse(res){
        res.status(this.status).send({
            status: this.status,
            message: this.message,
            details: this.details.length > 0 ? this.details : undefined
        })
    }
}

export default ErroBase;