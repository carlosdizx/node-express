const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();
const promotionRouterId = express.Router();

promotionRouter.use(bodyParser.json());
promotionRouterId.use(bodyParser.json());

promotionRouter
  .route("/")

  .get((request, response, next) => {
    response.end("Will send all the promotions to you!");
  })

  .post((request, response, next) => {
    response.end(
      "Will add the promotion: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .put((request, response, next) => {
    response.statusCode = 403;
    response.end("PUT operation not supported on /promotions");
  })

  .delete((request, response, next) => {
    response.end("Deleting all the promotions!");
  });

promotionRouterId
  .route("/:promotionId")
  .get((request, response, next) => {
    response.end(
      "Will send details of the promotion: " + request.params.promotionId + " to you!"
    );
  })

  .post((request, response, next) => {
    response.statusCode = 403;
    response.end(
      "POST operation not supported on /promotions/" + request.params.promotionId
    );
  })

  .put((request, response, next) => {
    response.write("Updating the promotion: " + request.params.promotionId + "\n");
    response.end(
      "Will update the promotion: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .delete((request, response, next) => {
    response.end("Deleting promotion:" + request.params.promotionId);
  });

module.exports = promotionRouter;
module.exports = promotionRouterId;
