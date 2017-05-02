Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: "home",
	data: function(){
		/* Posts est défini dans Post.js et petmet de récupérer les datas*/ 
		var posts = Posts.find();
		
		return {
			posts: posts
		};
	},
	/* waitOn s'exécute juste avant data et permet de ici de récupérer les données sur mongoDB */
	waitOn: function(){
		return Meteor.subscribe("allPostHeaders");
	}
});

Router.route('/add/:num1/:num2', {
    name: 'add',
    template: 'calc',
	data: function(){
		var num1 = parseInt(this.params.num1);
		var num2 = parseInt(this.params.num2);
		
		return {
			result : num1 + num2,
			num1 : num1,
			num2 : num2
		};
	}
});


Router.route('/posts', {
    name: "posts",
    data: function(){
    	return {
            posts: [
                {
                    title: "Premier post",
                    hide: true
                },
                {
                    title: "Second post",
                    hide: false
                },
                {
                    title: "Troisième post",
                    hide: false
                },
            ]
        };
	}
});

Router.route('/register', {
    name: "register",
    template: 'register',
    data: function(){

    }
});

Router.route('/login', {
    name: "connexion",
    template: 'connexion',
    data: function(){

    }
});