// findings-kwinana.js — What the Kwinana report says at theme level.
//
// Taken from the final Kwinana Regional Readiness Report (August 2026 round).
// Optional, like references-kwinana.js: city.html loads it if it is there and
// draws exactly as before if it is not.
//
// The reports hold two different things at theme level, and they are not the
// same:
//
//   contexts — what the report sets out at the top of a theme, before it
//              scores any indicator: the scenario it benchmarks against, the
//              region's demand, and the section-opening tables and figures.
//              Keyed by pillarId from data.js. Opens the theme.
//   blocks   — the report's "Key findings and recommendations" section for a
//              theme, which comes after the indicators. Closes the theme.
//
//   group   — a groupId from data.js.
//   covers  — the groupTitles the report's section actually spanned. Where a
//             block covers more than one, it is anchored to the LAST of them,
//             so it lands after every category it draws on rather than above
//             half of them. Nothing is reworded to fit the site.
//   body    — the report's own structure, verbatim: { p } paragraph,
//             { ul } bullets, { h } sub-heading, { fig } a table or figure at
//             the point the report placed it.
//   refs    — the sources behind the block, numbered from 1 in the order a
//             reader meets them, the same way references-kwinana.js numbers
//             them for the indicators.
//
// Citation markers are written into the text as <sup class="refMark">n</sup>
// at the point the report puts them, with this block's numbering. They are
// placed explicitly, never by pattern-matching.
//
// Kwinana differs from Port Hedland in what the report closes with. Only the
// Enabling Infrastructure theme has findings for the whole theme. Industry
// Capability and Capacity closes on its single category. Policy and
// Governance closes on local government only, with nothing for federal or
// state policy. Social Acceptance closes under land-use planning, with
// nothing for benefit sharing or engagement. Those gaps are the report's, and
// are left as gaps rather than filled from elsewhere.
//
// `round` must match the round date in scores.js. city.html shows these
// blocks only while that round is the one selected.

