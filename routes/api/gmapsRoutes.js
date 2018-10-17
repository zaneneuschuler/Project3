const router = require("express").Router();
const gMapsClient = require("@google/maps").createClient({
  key: process.env.GMAPS_KEY}); //old

router.post("/", (req, res) => {
  let body = req.body;
  console.log(body);
  gMapsClient.geocode({address: `${body.address}, ${body.zip}`})
    .asPromise()
    .then((response) => {
      let data = response.json.results[0];
      res.json(data.geometry.location);
    });
});

module.exports = router;
