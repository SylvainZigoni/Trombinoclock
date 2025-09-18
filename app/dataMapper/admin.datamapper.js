import client from "../db/client.js";

const adminMapper = {
	async addPromo(pName, pGithub_organisation) {
		const results = await client.query({
			text: `INSERT INTO promo(name, github_organization)
            VALUES ($1, $2)
            RETURNING *;`,
			values: [pName, pGithub_organisation],
		});
		return results.rows[0];
	},
};

export default adminMapper;