window.CITY_FINDINGS = {
  "round": "August 2026",
  "contexts": [
    {
      "pillar": "enabling-infrastructure",
      "heading": "Energy System",
      "scope": "How the report frames the SWIS and the benchmark it adopts, before scoring the Energy System indicators.",
      "body": [
        {
          "h": "The Landscape of SWIS System Plans"
        },
        {
          "p": "In previous National Action Plan regional analyses, the Energy System indicator assessments drew up on the Australian Energy Market Operator’s Integrated System Plan (ISP). The ISP models infrastructure pathways required to manage the retirement of coal-fired power stations and modernise Australia’s energy system under different demand growth scenarios, primarily through expanded renewable generation, storage and transmission. However, the ISP applies only to the National Electricity Market (NEM) – Australia’s east coast grid – and does not extend to Western Australia. A different benchmark is therefore required for precincts within the South West Interconnected System (SWIS), such as Kwinana."
        },
        {
          "p": "The closest equivalent to the ISP within the SWIS is the Whole of System Plan (WOSP), published in 2020. Like the ISP, the WOSP modelled multiple grid expansion pathways under different demand growth scenarios using publicly available inputs and assumptions. The plan identified a potential requirement of between 0 and 8 GW of additional transmission capacity by 2040, but did not collapse this range into a single, clearly sequenced development pathway – leaving stakeholders uncertain about the likely scale and direction of investment. Moreover, as it pre-dated the WA Government’s commitment to close all state-owned coal-fired power stations by 2030, none of its scenarios credibly reflect a system approaching 100% renewable generation. For these reasons, the 2020 WOSP does not provide a benchmark for an energy system capable of powering a Kwinana REIP."
        },
        {
          "p": "An update to the WOSP was originally due in 2023 but has been deferred twice, leaving seven years between iterations<sup class=\"refMark\">1</sup>. The successor now has a statutory basis: the Wholesale Electricity Market Rules were renamed the Electricity System and Market (ESM) Rules on 6 February 2025<sup class=\"refMark\">2</sup>, and system planning for the SWIS is now a requirement under section 4.5A of those Rules, discharged through the Future Energy System Outlook (FESO). The Department of Energy and Economic Diversification commenced FESO 2027 on 2 July 2026, supported by AEMO and Western Power. It is a scenarios-based study of the SWIS to 2050, and it replaces the WOSP rather than updating it, with draft inputs and scenarios going to public consultation before the final outlook is published<sup class=\"refMark\">3</sup>. In the interim, Energy Policy WA released several infrastructure blueprints to address the WOSP’s shortcomings. These include:"
        },
        {
          "ul": [
            "The SWIS Demand Assessment (2023): Four demand scenarios were constructed based on inside track inputs and assumptions, which included coal closures. The Future Ready scenario was developed into an infrastructure blueprint out to 2042, but with minimal project details. Demand growth assumptions exceeded all 2020 WOSP scenarios.",
            "SWIS Transmission Planning Update (2024): A six-page document refining the SWIS Demand Assessment into a list of projects under the Clean Energy Link (CEL) umbrella. Minimal project details provided, and reduced scope relative to the previous document.",
            "SWIS Transmission Plan (2025): The clearest infrastructure blueprint to date, defining three phases of grid development. However, demand-growth assumptions were lower than earlier documents, transparency over assumptions and results was limited, only Phase One projects (to 2030) had clear timelines, Phase Two projects (2030–2035) had uncertain delivery, and Phase Three projects (2035+) were not disclosed."
          ]
        },
        {
          "p": "In the absence of a contemporary, transparent, multi-scenario, and sufficiently ambitious system plan and clear infrastructure blueprint for the SWIS, other organisations have contributed modelling that can be drawn upon."
        },
        {
          "p": "In October 2025, Baringa and the Clean Energy Investor Group released a report modelling the infrastructure required to 2050 for Australia (and the SWIS) to support new green commodity industries – primarily green iron, ammonia, and aluminium – in line with global ambitions to limit warming to 1.8 °C above pre-industrial levels. While this report provides some transparency over modelling inputs and assumptions, results were primarily presented as differences in transmission, generation, and storage requirements between their ambitious Renewable Superpower scenario and a more limited Base case."
        },
        {
          "p": "The strengths and weaknesses of these plans and blueprints are summarised in Table 1."
        },
        {
          "fig": "table-1"
        },
        {
          "p": "Of the above scenarios, the ones which best represent the grid required to power a REIP are the Renewable Superpower and Future Ready scenarios, which forecast similar demand growth to 2035. However, because of its greater clarity of results, and clearer infrastructure blueprint, we adopt the Future Ready scenario in 2035 as our benchmark for energy system requirements in the SWIS."
        },
        {
          "fig": "figure-1"
        }
      ],
      "refs": [
        {
          "n": 1,
          "cite": "Energy Policy WA. (2026, July 2). Whole of System Plan.",
          "url": "https://www.wa.gov.au/government/document-collections/whole-of-system-plan"
        },
        {
          "n": 2,
          "cite": "Energy Policy WA. (2025, May 16). Wholesale Electricity Market Rules renamed Electricity System and Market Rules.",
          "url": "https://www.wa.gov.au/government/announcements/wholesale-electricity-market-rules-renamed-electricity-system-and-market-rules"
        },
        {
          "n": 3,
          "cite": "Energy Policy WA. (2026, August 7). Future Energy System Outlook.",
          "url": "https://www.wa.gov.au/government/document-collections/future-energy-system-outlook"
        }
      ]
    }
  ],
  "blocks": [
    {
      "group": "energy-system",
      "covers": [
        "Energy System",
        "Water System & Waste Management",
        "Social Infrastructure"
      ],
      "scope": "Written as one set of findings across the whole Enabling Infrastructure theme: energy, water and housing.",
      "heading": "Enabling Infrastructure",
      "body": [
        {
          "p": "Kwinana has no shortage of announced infrastructure projects and plans needed to turn it into a Renewable Energy Industrial Precinct. However, this potential is yet to translate into delivered infrastructure at the required scale: only 8% of required renewable energy capacity, 42% of storage discharge capacity and 11% of storage depth have reached construction, Clean Energy Link – North remains the only transmission project currently being delivered, and CSBP's pilot green hydrogen project – intended as a first step in feedstock decarbonisation – is yet to move into construction."
        },
        {
          "p": "This slow pace is, in part, due to a mixed planning history for the South West Interconnected System. The 2020 SWIS Whole of System Plan projected between 0 and 8 GW of new transmission would be required by 2040 across its four modelled scenarios, but failed to collapse this down to a single consistent infrastructure strategy. The 2023 SWIS Demand Assessment – released in place of the intended 2023 Whole of System Plan – then concluded that 4,000 km of high voltage new and upgraded transmission lines would be needed by 2042. These projects were formalised into the Clean Energy Link program the following year, before being rescoped again in the 2025 SWIS Transmission Plan. Throughout this period of planning instability, only two renewable energy projects were brought online, totalling 205 MW of generation capacity."
        },
        {
          "p": "Despite the delayed start, changes to Kwinana's energy system have been gaining momentum, driven in large part by a concerted effort from the Western Australian government. 321 MW of generation capacity is currently under construction, and government-owned corporations Synergy and Water Corporation have recently signed power purchase agreements for another 1 GW of wind projects at a time when other wind farms are struggling to reach financial close. These same projects are among the first to benefit from the new Priority Project status under the State Development Act 2025. Synergy is also advancing its own developments, including the 1.5 GW Tathra solar and wind farm, which obtained all state approvals in about four months. The SWIS' strong battery rollout offers a preview of the rapid progress possible when government and industry align on a joint course of action – momentum that is being reinforced by the streamlining of other regulatory hurdles. Western Power, for instance, has cut connection timelines and introduced a critical projects framework to prevent mature projects from stalling in the queue."
        },
        {
          "p": "Despite this progress, several further reforms are needed to sustain the momentum. The Phase 2 and 3 Clean Energy Link projects still lack firm delivery schedules, which increases uncertainty for industry. Given the long lead times associated with transmission, the FESO must deliver an implementation plan that is robust against strong demand growth scenarios and driven by grid decarbonisation, industrial electrification, and sized for the growth of new green industries. On the demand side, as more renewable energy comes online, industrial players should lead by offering their own power purchase agreements for new generation projects, supplementing those from the government. Given the energy intensity of new green industries, the WA government and proponents alike must also coordinate on plans for green iron and ammonia in Kwinana, so that enabling infrastructure can be developed to the requisite standard. Finally, continued exploration of long-duration storage technologies remains critical to providing the depth needed to run industry on renewable energy around the clock."
        }
      ],
      "refs": []
    },
    {
      "group": "industry-decarbonisation",
      "covers": [
        "Industry Decarbonisation"
      ],
      "scope": "Covers industry decarbonisation plans.",
      "heading": "Industry Capability and Capacity",
      "body": [
        {
          "p": "Kwinana's active industrial facilities have laid the foundations of decarbonisation planning, but none operate on a trajectory consistent with 75% emissions reduction by 2035. Individual efforts are real, CSBP's EnviNOx programme and Tronox's TESSKW1 project are well-funded examples but progress has depended heavily on government grants and co-investment. Continued partnership between government and industry, together with mandatory climate reporting, will be important to lift ambition and accountability across the precinct."
        },
        {
          "p": "The CRKIA collective framework is a nationally distinctive asset. Strengthening it with binding interim reduction targets and a net zero date would unlock its potential as a genuine investment signal and planning anchor. CRKIA is the natural vehicle through which precinct-wide shared infrastructure, common renewable energy procurement, and demand response can be coordinated, reducing the cost and complexity of decarbonisation for individual operators."
        },
        {
          "p": "Access to affordable, firmed renewable energy is the binding constraint for industrial decarbonisation in Kwinana, and neither green electricity nor green hydrogen is available at the cost or scale required. The pace of transmission delivery under the Clean Energy Link programme and its sizing for long-term industrial growth are critical enablers. Covalent Lithium and Coogee Chemicals, in particular, face no technical barriers to committing to renewable energy procurement now; doing so would set a stronger standard for the precinct as a whole."
        }
      ],
      "refs": []
    },
    {
      "group": "local-government-policy",
      "covers": [
        "Local Government Policy"
      ],
      "scope": "The report closes Policy and Governance with findings on local government only; federal and state policy carry none.",
      "heading": "Local Government Policy",
      "body": [
        {
          "p": "The Kwinana region’s LGAs have a meaningful foundation from which to accelerate. The WALGA framework, Cities Power Partnership memberships, and the KIC’s CRKIA together represent a genuine base that comparable regions do not have. To build on this, the state and federal government should support councils in establishing clear, measurable, community-wide emissions reduction targets, backed by dedicated resources for implementation. Formalising the CRKIA with binding interim targets and a net zero commitment date would position it as a national model for industrial precinct climate governance and a genuine opportunity for WA leadership."
        },
        {
          "p": "A formal multi-LGA climate governance mechanism for the Kwinana region, coordinated through WALGA or the regional development commission, would enable coherent planning for the precinct’s unique decarbonisation challenge and maximise the use of existing frameworks. Improved monitoring, including publicly available community-wide emissions inventories and annual reporting, will be critical for accountability as the transition accelerates. With industrial closures already underway, developing explicit just transition frameworks at LGA level is the most urgent priority, ensuring that the clean energy future is built with Kwinana’s communities, not around them."
        }
      ],
      "refs": []
    },
    {
      "group": "community-benefits-impacts",
      "covers": [
        "Community Benefits & Impacts"
      ],
      "scope": "Written under the land-use planning indicator; the report gives no separate findings for community benefit sharing or engagement.",
      "heading": "Community Benefits & Impacts",
      "body": [
        {
          "p": "Inputs for strategic and nature positive land use mapping exist but need to be synthesised and programs expanded."
        },
        {
          "h": "Recommendations"
        },
        {
          "ul": [
            "Develop state wide biodiversity prioritisation layer",
            "Consolidate data and share across departments to create strategic land use prioritisation layer",
            "Finalise and release Regional Planning Strategies for regions"
          ]
        }
      ],
      "refs": []
    }
  ],
  "figures": {
    "table-1": {
      "kind": "table",
      "number": "Table 1",
      "title": "SWIS system plans and infrastructure blueprints",
      "columns": [
        "Plan or Blueprint",
        "Transparent Inputs, Assumptions & Results",
        "Multiple Scenarios",
        "Clear Infrastructure Blueprint",
        "Approaching 100% Renewable Energy by 2035",
        "Enables New Green Industry"
      ],
      "rows": [
        [
          "2020 Whole of System Plan",
          "✅",
          "✅",
          "❌",
          "❌",
          "✅"
        ],
        [
          "2023 SWIS Demand Assessment (Future Ready)",
          "🟨",
          "🟨",
          "🟨",
          "✅",
          "✅"
        ],
        [
          "2025 SWIS Transmission Plan",
          "❌",
          "❌",
          "✅",
          "❓",
          "❓"
        ],
        [
          "2025 Renewable Superpower Scenario (CEIG/Baringa)",
          "🟨",
          "✅",
          "❌",
          "🟨",
          "✅"
        ]
      ],
      "note": "Of these, the 2023 SWIS Demand Assessment Future Ready scenario is the benchmark this assessment adopts for 2035."
    },
    "figure-1": {
      "kind": "image",
      "number": "Figure 1",
      "title": "Kwinana industries, energy system and generation zones",
      "src": "figures/kwinana-figure-1-map.jpg",
      "alt": "Map of the South West Interconnected System around Perth showing the existing Western Power 330 kV, 220 kV and 132 kV network, the Mid-West, Central-Midlands and West Arthur and Narrogin generation zones, and the Clean Energy Link projects, with an inset of the Kwinana Industrial Area marking Alcoa Kwinana (closed), Kwinana BESS, Cockburn Cement, Covalent Lithium, BP Kwinana (closed), the Kwinana Water Recycling Plant, Tronox, CSBP, Coogee Chemicals, Nickel West (not operating) and Project NeoSmelt.",
      "summary": "The generation Kwinana will draw on sits well north and south of the precinct, which is why the Clean Energy Link program rather than local land is the constraint on renewable supply."
    }
  }
};
