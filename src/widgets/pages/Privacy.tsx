import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Privacy.m.css';
import * as commonCss from '../../Common.m.css';
import { Hero } from '../Hero';

const factory = create();

export const Privacy = factory(function Privacy() {
	return (
		<div classes={css.root}>
			<div classes={css.heroWrapper}>
				<Hero>{{ xlTitle: 'privacy policy' }}</Hero>
			</div>
			<div classes={[commonCss.smallerContentWrapper, css.content]}>
				SitePen, Inc. (collectively “SitePen”, “we,” “us,” or “our”) respect your privacy
				and are committed to protecting it through our compliance with this policy. This
				Privacy Policy governs each user’s (hereinafter, “you,” “your,” “Member,” or “User”)
				access to and use of the SitePen website; any other websites through which SitePen
				makes the SitePen website available (collectively, “Site”); and all associated
				services offered by SitePen, including, but not limited to, the TSCONF.io and
				Milestone Mayhem.com websites (hereinafter collectively, the “Services”), whether as
				a guest or registered user. The Site and Services are hereinafter collectively
				referred to as the “Platform.” This policy describes the types of information we may
				collect from you or that you may provide when you visit the Platform, and our
				practices for collecting, using, maintaining, protecting and disclosing that
				information. This policy applies to information we collect: 1) On this Platform; 2)
				In e-mail, text and other electronic messages between you and this Platform; 3)
				Through mobile and desktop applications you download from this Platform, which
				provide dedicated non-browser-based interaction between you and this Platform;
				and/or 4) When you interact with our advertising and applications on third-party
				websites and services, if those applications or advertising include links to this
				policy. It does not apply to information collected by us offline or through any
				other means, including on any other websites operated by SitePen or any third-party
				(including our affiliates and subsidiaries), or any third-party (including our
				affiliates and subsidiaries), including through any application or content
				(including advertising) that may link to or be accessible from or on the Platform.
				See our contact page to contact us. To ask questions about this Privacy Policy or
				our privacy practices, please contact us at{' '}
				<a href="mailto:hello@sitepen.com">hello@sitepen.com</a>.
				<h2 classes={[commonCss.heading, css.heading]}>
					Collection of Personal Information
				</h2>
				<h3 classes={[commonCss.subheading, css.heading]}>
					Information We Collect About You and How We Collect It
				</h3>
				We collect several types of information from and about users of our Platform,
				including information:
				<ol classes={css.numberedList}>
					<li>
						by which you or your business may be personally identified, such as name,
						social networks, postal address, e-mail address, telephone number, business
						documentation, employment information, background information, and any other
						identifier by which you may be identified or contacted online or offline
						(“personal information”);
					</li>
					<li>
						that is about you but individually does not identify you (i.e. aggregated or
						de-identified information); and/or
					</li>
					<li>
						about your internet connection, the equipment you use to access our Platform
						and usage details.
					</li>
				</ol>
				We collect this information:
				<ol classes={css.numberedList}>
					<li>directly from you when you provide it to us;</li>
					<li>
						automatically as you navigate through the site (information collected
						automatically may include usage details, IP addresses and information
						collected through cookies, web beacons and other tracking technologies);
						and/or
					</li>
					<li>
						from third-parties, for example, our business partners, including marketing
						and SEO services, payment processors and/or service providers, and website
						analytics services.
					</li>
				</ol>
				<h3 classes={[commonCss.subheading, css.heading]}>Information You Provide to Us</h3>
				The information we collect on or through our Platform may include:
				<ol classes={css.numberedList}>
					<li>
						Information that you provide by filling in forms on our Platform. This
						includes information provided at the time of subscribing to our service,
						posting material or requesting further services. We may also ask you for
						information when you report a problem with our Platform;
					</li>
					<li>
						Records and copies of your correspondence (including e-mail addresses), if
						you contact us;
					</li>
					<li>
						Your responses to surveys that we might ask you to complete for research
						purposes; and
					</li>
					<li>
						Details of transactions you carry out through our Platform. Although we
						limit access to certain pages/you may set certain privacy settings for such
						information by logging into your Account, please be aware that no security
						measures are perfect or impenetrable.
					</li>
				</ol>
				<h3 classes={[commonCss.subheading, css.heading]}>
					Information We Collect through Automatic Data Collection Technologies
				</h3>
				As you navigate through and interact with our Platform, we may use automatic data
				collection technologies to collect certain information about your equipment,
				browsing actions and patterns, including: 1) Details of your visits to our Platform,
				including traffic data, location data, logs and other communication data and the
				resources that you access and use on the Platform; and/or 2) Information about your
				computer and internet connection, including your IP address, operating system and
				browser type. We also may use these technologies to collect information about your
				online activities over time and across third-party Platforms or other online
				services (behavioral tracking). The information we collect automatically is
				statistical data and may include personal information, or we may maintain it or
				associate it with personal information we collect in other ways or receive from
				third-parties. It helps us to improve our Platform and to deliver a better and more
				personalized service, including by enabling us to:
				<ol classes={css.numberedList}>
					<li>Estimate our audience size and usage patterns;</li>
					<li>
						Store information about your preferences, allowing us to customize our
						Platform according to your individual interests. Speed up your searches; and
					</li>
					<li>Recognize you when you return to our Platform.</li>
				</ol>
				The technologies we use for this automatic data collection may include:
				<ol classes={css.numberedList}>
					<li>
						Cookies (or browser cookies). A cookie is a small file placed on the hard
						drive of your computer. We (and our business partners) may use both first
						party cookies (such as Google Analytics) and third party cookies (such as
						advertising cookies) to collect information as described in this Privacy
						Policy. You may refuse to accept browser cookies by activating the
						appropriate setting on your browser. However, if you select this setting you
						may be unable to access certain parts of our Platform. Unless you have
						adjusted your browser setting so that it will refuse cookies, our system
						will issue cookies when you direct your browser to our Platform;
					</li>
					<li>
						Flash Cookies. Certain features of our Platform may use local stored objects
						(or Flash cookies) to collect and store information about your preferences
						and navigation to, from and on our Platform. Flash cookies are not managed
						by the same browser settings as are used for browser cookies; and/or
					</li>
					<li>
						Web Beacons. Pages of the Platform and our emails may contain small
						electronic files known as web beacons (also referred to as clear gifs. pixel
						tags and single-pixel gifs) that permit us, for example, to count users who
						have visited those pages or opened an email and for other related Platform
						statistics (for example, recording the popularity of certain Platform
						content and verifying system and server integrity).
					</li>
				</ol>
				<h3 classes={[commonCss.subheading, css.heading]}>How We Use Your Information</h3>
				We use information that we collect about you or that you provide to us, including
				any personal information: 1) To present our Platform and its contents to you; 2) To
				provide you with information, products or services that you request from us; 3) To
				fulfill any other purpose for which you provide it; 4) To provide you with notices
				about your account/subscription, including expiration and renewal notices; 5) To
				carry out our obligations and enforce our rights arising from any contracts entered
				into between you and us, including for billing and collection; 6) To notify you
				about changes to our Platform or any products or services we offer or provide
				through it; 7) To allow you to participate in interactive features on our Platform;
				8) In any other way we may describe when you provide the information; and/or 9) For
				any other purpose with your consent. We may also use your information to contact you
				about our own and third-parties’ goods and services that may be of interest to you.
				If you do not want us to use your information in this way, please email us at{' '}
				<a href="mailto:hello@sitepen.com">hello@sitepen.com</a>. We may send you certain
				service and administrative notices regarding your purchased services, which are not
				subject to opt out.
				<h3 classes={[commonCss.subheading, css.heading]}>Information Sharing</h3>
				We do not sell personal information. To provide the Services, we share personal data
				with service providers who are contractually obliged to comply with all applicable
				laws and who can only access the Personal Data required for them to provide the
				relevant Services. The following describes some of the ways that your personal
				information may be disclosed in the normal scope of business to provide the Site and
				the Services: We may disclose aggregated information about our users, and
				information that does not identify any individual, without restriction. We may
				disclose personal information that we collect or you provide as described in this
				Privacy Policy:
				<ol classes={css.numberedList}>
					<li>To our subsidiaries and affiliates;</li>
					<li>
						To contractors, service providers and other third-parties we use to support
						our business;
					</li>
					<li>
						To a buyer or other successor in the event of a merger, divestiture,
						restructuring, reorganization, dissolution or other sale or transfer of some
						or all of SitePen’s assets, whether as a going concern or as part of
						bankruptcy, liquidation or similar proceeding, in which personal information
						held by SitePen about our Platform users is among the assets transferred;
					</li>
					<li>
						To third-parties to market their products or services to you if you have
						consented to or not opted out of these disclosures;
					</li>
					<li>
						To other users of the Platform, if needed for legal actions or law
						enforcement;
					</li>
					<li>
						To fulfill the purpose for which you provide it; and/or 6) For any other
						purpose disclosed by us when you provide the information; and/or
					</li>
					<li>With your consent.</li>
				</ol>
				We may also disclose your personal information: 1) To comply with any court order,
				law or legal process, including to respond to any government or regulatory request;
				2) To enforce or apply our Terms of Service and other agreements, including for
				billing and collection purposes or legal disputes; and/or 3) If we believe
				disclosure is necessary or appropriate to protect the rights, property, or safety of
				SitePen, our customers or others. Content and associated data you submit may be
				displayed in public and private areas of the Site, except that Content and
				associated data submitted in connection with Services will be used only per the
				relevant Services agreement.
				<h3 classes={[commonCss.subheading, css.heading]}>
					Accessing and Correcting Your Information
				</h3>
				You can review and change your personal information by logging into the Platform and
				visiting your Profile and account settings pages. You may also send us an email at
				hello@sitepen.com to request access to, correct or delete any personal information
				that you have provided to us. We cannot delete your personal information except by
				also deleting your user account. We may not accommodate a request to change
				information if we believe the change would violate any law or legal requirement or
				cause the information to be incorrect. Proper access and use of information provided
				on the Platform, including User Contributions, is governed by our Terms of Service.
				<h3 classes={[commonCss.subheading, css.heading]}>Links</h3>
				The Site and Content on it may contain links to other sites and resources controlled
				by third parties. We are not responsible for the privacy practices or content of
				these other sites or resources, and you should consult the privacy statements of
				such other sites and resources.
				<h3 classes={[commonCss.subheading, css.heading]}>Data Security</h3>
				We have implemented measures designed to secure your personal information and
				messages from accidental loss and from unauthorized access, use, alteration and
				disclosure. Any online payment transactions will be encrypted. The safety and
				security of your information and messages also depends on you. Where we have given
				you (or where you have chosen) a password for access to certain parts of our
				Platform, you are responsible for keeping this password confidential. We ask you not
				to share your password with anyone. We urge you to be careful about giving out
				information in public areas of the Platform. The information you share in public
				areas may be viewed by any user of the Platform. Unfortunately, the transmission of
				information via the internet is not completely secure. Although we do our best to
				protect your personal information and messages, we cannot guarantee the security of
				your personal information transmitted to our Platform. Any transmission of personal
				information and messages is at your own risk. We are not responsible for
				circumvention of any privacy settings or security measures contained on the
				Platform.
				<h3 classes={[commonCss.subheading, css.heading]}>Changes to this Policy</h3>
				We may amend this Privacy Policy, including the use of your information for new,
				unanticipated purposes, at any time by posting a revised version on the Site, and/or
				sending information regarding the amendment to your email address in our records.
				You are responsible for regularly reviewing the Site to obtain timely notice of such
				amendments. You shall be deemed to have accepted such amendments by continuing to
				use the Site and/or the Services after such amendments have been posted or
				information regarding such amendments has been sent to you. If you do not agree with
				any of such changes, you may immediately cease all access and use of the Site and/or
				the Services. You agree that such termination will be your exclusive remedy in such
				event.
				<h3 classes={[commonCss.subheading, css.heading]}>California and EU Users</h3>
				<b>
					This section applies to the extent the California Consumer Privacy Act (CCPA) or
					EU General Data Protection Regulation (GDPR) applies to you and your data.
				</b>
				<h3 classes={[commonCss.subheading, css.heading]}>Privacy Rights</h3>
				You have the rights described below with respect to your Personal Data that we
				process. These rights apply equally to EU and California users. To exercise any of
				your rights below, please send an e-mail to{' '}
				<a href="mailto:hello@sitepen.com">hello@sitepen.com</a> or call +1-650-968-8787.
				<ul classes={css.bulletList}>
					<li>
						Right to Withdraw Consent. You may withdraw your consent to our processing
						of your Personal Information. Doing so will prevent us from providing any
						Services.
					</li>
					<li>
						Right to be Forgotten. You have the right to request your Personal
						Information be erased. You must delete your Account before we can process
						this request.
					</li>
					<li>
						Right of Access. You have the right to know if we are processing your
						Personal Information (if you have an Account, we are, as described in the
						Privacy Policy) and what information about you we possess.
					</li>
					<li>
						Right to Modify. You have the right to request your Personal Information be
						changed if it is not correct. In many cases you can do this yourself in the
						“Settings” or “Account” sections of the App.
					</li>
					<li>
						Right to Restrict Processing. You have the right to request the processing
						of your Personal Information be restricted. This may restrict or prevent the
						provision of the Services.
					</li>
					<li>
						Right to Portability. You have the right to request a copy of your Personal
						Information.
					</li>
					<li>
						Right to Object. You have the right to object to the processing of your
						Personal Information.
					</li>
					<li>
						Right to Lodge a Complaint You have the right to lodge a complaint at any
						time with the applicable supervisory authority.
					</li>
					<li>
						Right to Opt Out. You have the right to opt out of the sale of your Personal
						Information. We do not sell Personal Information to third parties.
					</li>
				</ul>
				<h3 classes={[commonCss.subheading, css.heading]}>Information We Collect</h3>
				We collect information that identifies, relates to, describes, references, is
				capable of being associated with, or could reasonably be linked, directly or
				indirectly, with a particular consumer or device (for purposes of this “California
				and EU Users” Section, “personal information”). Personal information does not
				include: Publicly available information from government records; de-identified or
				aggregated consumer information; information excluded from the CCPA’s scope, like:
				health or medical information covered by the Health Insurance Portability and
				Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical
				Information Act (CMIA) or clinical trial data; personal information covered by
				certain sector-specific privacy laws, including the Fair Credit Reporting Act
				(FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information
				Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994. In particular,
				we have collected, disclosed to third parties, and sold the following categories of
				personal information from consumers within the last twelve (12) months. Disclosures
				of Personal Information are
				<table>
					<tbody>
						<tr>
							<td>
								<p>
									<b>Category</b>
								</p>
							</td>
							<td>
								<p>
									<b>Examples</b>
								</p>
							</td>
							<td>
								<p>
									<b>Collected</b>
								</p>
							</td>
							<td>
								<p>
									<b>Disclosed</b>
								</p>
							</td>
							<td>
								<p>
									<b>Sold</b>
								</p>
							</td>
						</tr>
						<tr>
							<td>A. Identifiers.</td>
							<td>
								A real name, alias, postal address, unique personal identifier,
								online identifier, Internet Protocol address, email address, account
								name, Social Security number, driver’s license number, passport
								number, or other similar identifiers.
							</td>
							<td>YES</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>
								B. Personal information categories listed in the California Customer
								Records statute (Cal. Civ. Code § 1798.80(e)).
							</td>
							<td>
								A name, signature, Social Security number, physical characteristics
								or description, address, telephone number, passport number, driver’s
								license or state identification card number, insurance policy
								number, education, employment, employment history, bank account
								number, credit card number, debit card number, or any other
								financial information, medical information, or health insurance
								information. Some personal information included in this category may
								overlap with other categories.
							</td>
							<td>YES</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>
								C. Protected classification characteristics under California or
								federal law.
							</td>
							<td>
								Age (40 years or older), race, color, ancestry, national origin,
								citizenship, religion or creed, marital status, medical condition,
								physical or mental disability, sex (including gender, gender
								identity, gender expression, pregnancy or childbirth and related
								medical conditions), sexual orientation, veteran or military status,
								genetic information (including familial genetic information).
							</td>
							<td>NO</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>D. Commercial information.</td>
							<td>
								Records of personal property, products or services purchased,
								obtained, or considered, or other purchasing or consuming histories
								or tendencies.
							</td>
							<td>YES</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>E. Biometric information.</td>
							<td>
								Genetic, physiological, behavioral, and biological characteristics,
								or activity patterns used to extract a template or other identifier
								or identifying information, such as, fingerprints, faceprints, and
								voiceprints, iris or retina scans, keystroke, gait, or other
								physical patterns, and sleep, health, or exercise data.
							</td>
							<td>NO</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>F. Internet or other similar network activity.</td>
							<td>
								Browsing history, search history, information on a consumer’s
								interaction with a website, application, or advertisement.
							</td>
							<td>YES</td>
							<td>YES</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>G. Geolocation data.</td>
							<td>Physical location or movements.</td>
							<td>YES</td>
							<td>YES</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>H. Sensory data.</td>
							<td>
								Audio, electronic, visual, thermal, olfactory, or similar
								information.
							</td>
							<td>NO</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>I. Professional or employment-related information.</td>
							<td>Current or past job history or performance evaluations.</td>
							<td>YES</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>
								J. Non-public education information (per the Family Educational
								Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part
								99)).
							</td>
							<td>
								Education records directly related to a student maintained by an
								educational institution or party acting on its behalf, such as
								grades, transcripts, class lists, student schedules, student
								identification codes, student financial information, or student
								disciplinary records.
							</td>
							<td>YES</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
						<tr>
							<td>K. Inferences drawn from other personal information.</td>
							<td>
								Profile reflecting a person’s preferences, characteristics,
								psychological trends, predispositions, behavior, attitudes,
								intelligence, abilities, and aptitudes.
							</td>
							<td>NO</td>
							<td>NO</td>
							<td>NO</td>
						</tr>
					</tbody>
				</table>
				<h3 classes={[commonCss.subheading, css.heading]}>International Users</h3>
				The Site is hosted and the Services are provided in the United States of America. If
				you are accessing the Site or Services from the European Union, Asia, or any other
				jurisdiction with laws or regulations governing personal data collection, use, and
				disclosure, which differ from United States laws, please be advised that through
				your use of the Site and the Services, you are transferring your personal
				information to the United States of America and you consent to that transfer.
				<h3 classes={[commonCss.subheading, css.heading]}>Children Under the Age of 16</h3>
				The Site is not intended for children under 16 years of age. No one under age 16 may
				provide any personal information to or on the Site. We do not knowingly collect
				personal information from children under 16. If you are under 16, do not use or
				provide any information on this Site or through any of its features, register on the
				Site, make any purchases through the Site, use any of the interactive features of
				this Site, or provide any information about yourself to us, including your name,
				address, telephone number, email address, or any screen name or user name you may
				use. If we learn we have collected or received personal information from a child
				under 16 without verification of parental consent, we will delete that information.
				If you believe we might have any information from or about a child under 16, please
				contact us at <a href="mailto:hello@sitepen.com">hello@sitepen.com</a>. Effective
				date of this version: January 1, 2020
			</div>
		</div>
	);
});

export default Privacy;
