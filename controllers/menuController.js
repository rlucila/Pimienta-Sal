const menu = require('../data/menu.json')
const fs= require('fs');
const path= require('path');


module.exports= {
     detail: (req, res)=>{
         return res.render('detalleMenu', {
            plato: menu.find( plato =>  plato.id === +req.params.id) 
         })
     }
}