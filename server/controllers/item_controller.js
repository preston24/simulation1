module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {itName, itPrice} = req.body;
    const {params} = req;
    
    dbInstance.create_item( [itName, params.id, itPrice] )
    .then( (item) => {
      dbInstance.create_item2( [params.id] )
      .then( () => {
        res.status(200).send(item); 
      })
      .catch( () => res.status(500).send() );
    })
    .catch( () => res.status(500).send() );
  },


  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.read_item( [params.id] )
    .then( item => res.status(200).send(item) )
    .catch( () => res.status(500).send() );
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_items()
    .then( items => res.status(200).send(items) )
    .catch( () => res.status(500).send() );
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params, query} = req;

    dbInstance.update_item( [params.id, query.desc] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.delete_item( [params.id] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  }
}