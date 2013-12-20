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
        bitstamp = data.findOne({'name': 'bitstamp'});
        test2 = bitstamp && bitstamp.exchange_rate;
        x = data.findOne({'name': 'jackpot'});
	    test = x && x.balance;
	    return (test/ 100000000 * test2).toFixed(2);
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
