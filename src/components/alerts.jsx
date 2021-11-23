import React from "react";
import { withPrefix } from "gatsby";

export default function Alerts({ text }) {
	return(
		<div id="alerts-view" className="view" aria-hidden="true">


			<div className="view-inner">

				{/*******Select intro*******/}
				<div
					role="dialog"
					className="alert big"
					id="alert-select-intro"
					aria-hidden="true">
					<div className="message" id="message-select-intro">
						<div className="portrait">
							<img
								src={withPrefix(`images/workers/chief.png`)}
								alt="" />
						</div>
						<p>{text.system.select_intro}</p>
						<p>{text.system.select_prompt}</p>
					</div>
					<div
						role="menu"
						className="alert-buttons"
						tabIndex={-1}
						aria-labelledby="message-select-intro">
						<button
							className="button okay"
							role="menuitem">
							{text.system.im_ready}
						</button>
					</div>
					<audio
						data-type="voice"
						preload="auto"
						controls={false}
						aria-hidden={true}>
						<source
							src={withPrefix(`audio/misc/desc.wav`)}
							type="audio/wav" />
						<track
							src=""
							srcLang="en"
							kind="captions" />
					</audio>
				</div>

				{/******* Not trash *******/}
				<div
					role="dialog"
					className="alert"
				  id="alert-not-trash"
					aria-hidden="true">
					<div className="message has-portrait" id="message-not-trash">
						<p>{text.system.select_not_trash}</p>
					</div>
					<div className="portrait">
						<img
							src={withPrefix(`images/workers/chief.png`)}
							alt="" />
					</div>
					<div
						role="menu"
						className="alert-buttons"
						tabIndex={-1}
						aria-labelledby="message-not-trash">
						<button
							className="button okay"
							role="menuitem">
							{text.system.try_again}
						</button>
					</div>
					<audio
						data-type="voice"
						preload="auto"
						controls={false}
						aria-hidden={true}>
						<source
							src={withPrefix(`audio/misc/not-trash.wav`)}
							type="audio/wav" />
						<track
							src=""
							srcLang="en"
							kind="captions" />
					</audio>
				</div>

				{/******* Wrong recycle *******/}
				<div
					role="dialog"
					className="alert"
					id="alert-wrong-recycle"
					aria-hidden="true">
					<div className="message has-portrait" id="message-wrong-recycle">
						<p>{text.system.select_wrong_recycle}</p>
					</div>
					<div className="portrait">
						<img
							src={withPrefix(`images/workers/chief.png`)}
							alt="" />
					</div>
					<div role="menu"
						className="alert-buttons"
						tabIndex={-1}
						aria-labelledby="message-wrong-recycle">
						<button
							className="button okay"
							role="menuitem">
							{text.system.try_again}
						</button>
					</div>
					<audio
						data-type="voice"
						preload="auto"
						controls={false}
						aria-hidden={true}>
						<source
							src={withPrefix(`audio/misc/wrong-recycle.wav`)}
							type="audio/wav" />
						<track
							src=""
							srcLang="en"
							kind="captions" />
					</audio>
				</div>

				{/******* Not recycle *******/}
				<div
					role="dialog"
					className="alert"
					id="alert-not-recycle"
					aria-hidden="true">
					<div className="message has-portrait" id="message-not-recycle">
						<p>{text.system.select_not_recycle}</p>
					</div>
					<div className="portrait">
						<img
							src={withPrefix(`images/workers/chief.png`)}
							alt="" />
					</div>
					<div
						role="menu"
						className="alert-buttons"
						tabIndex={-1}
						aria-labelledby="message-not-recycle">
						<button
							className="button okay"
							role="menuitem">
							{text.system.try_again}
						</button>
					</div>
					<audio
						data-type="voice"
						preload="auto"
						controls={false}
						aria-hidden={true}>
						<source
							src={withPrefix(`audio/misc/not-recycle.wav`)}
							type="audio/wav" />
						<track
							src=""
							srcLang="en"
							kind="captions" />
					</audio>
				</div>

				{/******* Correct bin *******/}
				<div
					role="dialog"
					className="alert"
					id="alert-correct-bin"
					aria-hidden="true">
					<div className="message has-portrait" id="message-correct-bin">
						<p>{text.system.select_correct_bin}</p>
					</div>
					<div className="portrait">
						<img
							src={withPrefix(`images/workers/chief.png`)}
							alt="" />
					</div>
					<div
						role="menu"
						className="alert-buttons"
						tabIndex={-1}
						aria-labelledby="message-correct-bin">
						<button
							className="button cancel"
							role="menuitem">
							{text.system.try_another}
						</button>
						<button
							className="button okay"
							role="menuitem">
							{text.system.lets_go}
						</button>
					</div>
					<audio
						data-type="voice"
						preload="auto"
						controls={false}
						aria-hidden={true}>
						<source
							src={withPrefix(`audio/misc/correct-bin.wav`)}
							type="audio/wav" />
						<track
							src=""
							srcLang="en"
							kind="captions" />
					</audio>
				</div>

				{/*******Streams intro*******/}
				<div
					role="dialog"
					className="alert"
					id="alert-streams-intro"
					aria-hidden="true">
					<div className="message" id="message-streams-intro">
						<div id="help-grid">
							<div className="row">
								<div className="col">
									<div className="restart-button"></div>
								</div>
								<div className="col">
									{text.system.help_restart}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="progress">
										<div className="ticks-wrap">
											<div className="tick"></div>
											<div className="tick"></div>
											<div className="tick"></div>
											<div className="tick"></div>
										</div>
									</div>
								</div>
								<div className="col">
									{text.system.help_progress}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="factoid-tab"></div>
								</div>
								<div className="col">
									{text.system.help_factoid}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="arrow" data-dir="prev"></div>
									<div className="arrow" data-dir="next"></div>
								</div>
								<div className="col">
									{text.system.help_arrows}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="help-audio-buttons">
										<div className="audio-button toggle volume"></div>
										<div className="audio-button toggle volume"></div>
									</div>
									<div className="help-audio-buttons">
										<div className="audio-button toggle playback"></div>
										<div className="audio-button toggle playback"></div>
									</div>
								</div>
								<div className="col">
									{text.system.help_audio}
								</div>
							</div>
						</div>
					</div>
					<div
						role="menu"
						className="alert-buttons"
						tabIndex={-1}>
						<button
							className="button okay"
							role="menuitem">
							{text.system.im_ready}
						</button>
					</div>
				</div>

				{/*******Streams end*******/}
				<div
					role="dialog"
					className="alert big"
					id="alert-streams-end"
					aria-hidden="true">
					<div className="message" id="message-streams-end">
						<div className="row">
							<div className="col">
								<img id="selected-item" alt="" />
								<div
									role="menu"
									className="alert-buttons"
									tabIndex={-1}
									aria-labelledby="message-streams-end">
									<button
										className="button okay start"
										role="menuitem">
										{text.system.final_restart}
									</button>
								</div>
							</div>
							<div className="col">
								<h2>
									{text.system.final_title}
								</h2>
								<p>
									{text.system.final_statement}
								</p>
								<h3 id="message-menu-resources">
									{text.system.final_resources}
								</h3>
								<ul
									id="menu-resources"
									aria-labelledby="message-menu-resources">
									<li>
										<a
											href="https://www.sanitationfoundation.org/meet-the-workers"
											target="_blank"
											rel="noreferrer"
											role="menuitem">
											{text.system.final_workers}
										</a>
									</li>
									<li>
										<a
											href="https://www.sanitationfoundation.org/lesson-plans"
											target="_blank"
											rel="noreferrer"
											role="menuitem">
											{text.system.final_lessons}
										</a>
									</li>
									<li>
										<a
											href="https://www.sanitationfoundation.org/follow-your-waste"
											target="_blank"
											rel="noreferrer"
											role="menuitem">
											{text.system.final_about}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}