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
        x = data.findOne({'name': 'jackpot'});
	test = x && x.balance;
	return test/ 100000000 * 600;
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
