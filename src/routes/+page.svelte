<script lang="ts">
	import Deck from './Deck.svelte';
	import Slide from './Slide.svelte';
</script>

<Deck>
	<Slide slug="intro">
		<span class="pretitle">introduction</span>
		<h1>Hello There!</h1>
		<img src="me.png" style="width: 100px; float: right;" alt="Matan Shenhav" />
		<p>
			My name is <a href="https://shenhav.fyi">Matan Shenhav</a>, and I was asked to write down my
			input for GEN regarding the platform integration process. I don't pretend to know the right
			platform: instead, I propose steps to finding it:
		</p>
		<ul>
			<li>
				<b>🚀 <a href="#streamline">Streamline the Website</a></b> - prepare the site for promoting
				the new platform
				<i>before</i> knowing exactly what it is.
			</li>
			<li>
				<b>🧪 <a href="#experiment">Execute Experiments</a></b> - devise a series of low-cost, low-effort
				experiments to explore and validate hypotheses and idea.
			</li>
			<li>
				<b>🔑 <a href="#invest">Invest in Options</a></b> - establish some tools on the WordPress platform
				that would make it easier to try out and develop platform concepts.
			</li>
		</ul>
		<p />
		<p>I'm happy to put in at least 5h a week to help GEN with these steps.</p>
		<p>
			But I have <a href="#hypotheses">my own hypotheses</a>
			on the matter, so <i>in parallel</i>, hope get your input on my own project:
		</p>
		<ul>
			<li>
				<b>🗞️ <a href="#opinion">Seedling Life</a></b>: <b>support communities</b> you care about
				and receive a <b>personalized monthly newspaper</b> in return.
			</li>
		</ul>
	</Slide>
	<Slide slug="streamline">
		{@const contentMarketing = 'https://en.wikipedia.org/wiki/Content_marketing'}
		{@const pillarPost = 'https://www.contentpowered.com/blog/pillar-content-how-create/'}
		<span class="pretitle">streamline the website</span>
		<h1>Making Space for Things to Come</h1>
		<p>
			Even if we don't know what we are building yet, the website should be geared towards the
			platform integration process:
		</p>
		<ul>
			<li>
				<b>🚨 Raise the alarm</b>: highlight the crises and ask for donations. This should be the
				new headline.
			</li>
			<li>
				<b>🧭 Simplify Navigation</b>: the website induces information-overload and needs to be
				simplified. Menu items need to be drastically reduces by unifying and/or discarding pages.
			</li>
			<li>
				<b>💸 Establish Paid Memberships</b>: change donations from a crowdfunding-style goal to a
				monthly membership. This opens the door to recurring revenue and premium tiers.
			</li>
			<li>
				<b>✨ Refresh the design</b>: set the tone for a new phase by updating the brand. Sorry to
				be harsh, but the current design is a little old fashioned, and somewhat corporate looking.
			</li>
			<li>
				<b>🪧 Gear up for marketing</b>: prepare for a heavy
				<a href={contentMarketing}>content marketing</a> campaign to promote the platform by
				planning some <a href={pillarPost}>pillar posts</a> and related social posts.
			</li>
		</ul>
	</Slide>
	<Slide slug="experiment">
		{@const leanStartup = 'https://en.wikipedia.org/wiki/Lean_startup'}
		{@const paintedDoors =
			'https://crstanier.medium.com/a-product-managers-guide-to-painted-door-tests-a1a5de33b473'}
		{@const conciergeMvp = 'https://www.shortform.com/blog/concierge-mvp/'}
		<span class="pretitle">execute experiments</span>
		<h1>Engage: Build, Measure, Learn</h1>
		<p>
			Run a campaign to engage the network in identifying which ideas* will actually get traction
			using the
			<a href={leanStartup}> Lean Startup </a> build-measure-learn cycle:
		</p>
		<ul>
			<li>
				<b>🛠️ Build Tests</b>: deploy mockups or simple prototypes of potential features to the
				site. Use
				<a href={paintedDoors}> painted doors</a>, <a href={conciergeMvp}>concierge MVPs</a> and other
				tricks to cut corners and make this step easy and cheap.
			</li>
			<li>
				<b>📏 Measure Traction</b>: analyze traffic, use surveys, perform interviews and use any
				other means available to measure interest and engagement.
			</li>
			<li>
				<b>💡 Learn Viability</b>: validate/invalidate hypotheses based on the results, creating a
				shortlist of new ideas and hypotheses, identify risk-points and open questions.
			</li>
		</ul>
		<p>
			Focus on making this cycle as short as possible to accelerate learning. Get a test user group
			that can spend 15m-30m validating ideas.
		</p>
		<aside>
			* do <i>not</i> make this about getting more opinions and ideas; this is about
			<i>eliminating</i> ideas.
		</aside>
	</Slide>
	<Slide slug="invest">
		{@const optionality = 'https://taylorpearson.me/optionality/'}
		{@const buddypress = 'https://buddypress.org/'}
		{@const woocommerce = 'https://woocommerce.com'}
		{@const productVendors =
			'https://woocommerce.com/products/product-vendors/?quid=7a250c0ae3857e2d6af78eebe4f20ff7'}
		{@const runway = 'https://visible.vc/blog/how-to-calculate-runway/'}
		<span class="pretitle">invest in options</span>
		<h1>Enable Rapid Business Model Iteration</h1>
		<p>
			There are plenty of <a href="#offerings">potential offerings</a> being discussed, and only
			<a href="#experiments">experiments</a> can tell us which would work. I think the process would
			benefit from
			<a href={optionality}>leaving options open</a>. Some cheap options would allow try out a wide
			variety business models on the current site:
		</p>
		<ul>
			<li>
				<b>🏛️ <a href={woocommerce}>WooCommerce</a></b>: w/ the
				<a href={productVendors}>Product Vendors Plugin</a> it is possible to build online marketplaces
				where network members can sell products, services and experiences.
			</li>
			<li>
				<b>🫂 <a href={buddypress}>BuddyPress</a></b>: this option has been explored to provide
				extra social networking features to the site.
			</li>
		</ul>
		<p>
			These are flexible and adaptable options. Setting them up would enable rapidly exploring many
			- if not most - of potential business models being discussed. If done early, it buys the team
			a good <a href={runway}>runway</a> to test ideas.
		</p>
		<p>
			So far I didn't discuss third-party platforms like Mighty Networks or Hylo. I think these are
			red herrings: trying to convince people to join will be a massive effort, and they are close
			your options since they lock you into one model.
		</p>
	</Slide>
	<Slide slug="opinion">
		<div class="column" style="height: 100%; justify-content: center;">
			<span class="pretitle">a different take</span>
			<h1>My Own Ideas</h1>
			<p>
				So far I focused of providing feedback along the lines of thinking you are following. Now I
				would like to present my own ideas, which have been brewing for years. These follow a
				different train of thought, but I think they may be valuable to GEN.
			</p>
		</div>
	</Slide>
	<Slide slug="hypotheses">
		<span class="pretitle">my own hypotheses</span>
		<h1>Folks Pay for Real-World Impact, not Digital Tools</h1>
		<p>
			After exploring the topic of sustainability and community platforms for some years, I have
			formed my own hypotheses on the topic:
		</p>
		<ul>
			<li>
				<b>🏕️ We Don't Wanna Live Online</b>: most folks aren't excited about using platforms;
				especially hippies after years of lockdowns.
			</li>
			<li>
				<b>🪙 Financial Solutions are Critical</b>: money is both scarce and essential, whether you
				are an established or aspiring community.
			</li>
			<li>
				<b>🗺️ Discovery is Important</b>: finding projects, events and organizations to engage with
				locally and globally is valued*.
			</li>
		</ul>
		<aside>* the success of GEN's map is evidence of this aspect.</aside>
		<p>
			It is well known in the startup world that its very hard to get private individuals to pay for
			apps. Real-world, physical products and services, mediated digitally, fare a much better
			chance.
		</p>
	</Slide>
	<Slide slug="project">
		{@const printNewspaper = 'https://www.printnewspaper.com/'}
		<span class="pretitle">seedling life</span>
		<h1>The Social Network as a Newspaper</h1>
		<p>With these hypotheses is mind, I conceived of a new platform concept where old-meets-new:</p>
		<ul>
			<li>
				<b>🔭 Follow Communities</b> - find organizations you care about in the local and global sustainability
				scene.
			</li>
			<li>
				<b>🗞️ Receive A Personalized Newspaper</b> - articles, event schedule, listings and more from
				your communities.
			</li>
			<li>
				<b>💚 Give Your Support</b> - 90% of your subscription fees goes directly to your communities.
			</li>
		</ul>
		<p>
			Preliminary viability assessment: <a href={printNewspaper}>printnewspaper.com</a>
			can print <i>and deliver</i> the papers; with their cost-point, papers could be as cheap as 5€
			per month for subscribers.
		</p>
		<p>
			MVP would be a normal newspaper from one organization (e.g. GEN 😉) without personalization.
			Content would be submitted by email and design would be manual. As new organizations join,
			page design would still be manual, but personalized editions could be automated. Eventually,
			everything will happen in the app of course.
		</p>
	</Slide>
	<Slide slug="appendices">
		<div class="column" style="height: 100%; justify-content: center;">
			<span class="pretitle">optional</span>
			<h1>Appendices</h1>
			<p>
				In the process of thinking about the platform I made some other notes which may be
				interesting but I thought were less essential.
			</p>
		</div>
	</Slide>
	<Slide slug="offerings">
		<span class="pretitle">potential offerings</span>
		<h1>Learn, Organize, Discover</h1>
		<p>
			Having a look at your material, I tried to group* potential revenue streams being explored by
			overarching business model:
		</p>
		<table>
			<tr>
				<td style="width: 40%;">
					<b class="row">📚<span>Education & Solution Content</span></b>
					<p style="font-size: small; margin-bottom: 0;">
						Courses, Video, Audio, Docs, Exercises, Learning Tools, Wiki
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Doesn't require complex tech</li>
						<li>💚 Easy to deploy on existing platforms</li>
						<li>💩 Seems very hard to get traction</li>
						<li>💩 Doesn't help members raise funds</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					<b class="row">🛠️<span>Collaboration & Networking Spaces</span></b>
					<p style="font-size: small; margin-bottom: 0;">
						Forums, Chat, Cloud, Office, Productivity, IT Services
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Useful for community organization</li>
						<li>💚 Can be tailored to ecovillage needs</li>
						<li>💩 Many competitors offer this for free</li>
						<li>💩 Folks may not want to talk/work online</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					<b class="row">🔭<span>Two-Way Marketplaces</span></b>
					<p style="font-size: small; margin-bottom: 0;">
						Community, Travel & Work Matchmaking & Opportunities
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Results in valuable real-world experience</li>
						<li>💚 Addresses common & important needs</li>
						<li>💩 Some competition (<a href="https://wwoof.net/">WWOOF</a> especially)</li>
						<li>
							💩 Strong <a href="https://en.wikipedia.org/wiki/Network_effect">network effects</a> in
							play
						</li>
					</ul>
				</td>
			</tr>
		</table>
		<aside style="padding-top: 1em; font-size: small;">
			* obviously these overlap, e.g. a learning platform may have social features and so on.
		</aside>
	</Slide>
	<Slide slug="approaches">
		<span class="pretitle">development approaches</span>
		<h1>Improve, Buy or Build?</h1>
		<p>
			A <i>separate</i> but important question is <i>how</i> we develop the platform. Regardless of specific
			tools, I wanted to group the options as follows:
		</p>
		<table>
			<tr>
				<td style="width: 40%;">
					<b>✨ Improving</b>
					<p style="font-size: small; margin-bottom: 0;">
						Enhance the existing WordPress platform with plugins (e.g. BuddyPress) or features
						(advanced map).
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Low effort and cost</li>
						<li>💚 Lower implementation risks</li>
						<li>💚 Margins could be higher</li>
						<li>💚 Direct project stewardship</li>
						<li>💩 Limited feature possibilities</li>
						<li>
							💩 WP performance and <a
								href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a
							> issues
						</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					<b>💰 Buying</b>
					<p style="font-size: small; margin-bottom: 0;">
						Joining existing platforms like Mighty Networks and Hylo, and integrating them in some
						way to the site
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Feature rich platforms from the get-go</li>
						<li>💚 Optimized for specific functionality</li>
						<li>💚 Support and documentation available</li>
						<li>💩 Costs and transaction rates may be steep</li>
						<li>
							💩 <a href="https://en.wikipedia.org/wiki/Lean_startup#Pivot">Pivoting</a> is harder
						</li>
						<li>
							💩 <a href="https://en.wikipedia.org/wiki/Vendor_lock-in">Vendor lock-in</a> may be an
							issue
						</li>
						<li>💩 Privacy, security and trust concerns</li>
						<li>💩 Additional barrier of entry</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					<b>🏗️ Building*</b>
					<p style="font-size: small; margin-bottom: 0;">
						Creating a new platform from scratch, using software developers.
					</p>
				</td>
				<td>
					<ul>
						<li>💚 Anything is possible</li>
						<li>
							💚 <a href="https://en.wikipedia.org/wiki/Lean_startup#Pivot">Pivoting</a> is easier
						</li>
						<li>💚 Margins and volume could be higher</li>
						<li>💚 Direct project stewardship</li>
						<li>💩 Requires software engineers</li>
						<li>💩 High implementation risk</li>
						<li>💩 Will require a paid team eventually</li>
						<li>💩 Security and privacy is hard</li>
					</ul>
				</td>
			</tr>
		</table>
		<aside style="padding-top: 1em; font-size: small;">
			* I know this isn't considered seriously by GEN, but I added it because I'm personally
			interested in it.
		</aside>
	</Slide>
</Deck>
