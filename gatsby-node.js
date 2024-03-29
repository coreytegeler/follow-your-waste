exports.createPages = async ({ actions: { createPage } }) => {
	["en", "es", "zh"].forEach((lang) => {
		createPage({
			path: lang === "en" ? "/" : `/${lang}/`,
			component: require.resolve("./src/templates/app.jsx"),
			context: {
				lang: lang,
				env: process.env.NODE_ENV
			},
		});
	});
};

