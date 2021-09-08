const menu = require('../data/menu.json')

module.exports ={
    detail: function(req, res, next) {
        let item= menu.find( item=> item.id=== +req.params.id)
        res.render('detalleMenu', {item});
      }
}