// findings-hunter-valley.js — What the Hunter Valley report says at theme level.
//
// Taken from the Hunter Regional Readiness Report (May 2025).
// Optional, like references-hunter-valley.js: city.html loads it if it is there and
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
//             reader meets them, the same way references-hunter-valley.js numbers
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
  "round": "May 2025",
  "contexts": [
    {
      "pillar": "enabling-infrastructure",
      "heading": "Energy System",
      "scope": "How the report frames the Hunter’s energy system before scoring the indicators.",
      "body": [
        {
          "p": "NSW is currently powered by 32% renewable energy.<sup class=\"refMark\">1</sup>"
        },
        {
          "p": "Given that current system planning is taken to align with the AEMO Step Change scenario,<sup class=\"refMark\">2</sup> current energy system planning, including all current projects committed, is likely to deliver 77% renewable energy by 2035 if all projects in the pipeline are delivered. If the project pipeline is expanded to include uncommitted and anticipated network projects, the share of renewable energy in the fuel mix could rise up to 93%.<sup class=\"refMark\">3</sup>"
        },
        {
          "p": "An infrastructure build aimed at powering industry with renewable energy and enabling clean export opportunities — aligned with AEMO’s Green Energy Export scenario — would see NSW powered by 81% renewable energy by 2035, without major new network projects. With the inclusion of currently uncommitted and anticipated projects, this share could rise to as much as 99%.<sup class=\"refMark\">4</sup>"
        },
        {
          "p": "These estimates come from the AEMO 2024 ISP generation and storage outlook data sets<sup class=\"refMark\">3,4</sup> where the “counterfactual” cases illustrate results based on only currently committed projects. The Step Change and Green Energy Exports least-cost candidate development paths in these data sets indicate outcomes based on currently committed projects as well as the anticipated major new network projects for these scenarios. The percentage of renewable energy generation takes into account the modelled energy generation as well as demand."
        },
        {
          "p": "Timely development of three Renewable Energy Zones (REZs) — Hunter-Central Coast, New England, Central-West Orana — and the Hunter-Central Coast offshore wind zone (as defined by AEMO) is crucial to delivering sufficient firmed renewable energy for NSW load centres and specifically the Hunter region industrial hubs and precincts (Muswellbrook Clean Industries Precinct, Hunter Energy Hub (AGL) and Port of Newcastle Clean Energy Precinct) (Figure 1 and Table 3)."
        },
        {
          "fig": "table-3"
        },
        {
          "p": "The Hunter’s three remaining coal-fired power generators (Bayswater, Eraring and Vales Point) are all scheduled to close by 2033, creating a new energy demand of 34 TWh p.a. across NSW<sup class=\"refMark\">5</sup>). By 2033, the combination of the Hunter, New England and Central-West Orana REZs are projected to produce 48.5-59 TWh p.a., with production projected to grow to between 60-75.5 TWh p.a. by 2035.<sup class=\"refMark\">6</sup>"
        },
        {
          "p": "Our analysis indicates that powering a Hunter Renewable Energy Industrial Precinct (REIP) with 100% renewable energy (both existing industry and new clean industry opportunities such as hydrogen) will require 22 GW,<sup class=\"refMark\">7</sup> equal to around 58 TWh p.a., after applying a 30% capacity factor."
        },
        {
          "p": "The projected energy generation from regional REZs (Figure 1) has the potential to initiate industrial electrification. However, the anticipated growth in electricity demand — driven by building electrification and widespread electric vehicle adoption across NSW — will likely consume a significant proportion of this energy. Energy efficiency gains across these sectors and industry, along with activation of significant consumer/ distributed energy resources, will free up some of this generation for industrial electrification. However there is likely to remain a shortfall. Uncertainty around the amount of renewable energy available to industry has the potential to hamper industry decarbonisation capability, notably where green hydrogen production is required to meet high heat processing needs."
        },
        {
          "fig": "figure-1"
        }
      ],
      "refs": [
        {
          "n": 1,
          "report": 6,
          "cite": "Open Electricity. (n.d.). An Open Platform for National Electricity Market Data [Dataset]. Retrieved November 1, 2024, from",
          "url": "https://openelectricity.org.au"
        },
        {
          "n": 2,
          "report": 7,
          "cite": "AEMO. (2023, July 28). AEMO announces future energy planning scenarios [Media Release].",
          "url": "https://aemo.com.au/newsroom/media-release/aemo-announces-future-energy-planning-scenarios"
        },
        {
          "n": 3,
          "report": 8,
          "cite": "Australian Energy Market Operator (AEMO). (2024). 2024 ISP - Step Change—Core, 2024 ISP generation and storage outlook [Excel Spreadsheet].",
          "url": "https://aemo.com.au/-/media/files/major-publications/isp/2024/supporting-materials/2024-isp-generation-"
        },
        {
          "n": 4,
          "report": 9,
          "cite": "Australian Energy Market Operator (AEMO). (2024). 2024 ISP - Green Energy Exports—Core, 2024 ISP generation and storage outlook [Excel Spreadsheet].",
          "url": "https://aemo.com.au/-/media/files/major-publications/isp/2024/supporting-materials/2024-isp-generation-and-storage-outlook.zip?la=en"
        },
        {
          "n": 5,
          "report": 10,
          "cite": "Clean Energy Regulator. (2024, April 4). Electricity sector emissions and generation data 2022–23 | Clean Energy Regulator.",
          "url": "https://cer.gov.au/markets/reports-and-data/nger-reporting-data-and-registers/electricity-sector-emission"
        },
        {
          "n": 6,
          "report": 11,
          "cite": "Australian Energy Market Operator (AEMO). (2024). 2024 ISP Inputs and Assumptions workbook [Workbook | Excel Spreadsheet].",
          "url": "https://aemo.com.au/-/media/files/major-publications/isp/2024/2024-isp-inputs-and-assumptions-workbo"
        },
        {
          "n": 7,
          "report": 12,
          "cite": "EnergyCo. (n.d.). EnergyCo’s Interactive Map. Retrieved November 1, 2024, from",
          "url": "https://caportal.com.au/energyco/rez"
        }
      ]
    }
  ],
  "blocks": [
    {
      "group": "energy-system",
      "covers": [
        "Energy System"
      ],
      "scope": "Covers the Energy System indicators only.",
      "heading": "Enabling Infrastructure (Energy System)",
      "body": [
        {
          "p": "The Hunter region's required renewable energy to support the ongoing growth and sustenance of its industrial manufacturing is starting to come online. However, the pace of implementation of renewable energy infrastructure and the published ambition of renewable energy targets are not sufficient to deliver a prosperous, zero emissions future."
        },
        {
          "p": "Pathways to industry decarbonisation require several key ingredients. For some manufacturers, electrification is the key process and providing affordable, firmed renewable energy using solar, wind, storage (such as batteries and pumped hydro), transmission and distribution are the key elements of the renewable energy backbone that must be delivered. Additionally, for some industries (e.g. Orica’s planned green ammonia production) green hydrogen and renewable fuels will also be required. The use of green hydrogen in industry decarbonisation will require technical and cost improvements in decarbonising affordable hydrogen supply chains alongside the firmed renewable energy needs."
        },
        {
          "p": "The project pipeline for renewable energy is strong, but timely project completion needs attention and faster approvals are needed to support clean exports and coal plant closures. Storage capacity may need to double to ensure sufficient firmed energy. Transmission and distribution infrastructure are not currently on track to meet the needs of large-scale industrial electrification. Green hydrogen and future fuels development are falling behind projected demand."
        },
        {
          "h": "Recommendations"
        },
        {
          "ol": [
            {
              "t": "Greater emission reduction ambition can drive industry decarbonisation and innovation.",
              "sub": [
                "Federal and state government emission reduction commitments need to be more ambitious - for example, aligned with the AEMO Green Energy Export ISP scenario, to limit the rise of global temperature to relatively safe levels. Ambitious targets and a clear and accelerated path to a zero-emission economy will provide confidence to industry and private investors, while encouraging the build-out of infrastructure at the level required. While the current trajectory of project delivery is building momentum, greater ambition, and clear and coordinated targets in line with the Green Energy Exports scenario, will yield better long term economic outcomes."
              ]
            },
            {
              "t": "Accelerated deployment of firmed renewables is needed through streamlined approvals and improved coordination:",
              "sub": [
                "There is a need for more streamlined approvals for renewable infrastructure. With 74% of projects yet to receive planning approval, a process that is currently taking 5-8 years and of the projects approved, less than one third are under construction.",
                "The pipeline of projects that deliver firmed renewable energy (renewable energy and storage) requires tighter coordination with transmission rollout to ensure that projects can connect to the electricity network without delay."
              ]
            },
            {
              "t": "Regulatory reform is essential to manage and operate the distribution network more effectively during the energy transition.",
              "sub": [
                "As the energy mix diversifies, DNSPs such as Ausgrid are increasingly required to manage more complex energy systems, including two-way flows. Updated regulation, such as removal of ring-fencing class waivers, would empower DNSPs to take a more active role in supporting rapid decarbonisation. We recommend that these reforms be undertaken or led by the Australian Electricity Market Commission."
              ]
            }
          ]
        }
      ]
    },
    {
      "group": "industry-decarbonisation",
      "covers": [
        "Industry Decarbonisation"
      ],
      "scope": "Covers industry decarbonisation plans.",
      "heading": "Industry Capability and Capacity (Industry decarbonisation)",
      "body": [
        {
          "p": "Most heavy industries have decarbonisation strategies but lack detailed pathways, with their success depending on timely infrastructure upgrades and affordable renewable energy. Greater collaboration between industry and project developers (e.g. through Purchase Power Agreements) can help provide certainty for firmed renewable energy. However, constraints in the supply of this energy to industry consumers needs to be resolved as described above. These agreements and other partnerships between industry and energy generators, and increased demand for them, can also provide a clear signal to governments regarding the industry support needed for greater ambition and project acceleration."
        },
        {
          "p": "Industry decarbonisation requires access to affordable, reliable, firmed renewable energy, and there is significant government attention and focus on planning the required energy enabling infrastructure needed to repower manufacturing in the Hunter. However, as noted in the Enabling Infrastructure: Energy System section, the pace of deployment and coordination of energy infrastructure projects are significant challenges. This can have flow-on effects to influence investor confidence in industry decarbonisation."
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
      "heading": "Policy and Governance (Federal, State and Local Government Policy)",
      "body": [
        {
          "p": "Federal and state energy and climate change policies are improving. However the suite of policies remains inconsistent and gives conflicting signals—such as promoting fossil fuel expansion alongside emissions reduction targets and clean industry development. Such conflicting signals to investors and the energy sector enable the fossil fuel industry to maintain a distinct advantage in the absence of appropriate mechanisms to curtail expansion. This risks diverting investment and skilled workers to a sector that should be in decline and away from the industries that will build future prosperity for the region."
        },
        {
          "p": "Federal and state investment in meeting critical skill-shortages for the energy transition and new industries has received moderate to strong support through dedicated training facility investment and career pathway development. In general, policies at the federal, state and local level are supportive of future workplace requirements. However, as many of the plans are relatively nascent, their true impact will be seen in coming years."
        },
        {
          "p": "A key piece of the puzzle missing is a national communications plan to attract workers to training opportunities and clear pathways to employment in the region. While governments can provide the former, the latter will need industry and local businesses to partner with governments to ensure that upskilled workers are in demand."
        },
        {
          "p": "Delays in transitioning the Hunter to renewable-powered manufacturing risk competitiveness both in terms of energy costs and long-term economic stability, as global markets move away from coal and carbon-intensive commodities to clean energy and industries. As progress is made locally and coal/fossil fuel exports decline, it is crucial to accelerate efforts on the ground to develop the next economy. Establishing clear closure dates for fossil fuel assets would enable more effective workforce, economic and strategic land-use planning for the region, and allow private capital to move more effectively into renewable industries."
        },
        {
          "p": "Most of the policies in this space are still new, meaning their full impact remains uncertain. Smaller players often struggle to navigate the complex policy landscape, with many either giving up or seizing the first available opportunity without the capacity to think more strategically. Small and medium enterprises, in particular, need targeted support, as they lack the resources of larger corporations to fully leverage policy incentives and transition effectively."
        },
        {
          "p": "The Safeguard Mechanism, in its current form, permits fossil fuel and hard-to-abate industries to continue operating in a business-as-usual environment. While a review of the policy is scheduled for 2026, mandatory reporting requirements provide an opportunity for a midterm review aimed at introducing tighter guardrails. Strengthening the mechanism sooner would provide greater certainty for investors, industry, and communities preparing for the transition."
        },
        {
          "p": "A clear direction on energy and economic policy is needed: the Hunter region will benefit from greater federal and state policy certainty around renewable energy targets, clean industry development, and associated incentives."
        }
      ]
    }
  ],
  "figures": {
    "table-3": {
      "kind": "table",
      "number": "Table 3",
      "title": "REZ Generation by GW for AEMO ISP Step Change and Green Energy Exports Scenarios",
      "columns": [
        "Transmission Project",
        "Status (NSW Planning)"
      ],
      "rows": [
        [
          "New England",
          "11.3-12.7"
        ],
        [
          "Central-West Orana",
          "10.4-14.8"
        ],
        [
          "Hunter-Central Coast",
          "1.5-2"
        ],
        [
          "Hunter-Central Coast Offshore Wind",
          "5.2 (Note current planned capacity is 2 GW10)"
        ],
        [
          "Total generation capacity",
          "28.6 - 34.7"
        ]
      ],
      "note": "Ref: AEMO, DCCEEW"
    },
    "figure-1": {
      "kind": "image",
      "number": "Figure 1",
      "title": "Hunter REZs and Clean Energy Precincts",
      "src": "figures/hunter-figure-1-map.jpg",
      "alt": "Map of the Hunter region showing Renewable Energy Zones, transmission and the clean energy precincts.",
      "summary": "The Hunter's industrial precincts depend on the Hunter-Central Coast, New England and Central-West Orana REZs and the offshore wind zone."
    }
  }
};
