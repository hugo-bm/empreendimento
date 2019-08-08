module.exports = {
	eAdmin3: function(req, res, next){

		if(req.isAuthenticated() && req.user.admin >= 3){
			return next();
		}

		req.flash("error_msg", "Você deve estar logado como Administrador para acessar esta configuração")
		res.redirect("/")
	}
}