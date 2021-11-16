import React from "react";
import { withPrefix } from "gatsby";

export default function Select({ text, data }) {
	
	const streams = ["organics", "metal", "glass", "paper", "plastic", "landfill"],
				bins = ["paper", "mgp", "landfill", "organics"];

	return (
		<div id="select-view" className="view" aria-hidden="true">
			<div className="view-inner">

				<div id="items-wrap" className="static">
					<div id="message-select-persist" className="stamp">
						<div className="mobile-hidden">
							{text.system.select_top}
						</div>
						<div className="mobile-show">
							<p>
								{text.system.select_intro}
							</p>
							<p>
								{text.system.select_prompt_alt}
							</p>
						</div>
					</div>
					<div id="stamp" className="stamp"></div>
					{data.items.map((item, i) => {
						const itemText = text.items[i];
						return (
							<div
								className="item"
								data-item={item.slug}
								data-stream={item.stream}
								aria-hidden="true"
								key={i}>
								<img
									src={withPrefix(`images/items/${item.slug}.png`)}
									alt={`${itemText.label}: ${itemText.tooltip}`} />
								<div className="tooltip">
									<div className="tooltip-arrow"></div>
									<div className="tooltip-inner">
										<strong>{itemText.label}</strong>
										<p>{itemText.tooltip}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div id="bins" className="bins-wrap mobile-hidden">
					{bins.map((binSlug, i) => {
						return(
							<div
								className={`bin ${binSlug}`}
								id={`${binSlug}-bin`}
								data-bin={binSlug}
								data-title={text.system.[binSlug]}
								key={i}>
								<img
									className="bin-front"
									src={withPrefix(`images/bin-${binSlug}-front.png`)}
									alt="" />
								<img
									className="bin-lid"
									src={withPrefix(`images/bin-${binSlug}-lid.png`)}
									alt="" />
							</div>
						)
					})}
				</div>

				<div id="bin-backs" className="bins-wrap mobile-hidden">
					{bins.map((binSlug, i) => {
						return(
							<div
								className={`bin ${binSlug}`}
								id={`${binSlug}-back`}
								data-bin={binSlug}
								key={i}>
								<img
									className="bin-back"
									src={withPrefix(`images/bin-${binSlug}-back.png`)}
									alt="" />
							</div>
						)
					})}
				</div>

				{/*<div
					role="dialog"
					className="screen-hidden mobile-show"
					id="alert-select">
					<div className="message">
						<div
							id="message-menu-select"
							aria-hidden="true">
							<p>
								{text.system.select_intro}
							</p>
							<p>
								{text.system.select_prompt_alt}
							</p>
						</div>
					</div>*/}

					{/*<div
						role="menu"
						id="menu-select"
						tabIndex={-1}
						aria-labelledby="message-menu-select">*/}
						{/*streams.map((streamSlug, i) => {
							let imgFilename;
							switch(streamSlug) {
								case "landfill":
									imgFilename = "chip-bag";
									break;
								case "metal":
									imgFilename = "aluminum-foil";
									break;
								case "glass":
									imgFilename = "glass-jar";
									break;
								case "plastic":
									imgFilename = "plastic-bottle";
									break;
								case "paper":
									imgFilename = "newspaper";
									break;
								case "organics":
									imgFilename = "banana";
									break;
								default:
									break;
							}
							return (
								<button
									role="menuitem"
									data-stream={streamSlug}
									aria-controls="menu-select"
									key={i}>
									<img
										src={withPrefix(`images/items/${imgFilename}.png`)}
										alt="" />
									{streamSlug}
								</button>
							)
						})*/}
					{/*</div>*/}
				{/*</div>*/}

			</div>
		</div>
	);
}
