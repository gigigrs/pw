
const User = require('../models/user');

exports.listUsers = async (req, res) => {
    try{
        const users = await User.findAll(
            {
                attributes: ['username','loginuser','active'],
            });
            if (users.length===0){
                return res.status(404).json({mensagem: 'Usuario não encontrado'});
            }
            res.json(users);
        } catch(error){
            res.status(500).send(error.mensagem);
    }
};