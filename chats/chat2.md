# Incubator Baguio tweakable controls

_Started 2026-06-23 06:15 UTC_

---

## User

Add tweakable controls to Incubator Baguio.dc.html (declare with dc_set_props, read via this.props): Use this as copy and structure for the homepage

## Assistant

## Assistant

## User

Create the following section after the programs

Innovation Challenges
Micro Text - INNOVATION CHALLENGES
Headline - Problem Statements from Government, Industry, and Academia
Featured Startups
Micro Text - STARTUP DIRECTORY
Headline - Startups in the Incubator Baguio Network
Upcoming Events
Micro Text - EVENTS
Headline - Workshops, Forums, and Community Activities

## User

Create the following section after the programs

Innovation Challenges
Micro Text - INNOVATION CHALLENGES
Headline - Problem Statements from Government, Industry, and Academia
Featured Startups
Micro Text - STARTUP DIRECTORY
Headline - Startups in the Incubator Baguio Network
Upcoming Events
Micro Text - EVENTS
Headline - Workshops, Forums, and Community Activities

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

I understand the structure now. I'll insert three new sections after the programs block, with the eyebrow + headline bound to props.

_[tool: dc_html_str_replace]_

Now wire the props into the logic class and declare them.

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Added three sections after Programs — Innovation Challenges, Featured Startups, and Upcoming Events — each with its eyebrow + headline wired to tweakable text props (editable via the Tweaks panel and in place). Supporting cards/list items use the existing palette and styling.

## User

- on innovation challenges add sample challenges and add a button to view all challenges
-on startup directory, add a cover image per startup card and add a button for viewing startups
-

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Done. Innovation Challenges now lists three sample open challenges (with poster, category tag, and deadline) plus a "View all challenges" button. Each startup card has a cover-image placeholder, and a "View all startups" button sits below the grid.

## User

for the open challenges in the homepage, make it have like this but do not include the reward

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Open challenges are now cards matching your reference — category pill, colored days-left indicator, headline, description, and a poster row with logo badge + "View" link — without the reward field.

## User

use this as copy and structure in the about page

## Assistant

_[tool: read_file]_

I'll update the About page section by section. First the hero:

_[tool: str_replace_edit]_

Now replace Mission+Vision with the "Our Role" section:

_[tool: str_replace_edit]_

Now the Quadruple Helix section — update micro text, headline, and the four pillars' copy:

_[tool: str_replace_edit]_

Now replace the Mandate/Story split with "Our Foundation" + stat cards:

_[tool: str_replace_edit]_

Now replace the "Values" section with an "Ecosystem partners" section:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The About page now follows your copy and structure: hero (About Incubator Baguio / Baguio's Innovation Alliance), Our Role with the four role cards, the Quadruple Helix Model (Government/Academia/Industry/Community), Our Foundation with the three stat cards, Ecosystem partners, and the closing CTA.

## User

On the about our role section do like this

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Reworked the Our Role section to match your reference: left-aligned eyebrow + headline with the accent quote bar, an image placeholder on the right, a full-width featured "Technology Business Incubator" card with icon and orange arrow button, and a three-card row (Innovation Platform, Research Commercialization, Ecosystem Development) each with an icon and "Learn more →".

## User

On the challenges page, remove the rewards and create a sample challenge page if a user clicks on view

## Assistant

## Assistant

## Assistant

## Assistant

## Assistant

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Now I'll remove all reward blocks from the 6 cards, clean up reward references, then add the challenge detail frame.

_[tool: str_replace_edit]_

Now add the Challenge Detail frame after the Innovation Challenges frame. Let me find the right insertion point:

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Done. Here's what changed:

- **Rewards removed** — all 6 challenge cards on the listing page no longer show reward amounts, and the "how it works" steps + stat strip no longer reference rewards
- **Challenge Detail page** added as a new frame — shows the full challenge (hero with breadcrumb, category + days left, poster info), a body with description, what we're looking for, evaluation criteria, and a "Submit a solution" CTA, plus a right sidebar with challenge details, poster info, and support offered

## User

Can you add on below the detail page like sample groups or student that are currently solving the problem include title and the school and other details

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a "Teams currently working on this" section below the challenge detail — 5 solver cards (ColdTrail, HarvestLink, FreshPath, AgroGrid, RootVault) each showing team name, member count, school, track, registration date, status badge, and a short description. A 6th card shows the remaining 7 teams are hidden, with a "Join as a solver →" prompt.

