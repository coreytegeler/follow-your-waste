import React from "react";
import { withPrefix } from "gatsby";

const streams = ["landfill", "metal", "glass", "paper", "plastic", "organics"],
			environs = ["traffic", "facility", "water"];

export default function Streams({ text, data }) {
	return (
		<div id="streams-view" className="view" aria-hidden="true">
			<div className="view-inner">

				{ streams.map((stream, i) => {
					const streamText = text[stream],
								streamData = data[stream];
					return (
						<div
							className="stream"
							tabIndex={-1}
							aria-hidden={true}
							data-slug={stream}
							key={i}>

							<div role="menu"
								className="progress"
								aria-label={text.system.aria_progress_menu}>
								<div className="ticks-wrap">
									{streamData.map((sceneData, j) => {
										const sceneText = streamText[j];
										return (
											<div
												className="tick"
												data-scene={sceneData.slug}
												aria-hidden={true}
												key={j}>
												<div
													className="tooltip mobile-hidden"
													aria-hidden={true}>
													<div className="tooltip-arrow small"></div>
													<div className="tooltip-inner">
														{sceneText.label}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							
							<div className="scenes-wrap">
								{streamData.map((sceneData, j) => {
									const sceneText = streamText[j];
									let svgSrc;
									if(sceneData.animated === "true") {
										svgSrc = withPrefix(`scenes/animate/${sceneData.slug}.json`);
									} else {
										svgSrc = withPrefix(`scenes/static/${sceneData.slug}.svg`);
									}
									return (
										<div
											className={`scene ${sceneData.color}`}
											data-scene={sceneData.slug}
											data-animated={sceneData.animated}
											data-looped={sceneData.looped}
											data-environ={sceneData.environment}
											data-src={svgSrc}
											aria-hidden={true}
											key={j}>
											
											<div
												className={`svg-wrap ${sceneData.orientation}`}
												aria-hidden={true}>
											</div>

											<div className="factoids" aria-hidden={true}>
												{Array.apply(null, { length: 3 }).map((x, l) => {
													const vocab = sceneText["vocab" + l],
																fact = sceneText["fact" + l];
													return fact? (
														<div
															className="factoid"
															data-index={l}
															data-vocab={vocab}
															tabIndex={-1}
															key={l}>
															<div className="factoid-tab"></div>
															<div className="factoid-inner">
																<p>
																	{vocab ? (
																		<span className="vocab">{vocab}</span>
																	) : (
																		false
																	)}
																	{fact}
																</p>
															</div>
														</div>
													) : null;
												})}
											</div>
										</div>
									);
								})}
								
							</div>

							<div className="lower-third">
								<div className="chyron-outer">
									<div className="chyron">
										<div className="chyron-inner">
											<div className="portrait">
												<img
													src={withPrefix(`images/worker-${stream}.png`)}
													alt="" />
											</div>
											<div className="captions">
												{streamData.map((sceneData, j) => {
													const sceneText = streamText[j];
													return (
														<div
															className="caption"
															data-scene={sceneData.slug}
															tabIndex={-1}
															aria-hidden={true}
															key={j}>
															<div
																className="text">
																{sceneText.caption}
															</div>

															{Array.apply(null, { length: 3 }).map((x, l) => {
																const vocab = sceneText["vocab" + l],
																			fact = sceneText["fact" + l];
																return fact ? (
																	<div
																		className="factoid"
																		data-index={l}
																		data-vocab={vocab}
																		tabIndex={-1}
																		key={l}>
																		<div className="factoid-tab"></div>
																		<div className="factoid-inner">
																			<p>
																				{vocab ? (
																					<span className="vocab">{vocab}</span>
																				) : (
																					false
																				)}
																				{fact}
																			</p>
																		</div>
																	</div>
																) : null;
															})}

															<audio
																data-type="voice"
																preload="none"
																controls={false}
																aria-hidden={true}
																src={withPrefix(`audio/${stream}/${sceneData.slug}.wav`)}
																type="audio/wav" />
														</div>
													);
												})}
											</div>

											<button
												className="playback-toggle toggle"
												tabIndex={0}
												aria-label={text.system.aria_playback}>
											</button>
											
										</div>
									</div>

									<div role="menu"
										className="arrows-menu"
										aria-label="">
										<button
											className="arrow"
											tabIndex={0}
											aria-label={text.system.aria_prev}
											data-dir="prev">
										</button>
										<button
											className="arrow"
											tabIndex={0}
											aria-label={text.system.aria_next}
											data-dir="next">
										</button>
									</div>

								</div>
							</div>
						</div>
					);
				}) }
			</div>

			{ environs.map((environ, i) => {
				return (
					<audio
						data-type="environ"
						data-environ={environ}
						preload="auto"
						controls={false}
						aria-hidden={true}
						key={i}
						src={withPrefix(`audio/environs/${environ}.wav`)}
						type="audio/wav" />
				);
			}) }

		</div>
	);
}
