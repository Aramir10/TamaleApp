var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected tamale order ")
});

var tamaleSchema = mongoose.Schema({
    name: String

});
tamaleSchema.methods.speak = function()
{

	var greeting;
	if(this.name!=null) greeting = "The kind of tamales you want is " + this.name;
	else greeting = "Thats an error";
	 console.log(greeting);

}


var Tamale = mongoose.model('Tamale', tamaleSchema);

var pork = new Tamale({ name: 'pork tamale' });
var bean = new Tamale({ name: 'bean tamale' });



pork.save(function (err, pork) {
  if (err) return console.error(err);
  pork.speak();
});

Tamale.find(function (err, tamales) {
  if (err) return console.error(err);
  console.log(tamales);
});

// Kitten.find({ name: /^luna/ }, callback);
