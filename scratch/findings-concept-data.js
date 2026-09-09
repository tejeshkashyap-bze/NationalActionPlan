// findings-concept-data.js — CONCEPT ONLY, lives in scratch/.
//
// What a real findings-<region>.js would hold, for three regions at once so
// the concepts can be compared without three files. In the real thing this
// splits into findings-gladstone.js, findings-port-hedland.js and
// findings-hunter-valley.js, loaded the same optional way as references-*.js.
//
// Each region has two kinds of report content, and they are NOT the same thing:
//
//   contexts — what the report sets out at the top of a theme, before it
//              scores any indicator: the scenario it benchmarks against, the
//              region's demand, the section-opening tables and figures. Keyed
//              by pillarId from data.js.
//   blocks   — the report's "Key findings and recommendations" section for a
//              theme, which comes after the indicators, not before them.
//
// An earlier version of this file put the section-opening tables and figures
// inside the findings blocks. That was wrong: opening Gladstone's findings
// showed Table 3 and the demand-scenario charts, which are context for the
// Energy System indicators and not findings at all. They now sit in contexts,
// in the order the report places them.
//
//   group   — a groupId from data.js. The findings block renders against this
//             category in the accordion.
//   covers  — the groupTitles the report's section actually spanned. Gladstone
//             wrote one set of findings across federal, state and local policy;
//             Port Hedland wrote one across the whole Enabling Infrastructure
//             theme. Neither is reworded to fit the site.
//   body    — the report's own structure, verbatim: { p } paragraph,
//             { ul } bullet list, { ol } numbered list with nested points,
//             { h } sub-heading, { fig } a table or figure at the point the
//             report placed it. Prose reports stay prose; bullet reports stay
//             bullets.
//
// Gladstone's Table 5 is deliberately absent. The report prints it inside
// indicator 2.1.1, so it belongs to that indicator through the evidence-text
// marker mechanism, not to a theme-level block.
//
//   refs    — the sources behind the block, numbered from 1 in the order a
//             reader meets them, exactly as references-<region>.js does for
//             the indicators. `report` keeps the number the printed report
//             used, for traceability, and is not shown.
//
// Citation markers are written into the text as <sup class="refMark">n</sup>
// with the block's own numbering, placed explicitly at the point the report
// put them. Port Hedland cites author-date, so those citations are lifted out
// of the sentence and become markers, the same way the evidence import
// handles them.

window.CONCEPT_FINDINGS = {
  "regions": {
    "gladstone": {
      "round": "September 2025",
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
              "fig": "glad-table-3"
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
              "fig": "glad-figure-3"
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
              "fig": "glad-figure-4"
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
      ]
    },
    "port-hedland": {
      "round": "August 2026",
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
              "fig": "ph-figure-1"
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
      ]
    },
    "hunter-valley": {
      "round": "May 2025",
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
              "fig": "hunt-table-3"
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
              "fig": "hunt-figure-1"
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
      ]
    }
  },
  "figures": {
    "glad-table-3": {
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
    "glad-table-5": {
      "kind": "table",
      "number": "Table 5",
      "title": "Gladstone industry decarbonisation plans",
      "columns": [
        "Company / industrial site",
        "Decarbonisation plan",
        "23–24 Scope 1 emissions (Mt CO₂-e/yr)"
      ],
      "rows": [
        [
          "Boyne Smelters Limited (BSL), Queensland's largest electrical load",
          "50% by 2030, net zero by 2050. PPAs – 2.7 GW.",
          "0.9 (excludes scope 2 electricity emissions)"
        ],
        [
          "Queensland Alumina Limited",
          "50% by 2030, net zero by 2050, piloting double digestion",
          "3.1"
        ],
        [
          "Yarwun Alumina",
          "50% by 2030, net zero by 2050; hydrogen calcination pilot",
          "2.1"
        ],
        [
          "Orica Yarwun",
          "Tertiary abatement 50% scope 1 by 2024, 45% scope 1 and 2 by 2030, 100% renewable energy by 2040.",
          "0.4"
        ],
        [
          "Cement Australia (Fisherman's Landing site)",
          "Net zero by 2050 – launched low-emission cement using alternative feedstocks, electrification of vehicles.",
          "1.6"
        ],
        [
          "Alpha HPA",
          "Low emissions process, a 70% CO₂ emissions reduction compared to incumbent alkoxide process, 100% renewable energy for electrified processes.",
          "Not reported"
        ]
      ],
      "note": ""
    },
    "glad-figure-3": {
      "kind": "image",
      "number": "Figure 3",
      "title": "Demand scenarios for a Gladstone REIP",
      "src": "figures/gladstone-figure-3-demand.png",
      "alt": "Waterfall chart of potential electricity demand in gigawatts by industry, against current and post-Gladstone-Project transmission capacity.",
      "summary": "Existing industries alone approach the transmission capacity available even after the Gladstone Project. Adding export ammonia and 3 Mt p.a. of green iron takes total potential demand to roughly 5.7–8.8 GW, far beyond it."
    },
    "glad-figure-4": {
      "kind": "image",
      "number": "Figure 4",
      "title": "Central Queensland REZs and Clean Energy Precincts",
      "src": "figures/gladstone-figure-4-map.jpg",
      "alt": "Map of Central Queensland showing existing 110–132 kV and 275 kV transmission, the Gladstone Project Phase 1 corridor, substations, wind, solar and battery projects, and the Gladstone precinct industries.",
      "summary": "Gladstone's industrial precinct sits at the end of the network. The Gladstone Project Phase 1 corridor is the single link between the city's industrial loads and the generation and storage inland."
    },
    "hunt-figure-1": {
      "kind": "image",
      "number": "Figure 1",
      "title": "Hunter REZs and Clean Energy Precincts",
      "src": "figures/hunter-figure-1-map.jpg",
      "alt": "Map of the Hunter region showing Renewable Energy Zones, transmission and the clean energy precincts.",
      "summary": "The Hunter's industrial precincts depend on the Hunter-Central Coast, New England and Central-West Orana REZs and the offshore wind zone."
    },
    "hunt-table-3": {
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
    "ph-figure-1": {
      "kind": "image",
      "number": "Figure 1",
      "title": "Port Hedland and Eastern Pilbara Decarbonising Industry and Renewable Energy",
      "src": "figures/port-hedland-figure-1-map.png",
      "alt": "Map of Port Hedland and the Eastern Pilbara showing iron ore mines, industrial precincts, renewable energy and storage projects and the private transmission networks of Fortescue, BHP, Hancock, APA, Rio Tinto and Horizon Power, with an inset of the Boodarie Strategic Industrial Area.",
      "summary": "Most transmission in the Pilbara is privately owned and runs mine to port. The Hamersley Range Corridor is the priority common-user corridor in the Pilbara Energy Transition plan."
    }
  }
};

window.CONCEPT_FIGURES = window.CONCEPT_FINDINGS.figures;
