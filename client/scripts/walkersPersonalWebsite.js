Meteor.startup(function() {
    if (Meteor.isClient) {
        return SEO.config({
            'title': 'Walker Flieller is a full-stack web software developer, currently residing in Austin, Texas. Focusing on dynamic web applications built with technologies such as javascript, ruby, meteor.js, node.js and many more.',
            'meta': {
                'fragment': '!',
                'description': 'Walker Flieller is a full-stack web software developer, currently residing in Austin, Texas. Focusing on dynamic web applications built with technologies such as javascript, ruby, meteor.js, node.js and many more.',
                'copyright': 'All rights reserved, Walker Flieller.',
                'keywords': 'walker flieller, flieller, web developer, software developer, programmer, austin, texas, tech, portfolio, website developer, custom, custom websites, custom apps, custom applications, website, app, application, seo, online marketing, digital marketing, digital marketers, digital design, digital presence, analytics, data, custom analytics, online, online success, online presence, seo targeting, austin, texas',
                'viewport': 'width=device-width, initial-scale=1',
                'site_name': 'Walker Flieller',
                'url': 'http://walkerflieller.com',
                'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                'X-UA-Compatible': 'IE=edge,chrome=1',
                'HandheldFriendly': 'true',
                'apple-mobile-web-app-capable': 'yes',
                'apple-mobile-web-app-status-bar-style': 'black',
                'referrer': 'never'

            },

            'og': {

                'title': 'Walker Flieller is a full-stack web software developer, currently residing in Austin, Texas. Focusing on dynamic web applications built with technologies such as javascript, ruby, meteor.js, node.js and many more.',
                'description': 'Walker Flieller is a full-stack web software developer, currently residing in Austin, Texas. Focusing on dynamic web applications built with technologies such as javascript, ruby, meteor.js, node.js and many more.',
                'image': 'img/walker.jpg',
                'type': 'website',
                'locale': 'en_us',
                'site_name': 'Walker Flieller',
                'url': 'http://walkerflieller.com'
            }
        });

    }
});
