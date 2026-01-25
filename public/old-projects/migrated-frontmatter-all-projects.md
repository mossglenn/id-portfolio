# Complete Migrated Frontmatter for All Projects

## Migration Order by Year (Newest First)

1. ai-powered-learning-practice (2025)
2. compliance-training-impact (2023)
3. agile-genetics-curriculum (2022)
4. rcr (2021)
5. digital-literacy-microlearning (2020)
6. gamified-statistics-tutor (2018)
7. adaptive-learning-instruction (2017)
8. game-based-learning-design (2016)

---

## 1. ai-powered-learning-practice.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: ai-powered-learning-practice
slug: ai-powered-learning-practice
title: AI-Powered Practice for High-Stakes Communication

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 10

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2025

# ============================================
# PROJECT CONTEXT
# ============================================
owner: University of Pittsburgh / NIH All of Us Program
audience: Research program staff interacting with participants
myRole: Instructional Designer and Prototype Developer

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - ai-enabled
  - practice-design

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - prototype

delivery:
  - web-application

format:
  - interactive-demo

subject:
  - health-communication

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - python
  - hugging-face
  - semantic-similarity

tags:
  - AI feedback
  - Natural language evaluation
  - Communication training

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Scalable Practice with AI-Guided Feedback"
heroSubhead: "Using semantic analysis to support better communication practice at scale."
summary: "Built a proof-of-concept AI tool that evaluates open-ended responses against approved answers to support communication skills training."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/ai-practice.png"
learningObjects: []
---
```

**Notes**:
- Added `practice-design` to category alongside `ai-enabled`
- Changed `type: prototype` (kept as-is, valid value)
- Changed `delivery: web-app` → `web-application`
- Image path assumed (verify actual filename)

---

## 2. compliance-training-impact.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: compliance-training-impact
slug: compliance-training-impact
title: Improving Compliance Training Through Design

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 20

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2023

# ============================================
# PROJECT CONTEXT
# ============================================
owner: University of Pittsburgh / NIH All of Us Program
audience: Research staff across multiple institutions
myRole: Instructional Design Lead

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - compliance-training
  - systems-design

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - curriculum

delivery:
  - lms

format:
  - blended

subject:
  - research-compliance

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - absorb-lms
  - articulate-storyline

tags:
  - Compliance
  - Learning governance
  - Curriculum redesign

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Designing Compliance Training That Actually Works"
heroSubhead: "Aligning policy requirements with real-world workflows."
summary: "Redesigned compliance training to improve usability, accuracy, and adoption across a national research consortium."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/compliance.png"
learningObjects: []
---
```

**Notes**:
- Categories already correct (compliance-training is close to compliance)
- Changed tools: `storyline` → `articulate-storyline` for consistency

---

## 3. agile-genetics-curriculum.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: agile-genetics
slug: agile-genetics-curriculum
title: Agile Genetics Curriculum

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 30

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2022

# ============================================
# PROJECT CONTEXT
# ============================================
owner: Network of the National Library of Medicine, National Institutes of Health
audience: Consortium staff and learners needing rapid, accurate genetics education
myRole: Instructional Design Lead

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - agile-methodology

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - curriculum
  - learning-ecosystem

delivery:
  - lms

format:
  - self-paced-online

subject:
  - genetics
  - public-health

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - articulate-storyline
  - lms-authoring
  - rapid-prototyping

tags:
  - Agile development
  - Curriculum design
  - Genetics education
  - Iterative improvement
  - Learner feedback
  - Scale

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Agile Design for Rapid, High-Impact Curriculum Development"
heroSubhead: "Quickly delivering essential learning material for complex, technical subjects by continuously iterating based on learner feedback."
summary: "Learning material for a large and complex topic (Genetics) was needed right away. Since a waterfall approach (like ADDIE) would have taken months to analyze, I used an agile-inspired, collaborative approach launching an MVP curriculum in weeks, and refining it based on real-time learner feedback."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/agile-iso.png"
learningObjects: []
---
```

**Notes**:
- Fixed title: was a sentence, now a proper title
- Changed `category: agile` → `agile-methodology`
- Added original sentence as `heroHeadline` (kept value prop focus)

---

## 4. rcr.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: rcr
slug: rcr
title: All of Us Responsible Conduct of Research Training

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 40

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2021

# ============================================
# PROJECT CONTEXT
# ============================================
owner: All of Us Research Program, National Institutes of Health (NIH)
audience: Researchers seeking certification for access to restricted data tiers
myRole: Instructional Design Lead

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - compliance-training

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - curriculum

delivery:
  - xapi-enabled

format:
  - self-paced-online

subject:
  - compliance-and-ethics

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - articulate-storyline

tags:
  - Research ethics
  - Compliance training
  - Scenario-based learning
  - Policy alignment
  - Certification

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "From Red Tape to Real Impact"
heroSubhead: "Can compliance training be more than a task to check off? Can it encourage researchers to reflect on their role in ethical research, not just memorize rules and policies?"
summary: "Key concepts of research ethics and policies as well as clarifying how All of Us applies these concepts in the effort to catalyze positive change in research. Part 1: Registered Tier Data. Part 2: Controlled Tier Data. A curriculum of two cumulative courses with five modules each. Courses lead to certification for access to a data tier."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/rcr-iso.png"
learningObjects: []
---
```

