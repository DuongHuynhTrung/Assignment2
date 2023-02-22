const Nation = require("../models/Nation");
const Player = require("../models/player");

module.exports = {
  viewNation: async (req, res) => {
    try {
      const nation = await Nation.find();

      const alertMessage = req.flash("AlertMessage");
      const alertStatus = req.flash("AlertStatus");

      const alert = { message: alertMessage, status: alertStatus }
      
      res.render('nation', {
        nation,
        alert,
        title: "Nation"
      })
    } catch(error) {
      res.redirect('/nation')
    }
  },

  addNation: async (req, res) => {
    try {
      const { image, name, description } = req.body;

      await Nation.create({ image, name, description });

      req.flash("alertMessage", "Success add data Restaurant");
      req.flash("alertStatus", "success");
      res.redirect('/nation');
    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/nation')
    } 
  },

  editNation: async (req, res) => {
    try{

      const { id, image, name, description } = req.body;
      const nation = await Nation.findOne({ _id: id });

      nation.image = image;
      nation.name = name;
      nation.description = description;

      await nation.save();

      req.flash("alertMessage", "Success edit data mahasiswa");
      req.flash("alertStatus", "success");

      res.redirect("/nation");
    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");

      res.redirect("/nation");
    }
  },

  deleteNation: async (req, res) => {
    try{
      const { id } = req.params;

      const nation = await Nation.findOne({ _id: id });

      const player = await Player.findOne({nation_id: id});

      if (player) {
        req.flash("alertMessage", "Success delete data mahasiswa");
        req.flash("alertStatus", "success");
        res.redirect("/nation");
      } else {
        await nation.remove();
  
        req.flash("alertMessage", "Success add data nation");
        req.flash("alertStatus", "success");
        res.redirect('/nation');

      }

    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/nation')
    }
  }
}