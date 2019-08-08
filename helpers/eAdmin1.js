module.exports = {
	eAdmin1: function(req, res, next){

		if(req.isAuthenticated() && req.user.admin >= 1){
			return next();
		}

		req.flash("error_msg", "Você deve estar logado como Usuário para acessar esta configuração")
		res.redirect("/")
	}
}