**Notes**:
- Made title more specific: added "All of Us" context
- Changed `category: compliance` → `compliance-training`
- Changed `type: multi-course-curriculum` → `curriculum` (simpler)
- Changed `delivery: xapi` → `xapi-enabled`

---

## 5. digital-literacy-microlearning.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: digital-literacy
slug: digital-literacy-microlearning
title: Digital Literacy Microlearning Series

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 50

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2020

# ============================================
# PROJECT CONTEXT
# ============================================
owner: Network of the National Library of Medicine, National Institutes of Health
audience: Community-facing staff supporting learners with low digital literacy skills
myRole: Instructional Designer

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - microlearning

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - microlearning-series

delivery:
  - public-web

format:
  - self-paced-online

subject:
  - digital-literacy

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - articulate-rise
  - video-editing
  - rapid-prototyping

tags:
  - Microlearning
  - Digital literacy
  - Public-facing resources
  - Low-barrier learning
  - Scalable outreach

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Solving a Design Dilemma with Microlearning"
heroSubhead: "Meeting learners where they are with accessible, bite-sized learning experiences."
summary: "Developed a microlearning series to support community-facing staff helping learners with low digital literacy skills access health information resources."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/digital-literacy.png"
learningObjects: []
---
```

**Notes**:
- Made title more descriptive (was just "Solving a Design Dilemma...")
- Changed `category: digital` → `microlearning` (more accurate methodology)
- Image path assumed (verify actual filename)

---

## 6. gamified-statistics-tutor.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: statistics-tutor
slug: gamified-statistics-tutor
title: Gamified Statistics Tutor

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 60

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2018

# ============================================
# PROJECT CONTEXT
# ============================================
owner: University of Pittsburgh / Institute for Clinical Research Education
audience: Early career physicians focusing on clinical research
myRole: Instructional Designer

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - adaptive-learning
  - game-based-learning

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - interactive-module

delivery:
  - scorm-package

format:
  - self-paced-online
  - scenario-based

subject:
  - data-science

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - adobe-captivate

tags:
  - Gamification
  - Adaptive feedback
  - Scenario-based practice
  - Statistics
  - SCORM
  - Adobe Captivate

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Gamified Learning with Real-Time Personalization"
heroSubhead: "Gamification and personalization transform arduous subjects into engaging and accessible learning experiences."
summary: "Designed an interactive, gamified statistics tutor that immerses learners in scenario-based practice while focusing time and effort on the sections they are still learning."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/statistics-problem-sets-iso.png"
learningObjects:
  - escape-room
  - zoo-hunt
---
```

**Notes**:
- Changed `category: adaptive` → `adaptive-learning`
- Added `game-based-learning` to category (clear from content)
- Changed `type: online-modules` → `interactive-module`
- Changed `delivery: scorm` → `scorm-package`
- Added `scenario-based` to format
- Kept existing learning objects references

---

## 7. adaptive-learning-instruction.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: adaptive-learning-instruction
slug: adaptive-learning-instruction
title: Adaptive Learning in Instructional Design

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 70

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2017

# ============================================
# PROJECT CONTEXT
# ============================================
owner: University of Pittsburgh / Institute for Clinical Research Education
audience: Instructional designers and training developers
myRole: Instructional Designer and Content Architect

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - adaptive-learning
  - research-informed

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - interactive-module

delivery:
  - public-web

format:
  - self-paced-online

subject:
  - learning-science

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - articulate-rise
  - custom-html

tags:
  - Adaptive learning
  - Learning science
  - Design frameworks
  - Instructional strategy

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Translating Research into Practical Design"
heroSubhead: "Making adaptive learning principles usable for everyday instructional design."
summary: "Developed instructional materials that translate research on adaptive learning technologies into actionable design principles for training developers."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/adaptive-learning.png"
learningObjects: []
---
```

**Notes**:
- Changed `category: adaptive` → `adaptive-learning`
- Changed `type: online-modules` → `interactive-module`
- Changed `delivery: web-based` → `public-web`

---

## 8. game-based-learning-design.mdx

```yaml
---
# ============================================
# IDENTITY & ROUTING
# ============================================
id: engage
slug: game-based-learning-design
title: ENGAGE Game-Based Learning Research

