Template.connexion.events({
    "submit form": function(event, template) {
		event.preventDefault();

		var user = $("input[name='username']").val();
		var password = $("input[name='password']").val();

		// Cas 1 : Login en utilisant le nom d'utilisateur
		Meteor.loginWithPassword({
			username: user
		}, password, function(err) {
			if (err) {
				alert(err.reason)
			} else {
				Router.go('home'); // Ceci est une redirection depuis un event/helper, elle est basée sur le nom de la route
			}
		});

		// Cas 2 : Login en utilisant l'email
		Meteor.loginWithPassword({
			email: user
		}, password, function(err) {
			if (err) {
				alert(err.reason)
			} else {
				Router.go('home'); // Ceci est une redirection depuis un event/helper, elle est basée sur le nom de la route
			}
		});

		// Cas 3 : Login en utilisant le nom d'utilisateur ou l'email
		Meteor.loginWithPassword(
			user,
			password,
			function(err) {
				if (err) {
					alert(err.reason)
				} else {
				Router.go('home'); // Ceci est une redirection depuis un event/helper, elle est basée sur le nom de la route
				}
			}
		);
	}
});