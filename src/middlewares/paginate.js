async function paginate(req, res, next) {
    try {
        let { limit = 5, page = 1, sortfield = "_id:-1" } = req.query;
        const [field, sortDir] = sortfield.split(":");

        limit = parseInt(limit);
        page = parseInt(page);
        const sort = parseInt(sortDir);

        const resultado = req.resultado; // já é uma Query

        if (isNaN(limit) || isNaN(page) || limit <= 0 || page <= 0) {
            return res.status(400).json({ message: "Parâmetros inválidos. 'limit' e 'page' devem ser números positivos." });
        } else {
            const resultadoPaginado = await resultado
                .sort({ [field]: sort })
                .skip((page - 1) * limit)
                .limit(limit)
                .populate("cliente")
                .populate("pratos.prato");

            res.status(200).json(resultadoPaginado);
        }
    } catch (error) {
        next(error);
    }
}
export default paginate;
