const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        res.status(400).json({ message: "Campo title é obrigatorio" });
    }

    if (body.title === "") {
        res.status(400).json({ message: "Campo não pode ser vazio" });
    }

    next();
};

module.exports = {
    validateBody,
};
