import adminMapper from "../dataMapper/admin.datamapper.js";
import promoDataMapper from "../dataMapper/promo.datamapper.js";

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

	async addStudent(req, res) {
		try {
			const promos = await promoDataMapper.getPromos();
			res.render("add_student", { promos });
		} catch (error) {
			console.error(`Erreur lors de la récupération des promos`, error);
			res.status(500).send(`Erreur lors de la récupération des promos`);
		}
	},

	async addStudentSubmit(req, res) {
		const data = req.body;
		try {
			const results = await adminMapper.addStudent(
				data.first_name,
				data.last_name,
				data.github_username,
				Number(data.promo)
			);
			res.redirect("/admin/addStudent");
		} catch (error) {}
	},
};

export default adminController;
