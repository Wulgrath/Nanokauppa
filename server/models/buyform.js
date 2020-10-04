var mongoose 				= require('mongoose'),
		Schema 	 				= mongoose.Schema,
		Regex 					= require('../regexp'),
		autoIncrement		= require('mongoose-auto-increment')

var connection = mongoose.createConnection("mongodb://localhost/nanokauppa");
//luodaan yhteys autoIncrementille tietokantaan
autoIncrement.initialize(connection);

var BuyFormSchema = new Schema({
	firstname: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		match: [Regex.FIRSTNAME, 'Invalid first name.']
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		match: [Regex.LASTNAME, 'Invalid last name.']
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		match: [Regex.EMAIL, 'Invalid email.']
	},
  wallet: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		match: [Regex.WALLET, 'Invalid wallet address']
  },
  buyAmount: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		match: [Regex.AMOUNT, 'Invalid amount.']
	},
	uploaded: {
		type: Date,
		default: Date.now
	},
},{runSettersOnQuery: true});
//määritetään autoIncrementin toiminta
BuyFormSchema.plugin(autoIncrement.plugin, { 
	model: 'reference',
	field: 'referenceId',
	startAt: 1000,
	incrementBy: 13
});

var reference = connection.model('referenceID', BuyFormSchema);

module.exports = mongoose.model('Buy', BuyFormSchema);