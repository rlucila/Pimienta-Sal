const menu = require('../data/menu.json')

module.exports={
index: function(req, res) {
   return res.render('index', {menu});
  }

}