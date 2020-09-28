const TaskModel = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {

    const { macadress, type, title, description, when } = req.body;

    if(!macadress)
    return res.status(400).json({ error: 'macadress é obrigatório'});
    else
    next();
}

module.exports= TaskValidation;