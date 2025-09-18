import client from "../db/client.js";

const promoDataMapper = {
	async getPromos() {
		const results = await client.query({
			text: `
                SELECT *
                FROM promo;`,
		});
		return results.rows;
	},

	async getPromoById(pId) {
		const results = await client.query({
			text: `
                SELECT *
                FROM promo
                WHERE id = $1;`,
			values: [pId],
		});
		return results.rows[0];
	},

	async getStudentByPromoId(pId) {
		const results = await client.query({
			text: `
                SELECT *
                FROM student
                WHERE promo_id = $1;`,
			values: [pId],
		});
		return results.rows;
	},
};

export default promoDataMapper;
