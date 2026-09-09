// findings-gladstone.js — What the Gladstone report says at theme level.
//
// Taken from the Gladstone Regional Readiness Report (September 2025).
// Optional, like references-gladstone.js: city.html loads it if it is there and
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
//             reader meets them, the same way references-gladstone.js numbers
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
  "round": "September 2025",
  "contexts": [
    {
      "pillar": "enabling-infrastructure",
      "heading": "Energy System",
      "scope": "How the report frames Gladstone’s energy system before scoring the indicators.",
      "body": [
        {
          "p": "Today, Queensland is powered by 31% renewable energy.<sup class=\"refMark\">1</sup> Current system planning, aligned with AEMO’s Step Change scenario, projects that this share will rise to 88% by 2035 if only committed and anticipated generation and transmission projects proceed. This could increase to 96% if all actionable projects in the Step Change least-cost development pathway are delivered."
        },
        {
          "p": "A more ambitious trajectory, aligned with AEMO’s Green Energy Exports scenario, reflects the infrastructure needed to rapidly decarbonise existing manufacturing and establish new clean export industries. Under this scenario, Queensland would reach 95% renewables by 2035 based on committed and anticipated projects, rising to 99% with full delivery of all actionable projects in the Green Energy Exports least-cost development pathway."
        },
        {
          "p": "These projections are drawn from the counterfactual and least-cost candidate development paths for each scenario in AEMO’s 2024 ISP generation and storage outlook data sets.<sup class=\"refMark\">2,3</sup> The percentage of renewable energy generation takes into account the modelled energy generation as well as demand."
        },
        {
          "fig": "table-3"
        },
        {
          "p": "Gladstone sits within AEMO’s Fitzroy Renewable Energy Zone (REZ) (Q6) and is directly connected to the Isaac (Q4), Wide Bay (Q7), Banana (Q9), and – more distantly – Barcaldine (Q5) REZs.<sup class=\"refMark\">4</sup> Additional transmission infrastructure has been proposed to reinforce Gladstone’s connection to the Darling Downs REZ (Q8), which has significant renewable energy potential.<sup class=\"refMark\">5,6</sup> The generation build limits and 2035-36 targets for each of these REZs under the Step Change and Green Energy Exports scenarios are provided in Table 3."
        },
        {
          "p": "The Queensland Government is also pursuing a set of 12 smaller REZs, most of which fall within AEMO’s broader candidate zones.<sup class=\"refMark\">7</sup> Because this Gladstone Regional Readiness Report benchmarks Gladstone’s prospects against AEMO’s ISP and Green Energy Exports scenario, which includes system-optimised transmission and generation modelling, we base our analysis on AEMO’s REZ definitions for consistency."
        },
        {
          "h": "Gladstone’s electricity demand"
        },
        {
          "p": "Gladstone is home to a concentration of energy-intensive manufacturing industries which can decarbonise as part of a Renewable Energy Industrial Precinct (REIP), including:"
        },
        {
          "ul": [
            "Aluminium smelting at Rio Tinto’s Boyne Smelter, Queensland’s largest individual electrical load.",
            "Alumina refining at Queensland Alumina Limited, Yarwun Alumina, and Alpha HPA.",
            "Chemical manufacturing at Orica Yarwun.",
            "Cement production at Cement Australia’s Fisherman’s Landing facility."
          ]
        },
        {
          "p": "The Boyne Smelter is already electrified and draws its power from the NRG Gladstone Power Station. Gladstone’s other industries still source most of their energy from fossil fuels, but multiple electrification pathways are available."
        },
        {
          "p": "A range of studies have assessed the renewable generation required to repower these facilities and develop new ones for green exports. These include Gladstone-specific analyses – such as BZE’s Gladstone REIP Briefing Paper (2022) and ClimateWorks’ Seizing Gladstone’s low-carbon opportunity (2025) – as well as broader sectoral modelling with results applicable to the region.<sup class=\"refMark\">8,9</sup> Examples include CSIRO’s AusTIMES multi-sector modelling and ACIL Allen’s fuel price forecasts, both inputs to AEMO’s Integrated System Plan, and the Superpower Institute’s A Green Iron Plan for Australia.<sup class=\"refMark\">10,11,12</sup>"
        },
        {
          "p": "Differences in assumptions, technology pathways, and decarbonisation ambition lead these studies to project a wide range of possible electricity demand for Gladstone’s major industries. The total load of existing and new export industries is within the range of 5.7–8.8 GW, as shown in Figure 3. Note that Cement Australia and Alpha HPA have minor loads and are not shown for clarity."
        },
        {
          "fig": "figure-3"
        },
        {
          "p": "Repowering Gladstone’s existing industries and establishing ammonia production for local industries would require 8.0-15.4 GW of generation capacity. Including new export-scale green ammonia and green iron industries raises this to 19.1-29.3 GW. The upper bound is slightly lower than in earlier analyses due to the reduced scope of the hydrogen and ammonia export sector following the cancellation of Stanwell’s Central Queensland Hydrogen Project (CQ-H2)."
        },
        {
          "p": "Although these forecasts fall within the cumulative limits of the surrounding REZs (Table 3), matching the most ambitious demand within the next decade would require either:"
        },
        {
          "ul": [
            "Increasing the 2035-36 generation targets for Green Energy Exports, or",
            "Strengthening transmission interconnection between Gladstone and other REZs."
          ]
        },
        {
          "p": "The transmission investment required to supply this load will depend on how manufacturers choose to firm renewable energy for their processes. On-site firming, using batteries or thermal storage, offers manufacturers greater operational flexibility and arbitrage opportunities, but increases overall peak demand, since storage must be charged on top of serving base industrial load. Grid-distributed storage, by contrast, can reduce curtailment, limit the need for transmission overbuild, and provide a steadier renewable supply to Gladstone, though with fewer arbitrage opportunities. In practice, a mix of both approaches is likely, meaning transmission capacity will need to be sized between the lower bound of operational load and the upper bound implied by maximum generation requirements."
        },
        {
          "p": "Figure 4 below provides an overview of the existing and planned transmission lines that will provide the foundation for Gladstone’s REIP transition."
        },
        {
          "fig": "figure-4"
        }
      ],
      "refs": [
        {
          "n": 1,
          "report": 34,
          "cite": "Open Electricity. (2025, October 1). Open Electricity: Queensland.",
          "url": "https://openelectricity.org.au"
        },
        {
          "n": 2,
          "report": 35,
          "cite": "Australian Energy Market Operator (AEMO). (2024). 2024 ISP - Step Change—Core, 2024 ISP generation and storage outlook [Excel Spreadsheet].",
          "url": "https://aemo.com.au/-/media/files/major-publications/isp/2024/supporting-materials/2024"
        },
        {
          "n": 3,
          "report": 36,
          "cite": "Australian Energy Market Operator (AEMO). (2024). 2024 ISP - Green Energy Exports—Core, 2024 ISP generation and storage outlook [Excel Spreadsheet].",
          "url": "https://aemo.com.au/-/media/files/major-publications/isp/2024/supporting-materials/2024-isp-generation-and-storage-outlook.zip?la=en"
        },
        {
          "n": 4,
          "report": 37,
          "cite": "Australian Energy Market Operator. (2024). Appendix 3: Renewable Energy Zones. AEMO.",
          "url": "https://www.aemo.com.au/-/media/files/major-publications/isp/2024/appendices/a3-rene"
        },
        {
          "n": 5,
          "report": 38,
          "cite": "Powerlink. (2024, July 30). SuperGrid planning update [PowerPoint Presentation].",
          "url": "https://www.powerlink.com.au/sites/default/files/2024-07/Queensland%27s%20SuperGri"
        },
        {
          "n": 6,
          "report": 39,
          "cite": "Australian Energy Market Operator. (2025, August). 2025 Electricity Network Options Report.",
          "url": "https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2025/2025-electricity-network-options-report/final/2025-electricity-network-options-report.pdf?la=en"
        },
        {
          "n": 7,
          "report": 40,
          "cite": "Powerlink. (2024). 2024 Transmission Annual Planning Report.",
          "url": "https://www.powerlink.com.au/sites/default/files/2025-03/Transmission%20Annual%20Planning%20Report%20-%20TAPR%20-%202024%20-%20Full%20document.pdf"
        },
        {
          "n": 8,
          "report": 9,
          "cite": "Beyond Zero Emissions. (2022). Gladstone Renewable Energy Industrial Precinct Briefing Paper. Beyond Zero Emissions.",
          "url": "https://21255462.fs1.hubspotusercontent-na1.net/hubfs/21255462/Reports/Gladstone-REIP-Briefing-Paper-April-2022_v2.pdf"
        },
        {
          "n": 9,
          "report": 8,
          "cite": "Leach, T., Lee, C., Dolan, C., & Graham, T. (2025). Seizing Gladstone’s Low Carbon Opportunity: A Net Zero Industrial Precinct Approach. Climateworks Centre.",
          "url": "https://www.climateworkscentre.org/wp-content/uploads/2025/02/Seizing-Gladstones-low-carbon-opportunity-Report-Climateworks-Centre-February-2025.pdf"
        },
        {
          "n": 10,
          "report": 41,
          "cite": "Green, D., Reedman, L., Kanudia, A., Dollman, R., West, S., Dioguardi, E., Grant, A., Nolan, M., Singha, D., Maxwell, R., Li, M., & Havas, L. (2025). Multi-sectoral modelling 2024. CSIRO.",
          "url": "https://aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2024/2025-iasr-scenarios/csiro-2024-multi-sectoral-modelling-report.pdf?la=en"
        },
        {
          "n": 11,
          "report": 42,
          "cite": "ACIL Allen. (2025). Gas, liquid fuel, coal and renewable gas projections.",
          "url": "https://www.aemo.com.au/-/media/files/major-publications/isp/2025/acil-allen-2024-fuel-price-forecast-report.pdf?la=en"
        },
        {
          "n": 12,
          "report": 21,
          "cite": "Burfurd, I., McMahen, C., Someren, M. van, Hossain, F., Scott, B., McConnell, D., Bruckner, A., & Zou, A. (2025). A Green Iron Plan for Australia- Securing prosperity in a decarbonising world. The Superpower Institute.",
          "url": "https://www.superpowerinstitute.com.au/work/green-iron-plan"
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
      "scope": "Covers the Energy System indicators only. Transport, water, social and communications infrastructure were out of scope for this round.",
      "heading": "Enabling Infrastructure (Energy Systems)",
      "body": [
        {
          "p": "Gladstone has strong potential to become a major Renewable Energy Industrial Precinct, supported by a robust pipeline of solar, wind, and storage projects in surrounding regions that already exceed the trajectory outlined in AEMO’s Green Energy Exports scenario. However, this potential has yet to translate into delivery: only 12% of the renewable generation capacity, 45% of storage discharge capacity and 14% of the storage depth targets have reached construction, despite 64%, over 100% and 59% respectively having secured development approval. Progress is being constrained by delays to large-scale, deep storage – particularly key pumped hydro projects such as Borumba – as well as development challenges including transmission buildout delays, which our work has highlighted. Other issues acting as a handbrake on the renewable energy rollout include grid congestion, social licence concerns, and lengthy federal environmental approval timelines.<sup class=\"refMark\">1</sup>"
        },
        {
          "p": "Recent planning reforms aimed at strengthening social licence are well-intentioned but risk introducing delays if not carefully implemented. The requirement for developers to finalise Community Benefit Agreements (CBAs) before lodging development applications creates a bottleneck early in the process. It also risks undermining the planning efforts by the community and First Nations to secure benefits if projects ultimately do not proceed. These risks could potentially be mitigated by instead making CBAs a condition of development approval, rather than a pre-lodgement requirement. A renewed focus on coordinated Renewable Energy Zone (REZ) development could also help to streamline approvals, lock in regional community benefits, and deliver more efficient grid connections, a recommendation supported in a recent report by Queensland Renewable Energy Council (QREC).<sup class=\"refMark\">2</sup>"
        },
        {
          "p": "Gladstone’s industries are already beginning to decarbonise. Rio Tinto has secured power purchase agreements (PPAs) for 2.7 GW of renewable energy to support its aluminium operations. However, without major transmission reinforcement, this electricity cannot reach Gladstone’s industrial loads. Powerlink’s Gladstone Project – which will increase the peak demand transfer capacity into Gladstone to approximately 3.3 GW – is a critical enabler for the early closure of the Gladstone Power Station and the partial decarbonisation of Rio Tinto’s alumina and aluminium operations. However, further investment will be needed to fully decarbonise existing industries, establish new ones, and connect Gladstone to large-scale renewable generation and pumped hydro in Southern Queensland."
        },
        {
          "p": "A failure to build for future transmission capacity from the outset can lead to higher overall costs in the long run. Our research shows that building coordinated infrastructure for industrial clusters, rather than taking a piecemeal, facility-by-facility approach, can reduce costs by 50-75%.<sup class=\"refMark\">3</sup> BZE strongly supports the progression of the Gladstone Project, and we recommend that Queensland investigate options to build transmission strategically to meet future needs articulated in the Gladstone Regional Readiness Report. Through future-focused planning to enable the full potential of Gladstone’s industrial growth, higher costs associated with subsequent extension projects can potentially be minimised."
        },
        {
          "p": "Green hydrogen is a vital feedstock and fuel for powering the high-temperature processes of existing local manufacturers such as Queensland Alumina Limited (QAL), Yarwun Alumina, and Orica Yarwun. While global demand for green hydrogen and derivatives is consolidating in key locations such as Japan and Korea, their proximity makes Gladstone-made green hydrogen a priority. Despite the cancellation of Stanwell’s CQ-H2 and Fortescue’s PEM50 projects, key projects such as H2U’s export-oriented green ammonia plans continue to progress and will require support for infrastructure build out. Local demand, local pilot projects, and Gladstone’s proximity to renewable energy resources can provide a stable foundation for a scalable hydrogen industry to support future exports such as green iron for steelmaking, green ammonia and methanol for shipping fuels."
        }
      ],
      "refs": [
        {
          "n": 1,
          "report": 44,
          "cite": "Clean Energy Investor Group. (2025, July). 2025 Clean Energy Outlook CEIG Annual Member Survey Results.",
          "url": "https://www.ceig.org.au/wp-content/uploads/2025/07/2025-Clean-Energy-Outlook_CEIG-Annual-Member-Survey-Results-2.pdf"
        },
        {
          "n": 2,
          "report": 94,
          "cite": "Queensland Renewable Energy Council. (2025). Queensland Renewables Growth & Investment Strategy.",
          "url": "https://qrec.org.au/wp-content/uploads/2025/08/QREC-Qld-Renewables-Growth-Investm"
        },
        {
          "n": 3,
          "report": 48,
          "cite": "Beyond Zero Emissions. (2023). Safeguarding our Future. Beyond Zero Emissions.",
          "url": "https://www.bze.org.au/research/report/safeguarding-our-future"
        }
      ]
    },
    {
      "group": "industry-decarbonisation",
      "covers": [
        "Industry Decarbonisation"
      ],
      "scope": "Covers industry decarbonisation plans. Workforce, innovation and collaboration were out of scope.",
      "heading": "Industry Capability and Capacity (Industry decarbonisation plans)",
      "body": [
        {
          "p": "Local industry is making a clear commitment to decarbonise. Notable efforts include:"
        },
        {
          "ul": [
            "Boyne Smelters Limited being already electrified. Its commitments to PPAs and HSAs to supply 80% of its annual average electricity demand will reduce the smelter’s scope 1 and 2 emissions by 70%, or 5.6 Mt CO2-e.",
            "Alpha HPA’s application of novel approaches with up to 70% less emissions than other incumbent alkoxide processes.",
            "Orica’s commitment to sourcing 100% renewable energy by 2040.",
            "Cement Australia’s exploration of alternative feedstocks and electrification of vehicles to reach net zero by 2050."
          ]
        },
        {
          "p": "However, the interdependence of all parties for full industrial decarbonisation requires coordination and alignment across both renewable generators and industrial companies. More renewable energy and transmission are essential, but unresolved technology and cost challenges – along with uncertainty in firmed renewable approvals – leave Gladstone’s pathway and timelines unclear."
        },
        {
          "p": "Rio Tinto’s renewable PPAs are a strong step, anchoring investment at scale. But company-by-company deals cannot deliver the same economies of scale as coordinated planning through a Renewable Energy Industrial Precinct (REIP).<sup class=\"refMark\">1</sup> Pilot studies, exploration of scope 3 emissions considerations, and executive employee remuneration options could be expanded across local industries. We recommend continued support for pilot studies and expansion of successful ones."
        },
        {
          "p": "Ongoing support for pathways to local generation and use of green hydrogen at scale is needed from industry and government."
        },
        {
          "p": "Holistically, coordination remains key to ensuring industrial decarbonisation is efficient and timely. Renewable energy generators are represented through the Queensland Renewable Energy Council (QREC). However, there is no coordinating body to consolidate renewable energy demand for manufacturing across companies. A coordinated leadership body focused on consolidating demand and advocating for industries that use or plan to use renewable energy locally would provide the coordination needed to streamline industrial decarbonisation efforts, as well as achieve efficiencies and cost savings from economies of scale. The Central Queensland Statement of Cooperation can provide the foundations of some of this coordination."
        },
        {
          "p": "As noted in the Enabling Infrastructure: Energy System section, the pace of deployment, approvals and coordination of energy infrastructure projects remain significant challenges. There is state government support for critical industrial decarbonisation infrastructure (e.g. for transmission such as Powerlink’s Gladstone Project), but the Energy Roadmap will need to outline clear commitments to the suite of necessary infrastructure to ensure Gladstone’s full industrial decarbonisation and support the growth of new green manufacturing.<sup class=\"refMark\">2</sup>"
        }
      ],
      "refs": [
        {
          "n": 1,
          "report": 48,
          "cite": "Beyond Zero Emissions. (2023). Safeguarding our Future. Beyond Zero Emissions.",
          "url": "https://www.bze.org.au/research/report/safeguarding-our-future"
        },
        {
          "n": 2,
          "report": 108,
          "cite": "Powerlink. (2025, October 1). Gladstone Project.",
          "url": "https://www.powerlink.com.au/projects/gladstone-project"
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
      "scope": "One set of findings across federal, state and local government policy. Governance was out of scope.",
      "heading": "Policy and Governance (Federal, State and Local Government Policy)",
      "body": [
        {
          "p": "Federal and state energy and climate policies provide meaningful support toward establishing a Renewable Energy Industrial Precinct in Gladstone. However, the simultaneous backing of renewables and fossil fuel expansion, combined with inconsistencies between levels of government, send mixed signals to developers, industry and the public. As Queensland’s policy landscape continues to evolve under the new government, it is crucial that new reforms are strongly aligned with key enablers needed to advance the region’s renewable energy transition."
        },
        {
          "p": "Federal policy indicators assessments have remained broadly consistent from our previous National Action Plan analysis of the Hunter, with one key exception: 3.1.1. Federal Emissions Reduction Commitment has been downgraded following approval of the North West Shelf gas extension. This reinforces our concern that ongoing fossil fuel support could divert investment and skilled labour from emerging industries and create policy uncertainty."
        },
        {
          "p": "Federal support for Gladstone has been targeted through initiatives such as the Central Queensland Hydrogen Hub, the Hydrogen Centre of Excellence at Central Queensland University Gladstone, and ARENA funding for the Rio Tinto and Sumitomo’s world-first hydrogen calcination pilot. This strong backing for hydrogen-related industry contrasts with recent signals from the state government, including the withdrawal of funding for the flagship Central Queensland Hydrogen Project (CQ-H2). Hydrogen remains an essential feedstock and fuel for powering high-temperature processes in energy-intensive Gladstone industries – including alumina, ammonia (for both export and explosives), and potentially green iron – which necessitates greater policy alignment across jurisdictions."
        },
        {
          "p": "Queensland’s approvals processes have been more efficient than in New South Wales, but there is still room for improvement. Federally, overdue Environment Protection and Biodiversity Conservation Act reform should include a climate trigger to help address the mixed signals created by continued support for fossil fuel expansion, and introduce a single ‘front door’ to streamline project timelines. Queensland’s new requirements for community consultation and benefits agreements are welcome, but requiring community benefit agreements (CBAs) before development application can be lodged risks introducing early-stage bottlenecks and community disillusionment if projects do not proceed. As outlined in earlier sections of this report, these impacts could potentially be mitigated by making CBAs a condition of development approval rather than a pre-lodgement requirement."
        },
        {
          "p": "Strong state commitments to decarbonisation, research and development, investment, procurement, and skills and training are diluted by a lack of current and consistent energy policy. In particular, ongoing reviews of the Clean Economy Jobs Act and Energy (Renewable Transformation and Jobs) Act throw into question interim emissions reduction targets needed to measure progress, and cast uncertainty on a number of investment pools for the infrastructure and workforce needed to guarantee a healthy transition. It is critical that the State Government’s new Energy Roadmap, to be released later this year, continues to support decarbonisation, research and development, investment, procurement, and skills and training."
        },
        {
          "p": "Gladstone Regional Council’s Economic Transition Roadmap (2022-2032) provides a coordinated approach to enabling decarbonisation and economic growth in the region. It is essential that state and federal commitments align and assist both this local planning as well as the Gladstone Regional Council’s own decarbonisation."
        }
      ]
    },
    {
      "group": "community-benefits-impacts",
      "covers": [
        "Community Benefits & Impacts"
      ],
      "scope": "Covers strategic and nature-positive land-use planning only.",
      "heading": "Social Acceptance (Strategic and nature-positive land use planning)",
      "body": [
        {
          "p": "Strategic and nature-positive land-use planning allows efficient approvals for critical infrastructure and ensures that the renewable energy rollout incorporates best practice to protect and enhance natural, agricultural and other land use values. Fully leveraging these tools would help address the substantial Environment Protection and Biodiversity Conservation Act bottlenecks noted in the Enabling Infrastructure and Policy sections of this report, and support a more coordinated approach to critical infrastructure planning across Renewable Energy Zones."
        },
        {
          "p": "Queensland’s high-quality biodiversity, agricultural land, and energy infrastructure data, along with pilot projects, provide a strong foundation for such planning in Central Queensland. However, the preliminary stages of pilots and the lack of a clear operational framework for land use prioritisation, mean the score for strategic and nature-positive land-use planning is held to a 3."
        },
        {
          "p": "Ongoing commitment for updating and sharing of databases of biodiversity, agricultural land use and energy systems infrastructure is commended. Support for pilot projects and, ideally, accelerated application of their findings will be needed to underpin strategic and nature-positive land-use planning in Central Queensland."
        },
        {
          "p": "Coordination between biodiversity advocates and industry and government stakeholders, including Powerlink, the Queensland Renewable Energy Council, and renewable energy developers, will need to continue to understand the existing data, pilots, trade offs and limitations for protecting biodiversity, farmland, and developers' economic cases. Knowledge and dialogue can build partnerships and shared principles about how to develop renewable energy in a nature-positive way. Efforts to bring key perspectives together, by the Energy Charter and others in Australia, deserve ongoing support and buy-in."
        },
        {
          "p": "First Nations community benefit sharing and perspectives on land-use prioritisation should be further considered in this or an alternative indicator. Public data sets are not readily available but conversations and pilot projects to incorporate First Nations perspectives are welcome and essential. It is important to spur progress towards ensuring First Nations communities have a say in and share the benefits of projects on the land that they have traditional connections to."
        }
      ]
    }
  ],
  "figures": {
    "table-3": {
      "kind": "table",
      "number": "Table 3",
      "title": "Step Change and Green Energy Exports REZ generation",
      "columns": [
        "Renewable Energy Zone",
        "Initial build limit (GW)",
        "2035–36 Step Change generation (GW) — least cost / counterfactual",
        "2035–36 Green Energy Exports generation (GW) — least cost / counterfactual"
      ],
      "rows": [
        [
          "Isaac (Q4)",
          "10.7",
          "2.9 / 3.7",
          "6.0 / 8.0"
        ],
        [
          "Barcaldine (Q5)",
          "11.9",
          "0.2 / 0.2",
          "0.2 / 0.2"
        ],
        [
          "Fitzroy (Q6)",
          "11.0",
          "5.3 / 5.5",
          "13.2 / 8.5"
        ],
        [
          "Wide Bay (Q7)",
          "3.3",
          "2.2 / 3.6",
          "2.4 / 3.6"
        ],
        [
          "Darling Downs (Q8)",
          "12.6",
          "10.6 / 10.2",
          "13.9 / 14.2"
        ],
        [
          "Banana (Q9)",
          "9.5",
          "0 / 0",
          "1.5 / 0.2"
        ],
        [
          "Total (excl Q8)",
          "46.4",
          "10.6 / 13.0",
          "23.3 / 20.5"
        ],
        [
          "Total",
          "59.0",
          "21.2 / 23.2",
          "37.3 / 34.7"
        ]
      ],
      "note": "Numbers may not sum to the total due to rounding."
    },
    "figure-3": {
      "kind": "image",
      "number": "Figure 3",
      "title": "Demand scenarios for a Gladstone REIP",
      "src": "figures/gladstone-figure-3-demand.png",
      "alt": "Waterfall chart of potential electricity demand in gigawatts by industry, against current and post-Gladstone-Project transmission capacity.",
      "summary": "Existing industries alone approach the transmission capacity available even after the Gladstone Project. Adding export ammonia and 3 Mt p.a. of green iron takes total potential demand to roughly 5.7–8.8 GW, far beyond it."
    },
    "figure-4": {
      "kind": "image",
      "number": "Figure 4",
      "title": "Central Queensland REZs and Clean Energy Precincts",
      "src": "figures/gladstone-figure-4-map.jpg",
      "alt": "Map of Central Queensland showing existing 110–132 kV and 275 kV transmission, the Gladstone Project Phase 1 corridor, substations, wind, solar and battery projects, and the Gladstone precinct industries.",
      "summary": "Gladstone's industrial precinct sits at the end of the network. The Gladstone Project Phase 1 corridor is the single link between the city's industrial loads and the generation and storage inland."
    }
  }
};
