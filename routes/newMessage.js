module.exports = (req, res) => {
  console.log('posted');
  console.log(req.body);
  res.send({test: "blah"})
}