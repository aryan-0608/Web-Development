// Searching for data in mongo db
use harryKart

// this queray will   return all the object with rating equal to 3.5

db.items.find({rating:3.5})
db.items.find({rating:{$gt:3.5}}) // this query will return all the objects with rating greater than 3.5

// And operator
db.items.find({rating:{$gt:3.5}, price:{$lt:500}})

db.items.find({ $or: [{rating:{$gt:3.5}}, {price:{$lt:500}}] }) // this query will return all the objects with rating greater than 3.5 or price less than 500