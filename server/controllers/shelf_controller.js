module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_shelf()
    .then( shelves => res.status(200).send(shelves) )
    .catch( () => res.status(500).send() );
  }
}