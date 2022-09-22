const adData = require("../../data/addata.json");

export default function getAds(req, res) {
  res.status(200).json(adData);
}
