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

	// this.route('drinkability', {
	// 	path: '/portfolio#drinkability'

	// });
	// this.route('intro', {
	// 	path: '/portfolio#intro'

	// });

	// this.route('appetite', {
	// 	path: '/portfolio#appetite'
	
	// });

	// this.route('tictactoe', {
	// 	path: '/portfolio#tictactoe'
	
	// });
IronRouterAutoscroll.animationDuration = 500;
	

});