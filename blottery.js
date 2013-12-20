data = new Meteor.Collection('data');

if (Meteor.isClient) {
  Template.hello.helpers({
    jackpot: function(){
        x = data.findOne({'name': 'jackpot'});
	    test = x && x.balance;
	    return test/100000000;
        },
    address: function(){
	if (data)
		x = data.findOne({'name':'blogger'});
		test = x && x.bitcoin_address;
        return test;
        },
    dollars: function(){
        gox = data.findOne({'name': 'gox'});
        x = data.findOne({'name': 'jackpot'});
	    test = x && x.balance;
	    return test/ 100000000 * gox.exchange_rate;
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
