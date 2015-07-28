Router.configure({
  layoutTemplate: "layout"
});

Router.map(function() {
	this.route('homepage', {
		path: '/'
	});
	this.route('background');
	this.route('contact');
	this.route('portfolio');

});