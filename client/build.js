({
    appDir: './',
    baseUrl: './',
    dir: './dist',
    optimizeCss: 'standard',
    modules: [
        {
            name: 'js/app'
        }
    ],
    fileExclusionRegExp: /^((r|build)\.js|node_modules|bower_components)$/,
    removeCombined: true,
    paths: {
	underscore: 'lib/lodash/lodash.compat',
	jquery: 'lib/jquery/jquery',
	blockui: 'lib/blockui/jquery.blockUI',
	bootstrap: 'lib/bootstrap/bootstrap',
	backbone: 'lib/backbone/backbone',
	handlebars: 'lib/handlebars/handlebars',
	text: 'lib/requirejs-text/text',
	hbs: 'lib/require-handlebars-plugin/hbs'
    },
    shim: {
	underscore : {
		exports: '_',
	},
	bootstrap : {
		deps: ['jquery'],
		exports: '$'
	},
	backbone : {
		deps: ['jquery', 'underscore'],
		exports: 'Backbone'
	},
	handlebars: {
		exports: 'Handlebars'
	}
    }
})
