

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/zootopia'
      
  },



  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    
  }

};
