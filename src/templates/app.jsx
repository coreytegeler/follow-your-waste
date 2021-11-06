import React from "react";
import { Helmet } from "react-helmet";

import enText from "../content/en.json";
import esText from "../content/es.json";
import zhText from "../content/zh.json";
import data from "../content/data.json";

import Header from "../components/header.jsx";
import Intro from "../components/intro.jsx";
import Select from "../components/select.jsx";
import Streams from "../components/streams.jsx";
import Alerts from "../components/alerts.jsx";

const App = ({ pageContext }) => {
	const { lang, env } = pageContext;

	const langObjs = {
		en: {
			label: "English",
			text: enText
		},
		es: {
			label: "Español",
			text: esText
		},
		zh: {
			label: "简体",
			text: zhText
		}
	};

	const textObjs = {
		en: enText,
		es: esText,
		zh: zhText
	};

	Object.keys(textObjs).forEach((key) => {
		textObjs[key].system.forEach((textPair) => {
			langObjs[key].text.system[textPair.slug] = textPair.text;
		});
	});

	const text = langObjs[lang].text;

	return (
		<React.Fragment>
		
			<Helmet
				title={`${text.system.title} — ${text.system.tagline}`}
				bodyAttributes={{
					id: "intro",
					class: "loading",
				}}
				meta={[{
					name: text.system.title,
					content: text.system.tagline
				}]}>
			</Helmet>

			<Header
				env={env}
				text={text}
				lang={lang}
				langObjs={langObjs}
			/>

			<main id="main">
				<Intro text={text} />
				<Select text={text} data={data} />
				<Streams text={text} data={data} />
				<Alerts text={text} />
			</main>

		</React.Fragment>
	);
};

export default App;