module.exports = {
	eAdmin4: function(req, res, next){

		if(req.isAuthenticated() && req.user.admin >= 4){
			return next();
		}

		req.flash("error_msg", "Você deve estar logado como Usuário Root para acessar esta configuração")
		res.redirect("/")
	}
}