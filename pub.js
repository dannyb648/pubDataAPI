var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

exports.getAll = function(req, res){
	mongo.connect(url, function(err, db) {
		if (err) {
			throw err
		} else {
			var dbo = db.db('disso')
			dbo.collection('marstonsclayhanger').find().toArray(function(err, result){
				if(err){
					res.status(500).send(err)
				} else {
					res.status(200).send(result)
					db.close()
				}
			})
		}
	})
}

exports.getFirst = function(req, res){
	mongo.connect(url, function(err, db) {
		if (err) {
			throw err
		} else {
			var dbo = db.db('disso')
			dbo.collection('marstonsclayhanger').find({'timestamp': 1520676000}).toArray(function(err, result){
				if(err){
					res.status(500).send(err)
				} else {
					console.log(result)
					res.status(200).send(result)
					db.close()
				}
			})
		}
	})
}

exports.getTime = function(req, res){
	t = req.params.timestamp
	mongo.connect(url, function(err, db) {
		if (err) {
			throw err
		} else {
			var dbo = db.db('disso')
			dbo.collection('marstonsclayhanger').find({'timestamp': Number(req.params.timestamp)}).toArray(function(err, result){
				if(err){
					res.status(500).send(err)
				} else {
					res.status(200).send(result)
					db.close()
				}
			})
		}
	})
}
