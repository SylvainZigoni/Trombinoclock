import client from "../db/client.js";

const promoDataMapper = {
	async getPromos() {
		const results = await client.query({
			text: `
                SELECT promo.*,
                COUNT(student.*) AS student_count
                FROM promo
                JOIN student ON promo.id = student.promo_id
                GROUP BY promo.id
                ORDER BY promo.id;`,
		});
		return results.rows;
	},

	async getPromoById(pId) {
		const results = await client.query({
			text: `
                SELECT promo.*,
                JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'id', student.id,
                        'first_name', student.first_name,
                        'last_name', student.last_name,
                        'github_username', student.github_username,
                        'profile_picture_url', student.profile_picture_url
                    )
                ) as students
                FROM promo
                JOIN student ON promo.id = student.promo_id
                WHERE promo.id = $1
                GROUP BY
                    promo.id,
                    student.id;`,
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
