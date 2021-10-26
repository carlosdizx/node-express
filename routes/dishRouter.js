const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
const dishRouterId = express.Router();

dishRouter.use(bodyParser.json());
dishRouterId.use(bodyParser.json());

dishRouter
  .route("/")

  .get((request, response, next) => {
    response.end("Will send all the dishes to you!");
  })

  .post((request, response, next) => {
    response.end(
      "Will add the dish: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .put((request, response, next) => {
    response.statusCode = 403;
    response.end("PUT operation not supported on /dishes");
  })

  .delete((request, response, next) => {
    response.end("Deleting all the dishes!");
  });

dishRouterId
  .route("/:dishId")
  .get((request, response, next) => {
    response.end(
      "Will send details of the dish: " + request.params.dishId + " to you!"
    );
  })

  .post((request, response, next) => {
    response.statusCode = 403;
    response.end(
      "POST operation not supported on /dishes/" + request.params.dishId
    );
  })

  .put((request, response, next) => {
    response.write("Updating the dish: " + request.params.dishId + "\n");
    response.end(
      "Will update the dish: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .delete((request, response, next) => {
    response.end("Deleting dish:" + request.params.dishId);
  });

module.exports = dishRouter;
module.exports = dishRouterId;
