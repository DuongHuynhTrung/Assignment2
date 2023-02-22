const Player = require("../models/player");
const Nation = require("../models/Nation");

module.exports = {
  viewPlayer: async (req, res) => {
    try {
      const clubList = [
        { id: "1", name: "Arsenal" },
        { id: "2", name: "MU" },
        { id: "3", name: "Chelsea" },
        { id: "4", name: "Manchester City" },
        { id: "5", name: "PSG" },
        { id: "6", name: "Inter Milan" },
        { id: "7", name: "Real Madrid" },
        { id: "8", name: "Barcelona" },
        { id: "9", name: "AC Milan" },
        { id: "10", name: "Sporting Lisbon" },
        { id: "11", name: "Atlético Madrid" },
      ];

      const positionList = [
        { id: "1", name: "Goalkeeper" },
        { id: "2", name: "Defender" },
        { id: "3", name: "Midfielder" },
        { id: "4", name: "Forward" },
      ];

      const players = await Player.find();
      const nations = await Nation.find();
      const alertMessage = req.flash("AlertMessage");
      const alertStatus = req.flash("AlertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      res.render("player", {
        players,
        nations,
        clubList,
        positionList,
        alert,
        title: "Player",
      });
    } catch (error) {
      res.redirect("/player");
    }
  },

  addPlayer: async (req, res) => {
    try {
      
      const { name, image, club, position, goals, isCaptain, nation } = req.body;

      const nation_id = await Nation.findOne({ name: nation});

      await Player.create({ name, image, club, position, nation_id, goals, isCaptain });

      req.flash("alertMessage", "Success add data Player");
      req.flash("alertStatus", "success");
      res.redirect("/player");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },

  editPlayer: async (req, res) => {
    try {
  
      const { id, name, image, club, position, goals, isCaptain, nation } = req.body;

      const player = await Player.findOne({ _id: id });

      const nation_id = await Nation.findOne({ name: nation});

      player.name = name;
      player.image = image;
      player.club = club;
      player.position = position;
      player.goals = goals;
      player.isCaptain = isCaptain;
      player.nation_id = nation_id;

      await player.save();

      req.flash("alertMessage", "Success edit data");
      req.flash("alertStatus", "success");

      res.redirect("/player");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");

      res.redirect("/player");
    }
  },

  deletePlayer: async (req, res) => {
    try {
      const { id } = req.params;

      const player = await Player.findOne({ _id: id });

      await player.remove();

      req.flash("alertMessage", "Success add data Player");
      req.flash("alertStatus", "success");
      res.redirect("/player");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
};
