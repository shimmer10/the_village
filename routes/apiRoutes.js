/********************************
 * apiRoutes for The Village
 * 
 * This file is used to for 
 * our routes and their
 * database calls rendering
 * 
 * @author The Village People
 * 
 * 2019-07-13
 ********************************/

var db = require("../models");

module.exports = function (app) {

  // load index page
  app.get("/", function (req, res) {
    res.render("index", {});
  });

  // load search page
  app.get("/search", function (req, res) {
    db.Place.findAll({
      attributes: ['id', 'category', 'place_name', 'city', 'jurisdiction']
    }).then(function (dbPlaceFindallResult) {
      res.render("search", { place: dbPlaceFindallResult });
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        console.log(err);
        res.status(200).end('not ok');
      });
  });

  // load place page
  app.get("/place/:id", function (req, res) {
    db.Place.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (placeResult) {
      db.Review.findAll({
        where: {
          PlaceId: req.params.id
        }
      }).then(function (reviewResult) {
        var allData = {
          place: placeResult,
          reviews: reviewResult
        }
        res.render("place", allData);
      });
    });
  });

  // load review table
  app.get("/review/:placeId", function (req, res) {
    db.Review.findAll({
      where: {
        PlaceId: req.params.placeId
      }
    }).then(function (result) {
      return res.json(result);
    });
  });


  // load by category
  app.get("/category/:category", function (req, res) {
    res.json("category: " + req.params.category);
    // db.Place.findall({ where: { category: req.params.category } }).then(function(result) {
    //   res.render("search", {
    //     example: result
    //   });
    // });
  });

  // load by username
  app.get("/user/:id", function (req, res) {
    res.json("username: " + req.params.username);
    // db.User.findOne({ where: { id: req.params.id } }).then(function(resuolt) {
    //   res.render("search", {
    //     example: result
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  // create place
  app.post("/place", function (req, res) {
    var place = req.body;

    db.Place.create({
      category: place.category,
      place_name: place.place_name,
      street_address: place.street_address,
      city: place.city,
      jurisdiction: place.jurisdiction,
      zip_code: place.zip_code,
      phone_number: place.phone_number,
      summary: place.summary,
      services: place.services,
      external_link: place.external_link
    }).then(function (result) {
      res.redirect('/search');
    })
      .catch(function (err) {
        console.log(err);
      });
  });

  // create review
  app.post("/review", function (req, res) {
    var review = req.body;

    db.Review.create({
      rating: review.rating,
      comments: review.comments,
      PlaceId: review.PlaceId,
      UserId: review.UserId
    }).then(function (result) {
      res.redirect('back');
    })
      .catch(function (err) {
        console.log(err);
      });
  });

  // create user
  app.post("/user", function (req, res) {
    // these are possible responses to return to the front end
    var dupResponse = "duplicate email";  // email is already in the database for a different use
    var okResponse = "ok";                // user created successfully
    var alreadyRegResponse = "already registered"; // user already in database
    // determine if user already exists:
    db.User.count({
      where: {
        user_name: req.body.username,
        email_address: req.body.email,
      }
    }).then(count => {
      // if count is zero then this one is new.
      // if it alredy exists then no need to do anything more to db
      if (count === 0) {
        db.User.create({
          user_name: req.body.username,
          email_address: req.body.email,
        }).then(function (dbUserCreateResult) {
          res.status(200).end(dbUserCreateResult.dataValues.id.toString());
        })
          .catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            // this probably means someone is re-using an aleady existing email address
            // email address is unique in the User table so this will throw an error
            console.log(`
            Error in post for User db:
            Error Name: ${err.name}
            Error Code: ${err.parent.code}
            Error SQL Message: ${err.parent.sqlMessage}
            failed to add new User
            `);
            res.status(200).end(dupResponse);
          });
      } else {
        // User already exists just respond with ok
        db.User.findOne({
          where: {
            user_name: req.body.username,
            email_address: req.body.email,
          }
        }).then(function (userResult) {
          res.status(200).end(userResult.dataValues.id.toString());
        });
      }
    })
  });

  // delete place
  app.delete("/place/:id", function (req, res) {
    db.Place.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
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
