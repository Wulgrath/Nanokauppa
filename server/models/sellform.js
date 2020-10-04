var mongoose = require('mongoose'),
		Schema 	 = mongoose.Schema;
		Regex 		= require('../regexp');

var SellFormSchema = new Schema({
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
		match: [Regex.WALLET, 'Invalid wallet address']
	},
	account: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
  sellAmount: {
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

module.exports = mongoose.model('Sell', SellFormSchema);