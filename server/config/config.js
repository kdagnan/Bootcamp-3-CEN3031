//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://kdagnan:Tw3RJrLKuH9eJgq0@uflistingkdagnan-w3fsm.mongodb.net/UFListingKDagnan', //place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'b7c23c4c9fd74c4eb84efb149e99c376' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};