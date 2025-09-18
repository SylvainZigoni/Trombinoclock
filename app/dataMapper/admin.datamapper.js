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

	async addStudent(pFirstname, pLastname, pGithubName, pPromo) {
		const results = await client.query({
			text: `INSERT INTO student (first_name, last_name, github_username, promo_id
                )
            VALUES($1, $2, $3, $4)
            RETURNING *;`,
			values: [pFirstname, pLastname, pGithubName, pPromo],
		});
		return results.rows[0];
	},
};

export default adminMapper;
