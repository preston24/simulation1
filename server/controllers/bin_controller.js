module.exports = {

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {bin_name, shelves_id, has_item} = req.body;

    dbInstance.create_bin( [bin_name, shelves_id, has_item] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },


  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;
    dbInstance.read_bin( [params.id] )
    .then( bin => res.status(200).send(bin) )
    .catch( () => res.status(500).send() );
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_bins()
    .then( bins => res.status(200).send(bins) )
    .catch(() => res.status(500).send());
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params, query} = req;

    dbInstance.update_bin( [params.id, query.desc] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.delete_bin( [params.id] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  }
}