module.exports = {
	eAdmin2: function(req, res, next){

		if(req.isAuthenticated() && req.user.admin >= 2){
			return next();
		}

		req.flash("error_msg", "Você deve estar logado como Moderador para acessar esta configuração")
		res.redirect("/")
	}
}