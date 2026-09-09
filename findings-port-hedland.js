// findings-port-hedland.js — What the Port Hedland report says at theme level.
//
// Taken from the Port Hedland Regional Readiness Report (September 2026).
// Optional, like references-port-hedland.js: city.html loads it if it is there and
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
//             { ul } bullets, { ol } numbered with nested points, { h }
//             sub-heading, { fig } a table or figure at the point the report
//             placed it.
//   refs    — the sources behind the block, numbered from 1 in the order a
//             reader meets them, the same way references-port-hedland.js numbers
//             them for the indicators. `report` keeps the number the printed
//             report used, for tracing back, and is not shown.
//
// Citation markers are written into the text as <sup class="refMark">n</sup>
// at the point the report puts them, with this block's numbering. They are
// placed explicitly, never by pattern-matching: in this material a citation
// and a decimal are indistinguishable ("2035.101" and "5.6" look the same).
//
// `round` must match the round date in scores.js. city.html shows these
// blocks only while that round is the one selected.

window.CITY_FINDINGS = {
  "round": "August 2026",
  "contexts": [
    {
      "pillar": "enabling-infrastructure",
      "heading": "Energy System",
      "scope": "How the report frames Port Hedland’s energy system before scoring the indicators.",
      "body": [
        {
          "p": "Port Hedland, and its upstream mining industry, are at the early stages of a complete energy transformation — one that will see the region's electricity system evolve from a patchwork of privately owned transmission lines, gas-fired power stations and isolated diesel generators into an interconnected network running on renewable energy and firmed by batteries. The WA Government is currently advancing its Pilbara Energy Transition (PET) Plan, intended to accelerate the Pilbara's decarbonisation through the delivery of a suite of large-scale, common-user transmission infrastructure."
        },
        {
          "p": "The scale of the task is vast. At present, 84% of electricity consumed is generated from fossil fuels.<sup class=\"refMark\">1</sup> Renewable energy must not only displace this existing generation, but expand further to accommodate new sources of demand: the electrification of heavy mining machinery and haul networks, and a new wave of green industries such as green ironmaking and ammonia synthesis. The Energy System indicator assessments presented here are designed to gauge progress against a robust and suitably ambitious infrastructure development plan."
        },
        {
          "p": "In previous National Action Plan regional analyses, the Energy System indicator assessments drew upon the Australian Energy Market Operator’s Integrated System Plan (ISP). The ISP models infrastructure pathways required to manage the retirement of coal-fired power stations and modernise Australia’s energy system under different demand growth scenarios, primarily through expanded renewable generation, storage and transmission. However, the ISP applies only to the National Electricity Market (NEM) – Australia’s east coast grid – and does not extend to Western Australia. While there is not yet a direct equivalent of the ISP positioned towards the Pilbara’s energy system, a set of potential benchmarks is available."
        },
        {
          "p": "To underpin the PET Plan, Energy Policy WA modelled the development of the Pilbara’s energy system up until 2050<sup class=\"refMark\">1</sup> based on two demand scenarios:"
        },
        {
          "ul": [
            "Current Trajectories, which includes current commitments and known information from existing manufacturers, and",
            "Current Trajectories + Loads, which adds load growth from green ammonia and green iron production."
          ]
        },
        {
          "p": "While the latter scenario incorporates mine-site electrification and modest green industry growth over the coming decade, it does not capture the long-term potential of these industries, and delivers only limited emissions reduction – with renewable generation reaching 40–56% by 2035. This falls short of the ambition reflected in our assessments."
        },
        {
          "p": "More ambitious 'Decarbonised Future' scenarios were defined but not fully developed in that work. In their place, we base our benchmark on two complementary reports."
        },
        {
          "p": "The first, commissioned by the Clean Energy Finance Corporation and undertaken by Marsden Jacob Associates, models Pilbara power system development using the electricity demand growth projected by Energy Policy WA but with substantially higher renewable deployment – sufficient to meet 94% of consumption by 2035.<sup class=\"refMark\">2</sup> This analysis, however, excludes demand growth from new green industries."
        },
        {
          "p": "To address this gap, we supplement those infrastructure requirements with projections from a report by Baringa and the Clean Energy Investor Group. Released in October 2025, this work models the demand growth and renewable energy and storage deployment required to support new green commodity industries – iron, ammonia and aluminium – consistent with limiting global warming to 1.8°C above pre-industrial levels, and includes results specific to the Pilbara.<sup class=\"refMark\">3</sup>"
        },
        {
          "fig": "figure-1"
        }
      ],
      "refs": [
        {
          "n": 1,
          "cite": "Department of Energy, Mines, Industry Regulation and Safety. (2024, August 29). Pilbara Advisory Committee (PAC) Meeting Minutes.",
          "url": "https://www.wa.gov.au/system/files/2024-08/pacmeeting-29august2024-meetingpapers.pdf"
        },
        {
          "n": 2,
          "cite": "Draper, G., Swansson, D. J., McKenzie, P., Nemes, D. V., & Orme, S. (2025). Common user transmission and decarbonising Pilbara energy demand.",
          "url": "https://www.cefc.com.au/media/jwlnajzx/common-user-transmission-and-decarbonising-pilbara-energy-demand.pdf"
        },
        {
          "n": 3,
          "cite": "Baringa. (2025). Powering Australia’s green export future.",
          "url": "https://www.ceig.org.au/wp-content/uploads/2025/11/Baringa_CEIG_Powering-Australias-green-export-future-web.pdf"
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
      "scope": "Written as one set of findings for the whole Enabling Infrastructure theme — energy, water and housing.",
      "heading": "Enabling Infrastructure",
      "body": [
        {
          "p": "Realising the vision of a renewable energy-powered Eastern Pilbara, and capturing downstream chemical, minerals and metals processing opportunities in Port Hedland requires a transformation of the region’s energy system as well as the enabling infrastructure which underpins it. The Western Australian government is taking this transformation seriously, with Energy Policy WA leading the Pilbara Energy Transition (PET) common-user infrastructure plan alongside efforts to evolve the Pilbara Network Rules to accommodate it."
        },
        {
          "p": "This has been matched by a strong pipeline of announced renewable energy generation projects – totalling 109% of 2035 requirements – though much of this remains in the early stages of development. Where the pipeline is more progressed, it is largely an artefact of Fortescue's push for real zero by 2030. In renewable generation, Fortescue accounts for 52% of announced capacity in the Pilbara, but 81% of approved projects and 85% of projects in construction or operation. Fortescue's share of energy storage is even higher at 94% of the entire development pipeline, yet the total amounts to only 15% of estimated 2035 requirements. This figure likely underestimates the true volume, given battery storage is frequently included as an option in renewable generation planning applications without confirming intended size. However, unlike other Australian grids, the Pilbara has no standalone long-duration storage proposed near its industrial load centres, reflecting both the limited curtailed renewable energy currently in the system and the absence of a high-capacity open network capable of hosting it."
        },
        {
          "p": "Common-user transmission infrastructure is essential both to decarbonise the region at large and to move further up the value chain. Of the priority corridors identified in the PET Plan, the Hamersley Range Corridor, for which APA is the designated proponent, is the most immediately consequential for existing industry. If sized and routed to leverage the strong inland renewable resources of the Eastern Pilbara, it would connect Port Hedland and Newman across several private networks and mining load centres, enabling the electrification of existing industry and new critical minerals processing in its footprint. Yet little information is publicly available regarding its anticipated route, capacity or timeline, making it impossible to assess whether the corridor is being designed with future growth in mind."
        },
        {
          "p": "For the common-user vision of the Pilbara and the Pilbara Energy Transition plan to be realised, it is essential that transparency be improved regarding energy system planning, including on the intended routes, capacities and timelines for the region’s common-user transmission corridors, and the the intended scale of storage. The Pilbara’s Independent System Operator should also ensure that the biennial Pilbara System Plan – set to be introduced in 2027 <sup class=\"refMark\">1,2</sup> – contain credible high-growth scenarios to make sure development plans are robust against their requirements. Finalising the Pilbara Network Rules is equally urgent to inform corridor design, including the contingency standards that will determine the required scale of transmission investment."
        },
        {
          "p": "Green industry growth in Port Hedland – particularly green iron and ammonia – also comes with high demand for renewable hydrogen. At present, the only project planning large-scale green hydrogen production in the Pilbara is the Australian Renewable Energy Hub. At full scale, this would provide up to 1.6 Mt of hydrogen per year for green ironmaking and green ammonia production. A hydrogen or ammonia pipeline connecting Port Hedland and Karratha, proposed as part of the federal- and state-supported Pilbara Hydrogen Hub, could extend this reach to offtakers in Karratha."
        },
        {
          "p": "While AREH remains in active development and has received recent ARENA funding for feasibility studies, the departure of BP from the consortium and practical constraints on importing large wind turbine components through Port Hedland put the project at risk of missing its 2030 production target – itself already a delay from 2026. Given its prominence in the region's green industry pipeline, any further delay puts a handbrake on downstream development more broadly. The WA government should therefore treat the completion of a renewable energy component import terminal at Lumsden Point, due for commissioning in mid-2028, as a high priority."
        },
        {
          "p": "The scale of planned development will increase pressure on Port Hedland's already constrained housing and water infrastructure. Water stress has long been recognised as a limit on industrial growth in the region, yet the response to date – progressively expanding the Port Hedland Water Scheme's licence from the Yule and De Grey borefields – has brought both aquifers to full allocation, with the Water Corporation now seeking expressions of interest for water to be trucked to site. An agreement is in place to supply the first ten Boodarie tenants from existing sources, but this is not a long-term solution. A climate-resilient water supply for the East Pilbara is essential, akin to the Burrup desalination plant being jointly delivered by the WA government and Rio Tinto for Karratha, should be prioritised over further rounds of study without commitment."
        },
        {
          "p": "Port Hedland's rental market is already among the most stressed in regional Australia, with a baseline service-worker deficit exceeding 1,000 workers before the construction workforce demands of Port Hedland Iron, the AREH Boodarie facility and Hemi Gold are factored in. The government housing pipeline is more active than in comparable regional assessments, with the Western Edge land release, 195 GROH homes and Cottier Drive key-worker units representing genuine investment. However, none of this supply is allocated to the workers who will actually build the region's green industry projects, who will instead compete in an already stretched rental market."
        },
        {
          "p": "The critical missing instrument is a workforce accommodation obligation at the state level, requiring accommodation strategies as a condition of project approval. The Regional DAP's 2024 refusal of a 1,500-room workforce accommodation facility underscores the need for a proactive planning framework rather than reliance on individual proponents navigating an uncertain approvals pathway. The Pilbara Housing Supply Office and Pilbara Development Commission are well-positioned to coordinate this framework and manage legacy housing outcomes in host communities. The state government should also move to activate the Osprey Rural precinct (1,177 dwellings with structure plan approval since 2019 and no development funding) as the most immediately available addition to the Port Hedland housing pipeline."
        }
      ],
      "refs": [
        {
          "n": 1,
          "cite": "Energy Policy WA. (2025a, February 4). Evolution of the Pilbara Network Rules: Consultation Paper.",
          "url": "https://www.wa.gov.au/system/files/2025-04/evolution_of_the_pilbara_network_rules_consultation_paper.pdf"
        },
        {
          "n": 2,
          "cite": "Energy Policy WA. (2025b, June 17). Final Rule Change Report: Pilbara ISOCo Subchapter 10.1 Functions.",
          "url": "https://www.wa.gov.au/system/files/2025-06/prc_2025_01_final_rule_change_report.pdf"
        }
      ]
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
          "h": "Key findings"
        },
        {
          "ul": [
            "Commendable actions from some companies are in evidence, with Fortescue benefiting from clear and decisive leadership on decarbonising their operations, leading bravely and foreseeing cost savings.",
            "Dampier Salt (Rio Tinto) are strongly committed to 1.5-aligned targets but are less bullish than Fortescue, and are already a low emissions operation.",
            "PLS shows strong commitment to decarbonisation but is not clearly 1.5-aligned. PLS has indicated it needs third party renewables such as through the Pilbara Energy Transition plan to deliver its ambitions to decarbonise.",
            "BHP has made good progress using stationary energy PPAs but has lost their leadership on decarbonisation especially around the diesel haul fleet. Through partnerships in the Pilbara, BHP can reinstate this leadership if it steps up.",
            "Hancock Iron Ore requires a clear plan for actual decarbonisation, despite utilising many cost and emissions saving elements due to falling costs of renewables.",
            "Mineral Resources’ Wodgina Lithium Project is powered by gas currently but renewables are used at some other Pilbara locations.",
            "Decarbonising scope 3 emissions is a key focus for the future of iron ore exporters. Achieving pathways to this requires further research, development and deployment. Pilots such as NeoSmelt in Kwinana (supported by Pilbara miners including BHP and Rio Tinto) and Fortescue’s Christmas Creek, as well as Element Zero and Port Hedland Iron in Port Hedland have potential to make important contributions to future green iron production.",
            "Key levers to decarbonise Port Hedland and Pilbara companies and upstream supply chains include electrification of operations and electrification of heavy mining equipment (haul fleet, etc)."
          ]
        },
        {
          "h": "Recommendations"
        },
        {
          "ul": [
            "Common user infrastructure remains a priority for decarbonising existing mining operations and will be essential to efforts to decarbonise the supply chain through new renewable-energy-intensive green iron and green steel initiatives.",
            "As we have seen in other National Action Plan locations, transmission is key to decarbonising industry. Here, finding ways to integrate and share infrastructure, and share the risk and cost equitably across major players is an extra dimension."
          ]
        }
      ]
    },
    {
      "group": "federal-policy",
      "covers": [
        "Federal Policy",
        "State Policy",
        "Local Government Policy"
      ],
      "scope": "One set of findings across federal, state and local government policy.",
      "heading": "Policy and Governance",
      "body": [
        {
          "h": "Key findings"
        },
        {
          "ul": [
            "WA has thrown real weight behind renewable energy generation and improving machinery.",
            "At a state level, new industries are favoured over decarbonising existing ones, with strong investment on one side and no legislated climate or renewable targets to guide the other.",
            "Skills and training needs to consider FIFO and regional delivery models.",
            "Federal support, like the Safeguard Mechanism and Rewiring the Nation, can de-risk WA’s decarbonisation efforts. They can’t replace a state trajectory to align investment and long-term capital decisions. They also operate against the current diesel Fuel Tax Credit."
          ]
        },
        {
          "h": "Recommendations"
        },
        {
          "ul": [
            "Continuing to support the Pilbara Energy Transition plan will be key to long term plans in the Pilbara and Port Hedland.",
            "Reforming the diesel Fuel Tax Credit (which keeps diesel cheap) would reward facilities that electrify and reinforce the business case for electrifying heavy mining fleets.",
            "Legislated targets and on-pace delivery of renewable energy will grow WA’s decarbonisation success – as will creating the right conditions for communities in regions including workforce transition plans and community benefit guidelines."
          ]
        }
      ]
    },
    {
      "group": "community-benefits-impacts",
      "covers": [
        "Community Benefits & Impacts",
        "Engagement & Participation of Communities"
      ],
      "scope": "Covers land-use planning, community benefit sharing and community engagement.",
      "heading": "Social Acceptance",
      "body": [
        {
          "h": "Key findings"
        },
        {
          "ul": [
            "Long term support requires industry and government to deliver genuine and consistent engagement and benefit sharing with local communities.",
            "There are currently no mandatory requirements for community engagement or benefit sharing for renewable energy projects in WA.",
            "Without a clear mandate, community engagement and benefit sharing practices are deeply inconsistent and uneven across Port Hedland and the Eastern Pilbara.",
            "Inputs for strategic and nature positive land use mapping exist but need to be synthesised and programs expanded."
          ]
        },
        {
          "h": "Recommendations"
        },
        {
          "ul": [
            "A state-wide requirement for community engagement, supported by tailored regional guidance, is missing. This is needed, and may include consideration for the distinct legal requirements connected with Native Title determinations, applicable in parts of the Pilbara.",
            "Well-resourced, locally-led economic development planning can allow local leadership and positive outcomes to be maximised through benefit sharing processes.",
            "Development of a state wide biodiversity prioritisation layer is desirable.",
            "Consolidation and sharing of data across departments are steps towards creating a strategic land use prioritisation layer.",
            "Regional Planning Strategies for regions need to be finalised and released."
          ]
        }
      ]
    }
  ],
  "figures": {
    "figure-1": {
      "kind": "image",
      "number": "Figure 1",
      "title": "Port Hedland and Eastern Pilbara Decarbonising Industry and Renewable Energy",
      "src": "figures/port-hedland-figure-1-map.png",
      "alt": "Map of Port Hedland and the Eastern Pilbara showing iron ore mines, industrial precincts, renewable energy and storage projects and the private transmission networks of Fortescue, BHP, Hancock, APA, Rio Tinto and Horizon Power, with an inset of the Boodarie Strategic Industrial Area.",
      "summary": "Most transmission in the Pilbara is privately owned and runs mine to port. The Hamersley Range Corridor is the priority common-user corridor in the Pilbara Energy Transition plan."
    }
  }
};
