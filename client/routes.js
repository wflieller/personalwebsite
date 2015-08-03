Router.configure({
  layoutTemplate: "layout"
});

Router.map(function() {
	this.route('homepage', {
		path: '/'
	});
	this.route('background');
	this.route('portfolio');
	// this.route('blog');

});