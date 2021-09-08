const menu = require('../data/menu.json')

module.exports={
index: function(req, res, next) {
    res.render('index', {menu});
  },

}