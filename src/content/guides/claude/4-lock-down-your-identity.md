---
title: "Lock down your identity with Claude"
description: "Have Claude walk you through locking down your accounts, phone, credit and privacy settings, one step at a time, with a checklist you can keep."
draft: false
pubDate: 2026-10-23
authorship: ai-drafted
---

## Why this is urgent now

Short on time? Jump to the [list of 23 steps](#the-23-steps-at-a-glance).

Some security experts started calling it "Black October" after October 21, 2026, when PHP, software behind much of the web, fixed two critical flaws. The security firm Wiz found the first flaw with AI models. European government and hospital websites went offline while their owners patched. The internet company Cloudflare reported exploit attempts climbing from thousands to millions within hours. Days earlier, California reported that an intruder had copied data on millions of students from a testing contractor.

The wave is part of a larger trend. The US flaw database (NVD) lists 85,836 flaws published in 2026 through October 22. That is 2.2 times the same period of 2025, and already more than all of 2025. CISA, the US cyber agency, keeps a list of flaws confirmed exploited in real attacks. It has added 221 recently numbered flaws in 2026 through October 20, more than the 190 added in all of 2025.

The window to patch is closing. The security firm Mandiant measured the average time from a fix to the first attack at 63 days in 2018 and 2019. Its 2026 report estimates a point before fixes exist: exploitation "is routinely occurring before a patch is even released."

AI is changing the pace. Google's threat intelligence group says AI "is measurably changing" how flaws are found and exploited, and the head of the UK's National Cyber Security Centre (NCSC) says AI "will make it easier, faster and cheaper to discover and exploit weaknesses." Anthropic says its unreleased model found thousands of zero-day flaws (flaws the maker did not know about), including in every major operating system and browser. The UK AI Security Institute finds that downloadable open-weight models now match the best closed models released 4 to 7 months earlier on cyber tasks, at a fraction of the cost. The NCSC and the Institute write: "The limiting factor is increasingly funding, not expertise."

The stakes are personal. Americans reported nearly $21 billion in losses to the FBI for 2025. In a SIM swap, the FCC warns, scammers use personal details to move your phone number to their phone, catch your text codes, reset your passwords and drain your bank accounts.

A flaw like PHP's is fixed by the owners of the websites that run it; Malwarebytes says visitors do not need to install the PHP updates. Two things are in your hands. The first is your own devices and accounts: updates, strong passwords, passkeys and a lock on your phone number, in Part 1. The second is what a thief can do with your data when a company that holds it is breached, as with the California students: credit freezes, the IRS PIN and privacy settings, in Parts 2 and 3, make stolen details far less useful.

![Two bar charts. Security flaws published per year rise slowly from 6,494 in 2015 to 48,151 in 2025, then reach 85,836 in 2026 with the year not yet over (through October 22). Flaws confirmed exploited in real attacks per year are 145 in 2023, 142 in 2024, 190 in 2025 and 221 in 2026 (through October 20): rising, but far less steeply.](/images/guides/claude/vulnerability-trends.svg)

Sources: the US National Vulnerability Database (NVD) and the CISA Known Exploited Vulnerabilities catalog; the 2026 bars are partial years and nothing is projected. Part of the jump in published flaws is a change in counting: more organizations now assign flaw numbers, the Linux kernel has numbered nearly every bug fix since 2024, and old advisories have been backfilled. The lower chart counts recently numbered flaws and is the truer measure of danger; it is rising too.

## The 23 steps at a glance

This episode is for US residents, last checked October 2026. A rough estimate is three to four hours in total, and the work is easy to spread over a few sittings. The freezes, the IRS PIN, the Social Security account and Informed Delivery are free.

| Step | What it stops |
|---|---|
| **Part 1: Accounts and phone** | |
| 1. Automatic updates | Attackers using a flaw the maker has already fixed |
| 2. Password manager | One leaked password unlocking your other accounts |
| 3. Lock down email | A thief resetting every other password through your inbox |
| 4. Carrier lock | Your phone number being moved to a thief's SIM or carrier |
| 5. Two-step login without texts | Login codes being caught through your phone number |
| 6. Phone theft protection | A watched passcode becoming a takeover of your Apple or Google account |
| 7. Alerts | Fraud going unnoticed until the statement |
| **Part 2: Identity and credit** | |
| 8. Credit freeze at all three bureaus | New cards and loans opened in your name |
| 9. ChexSystems freeze | New bank accounts opened in your name |
| 10. NCTUE freeze | New phone, internet and utility accounts opened in your name |
| 11. IRS Identity Protection PIN | A fake tax return collecting your refund |
| 12. Social Security account | Someone else creating an account in your name |
| 13. USPS Informed Delivery | Missing mail, such as a new card or tax form, going unnoticed |
| 14. Prescreen opt-out | Pre-approved credit offers piling up in your mailbox |
| 15. Read your credit reports | Accounts you did not open staying hidden |
| 16. Unused credit cards | Fraud running for months on a card nobody watches |
| 17. ID documents | A scramble to replace a lost passport or Social Security card |
| **Part 3: Privacy settings** | |
| 18. Payment apps | Strangers seeing who you pay |
| 19. Social media | Strangers reading your public profile |
| 20. Security questions | Answers found online unlocking an account |
| 21. Location and fitness | Shared routes showing where you live and when you are away |
| 22. App permissions | Apps reading data they do not need |
| 23. Google and Apple checkups | Sharing and stored activity you never reviewed |
| **Optional** | |
| Children's credit freeze (under 16) | Credit opened with a child's Social Security number going unnoticed for years |
| Verbal password at bank and brokerage | A caller posing as you getting a phone request carried out |
| SIM PIN (physical SIM only) | A stolen SIM card working in another phone |

Government sites, carrier apps and bank apps move their menus often, so the exact taps matter more than the theory. That is the job to hand to Claude: it asks what phone, carrier and email you use, then gives you the taps for your setup, one step at a time. The same fallback covers every menu path on this page: if it is not there, the app has moved it; ask Claude "where do I find X now?"

## One rule: secrets stay out of every chat

Never give a password, PIN, one-time code or a full Social Security number to anyone who contacts you, and never paste one into a chat, Claude included. Type them only into the official website or app. Save every PIN and recovery code in a password manager the moment you get it. The prompt below tells Claude to refuse them too, as a second line of defense.

## Paste this prompt and let Claude run the walkthrough

Open a new chat at claude.ai and paste the block below. Turn on web search first, so Claude can check where a setting has moved: follow the [web search step in Episode 1](/guides/claude/1-set-up-your-account/#web-search), then paste the prompt.

The prompt carries the whole step list, so it works without Claude reading this page.

```text
Walk me through locking down my identity, phone and accounts. I am a US resident. Go one step at a time, in order, and skip anything I say I have already done.

Before anything else, ask me these questions, one at a time, and wait for each answer: which phone carrier I use; whether I have an iPhone or an Android phone; which email provider I use; which computer operating system I use (Mac, Windows 11, Windows 10 or none) and which home router I have; whether I use a password manager; whether I will apply for credit (a card, loan, car financing or mortgage) in the next month; and whether I have children under 16. Adapt every step to my answers.

Rules for you:
- Give me exact taps and clicks for my setup. Menus move, so use web search to check current locations, and when you are not sure a path is still right, say so and tell me to describe what I see on screen instead.
- Never ask for or accept passwords, PINs, one-time codes, full Social Security numbers or account numbers. If I paste one, tell me not to and carry on without using it.
- Whenever a step produces a new PIN, login or recovery code, make me confirm it is saved in my password manager before you move on.
- For every step, give me the one-line reason first, then the actions, then what "done" looks like.
- If I am applying for credit within a month, still have me freeze, and help me plan lifting the freeze for the dates I need.

The steps, in order. Use these numbers and names.

Part 1: Accounts and phone
1. Automatic updates: turn on automatic updates on every device, app, browser and the home router, and retire devices that no longer get security updates.
2. Password manager: turn one on, set it as autofill, change the key passwords.
3. Lock down email: security checkup, passkey, two-step verification, backup codes.
4. Carrier lock: turn on the number lock or port-out protection and set an account PIN.
5. Two-step login without texts: move accounts to a passkey or authenticator app.
6. Phone theft protection: Stolen Device Protection (iPhone) or Theft protection (Android).
7. Alerts: turn on every-transaction alerts in every card and bank app.

Part 2: Identity and credit
8. Credit freeze at all three bureaus: Equifax, Experian, TransUnion.
9. ChexSystems freeze: block new bank accounts and save the PIN.
10. NCTUE freeze: block new phone, internet and utility accounts.
11. IRS Identity Protection PIN: opt in, after checking today's date against the IRS window.
12. Social Security account: create my own my Social Security account.
13. USPS Informed Delivery: sign up and turn on the daily email.
14. Prescreen opt-out: stop prescreened credit offers.
15. Read your credit reports: check each report at annualcreditreport.com.
16. Unused credit cards: close them or keep them on alerts.
17. ID documents: locate, scan and calendar their expiry dates.

Part 3: Privacy settings
18. Payment apps: set Venmo, Cash App and PayPal to private.
19. Social media: private profiles, discoverability off.
20. Security questions: random answers saved in the password manager.
21. Location and fitness: hide the Strava map area, review Find My sharing.
22. App permissions: review location, contacts and other permissions.
23. Google and Apple checkups: run both guided reviews.

The details for each step follow. Use them when I reach that step.

Details for Part 1: Accounts and phone
1. Automatic updates. Reason: attackers now often strike within days of a fix, or before one exists, and an update closes the hole; CISA calls keeping software up to date the most effective measure I can take to protect my devices. For each device I own, tell me to check that automatic updates are on, since I cannot assume they are. iPhone and iPad: Settings > General > Software Update > Automatic Updates, turn on Automatically Install; in the System Files section, also turn on Automatically Install; on iOS 26.1 or later, also Settings > Privacy & Security > Background Security Improvements > Automatically Install. Mac: System Settings > General > Software Update, the info button next to Automatic Updates, turn on Download new updates when available, Install macOS updates and Install Security Responses and system files; a laptop must be plugged in to download automatically; Background Security Improvements is under Privacy & Security. Windows 11: updates install automatically and finish only after a restart (Settings > Windows Update > Schedule the restart). Windows 10: support ended on October 14, 2025, so it no longer gets security fixes; either upgrade to Windows 11 (free on eligible PCs) or enroll in Extended Security Updates (Settings > Update & Security > Windows Update > Enroll now; free with Windows settings sync) for fixes through October 12, 2027. Android: Settings > System > Software updates (it varies by maker and carrier; on Samsung it is Settings > Software update, with Auto download over Wi-Fi); on a Pixel, updates install in the background and take effect at the next restart. Apps: App Store apps update automatically by default, and the toggle is Settings > Apps > App Store > App Updates (Mac: App Store > Settings > Automatic Updates); Google Play: profile picture > Settings > Network preferences > Auto-update apps. Browsers apply an update when restarted: Chrome (More > Help > About Google Chrome > Relaunch), Edge (edge://settings/help > Restart), Firefox (restart it); Safari updates with the operating system. Home router: install its firmware updates, turn on automatic updates if it offers them, turn off remote management, use a long unique admin password, and replace a router the maker no longer supports (the FBI warns criminals take over end-of-life routers). Retire any device that no longer gets security updates: iOS 27 supports iPhone 11 and later plus iPhone SE (2nd and 3rd generation), and the model is under Settings > General > About; Pixel 8 and later get 7 years of updates, Pixel 6, 6a, 7, 7a and Fold get 5, and Pixel 5a and earlier get none; check every device I own, including old iPads and Macs, by finding the model in its About screen and searching whether it still gets security updates; for other makers, check the maker's support page.
2. Password manager. Reason: one leaked password should not unlock my other accounts. Options: Apple Passwords (built into iOS 18 and macOS Sequoia, Windows via iCloud for Windows), Google Password Manager (built into Chrome and Android), Bitwarden (free tier, unlimited passwords and devices), 1Password (paid, no free tier). Turn it on, set it as the phone's autofill, create a note called "Security PINs" for codes collected later, then change the passwords for email, bank, brokerage and phone carrier first, using generated passwords.
3. Lock down email. Reason: email resets every other password. Run the provider's security checkup (Google: myaccount.google.com/security-checkup). Add a passkey (Google: myaccount.google.com/signinoptions/passkeys) and turn on two-step verification. Save the backup codes (Google issues sets of 10, each single use). Check the recovery phone and recovery email are current. Sign out unknown devices and remove connected apps I do not recognize. On an iPhone, also add a Recovery Contact (Settings > my name > Sign-In & Security > Recovery Contacts).
4. Carrier lock. Reason: a thief who moves my number to their SIM or another carrier receives my login codes. Carrier locks are voluntary, so I have to turn mine on. Verizon, AT&T, T-Mobile and Google Fi state their locks are free; Visible states no price. Verizon: Number Lock (blocks port-outs) and SIM Protection (blocks SIM and device changes), in the My Verizon app > Me > Edit profile and settings > Security. AT&T: Wireless Account Lock, in the AT&T app > Account icon > Wireless account lock. T-Mobile: SIM Protection (free, postpaid) in the T-Life app > Manage > gear icon > Security > SIM Protection, plus the free Port Out Protection add-on per line (T-Life > Manage > Manage add-ons). Visible: Dashboard > Device details > Line Lock & portout-PIN > Lock (unlocking needs an SMS code and takes effect 30 minutes later). Google Fi: Fi website > Phone settings > Privacy & security > Number lock. Any other carrier: ask for a number lock or port-out protection and an account PIN. If the carrier offers an account PIN or passcode, set one and save it. Remind me to turn the lock off before switching phones or carriers and back on afterwards.
5. Two-step login without texts. Reason: text codes are only as safe as my phone number. Use an authenticator app, or the password manager's built-in one. Switch each account to a passkey or authenticator app and remove text messages where the site allows, in this order: email, password manager, bank, brokerage and retirement accounts, phone carrier, IRS and Social Security. Save each site's backup codes. If a bank only offers text codes, leave it; the carrier lock covers it.
6. Phone theft protection. Reason: a thief who sees my passcode should not be able to take over my Apple or Google account. iPhone (iOS 17.3 or later): Settings > Face ID & Passcode > Stolen Device Protection on; away from familiar places, sensitive actions then need Face ID or Touch ID. Android (10 or later): Settings > Google > All services > Theft protection, turn on Theft Detection Lock (locks the screen after a grab-and-run) and Offline Device Lock (locks an unlocked phone that goes offline). On Android 15 or later with a supported device, Identity Check requires biometrics for security changes away from trusted places; tell me to ask about it. Both: a passcode of 6 digits or more, and Find My (iPhone) or its Android equivalent on.
7. Alerts. Reason: I should see fraud the day it happens, not on the statement. In every card and bank app, turn on push or email alerts for every transaction, online purchases, new payees, and password or address changes, including cards I rarely use.

Details for Part 2: Identity and credit
8. Credit freeze at all three bureaus. Reason: a freeze stops lenders reading my file, so nobody can open credit in my name. Freezing, lifting and removing are free by federal law; choose the free freeze, never a paid "lock". I need my Social Security number, date of birth and recent addresses, and I type them only into the bureau's own site. Equifax: equifax.com/personal/credit-report-services/credit-freeze, (888) 298-0045, managed through a myEquifax account, no PIN needed. Experian: experian.com/freeze, 1-888-397-3742, account based, no PIN needed, freeze applies in real time. TransUnion: transunion.com/credit-freeze, free TransUnion Service Center account, freeze line 800-916-8800. Save each login. To apply for credit later: lift the freeze at all three (lenders pull from different bureaus). Online or phone lifts are done within an hour by law. Experian lets me schedule start and end dates; TransUnion (Service Center > Temporarily Lift Freeze) lets me set dates up to 15 days ahead; for Equifax, choose an end date where the site offers one. Afterwards, confirm all three are frozen again.
9. ChexSystems freeze (banks check it before opening checking or savings accounts). chexsystems.com/security-freeze/place-freeze, through its Consumer Portal account, or call 800-887-7652 (Mon to Fri, 7am to 11pm Central). It issues a unique PIN by mail or in the Consumer Portal, needed to lift or remove the freeze. Lifting is done in the portal. Save the PIN.
10. NCTUE freeze (phone, internet and utility companies check it). nctue.com/consumer links to nctueconsumerportal.com; place, temporarily lift or remove the freeze online or by phone at 1-866-349-5355. Free. It is account based, so save the login.
11. IRS Identity Protection PIN. Reason: with an IP PIN the IRS rejects any return filed without my code, which stops a fake return that collects my refund. Go to irs.gov/ippin > Get an IP PIN. Identity is checked through ID.me (photo ID and a selfie, or a live video call with an ID.me agent instead of the selfie); the PIN is then shown in my IRS online account Profile page. Anyone with an SSN or ITIN who can verify identity may opt in; under-18s cannot use the online route. A new PIN is generated every year, valid for one calendar year, and online enrollees retrieve it from early January. The online tool is usually down from November to mid-January, and no 2026 dates are published; check today's date against that window and tell me whether to do this now or wait until mid-January. Tell me to give each year's PIN to whoever files my taxes.
12. Social Security account. Reason: creating my own account takes away the risk of someone else creating one in my name with my number, as the Social Security Administration puts it. ssa.gov/myaccount, sign in with Login.gov (the default and recommended) or ID.me. Check the earnings history for missing years. Save the login.
13. USPS Informed Delivery. Reason: images of incoming letter-sized mail "arriving soon" (a new card, a tax form) make missing mail obvious. Free, at informeddelivery.usps.com. Signing up does not block anyone else from enrolling at my address, but USPS mails a letter to the address for each new enrollment, with a code to remove an account I do not recognize; tell me to watch for it. Identity is verified online first, otherwise by an invitation code in the mail or at a Post Office. Turn on the daily email.
14. Prescreen opt-out. Reason: a freeze does not stop prescreened credit offers, because federal law exempts them, so they keep arriving in my mailbox. optoutprescreen.com or 1-888-567-8688. An online opt-out lasts 5 years; for permanent, start online, print the Permanent Opt-Out Election form, sign and mail it.
15. Read my credit reports. Reason: catch accounts I did not open, wrong statuses and addresses I never lived at. annualcreditreport.com is the only official site and gives free reports from each bureau every week; I should check each report at least once a year. A freeze does not block me from my own reports. Check every account is mine, paid-off loans show as closed, every name and address is one I used, and every hard inquiry is an application I made. For an account I do not recognize, contact the creditor first, since it may be legitimate (for example a sold debt). Dispute errors with the bureau showing them and with the business that reported them.
16. Unused credit cards. Reason: an unwatched card is where fraud runs longest. For each card I do not use, close it, or keep it with every-transaction alerts on.
17. ID documents. Reason: replacing a passport, Social Security card or birth certificate in a hurry is slow. Keep the originals together at home (the Social Security card does not belong in a wallet), scan each into the password manager, and put expiry dates in my calendar with an early reminder.

Details for Part 3: Privacy settings (when this part starts, ask me, one at a time: which of Venmo, Cash App, PayPal and Zelle I use; which of Facebook, Instagram, LinkedIn, X and TikTok I use; and whether I use Strava. Cover only the apps I say I use.)
18. Payment apps (only those I use). Reason: payment apps can show strangers who I pay and my name and photo. Venmo: Me tab > Settings gear > Privacy. Set the default for future payments to Private (payments from new accounts may be public by default), hide all past transactions from the Privacy menu (a past payment can only be made more private, never less), set Friends List to private, and review Find Me, which controls whether people can find me on Venmo and PayPal. Say plainly that Venmo has no private-profile toggle: my name, username, photo and account-creation month and year stay public. Cash App: Profile > Privacy > How others find you > turn Profile name off (by default anyone can search by it), and set payment requests to Contacts only; a $Cashtag creates a public page at cash.app/$yourcashtag. PayPal: Profile > Data and privacy > Search privacy, turn off all three toggles (Personal profile info, PayPal.Me link, Payment requests); with all three off, searchers cannot see my name or photo. Zelle has no social feed, so there is nothing to set.
19. Social media (only those I use). Reason: strangers can read whatever a public profile shows. Facebook: profile picture > Settings & privacy > Privacy Checkup; then the default post audience (Settings > Audience and visibility > Posts) set to Friends, Limit who can see past posts (changes posts visible to more than friends to Friends and cannot be reversed in one click), "Who can Facebook suggest your profile to based on your phone number or email address" (Audience and visibility > How people find and contact you) set to No one, and the birthday and other About audiences (profile > About > Contact and basic information). Instagram: Settings > Who can see your content > Account privacy > Private account (name, username, photo and bio stay visible to anyone); Show Activity Status off (Settings > How others can interact with you > Messages and story replies); Accounts Center > Your information and permissions > Upload Contacts > Connect Contacts off (this does not delete contacts already uploaded). LinkedIn: Me > View Profile > Edit Public profile & URL > public visibility Off (search engines can take weeks or months to catch up); Settings & Privacy > Visibility > Discoverability by email and by phone number set to Nobody, and Connection visibility off. X: Settings and privacy > Privacy and safety > Audience and tagging > Protect your posts; Discoverability and contacts > turn off finding me by email and by phone; Photo tagging set to Only people you follow, or Off; precise location off under Privacy and safety > Location. TikTok: Profile > Menu > Settings and privacy > Privacy > Private account (name, username and photo stay visible and searchable), Suggest your account to others off, and Sync contacts off, then Remove previously synced contacts.
20. Security questions. Reason: US government security guidance tells sites to stop using security questions, and real answers (a first car, a high school) are findable online or match common quiz questions. Where a site still asks, give a random, long, unique answer and store it in the password manager like a password.
21. Location and fitness. Reason: shared routes and live locations can show where I live and when I am away. Strava (if used): You > Settings > Privacy Controls > Map Visibility, hide the area around my home address or the start and end of every activity (up to a 1-mile radius); this does not change who can see the activity, so also change the default audience for activities from Everyone (where new accounts start) to something narrower, Flybys (Privacy Controls), and opt out of the Global Heatmap and Metro under Product Improvements. iPhone: Find My app > People tab lists who sees my location; tap a name > Stop Sharing My Location for anyone who should not.
22. App permissions. Reason: each app can read only what I allow. iPhone: Settings > Privacy & Security, open each data type; under Location Services turn Precise Location off for apps that do not need it, and choose Limited Access under Contacts for apps that do not need my whole address book. Android 12 or later: Settings > Security and Privacy (or Privacy) > Privacy dashboard to see which apps used what, and Permission manager to review by permission; per app, Settings > Apps > the app > Permissions.
23. Google and Apple checkups. Reason: both offer a guided review of what is shared and stored. Google: run Privacy Checkup (myaccount.google.com/privacycheckup); Timeline is off by default and stored on the device when on, with auto-delete set to 3 months; Web & App Activity: My Activity > Controls > Auto-delete, set to 3 months. In the US, "Results about you" (myactivity.google.com/results-about-you, or the Google app > profile picture) finds search results that show my phone, home address or email and lets me request removal, with alerts. Apple (iOS 16 or later, Apple Account with two-factor): Settings > Privacy & Security > Safety Check > Manage Sharing & Access; it does not cover non-Apple accounts.

Optional, offer after step 23 depending on my answers
- Children's credit freeze, only if I said I have children under 16. A parent or guardian can freeze a child's file at each bureau for free, and child identity theft can go unnoticed for years, sometimes until the child applies for a job, housing or credit. TransUnion takes minor freezes by mail only; ask me to check each bureau's process.
- Verbal password at my bank and brokerage: ask each to add a passphrase they require before acting on a phone request.
- SIM PIN, physical SIM cards only (not eSIM). iPhone: Settings > Cellular > SIM PIN. Use the carrier's default PIN first (Verizon 1111, AT&T 1111, T-Mobile 1234) and never guess, because too many wrong tries locks the SIM until the carrier gives a PUK code.

Finish with "keeping it up": lift freezes before applying for credit and re-freeze afterwards; leave automatic updates on, restart devices and browsers when they ask, and replace devices that stop getting security updates; every January get the new IRS IP PIN and give it to my tax preparer; at least once a year read my credit reports, check my Social Security earnings record, review alerts and unused cards, and re-check the privacy settings in Part 3; turn the carrier lock off before switching phones or carriers; and if my information leaks (a breach letter, a lost wallet, a scam call I answered), check my freezes are on, change affected passwords, and follow the recovery plan at identitytheft.gov.
```

Not sure what to write? Ask Claude to write it. For example: "Write me a prompt that walks me through freezing my credit and locking my phone number, one step at a time, without ever asking for a password or a PIN."

## Part 1: lock the accounts and the phone first

Updates come first because they close the holes attackers use directly. The password manager and your email protect everything set up after them, so do those next.

### 1. Updates close the hole attackers are using now

An update closes a known hole, and a device that has not restarted may not have it yet. CISA calls keeping software up to date "the most effective measure you can take to protect your computer, phone, and other digital devices". Check each setting below on every device you own; do not assume it is on.

- iPhone and iPad: Settings > General > Software Update > Automatic Updates, then turn on Automatically Install. In the System Files section, turn on Automatically Install too. On iOS 26.1 or later, also turn on Settings > Privacy & Security > Background Security Improvements > Automatically Install; if it is off, those fixes wait for the next full update.
- Mac: System Settings > General > Software Update, the info button next to Automatic Updates. Turn on Download new updates when available, Install macOS updates and Install Security Responses and system files. A laptop must be plugged in to download automatically. Background Security Improvements is under Privacy & Security.
- Windows 11: updates install automatically and finish only after a restart (Settings > Windows Update > Schedule the restart).
- Windows 10: support ended on October 14, 2025, so it gets no security fixes. Upgrade to Windows 11 if the PC is eligible (free), or enroll in Extended Security Updates (Settings > Update & Security > Windows Update > Enroll now; free with Windows settings sync) for fixes through October 12, 2027.
- Android: Settings > System > Software updates. Schedules vary by maker and carrier; on Samsung it is Settings > Software update, with Auto download over Wi-Fi. On a Pixel, updates install in the background and take effect at the next restart.
- Apps: App Store apps update automatically by default; the toggle is Settings > Apps > App Store > App Updates (Mac: App Store > Settings > Automatic Updates). On Google Play: profile picture > Settings > Network preferences > Auto-update apps.
- Browsers apply an update when restarted. Chrome: More > Help > About Google Chrome > Relaunch. Edge: edge://settings/help > Restart. Firefox: restart it. Safari updates with the operating system.
- Home router: install firmware updates, turn on automatic updates if the router offers them, turn off remote management, and use a long unique admin password. The FBI warns that criminals took over routers the maker no longer supports and sold access to them, so replace an end-of-life router.
- Retire devices that no longer get security updates, since CISA recommends retiring all end-of-life products. iOS 27 supports iPhone 11 and later plus iPhone SE (2nd and 3rd generation); the model is under Settings > General > About. Pixel 8 and later get 7 years of updates, Pixel 6, 6a, 7, 7a and Fold get 5, and Pixel 5a and earlier get none. Check every device you own, including old iPads and Macs, which are easy to forget: find the model in its About screen and ask Claude whether it still gets security updates. For other makers, check the maker's support page.

### 2. A password manager stops one leaked password opening everything

Most account takeovers start with a password reused from a site that leaked. A manager creates a unique password for each site and fills it in, and it is where every PIN and recovery code from this episode lives.

- Apple devices only: the Passwords app (iOS 18 and macOS Sequoia; Windows through iCloud for Windows).
- Android or a mix of devices: Google Password Manager (built into Chrome and Android) or Bitwarden (free tier, unlimited passwords and devices).
- Paid and polished: 1Password (no free tier).

Turn it on, set it as your phone's autofill, and create a note called "Security PINs". Then change the passwords for email, bank, brokerage and phone carrier first, letting the manager generate them.

### 3. Locking email protects the account that resets all the others

Run your provider's security checkup (Google: myaccount.google.com/security-checkup). Add a passkey, which lets you sign in with your phone's face or fingerprint unlock (Google: myaccount.google.com/signinoptions/passkeys), and turn on two-step verification. Save the backup codes in the password manager; Google issues them in sets of 10, each usable once. Check the recovery phone and recovery email are current, sign out devices you do not recognize, and remove connected apps you do not use. On an iPhone, also add a Recovery Contact under Settings > your name > Sign-In & Security > Recovery Contacts.

### 4. A carrier lock stops a thief moving your number

Criminals talk a carrier into moving your number to their SIM card (a "SIM swap") or to another carrier (a "port-out"), then receive your login codes. Carrier locks are voluntary: nothing makes a carrier offer one, so you turn yours on. Verizon, AT&T, T-Mobile and Google Fi state that theirs are free; Visible's page states no price.

- Verizon: Number Lock (blocks port-outs) and SIM Protection (blocks SIM and device changes). My Verizon app > Me > Edit profile and settings > Security.
- AT&T: Wireless Account Lock. The AT&T app > Account icon > Wireless account lock.
- T-Mobile: SIM Protection (postpaid) in the T-Life app > Manage > gear icon > Security > SIM Protection, plus the Port Out Protection add-on per line under Manage > Manage add-ons.
- Visible: Dashboard > Device details > Line Lock & portout-PIN > Lock. Unlocking needs an SMS code and takes effect 30 minutes later.
- Google Fi: the Fi website > Phone settings > Privacy & security > Number lock.
- Any other carrier: ask for a number lock or port-out protection, plus an account PIN.

If your carrier offers an account PIN or passcode, set one and save it. Turn the lock off before you switch phones or carriers, or the switch fails, and back on afterwards.

### 5. Two-step login without texts closes the SIM-swap route

Codes sent by text are only as safe as your phone number. A passkey or authenticator app cannot be SIM-swapped.

1. Use an authenticator app, or your password manager's built-in one.
2. Switch each account to a passkey or the authenticator app, and remove text messages where the site allows. Go in this order: email, password manager, bank, brokerage and retirement accounts, phone carrier, IRS and Social Security.
3. Save each site's backup codes in the password manager.

Some banks only offer text codes. Leave those; the carrier lock covers them.

### 6. Phone theft protection stops a watched passcode becoming a takeover

A thief who watches you type your passcode can open your phone and try to change your Apple or Google account. These settings limit the damage.

- iPhone (iOS 17.3 or later): Settings > Face ID & Passcode > Stolen Device Protection. Away from familiar places, sensitive actions need Face ID or Touch ID, and some get a one-hour delay.
- Android (10 or later): Settings > Google > All services > Theft protection. Turn on Theft Detection Lock, which locks the screen after a grab-and-run, and Offline Device Lock, which locks an unlocked phone that goes offline. These two auto-lock a snatched phone; they do not ask for biometrics.
- Android 15 or later, on supported devices: Identity Check requires biometrics for security changes away from trusted places. Ask Claude how to find it on your phone.
- Both: a passcode of 6 digits or more, with Find My (iPhone) or Find Hub (Android) switched on.

### 7. Alerts on every card and bank account show fraud the same day

In each card and bank app, turn on push or email alerts for every transaction, online purchases, new payees, and password or address changes. Include cards you rarely use.

## Part 2: freeze the identity and credit files

### 8. A freeze at all three bureaus blocks new credit in your name

A freeze stops lenders reading your credit file, so nobody can open a card or loan as you. Freezing, lifting and removing are free under federal law. Choose the free freeze, not a bureau's paid "lock", and skip the upsells. Have your Social Security number, date of birth and recent addresses ready, and type them only into the bureau's own site.

- Equifax: equifax.com/personal/credit-report-services/credit-freeze, or (888) 298-0045. Managed through a myEquifax account; no PIN.
- Experian: experian.com/freeze, or 1-888-397-3742. Account based; no PIN; the online freeze is immediate.
- TransUnion: transunion.com/credit-freeze, through a free TransUnion Service Center account, or 800-916-8800.

Save each login. By law a freeze is placed within one business day of a phone or online request, and lifted within an hour.

**Applying for credit later?** Lift all three, because lenders pull from different bureaus. Experian lets you schedule start and end dates. TransUnion does too (Service Center > Temporarily Lift Freeze, dates up to 15 days ahead). At Equifax, choose an end date where the site offers one. Afterwards, confirm all three are frozen again.

### 9. A ChexSystems freeze blocks new bank accounts in your name

Banks check ChexSystems, not the credit bureaus, before opening a checking or savings account. Place the freeze at chexsystems.com/security-freeze/place-freeze through its Consumer Portal, or call 800-887-7652 (Monday to Friday, 7am to 11pm Central). ChexSystems issues a PIN by mail or in the portal; you need it to lift or remove the freeze, which is done in the portal. Save it.

### 10. An NCTUE freeze blocks new phone, internet and utility accounts

Those companies check NCTUE. Start at nctue.com/consumer, which links to the consumer portal, or call 1-866-349-5355. Placing, lifting and removing a freeze are free. The portal is an email-and-password account, so save the login.

### 11. An IRS Identity Protection PIN blocks a fake tax return

A common use of a stolen Social Security number is a fake return that collects your refund. With an IP PIN, the IRS rejects any return filed without your code.

**Timing.** The IRS online tool is usually down from November to mid-January, and no 2026 dates are published. If today falls in that window, wait until mid-January; otherwise do this step now.

1. Go to irs.gov/ippin and choose Get an IP PIN. Anyone with an SSN or ITIN who can verify their identity may opt in. The online route is closed to under-18s.
2. Sign in or create an IRS online account. The identity check runs through ID.me and needs a photo ID and a selfie, or a live video call with an ID.me agent instead of the selfie.
3. Your PIN is on the Profile page of your IRS online account. Save it.
4. A new PIN is generated every year and is valid for one calendar year. Online enrollees can retrieve the new one from early January. Give it to whoever files your taxes.

### 12. Claiming your Social Security account first closes off a fake one

The Social Security Administration says creating your own my Social Security account takes away the risk of someone else creating one in your name. Go to ssa.gov/myaccount and sign in with Login.gov (the default and recommended option) or ID.me. Check your earnings history for missing years, and save the login.

### 13. Informed Delivery makes missing mail obvious

USPS Informed Delivery is free and emails you images of letter-sized mail arriving soon, so a card or tax form that never shows up stands out. Signing up does not block anyone else from enrolling at your address, but USPS mails a letter to the address for each new enrollment, with a code to remove an account you do not recognize. Watch for that letter. Start at informeddelivery.usps.com. Identity is verified online first; otherwise USPS sends an invitation code by mail or you verify at a Post Office. Turn on the daily email.

### 14. Opting out of prescreened offers keeps credit offers out of the mailbox

A freeze does not stop prescreened offers, since federal law exempts them, so they keep arriving in your mailbox. Opt out separately. Go to optoutprescreen.com or call 1-888-567-8688. An online opt-out lasts 5 years. For a permanent opt-out, start online, print the Permanent Opt-Out Election form, sign it and mail it.

### 15. Reading your credit reports finds what a freeze cannot undo

annualcreditreport.com is the official site and gives you a free report from each of the three bureaus every week. Check each report at least once a year. A freeze does not block you from your own reports. Check that every account is yours, paid-off loans show as closed, every name and address is one you have used, and every hard inquiry is an application you made. For an account you do not recognize, contact the creditor first, since it may be legitimate (for example a sold debt). Dispute any error with the bureau that shows it and with the business that reported it. If something is wrong beyond an error, identitytheft.gov (the FTC) builds a personal recovery plan.

### 16. Unused credit cards are where fraud runs longest

For each card on your reports that you do not use, close it, or keep it with every-transaction alerts on.

### 17. Knowing where your ID documents are saves a scramble later

1. Find the originals and keep them together somewhere safe at home. A Social Security card does not belong in a wallet.
2. Scan each into your password manager or an encrypted folder.
3. Put passport and driver's license expiry dates in your calendar, with a reminder well ahead of each.

## Part 3: tighten the privacy settings

Locks stop takeovers; these settings shrink what strangers can learn in the first place. Do only the apps you use.

### 18. Payment apps can show strangers who you pay

- Venmo: Me tab > Settings gear > Privacy. Set the default for future payments to Private, since payments from new accounts may be public by default. Hide all past transactions from the same Privacy menu; a past payment can only be made more private, never less. Set Friends List to private, and review Find Me, which controls whether people can find you on Venmo and PayPal. Venmo has no private-profile toggle: your name, username, photo and account-creation month and year stay public.
- Cash App: Profile > Privacy > How others find you, then turn Profile name off, because by default anyone can search for you by it. Set payment requests to Contacts only. A $Cashtag creates a public page at cash.app/$yourcashtag.
- PayPal: Profile > Data and privacy > Search privacy. Turn off all three toggles (Personal profile info, PayPal.Me link, Payment requests). With all three off, searchers cannot see your name or photo.
- Zelle has no social feed, so there is nothing to set.

### 19. Tighten who can see your social media profiles

- Facebook: profile picture > Settings & privacy > Privacy Checkup. Then set the default post audience (Settings > Audience and visibility > Posts) to Friends and use Limit who can see past posts, which changes posts visible to more than friends to Friends and cannot be reversed in one click. Set "Who can Facebook suggest your profile to based on your phone number or email address" (Audience and visibility > How people find and contact you) to No one. Check the audience on your birthday and other About fields (profile > About > Contact and basic information).
- Instagram: Settings > Who can see your content > Account privacy > Private account. Name, username, photo and bio stay visible to anyone. Turn off Show Activity Status (Settings > How others can interact with you > Messages and story replies) and Connect Contacts (Accounts Center > Your information and permissions > Upload Contacts). Turning contact sync off does not delete contacts already uploaded.
- LinkedIn: Me > View Profile > Edit Public profile & URL, then turn your profile's public visibility Off; search engines can take weeks or months to catch up. Under Settings & Privacy > Visibility, set discoverability by email and by phone number to Nobody and turn off Connection visibility.
- X: Settings and privacy > Privacy and safety > Audience and tagging > Protect your posts. Under Discoverability and contacts, turn off finding you by email and by phone. Set Photo tagging to Only people you follow, or Off, and turn off precise location under Privacy and safety > Location.
- TikTok: Profile > Menu > Settings and privacy > Privacy > Private account. Name, username and photo stay visible and searchable. Turn off Suggest your account to others and Sync contacts, then choose Remove previously synced contacts.

### 20. Security questions are guessable, so make the answers random

US government security guidance tells sites to stop using security questions. The FTC warns that real answers (a first car, a high school) are findable online or match common quiz questions. Where a site still asks, give a random, long, unique answer and store it in the password manager like a password.

### 21. Location and fitness apps can show where you live

- Strava: You > Settings > Privacy Controls > Map Visibility. Hide the area around your home address, or the start and end of every activity (up to a 1-mile radius). This does not change who can see the activity, so also change the default audience for activities from Everyone, where new accounts start, to something narrower. Review Flybys under Privacy Controls, and opt out of the Global Heatmap and Metro under Product Improvements.
- iPhone: in the Find My app, the People tab lists who can see your location. Tap a name, then Stop Sharing My Location, for anyone who should not.

### 22. App permissions decide what each app can read

- iPhone: Settings > Privacy & Security, then open each data type. Under Location Services, turn Precise Location off for apps that do not need it. Under Contacts, choose Limited Access for apps that do not need your whole address book.
- Android 12 or later: Settings > Security and Privacy (or Privacy) > Privacy dashboard shows which apps used what. Permission manager lists apps by permission. For one app, use Settings > Apps > the app > Permissions.

### 23. Google and Apple offer guided privacy checkups

- Google: run Privacy Checkup at myaccount.google.com/privacycheckup. Timeline is off by default and, when on, is stored on the device; set auto-delete to 3 months. For Web & App Activity, use My Activity > Controls > Auto-delete, also set to 3 months. In the US, "Results about you" (myactivity.google.com/results-about-you, or the Google app > profile picture) finds search results showing your phone number, home address or email and lets you request removal, with alerts.
- Apple (iOS 16 or later, Apple Account with two-factor): Settings > Privacy & Security > Safety Check > Manage Sharing & Access. It does not cover non-Apple accounts.

## Optional: three extras for specific situations

- **Children's credit freeze (under 16).** A parent or guardian can freeze a child's file at each bureau for free. Child identity theft can go unnoticed for years, sometimes until the child applies for a job, housing or credit. Each bureau has its own request process; TransUnion takes minor freezes by mail only.
- **Verbal password at your bank and brokerage.** Ask each to add a passphrase they require before acting on a phone request.
- **SIM PIN, physical SIM cards only.** It makes a stolen SIM card useless in another phone. On an iPhone: Settings > Cellular > SIM PIN. Get your carrier's default PIN first (Verizon 1111, AT&T 1111, T-Mobile 1234) and never guess: too many wrong tries locks the SIM until the carrier gives you a PUK code. Not needed with an eSIM.

## Keeping it up takes a few minutes a year

- Applying for credit (card, loan, car financing, mortgage): lift all three bureau freezes for the dates you need, then confirm they are back on.
- Always: leave automatic updates on, restart devices and browsers when they ask, and replace devices that stop getting security updates.
- Every January: get the new IRS IP PIN and give it to your tax preparer.
- At least once a year: read your credit reports, check your Social Security earnings record, and review your alerts and unused cards.
- Once a year: re-run the Part 3 privacy checks (payment apps, social media, location sharing, app permissions, Google and Apple checkups).
- Before switching phones or carriers: turn off the carrier lock, and back on afterwards.
- If your information leaks (a breach letter, a lost wallet, a scam call you answered): check your freezes are on, change the affected passwords, and follow the recovery plan at identitytheft.gov.

## The checklist

Part 1: accounts and phone

- [ ] 1. Automatic updates: on for every device, app, browser and the router; unsupported devices retired
- [ ] 2. Password manager: set as autofill; key passwords changed
- [ ] 3. Email locked down: passkey and two-step verification on; backup codes saved
- [ ] 4. Carrier lock: on, and account PIN saved
- [ ] 5. Two-step login without texts: key accounts on a passkey or authenticator app; backup codes saved
- [ ] 6. Phone theft protection: Stolen Device Protection or Theft protection on
- [ ] 7. Alerts: every-transaction alerts on in every card and bank app

Part 2: identity and credit

- [ ] 8. Credit freezes: all three bureaus frozen; logins saved
- [ ] 9. ChexSystems frozen; PIN saved
- [ ] 10. NCTUE frozen; login saved
- [ ] 11. IRS IP PIN saved; reminder for January
- [ ] 12. Social Security account created; earnings history checked
- [ ] 13. Informed Delivery on; daily email on
- [ ] 14. Prescreen opt-out done
- [ ] 15. Credit reports read; errors disputed
- [ ] 16. Unused cards closed or on alerts
- [ ] 17. ID documents together and scanned; expiry dates in the calendar

Part 3: privacy settings

- [ ] 18. Payment apps set to private (only those you use)
- [ ] 19. Social media profiles private; discoverability off
- [ ] 20. Security questions answered randomly; answers saved in the password manager
- [ ] 21. Location and fitness: Strava map area hidden; Find My sharing reviewed
- [ ] 22. App permissions reviewed
- [ ] 23. Google and Apple checkups run

Optional

- [ ] Children's credit freeze (under 16): each bureau frozen
- [ ] Verbal password at bank and brokerage: set at each
- [ ] SIM PIN (physical SIM only): set, starting from the carrier's default PIN; wrong PINs never guessed