# ============================================
# STATUS & ORDERING
# ============================================
status: published
order: 80

# ============================================
# TEMPORAL METADATA
# ============================================
year: 2016

# ============================================
# PROJECT CONTEXT
# ============================================
owner: Carnegie Mellon University / Human-Computer Interaction Institute
audience: Elementary learners (grades 1–3) and educators using research-informed learning games
myRole: Learning Design Lead and Bridge-Builder between learning science and game development

# ============================================
# PRIMARY TAXONOMY
# ============================================
category:
  - game-based-learning
  - research-informed

# ============================================
# SECONDARY TAXONOMIES (optional)
# ============================================
type:
  - research-prototype

delivery:
  - game-engine

format:
  - game-based

subject:
  - stem
  - scientific-inquiry

# ============================================
# TOOLS & KEYWORDS
# ============================================
tools:
  - unity
  - user-testing
  - learning-science-methods

tags:
  - Game-based learning
  - Interdisciplinary collaboration
  - Learning science
  - User testing

# ============================================
# DISPLAY COPY
# ============================================
heroHeadline: "Bridging Learning Science and Game Development"
heroSubhead: "Translating research-informed design principles into engaging gameplay for young learners."
summary: "Led learning design for ENGAGE, a research-based game series teaching scientific inquiry skills to elementary students through collaborative problem-solving gameplay."

# ============================================
# ASSETS & COMPONENTS
# ============================================
featuredImage: "@assets/featured/engage.png"
learningObjects: []
---
```

**Notes**:
- Made title more specific (added "ENGAGE" and "Research")
- Changed `category: games` → `game-based-learning`
- Changed `type: game-based-learning` → `research-prototype` (more accurate)
- Changed `delivery: interactive-game` → `game-engine`
- Updated heroHeadline/summary to be more descriptive
- Image path assumed (verify actual filename)

---

## Summary of All Changes

### Order Values (Chronological by Year)
```
ai-powered-learning-practice:      10  (2025)
compliance-training-impact:        20  (2023)
agile-genetics-curriculum:         30  (2022)
rcr:                              40  (2021)
digital-literacy-microlearning:    50  (2020)
gamified-statistics-tutor:         60  (2018)
adaptive-learning-instruction:     70  (2017)
game-based-learning-design:        80  (2016)
```

### Category Mappings Applied

| Old Value | New Value |
|-----------|-----------|
| adaptive | adaptive-learning |
| agile | agile-methodology |
| ai-enabled | ai-enabled (kept) |
| compliance | compliance-training |
| digital | microlearning |
| games | game-based-learning |
| practice | practice-design |
| research-informed | research-informed (kept) |
| systems-design | systems-design (kept) |

### Type Mappings Applied

| Old Value | New Value |
|-----------|-----------|
| curriculum | curriculum (kept) |
| game-based-learning | research-prototype |
| learning-ecosystem | learning-ecosystem (kept) |
| microlearning-series | microlearning-series (kept) |
| multi-course-curriculum | curriculum |
| online-modules | interactive-module |
| prototype | prototype (kept) |
| research-prototype | research-prototype (kept) |

### Delivery Mappings Applied

| Old Value | New Value |
|-----------|-----------|
| interactive-game | game-engine |
| lms | lms (kept) |
| public-web | public-web (kept) |
| scorm | scorm-package |
| web-app | web-application |
| web-based | public-web |
| xapi | xapi-enabled |

---

## Files Ready for Migration

All 8 files now have:
- ✅ Numeric `order` values (10-80)
- ✅ `status: published`
- ✅ `year` field with correct completion year
- ✅ Standardized `category` values
- ✅ Standardized `type`, `delivery`, `format` values
- ✅ Section comment headers
- ✅ Consistent field ordering
- ✅ Learning objects (populated where applicable)

### Verification Needed

Before applying these changes, verify:
1. **Image file paths** — I assumed some paths based on IDs
2. **Learning object IDs** for gamified-statistics-tutor (kept `escape-room`, `zoo-hunt`)
3. **Title changes** — Some were made more specific (agile-genetics, rcr, game-based-learning, digital-literacy)

---

## Next Steps

1. Review title changes for accuracy
2. Verify image paths exist
3. Copy migrated frontmatter to actual project files
4. Implement schema in `src/content/config.ts`
5. Run `npm run astro check` to validate
6. Test filtering/sorting in UI
