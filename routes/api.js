/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};


exports.ccpp = function (req, res) {
  mydb.query("select * from cpv2007 limit 10" ,function (err, data, fields) {
		if (err) throw err;
  		// console.log('The solution is: ', data);
  		res.send(data);
  });
};