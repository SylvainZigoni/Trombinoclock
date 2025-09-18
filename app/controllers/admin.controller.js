import adminMapper from "../dataMapper/admin.datamapper.js";

const adminController = {
	addPromo(req, res) {
		res.render("promo_edit");
	},

	async addPromoSubmit(req, res) {
		//_o ATTENTION IL MANQUE LA VERIFICATION DES DATA

		const { name, github_organization } = req.body;
		try {
			const results = await adminMapper.addPromo(
				name,
				github_organization
			);
			res.redirect("/promos");
		} catch (error) {
			console.error(`Erreur lors de l'ecriture des données`, error);
			res.status(500).render("promo_edit");
		}
	},
};

export default adminController;
