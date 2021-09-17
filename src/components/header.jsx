import React, { useState } from "react";
import { withPrefix } from "gatsby";

export default function Header({ env, text, lang, langObjs }) {

	const [langMenu, setLangMenu] = useState(false);

	const langKeys = Object.keys(langObjs).sort((a, b) => {
		return a === lang ? -1 : b === lang ? 1 : 0
	});

	const currLangKey = langKeys.shift(),
				currLangObj = langObjs[currLangKey];

	return (
		<React.Fragment>
			<div id="skip-to-intro">
				<a href="#main">{text.system.aria_skip}</a>
			</div>
			<header id="header">
				<a
					id="logo"
					href="https://sanitationfoundation.org"
					target="_blank"
					rel="noreferrer">
					<img
						src={withPrefix("images/logo.png")}
						alt="Sanitation Foundation"
					/>
				</a>

				<div id="header-items">

					<div
						role="button"
						className="header-item toggle"
						id="help-toggle"
						tabIndex={0}
						aria-pressed={false}>
						Help
					</div>

					<div
						id="lang-switch"
						className={`header-item dropdown ${langMenu ? "open" : ""}`}>
						<div
							role="button"
							className="option"
							title={currLangObj.long}
							aria-hidden={true}
							tabIndex={0}
							// onFocus={() => setLangMenu(!langMenu)}
							onClick={() => setLangMenu(!langMenu)}
							onKeyPress={() => setLangMenu(!langMenu)}>
							{currLangObj.short}
						</div>

						<div
							id="lang-switch-label"
							className="screen-hidden"
							tabIndex={-1}
							aria-hidden={true}>
							{text.system.aria_lang_switch}
						</div>

						<div role="menu"
							aria-labelledby="lang-switch-label">
							{langKeys.map((langKey, i) => {
								const langObj = langObjs[langKey];
								let langUrl;
								if(lang === "en") {
									langUrl = langKey === "en" ? "" : langKey;
								} else {
									langUrl = langKey === "en" ? "../" : "../" + langKey;
								}
								return (
									<div className="option" key={i}>
										<a
											role="menuitem"
											lang={langKey}
											href={langUrl}
											title={langObj.long}
											tabIndex={0}
											aria-label={`Switch to ${langObj.long}`}>
											{langObj.short}
										</a>
									</div>
								);
							})}
						</div>
					</div>

					<button
						className="header-item toggle"
						id="volume-toggle"
						tabIndex={0}
						aria-label={text.system.aria_volume}
						aria-pressed={false}>
					</button>

					<button
						className="header-item toggle"
						id="full-toggle"
						tabIndex={0}
						aria-label={text.system.aria_full_screen}
						aria-pressed={false}>
					</button>

				</div>

			</header>
		</React.Fragment>
	);
}