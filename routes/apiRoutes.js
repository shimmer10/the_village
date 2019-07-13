var db = require("../models");

module.exports = function(app) {

  // load index page
  app.get("/", function(req, res) {
    res.json("Welcome Page")
      res.render("index", { });
  });

  // load by category
  app.get("/category/:category", function(req, res) {
    res.json("category: " + req.params.category);
    // db.Place.findall({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // load by username
  app.get("/user/:id", function(req, res) {
    res.json("username: " + req.params.username);
    // db.User.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // load by place
  app.get("/place/:id", function(req, res) {
    res.json("place: " + req.params.place);
    // db.Place.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // create place
  app.post("/place", function (req, res) {
    req.json("place added");
    // var place = req.body;

    // db.Place.create({
    //   exampleOne: place.exampleOne
    // }).then(function (result) {
    //   res.redirect('back');
    // });
  });

  // create review
  app.post("/review", function (req, res) {
    req.json("review added");
    // var review = req.body;

    // db.Review.create({
    //   exampleOne: review.exampleOne
    // }).then(function (result) {
    //   res.redirect('back');
    // });
  });

  // create user
  app.post("/user", function (req, res) {
    req.json("user added");
    // var user = req.body;

    // db.User.create({
    //   exampleOne: user.exampleOne
    // }).then(function (result) {
    //   res.redirect('back');
    // });
  });

  // delete place
  app.delete("/place/:id", function (req, res) {
    // db.Place.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function (result) {
    //   res.json(result);
    // })
  });

  // delete review
  app.delete("/review/:id", function (req, res) {
    // db.Review.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function (result) {
    //   res.json(result);
    // })
  });

  // delete user
  app.delete("/user/:id", function (req, res) {
    // db.User.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function (result) {
    //   res.json(result);
    // })
  });
};
