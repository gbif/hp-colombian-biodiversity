---
layout: heroImage
title: Estándares 
description: Los estándares para compartir datos e información son un elemento principal para integrar en el SiB Colombia millones de registros primarios sobre biodiversidad.
background: /assets/images/Baudouinia_fluggeiformis.jpeg
imageLicense: |
  Photo by SiB Colombia via [https://sibcolombia.net/](https://statics.sibcolombia.net/IPT/img/logos/sib.png)
toc: true
height: 50vh
---

Los datos e información disponible a través del SiB Colombia y sus servicios asociados son una realidad gracias al aporte de cientos de organizaciones y personas que utilizan un lenguaje común para describir, registrar y estructurar miles de conjuntos de datos muy diversos. El uso de estándares comunes y globalmente aceptados, son el mecanismo principal para integrar y publicar a través del SiB Colombia los millones de registros primarios sobre biodiversidad disponibles actualmente.

Los **estándares** funcionan como un modelo o patrón de referencia para vincular información de manera homogénea y controlada. En el contexto de la biodiversidad, uno de los grupos más activos en el desarrollo y mantenimiento de **estándares** de datos a nivel mundial es [Biodiversity Information Standards](http://www.tdwg.org/){:target="_blank"}. Como afiliado de la [International Union of Biological Science](http://www.iubs.org/){:target="_blank"}, esta asociación científica y académica sin fines de lucro, se enfoca en el desarrollo de **estándares** para el intercambio de datos e información sobre biodiversidad. Los miembros de esta comunidad generalmente nos referimos a este grupo como TDWG (pronunciado *tad-wig*), en honor a sus orígenes como *Taxonomic Databases Working Group*

La lista de estándares sobre biodiversidad que ha desarrollado TDWG es amplia. Algunos se encuentran bajo evaluación y adopción por parte de los países y grupos participantes; otros han perdido vigencia y han sido reemplazados por nuevos, o simplemente mejorados a través del tiempo para contar con lineamientos claros y robustos para cada uno. En ciertos casos se realiza la incorporación o eliminación de conceptos que permiten que cada estándar llene las expectativas de los actores que hacen uso de ellos, siendo consensuados por las comunidades de expertos de TDWG en temas de informática de la biodiversidad y muchas otras disciplinas.

El SiB Colombia adopta y promueve el uso de algunos de los estándares respaldados por TDWG, para la estructuración, integración, intercambio y publicación a través de sus plataformas en línea.

___

## Darwin Core
El estándar **Darwin Core** (DwC) ofrece un marco estable, sencillo y flexible para consolidar datos sobre biodiversidad procedentes de diferentes fuentes. La mayoría de los conjuntos de datos compartidos a través del SiB Colombia se publican utilizando el formato *Darwin Core Archive *(DwC-A).

- [Conoce más sobre el Darwin Core](https://www.gbif.org/es/darwin-core){:target="_blank"}.
- [Conoce más en el Ciclo de formación](https://youtu.be/nYGu8KY_K6U){:target="_blank"}.
- [Explora el Manual Darwin Core de OBIS](https://obis.org/manual/){:target="_blank"}.
- [Conoce los elementos del Darwin Core (a través de la Wiki de Gcube)](https://gcube.wiki.gcube-system.org/gcube/Darwin_Core_Terms){:target="_blank"}.
- [Conoce los diferentes perfiles Darwin Core](https://sites.google.com/humboldt.org.co/wikisib/publicar/est%C3%A1ndares/darwin-core?authuser=0){:target="_blank"}.

___

## Plinian Core
El estándar **Plinian Core** (PliC) es un estándar para compartir información principalmente a nivel de especie. Fue concebido como una forma de publicar información sobre especies y hacerla interoperable. Por “información de especies” nos referimos a todo tipo de propiedades y rasgos relacionados con los taxones (de cualquier rango), incluidas descripciones, nomenclatura, estado de conservación, manejo, historia natural, etc. Por lo tanto, el alcance de Plinian Core va más allá de las descripciones taxonómicas. Todas las fichas de especies compartidas a través del SiB Colombia se publican utilizando este estándar.

**Plinian Core** se encuentra actualmente en un periodo de consolidación oficial ante TDWG, y ha sido trabajado desde hace varios años por un grupo iberoamericano que busca fichas de especies interoperables, reutilizando tantos elementos como sea posible de otros estándares y evitar la redundancia.

- [Conoce más sobre el Plinian Core](https://github.com/tdwg/PlinianCore/wiki/About){:target="_blank"}

# Plinian Core Standard

**Title**  
Plinian Core, a Species-level Data Specification

**Date ratified**  
TBD

**Status**  
Current standard

**Category**  
Technical specification

**Permanent IRI**  
[http://www.tdwg.org/standards/777](http://www.tdwg.org/standards/777)

**Abstract**  
**Plinian Core** is a set of vocabulary terms that can be used to describe different aspects of biological species information. Under "biological species Information" all kinds of properties or traits related to taxa—biological and non-biological—are included. Thus, for instance, terms pertaining descriptions, legal aspects, conservation, management, demographics, nomenclature, or related resources are incorporated.

**Creator**  
Plinian Core Task Group, [Biodiversity Information Standards (TDWG)](https://www.tdwg.org/)

**Bibliographic citation**  
Plinian Core Task Group. 2021. Plinian Core, a Species-level Data Specification.
Biodiversity Information Standards (TDWG).
[http://www.tdwg.org/standards/777](http://www.tdwg.org/standards/777)

**Instituciones y personas**

| Instituciones | Personas |
| :------------- | :----------- |
| GBIF España - CSIC | Francisco Pando |
| | Santiago Martínez de la Riva |
| | Ramón Pérez Pérez |
| INBIO & CRBIO | Maria Mora |
| | Manuel Vargas |
| | William Ulate |
| | Erick Mata |
| | Jose M. Cuadra |
| | Jaime Gutierrez |
| | Aurelio Sanabria |
| University of Granada | Carmen Quesada |
| Alexander von Humboldt Institute | Camila Plata |
| | Angela Suarez |
| | Danny Velez |
| | Valentina Grajales |
| CONABIO | Patricia Koleff |
| | Esther Quintero |
| | José Mendoza |
| University of São Paulo | Daniel Lins da Silva |
| University Carlos III | Mat Max Montalvo Martínez |

### 3.1 Index By Term Name

(See also [3.2 Index By Label](#32-index-by-label))

**Classes**

[plic:AnnualCycleAtomized](#plic_AnnualCycleAtomized) |
[plic:AnnualCycles](#plic_AnnualCycles) |
[plic:BaseElements](#plic_BaseElements) |
[plic:Behavior](#plic_Behavior) |
[plic:Dataset](#plic_Dataset) |
[plic:Dataset_ID](#plic_Dataset_ID) |
[plic:DirectThreatAtomized](#plic_DirectThreatAtomized) |
[plic:DirectThreats](#plic_DirectThreats) |
[plic:Dispersal](#plic_Dispersal) |
[plic:EcologicalSignificance](#plic_EcologicalSignificance) |
[plic:Endemic](#plic_Endemic) |
[plic:EnvironmentalEnvelope](#plic_EnvironmentalEnvelope) |
[plic:Feeding](#plic_Feeding) |
[plic:FullDescription](#plic_FullDescription) |
[plic:HabitatAndDistribution](#plic_HabitatAndDistribution) |
[plic:Habitats](#plic_Habitats) |
[plic:Hierarchy](#plic_Hierarchy) |
[plic:IdentificationKeys](#plic_IdentificationKeys) |
[plic:Interactions](#plic_Interactions) |
[plic:Invasiveness](#plic_Invasiveness) |
[plic:Legislation](#plic_Legislation) |
[plic:LifeCycle](#plic_LifeCycle) |
[plic:LifeForm](#plic_LifeForm) |
[plic:ManagementAndConservationAtomized](#plic_ManagementAndConservationAtomized) |
[plic:ManagementAndConservationType](#plic_ManagementAndConservationType) |
[plic:Metadata](#plic_Metadata) |
[plic:Migratory](#plic_Migratory) |
[plic:MigratoryAtomized](#plic_MigratoryAtomized) |
[plic:MolecularData](#plic_MolecularData) |
[plic:NaturalHistory](#plic_NaturalHistory) |
[plic:NomenclatureAndClassification](#plic_NomenclatureAndClassification) |
[plic:PopulationBiology](#plic_PopulationBiology) |
[plic:RecordMetadata](#plic_RecordMetadata) |
[plic:References](#plic_References) |
[plic:Reproduction](#plic_Reproduction) |
[plic:Revision](#plic_Revision) |
[plic:ScientificName](#plic_ScientificName) |
[plic:SeasonOfAvailability-Use](#plic_SeasonOfAvailability-Use) |
[plic:SourceOfInformation](#plic_SourceOfInformation) |
[plic:SpeciesInteraction](#plic_SpeciesInteraction) |
[plic:Synonyms](#plic_Synonyms) |
[plic:TaxonRecord](#plic_TaxonRecord) |
[plic:ThreatStatus](#plic_ThreatStatus) |
[plic:Uses](#plic_Uses) |
[plic:UsesAtomized](#plic_UsesAtomized) |
[plic:ancillaryData
](#plic_ancillaryData
) |
[plic:associatedPartyType](#plic_associatedPartyType) |
[plic:synonymsAtomized](#plic_synonymsAtomized) |
[plic:synonymsType](#plic_synonymsType) |
[plic:taxonomicalDescription](#plic_taxonomicalDescription) 

**Metadata**

[plic:Audience](#plic_Audience) |
[plic:BaseElements](#plic_BaseElements) |
[plic:Dataset](#plic_Dataset) |
[plic:Dataset_ID](#plic_Dataset_ID) |
[plic:Metadata](#plic_Metadata) |
[plic:RecordMetadata](#plic_RecordMetadata) |
[plic:References](#plic_References) |
[plic:Revision](#plic_Revision) |
[plic:TaxonRecord](#plic_TaxonRecord) |
[plic:abstract](#plic_abstract) |
[plic:ancillaryData
](#plic_ancillaryData
) |
[plic:audiencesUnstructured](#plic_audiencesUnstructured) |
[plic:created](#plic_created) |
[plic:dateStamp](#plic_dateStamp) |
[plic:language](#plic_language) |
[plic:resourceLogoUrl](#plic_resourceLogoUrl) |
[plic:taxonRecordID](#plic_taxonRecordID) |
[plic:version](#plic_version) 

**Nomenclature And Classification**

[plic:Hierarchy](#plic_Hierarchy) |
[plic:Language](#plic_Language) |
[plic:Name](#plic_Name) |
[plic:NomenclatureAndClassification](#plic_NomenclatureAndClassification) |
[plic:NomenclatureAndClassificationUnstructured](#plic_NomenclatureAndClassificationUnstructured) |
[plic:ScientificName](#plic_ScientificName) |
[plic:ScientificName](#plic_ScientificName) |
[plic:SynonymName ](#plic_SynonymName ) |
[plic:SynonymStatus](#plic_SynonymStatus) |
[plic:Synonyms](#plic_Synonyms) |
[plic:UsedBy](#plic_UsedBy) |
[plic:UsedIn](#plic_UsedIn) |
[plic:commonNames](#plic_commonNames) |
[plic:commonNamesAtomized](#plic_commonNamesAtomized) |
[plic:commonNamesUnstructured](#plic_commonNamesUnstructured) |
[plic:detailAtomized](#plic_detailAtomized) |
[plic:detailUnstructured](#plic_detailUnstructured) |
[plic:synonymsAtomized](#plic_synonymsAtomized) |
[plic:synonymsAtomizedType](#plic_synonymsAtomizedType) |
[plic:synonymsType](#plic_synonymsType) |
[plic:synonymsUnstructured](#plic_synonymsUnstructured) |
[plic:targetAudiences](#plic_targetAudiences) |
[plic:taxonRecordName](#plic_taxonRecordName) 

**Taxonomic Description**

[plic:FullDescription](#plic_FullDescription) |
[plic:IdentificationKeys](#plic_IdentificationKeys) |
[plic:Keys](#plic_Keys) |
[plic:briefDescription](#plic_briefDescription) |
[plic:fullDescriptionAtomized](#plic_fullDescriptionAtomized) |
[plic:fullDescriptionUnstructured](#plic_fullDescriptionUnstructured) |
[plic:keys](#plic_keys) |
[plic:taxonomicDescriptionType](#plic_taxonomicDescriptionType) |
[plic:taxonomicDescriptionUnstructured](#plic_taxonomicDescriptionUnstructured) |
[plic:taxonomicalDescription](#plic_taxonomicalDescription) 

**Life Form**

[plic:LifeForm](#plic_LifeForm) 

**Life Cycle**

[plic:LifeCycle](#plic_LifeCycle) |
[plic:lifeCycleAtomized](#plic_lifeCycleAtomized) |
[plic:lifeCycleUnstructured](#plic_lifeCycleUnstructured) |
[plic:lifeFormAtomized](#plic_lifeFormAtomized) |
[plic:lifeFormUnstructured](#plic_lifeFormUnstructured) 

**Reproduction**

[plic:Reproduction](#plic_Reproduction) |
[plic:reproductionAtomized](#plic_reproductionAtomized) |
[plic:reproductionUnstructured](#plic_reproductionUnstructured) 

**Annual Cycles**

[plic:AnnualCycleAtomized](#plic_AnnualCycleAtomized) |
[plic:AnnualCycleUnstructured](#plic_AnnualCycleUnstructured) |
[plic:AnnualCycles](#plic_AnnualCycles) |
[plic:EndTimeInterval ](#plic_EndTimeInterval ) |
[plic:Event](#plic_Event) |
[plic:StartTimeInterval](#plic_StartTimeInterval) 

**Feeding**

[plic:Feeding](#plic_Feeding) |
[plic:Strategy](#plic_Strategy) |
[plic:StrategyRemarks](#plic_StrategyRemarks) |
[plic:feedingAtomized](#plic_feedingAtomized) |
[plic:feedingUnstructured](#plic_feedingUnstructured) 

**Dispersal**

[plic:Dispersal](#plic_Dispersal) |
[plic:DispersalUnstructured](#plic_DispersalUnstructured) |
[plic:Distance](#plic_Distance) |
[plic:Purpose](#plic_Purpose) |
[plic:StructureDispersed](#plic_StructureDispersed) |
[plic:Type](#plic_Type) |
[plic:Type](#plic_Type) 

**Behavior**

[plic:Behavior](#plic_Behavior) |
[plic:behaviorAtomized](#plic_behaviorAtomized) |
[plic:behaviorUnstructured](#plic_behaviorUnstructured) 

**Interactions**

[plic:InteractionSpeciesType](#plic_InteractionSpeciesType) |
[plic:Interactions](#plic_Interactions) |
[plic:SpeciesInteraction](#plic_SpeciesInteraction) |
[plic:interactionAtomized](#plic_interactionAtomized) |
[plic:interactionUnstructured](#plic_interactionUnstructured) 

**Molecular Data**

[plic:MolecularData](#plic_MolecularData) |
[plic:MolecularDataAtomized](#plic_MolecularDataAtomized) |
[plic:MolecularDataUnstructured](#plic_MolecularDataUnstructured) |
[plic:RelatedTo](#plic_RelatedTo) 

**Migratory**

[plic:Causes](#plic_Causes) |
[plic:Migratory](#plic_Migratory) |
[plic:MigratoryAtomized](#plic_MigratoryAtomized) |
[plic:Patterns](#plic_Patterns) |
[plic:Routes](#plic_Routes) |
[plic:Season](#plic_Season) |
[plic:migratoryUnstructured](#plic_migratoryUnstructured) 

**Ecological Significance**

[plic:EcologicalSignificance](#plic_EcologicalSignificance) |
[plic:ecologicalSignificanceAtomized](#plic_ecologicalSignificanceAtomized) |
[plic:ecologicalSignificanceUnstructured](#plic_ecologicalSignificanceUnstructured) 

**Misc Details**

**Environmental Envelope**

[plic:EnvironmentalEnvelope](#plic_EnvironmentalEnvelope) |
[plic:environmentalEnvelopeAtomized](#plic_environmentalEnvelopeAtomized) |
[plic:environmentalEnvelopeUnstructured](#plic_environmentalEnvelopeUnstructured) 

**Natural History Unstructured**

**Invasiveness**

[plic:Invasiveness](#plic_Invasiveness) |
[plic:Route](#plic_Route) |
[plic:WhatImpact](#plic_WhatImpact) |
[plic:abundance](#plic_abundance) |
[plic:citation](#plic_citation) |
[plic:countryCode](#plic_countryCode) |
[plic:county](#plic_county) |
[plic:distribution](#plic_distribution) |
[plic:endValidDate](#plic_endValidDate) |
[plic:harmful](#plic_harmful) |
[plic:impactMechanism](#plic_impactMechanism) |
[plic:impactTarget](#plic_impactTarget) |
[plic:invasivenessAtomized](#plic_invasivenessAtomized) |
[plic:invasivenessUnstructured](#plic_invasivenessUnstructured) |
[plic:language](#plic_language) |
[plic:localityName](#plic_localityName) |
[plic:localityType](#plic_localityType) |
[plic:memo](#plic_memo) |
[plic:modified](#plic_modified) |
[plic:origin](#plic_origin) |
[plic:persistence](#plic_persistence) |
[plic:presence](#plic_presence) |
[plic:publicationDate](#plic_publicationDate) |
[plic:rateOfSpread](#plic_rateOfSpread) |
[plic:regulatoryListing](#plic_regulatoryListing) |
[plic:startValidDate](#plic_startValidDate) |
[plic:stateProvince](#plic_stateProvince) |
[plic:trend](#plic_trend) |
[plic:vector](#plic_vector) 

**Habitat And Distribution**

[plic:Distribution](#plic_Distribution) |
[plic:DistributionAtomized](#plic_DistributionAtomized) |
[plic:DistributionScope](#plic_DistributionScope) |
[plic:DistributionScopeType](#plic_DistributionScopeType) |
[plic:DistributionType](#plic_DistributionType) |
[plic:DistributionUnstructured](#plic_DistributionUnstructured) |
[plic:Endemic](#plic_Endemic) |
[plic:EndemicIn](#plic_EndemicIn) |
[plic:EndemicTo](#plic_EndemicTo) |
[plic:GeographicEntity](#plic_GeographicEntity) |
[plic:HabitatAndDistribution](#plic_HabitatAndDistribution) |
[plic:Habitats](#plic_Habitats) |
[plic:country](#plic_country) |
[plic:county](#plic_county) |
[plic:endemicAtomized](#plic_endemicAtomized) |
[plic:endemicUnstructured](#plic_endemicUnstructured) |
[plic:geographicEntity
](#plic_geographicEntity
) |
[plic:habitatAndDistributionUnstructured](#plic_habitatAndDistributionUnstructured) |
[plic:habitatAtomized](#plic_habitatAtomized) |
[plic:habitatUnstructured](#plic_habitatUnstructured) |
[plic:locality](#plic_locality) |
[plic:municipality](#plic_municipality) |
[plic:stateProvince](#plic_stateProvince) |
[plic:temporalCoverage](#plic_temporalCoverage) 

**Demography And Threat**

[plic:AbundanceData](#plic_AbundanceData) |
[plic:AppliesTo](#plic_AppliesTo) |
[plic:AppliesTo](#plic_AppliesTo) |
[plic:AreaOfOccupancy](#plic_AreaOfOccupancy) |
[plic:Authority](#plic_Authority) |
[plic:AverageDensity](#plic_AverageDensity) |
[plic:BirthRate](#plic_BirthRate) |
[plic:CarryingCapacity](#plic_CarryingCapacity) |
[plic:DensityData](#plic_DensityData) |
[plic:DescriptionLifeStages](#plic_DescriptionLifeStages) |
[plic:DirectThreatAtomized](#plic_DirectThreatAtomized) |
[plic:DirectThreats](#plic_DirectThreats) |
[plic:DispersalAtomized](#plic_DispersalAtomized) |
[plic:Emigration](#plic_Emigration) |
[plic:ExtentOfOccurrence](#plic_ExtentOfOccurrence) |
[plic:Fecundity](#plic_Fecundity) |
[plic:Immigration](#plic_Immigration) |
[plic:Legislation](#plic_Legislation) |
[plic:LegislationName](#plic_LegislationName) |
[plic:LegislationRead](#plic_LegislationRead) |
[plic:LegislationType](#plic_LegislationType) |
[plic:MortalityRate](#plic_MortalityRate) |
[plic:Norm](#plic_Norm) |
[plic:NumberIndividualsPerObservation](#plic_NumberIndividualsPerObservation) |
[plic:PatternDistribution](#plic_PatternDistribution) |
[plic:PopulationBiology](#plic_PopulationBiology) |
[plic:PopulationBiologyAtomized](#plic_PopulationBiologyAtomized) |
[plic:PopulationGrowthRate](#plic_PopulationGrowthRate) |
[plic:PopulationTrend](#plic_PopulationTrend) |
[plic:ProportionIndividualsPerStageLife](#plic_ProportionIndividualsPerStageLife) |
[plic:ProtectionLegalStatus](#plic_ProtectionLegalStatus) |
[plic:Recruitment](#plic_Recruitment) |
[plic:SexRatio](#plic_SexRatio) |
[plic:Size](#plic_Size) |
[plic:Status](#plic_Status) |
[plic:ThreatCategory](#plic_ThreatCategory) |
[plic:ThreatStatus](#plic_ThreatStatus) |
[plic:Type](#plic_Type) |
[plic:demographyAndThreat](#plic_demographyAndThreat) |
[plic:demographyAndThreatUnstructured](#plic_demographyAndThreatUnstructured) |
[plic:directThreatUnstructured](#plic_directThreatUnstructured) |
[plic:legislationAtomized](#plic_legislationAtomized) |
[plic:legislationUnstructured](#plic_legislationUnstructured) |
[plic:populationBiologyUnstructured](#plic_populationBiologyUnstructured) |
[plic:territory](#plic_territory) |
[plic:territoryAtomized](#plic_territoryAtomized) |
[plic:territoryUnstructured](#plic_territoryUnstructured) |
[plic:threatStatusAtomized](#plic_threatStatusAtomized) |
[plic:threatStatusUnstructured](#plic_threatStatusUnstructured) 

**Uses Management And Conservation**

[plic:Actions](#plic_Actions) |
[plic:ActionsType](#plic_ActionsType) |
[plic:Conservation-ExplotationData](#plic_Conservation-ExplotationData) |
[plic:Economics](#plic_Economics) |
[plic:HumanAndEnvironmentalrelevance](#plic_HumanAndEnvironmentalrelevance) |
[plic:ManagementAndConservation](#plic_ManagementAndConservation) |
[plic:ManagementAndConservationAtomized](#plic_ManagementAndConservationAtomized) |
[plic:ManagementAndConservationType](#plic_ManagementAndConservationType) |
[plic:ManagementAndConservationUnstructured](#plic_ManagementAndConservationUnstructured) |
[plic:ManagementPlan](#plic_ManagementPlan) |
[plic:MeansOfApplication-Administration](#plic_MeansOfApplication-Administration) |
[plic:Objetives](#plic_Objetives) |
[plic:Organisms](#plic_Organisms) |
[plic:PartUsed](#plic_PartUsed) |
[plic:Potential](#plic_Potential) |
[plic:ProductionDetails](#plic_ProductionDetails) |
[plic:Properties](#plic_Properties) |
[plic:RatingPopularity](#plic_RatingPopularity) |
[plic:SeasonOfAvailability-Use](#plic_SeasonOfAvailability-Use) |
[plic:SourceOfInformation](#plic_SourceOfInformation) |
[plic:Use-Value](#plic_Use-Value) |
[plic:UseNotes](#plic_UseNotes) |
[plic:UseTypeAtomized](#plic_UseTypeAtomized) |
[plic:Users](#plic_Users) |
[plic:Uses](#plic_Uses) |
[plic:UsesAtomized](#plic_UsesAtomized) |
[plic:UsesManagementAndConservation](#plic_UsesManagementAndConservation) |
[plic:UsesManagementAndConservationUnstructured](#plic_UsesManagementAndConservationUnstructured) |
[plic:UsesUnstructured](#plic_UsesUnstructured) |
[plic:VernacularNameUseAnnotations](#plic_VernacularNameUseAnnotations) 

**Associated Party**

[plic:associatedPartyType](#plic_associatedPartyType) 

**References**

**Ancillary Data**

[plic:AncillaryData](#plic_AncillaryData) |
[plic:dataObjectBaseType](#plic_dataObjectBaseType) 

### 3.2 Index By Label

(See also [3.1 Index By Term Name](#31-index-by-term-name))

**Classes**

[Ancillary Data](#plic_ancillaryData
) |
[Annual Cycle](#plic_AnnualCycles) |
[Atomized Annual Cycle](#plic_AnnualCycleAtomized) |
[Atomized Direct Threat](#plic_DirectThreatAtomized) |
[Atomized Uses](#plic_UsesAtomized) |
[Base Elements](#plic_BaseElements) |
[Behavior](#plic_Behavior) |
[Dataset ID](#plic_Dataset_ID) |
[Direct Threats](#plic_DirectThreats) |
[Dispersal](#plic_Dispersal) |
[Ecological Significance](#plic_EcologicalSignificance) |
[Endemic](#plic_Endemic) |
[Environmental Envelope](#plic_EnvironmentalEnvelope) |
[Feeding](#plic_Feeding) |
[Full Description](#plic_FullDescription) |
[Habitat And Distribution](#plic_HabitatAndDistribution) |
[Habitats](#plic_Habitats) |
[Hierarchy](#plic_Hierarchy) |
[Identification Keys](#plic_IdentificationKeys) |
[Interactions](#plic_Interactions) |
[Invasiveness](#plic_Invasiveness) |
[Legislation](#plic_Legislation) |
[Life Cycle](#plic_LifeCycle) |
[Life Form](#plic_LifeForm) |
[Management and Conservation Atomized](#plic_ManagementAndConservationAtomized) |
[Management and Conservation Type](#plic_ManagementAndConservationType) |
[Metadata](#plic_Metadata) |
[Natural History](#plic_NaturalHistory) |
[Nomenclature and Classification](#plic_NomenclatureAndClassification) |
[Record Metadata](#plic_RecordMetadata) |
[References](#plic_References) |
[Revision](#plic_Revision) |
[Scientific Name](#plic_ScientificName) |
[Season of Availability-Use](#plic_SeasonOfAvailability-Use) |
[Source of Information](#plic_SourceOfInformation) |
[Species Interaction ](#plic_SpeciesInteraction) |
[Taxon Record](#plic_TaxonRecord) |
[Uses](#plic_Uses) |
[associatedPartyType](#plic_associatedPartyType) |
[atomized migratory](#plic_MigratoryAtomized) |
[atomized synonyms](#plic_synonymsAtomized) |
[dataset](#plic_Dataset) |
[migratory](#plic_Migratory) |
[molecular data](#plic_MolecularData) |
[population biology](#plic_PopulationBiology) |
[reproduction](#plic_Reproduction) |
[synonyms](#plic_Synonyms) |
[synonyms type](#plic_synonymsType) |
[taxonomic description](#plic_taxonomicalDescription) |
[threat status](#plic_ThreatStatus) 

**Metadata**

[Abstract](#plic_abstract) |
[Ancillary Data](#plic_ancillaryData
) |
[Audience](#plic_Audience) |
[Base Elements](#plic_BaseElements) |
[Created](#plic_created) |
[Dataset ID](#plic_Dataset_ID) |
[Language](#plic_language) |
[Metadata](#plic_Metadata) |
[Record Metadata](#plic_RecordMetadata) |
[References](#plic_References) |
[Revision](#plic_Revision) |
[Taxon Record](#plic_TaxonRecord) |
[Taxon Record id](#plic_taxonRecordID) |
[Unstructured Audiences](#plic_audiencesUnstructured) |
[Version](#plic_version) |
[dataset](#plic_Dataset) |
[dateStamp](#plic_dateStamp) |
[resourceLogoUrl](#plic_resourceLogoUrl) 

**Nomenclature And Classification**

[Atomized Common Names](#plic_commonNamesAtomized) |
[Atomized Detail](#plic_detailAtomized) |
[Common Names](#plic_commonNames) |
[Detail Unstructured](#plic_detailUnstructured) |
[Hierarchy](#plic_Hierarchy) |
[Language](#plic_Language) |
[Name](#plic_Name) |
[Nomenclature and Classification](#plic_NomenclatureAndClassification) |
[Nomenclature and Classification Unstructured](#plic_NomenclatureAndClassificationUnstructured) |
[Scientific Name](#plic_ScientificName) |
[Scientific name](#plic_ScientificName) |
[Synonym name ](#plic_SynonymName ) |
[Synonym status](#plic_SynonymStatus) |
[Used By](#plic_UsedBy) |
[Used In](#plic_UsedIn) |
[atomized synonyms](#plic_synonymsAtomized) |
[synonyms](#plic_Synonyms) |
[synonyms Atomized Type](#plic_synonymsAtomizedType) |
[synonyms type](#plic_synonymsType) |
[target audiences](#plic_targetAudiences) |
[taxon recordname](#plic_taxonRecordName) |
[unstructured common names](#plic_commonNamesUnstructured) |
[unstructured synonyms](#plic_synonymsUnstructured) 

**Taxonomic Description**

[Atomized Full Description](#plic_fullDescriptionAtomized) |
[Brief Description](#plic_briefDescription) |
[Full Description](#plic_FullDescription) |
[Identification Keys](#plic_IdentificationKeys) |
[Keys](#plic_keys) |
[Unstructured Full Description](#plic_fullDescriptionUnstructured) |
[taxonomic description](#plic_taxonomicalDescription) |
[taxonomic description type](#plic_taxonomicDescriptionType) |
[unstructured taxonomic description](#plic_taxonomicDescriptionUnstructured) 

**Life Form**

[Life Form](#plic_LifeForm) 

**Life Cycle**

[Atomized Life Cycle](#plic_lifeCycleAtomized) |
[Atomized Life Form](#plic_lifeFormAtomized) |
[Life Cycle](#plic_LifeCycle) |
[Unstructured Life Cycle](#plic_lifeCycleUnstructured) |
[Unstructured Life Form](#plic_lifeFormUnstructured) 

**Reproduction**

[atomized reproduction](#plic_reproductionAtomized) |
[reproduction](#plic_Reproduction) |
[unstructured reproduction](#plic_reproductionUnstructured) 

**Annual Cycles**

[Annual Cycle](#plic_AnnualCycles) |
[Atomized Annual Cycle](#plic_AnnualCycleAtomized) |
[End Time Interval](#plic_EndTimeInterval ) |
[Event](#plic_Event) |
[Start Time Interval](#plic_StartTimeInterval) |
[Unstructured Annual Cycle](#plic_AnnualCycleUnstructured) 

**Feeding**

[Atomized Feeding](#plic_feedingAtomized) |
[Feeding](#plic_Feeding) |
[Trophic Strategy](#plic_Strategy) |
[Trophic Strategy Remarks](#plic_StrategyRemarks) |
[Unstructured Feeding](#plic_feedingUnstructured) 

**Dispersal**

[Dispersal](#plic_Dispersal) |
[Distance](#plic_Distance) |
[Purpose](#plic_Purpose) |
[Structure Dispersed ](#plic_StructureDispersed) |
[Type](#plic_Type) |
[Unstructured Dispersal](#plic_DispersalUnstructured) 

**Behavior**

[Atomized Behavior](#plic_behaviorAtomized) |
[Behavior](#plic_Behavior) |
[Unstructured Behavior](#plic_behaviorUnstructured) 

**Interactions**

[Atomized Interaction](#plic_interactionAtomized) |
[Interactions](#plic_Interactions) |
[Species Interaction ](#plic_SpeciesInteraction) |
[Species Interaction Type](#plic_InteractionSpeciesType) |
[Unstructured Interaction](#plic_interactionUnstructured) 

**Molecular Data**

[RelatedTo](#plic_RelatedTo) |
[atomized molecular data](#plic_MolecularDataAtomized) |
[molecular data](#plic_MolecularData) |
[unstructured molecular data](#plic_MolecularDataUnstructured) 

**Migratory**

[Causes](#plic_Causes) |
[Patterns](#plic_Patterns) |
[Routes](#plic_Routes) |
[Season](#plic_Season) |
[atomized migratory](#plic_MigratoryAtomized) |
[migratory](#plic_Migratory) |
[unstructured migratory](#plic_migratoryUnstructured) 

**Ecological Significance**

[Atomized Ecological Significance](#plic_ecologicalSignificanceAtomized) |
[Ecological Significance](#plic_EcologicalSignificance) |
[Unstructured Ecological Significance](#plic_ecologicalSignificanceUnstructured) 

**Misc Details**

**Environmental Envelope**

[Atomized Environmental Envelope](#plic_environmentalEnvelopeAtomized) |
[Environmental Envelope](#plic_EnvironmentalEnvelope) |
[Unstructured Environmental Envelope](#plic_environmentalEnvelopeUnstructured) 

**Natural History Unstructured**

**Invasiveness**

[Abundance](#plic_abundance) |
[Atomized Invasiveness](#plic_invasivenessAtomized) |
[Citation](#plic_citation) |
[Country Code](#plic_countryCode) |
[County](#plic_county) |
[Distribution](#plic_distribution) |
[End Valid Date](#plic_endValidDate) |
[Harmful](#plic_harmful) |
[Impact Mechanism](#plic_impactMechanism) |
[Impact Target](#plic_impactTarget) |
[Invasiveness](#plic_Invasiveness) |
[Language](#plic_language) |
[Locality Name](#plic_localityName) |
[Locality Type](#plic_localityType) |
[Memo](#plic_memo) |
[Modified](#plic_modified) |
[Origin](#plic_origin) |
[Persistence](#plic_persistence) |
[Presence ](#plic_presence) |
[Publication Date](#plic_publicationDate) |
[Rate of Spread](#plic_rateOfSpread) |
[Regulatory Listing](#plic_regulatoryListing) |
[Route](#plic_Route) |
[Start Valid Date](#plic_startValidDate) |
[State Province](#plic_stateProvince) |
[Trend](#plic_trend) |
[Unstructured Invasiveness](#plic_invasivenessUnstructured) |
[Vector](#plic_vector) |
[What Impact](#plic_WhatImpact) 

**Habitat And Distribution**

[Atomized Distribution](#plic_DistributionAtomized) |
[Atomized Endemic](#plic_endemicAtomized) |
[Atomized Habitat](#plic_habitatAtomized) |
[Country](#plic_country) |
[County](#plic_county) |
[Distribution](#plic_Distribution) |
[Distribution Scope](#plic_DistributionScope) |
[Distribution Scope Type](#plic_DistributionScopeType) |
[Distribution Type](#plic_DistributionType) |
[Endemic](#plic_Endemic) |
[Endemic In](#plic_EndemicIn) |
[Endemic To](#plic_EndemicTo) |
[Geographic Entity](#plic_GeographicEntity) |
[Habitat And Distribution](#plic_HabitatAndDistribution) |
[Habitats](#plic_Habitats) |
[Locality](#plic_locality) |
[Municipality ](#plic_municipality) |
[State Province ](#plic_stateProvince) |
[Temporal Coverage](#plic_temporalCoverage) |
[Unstructured Distribution](#plic_DistributionUnstructured) |
[Unstructured Endemic](#plic_endemicUnstructured) |
[Unstructured Habitat](#plic_habitatUnstructured) |
[Unstructured Habitat And Distribution](#plic_habitatAndDistributionUnstructured) 

**Demography And Threat**

[AbundanceData](#plic_AbundanceData) |
[Applies to](#plic_AppliesTo) |
[Area of occupancy](#plic_AreaOfOccupancy) |
[Atomized Direct Threat](#plic_DirectThreatAtomized) |
[Atomized Dispersal](#plic_DispersalAtomized) |
[Atomized Legislation](#plic_legislationAtomized) |
[Authority](#plic_Authority) |
[Average density](#plic_AverageDensity) |
[Birth rate](#plic_BirthRate) |
[Carrying capacity](#plic_CarryingCapacity) |
[Demography And Threat](#plic_demographyAndThreat) |
[DensityData](#plic_DensityData) |
[Description life stages](#plic_DescriptionLifeStages) |
[Direct Threats](#plic_DirectThreats) |
[Emigration](#plic_Emigration) |
[Extent of occurrence](#plic_ExtentOfOccurrence) |
[Fecundity](#plic_Fecundity) |
[Immigration](#plic_Immigration) |
[Legislation](#plic_Legislation) |
[Legislation Name](#plic_LegislationName) |
[Legislation Read](#plic_LegislationRead) |
[Legislation Type](#plic_LegislationType) |
[Mortality rate](#plic_MortalityRate) |
[Norm](#plic_Norm) |
[Number individuals per observation](#plic_NumberIndividualsPerObservation) |
[Pattern distribution](#plic_PatternDistribution) |
[Population growth rate](#plic_PopulationGrowthRate) |
[Population trend](#plic_PopulationTrend) |
[ProportionIndividuals per stage life](#plic_ProportionIndividualsPerStageLife) |
[Protection Legal Status](#plic_ProtectionLegalStatus) |
[Recruitment](#plic_Recruitment) |
[SexRatio](#plic_SexRatio) |
[Size](#plic_Size) |
[Status](#plic_Status) |
[Threat category](#plic_ThreatCategory) |
[Type](#plic_Type) |
[Unstructured Demography And Threat](#plic_demographyAndThreatUnstructured) |
[Unstructured Direct Threat](#plic_directThreatUnstructured) |
[Unstructured Legislation](#plic_legislationUnstructured) |
[atomized population biology](#plic_PopulationBiologyAtomized) |
[population biology](#plic_PopulationBiology) |
[territory](#plic_territory) |
[territory atomized ](#plic_territoryAtomized) |
[threat Status Atomized](#plic_threatStatusAtomized) |
[threat status](#plic_ThreatStatus) |
[unstructured population biology](#plic_populationBiologyUnstructured) |
[unstructured territory](#plic_territoryUnstructured) |
[unstructured threat status](#plic_threatStatusUnstructured) 

**Uses Management And Conservation**

[Actions](#plic_Actions) |
[Actions Type](#plic_ActionsType) |
[Atomized Uses](#plic_UsesAtomized) |
[Conservation-Explotation Data](#plic_Conservation-ExplotationData) |
[Economics](#plic_Economics) |
[Human and Environmental Relevance](#plic_HumanAndEnvironmentalrelevance) |
[Management Plan](#plic_ManagementPlan) |
[Management and Conservation](#plic_ManagementAndConservation) |
[Management and Conservation Atomized](#plic_ManagementAndConservationAtomized) |
[Management and Conservation Type](#plic_ManagementAndConservationType) |
[Management and Conservation Unstructured](#plic_ManagementAndConservationUnstructured) |
[Means of Application-Administration](#plic_MeansOfApplication-Administration) |
[Objetives](#plic_Objetives) |
[Organisms](#plic_Organisms) |
[Part Used](#plic_PartUsed) |
[Potential](#plic_Potential) |
[Production Details](#plic_ProductionDetails) |
[Properties](#plic_Properties) |
[Rating Popularity](#plic_RatingPopularity) |
[Season of Availability-Use](#plic_SeasonOfAvailability-Use) |
[Source of Information](#plic_SourceOfInformation) |
[Unstructured Uses](#plic_UsesUnstructured) |
[Use Notes](#plic_UseNotes) |
[Use Type Atomized](#plic_UseTypeAtomized) |
[Use-Value](#plic_Use-Value) |
[Users](#plic_Users) |
[Uses](#plic_Uses) |
[Uses Management and Conservation](#plic_UsesManagementAndConservation) |
[Uses Management and Conservation Unstructured ](#plic_UsesManagementAndConservationUnstructured) |
[Vernacular Name Use Annotations](#plic_VernacularNameUseAnnotations) 

**Associated Party**

[associatedPartyType](#plic_associatedPartyType) 

**References**

**Ancillary Data**

[Ancillary Data](#plic_AncillaryData) |
[AncillaryData](#plic_dataObjectBaseType) 

## 4 Vocabulary
### 4.1 Metadata

Basic information to identify the record; basic information to identify the record; and information about the Version, Revision, the language and target audiences of the Taxon Record.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Audience"></a>Term Name  plic:Audience</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Audience">http://rs.tdwg.org/plic/terms/Audience</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Audience-2021-05-17">http://rs.tdwg.org/plic/terms/version/Audience-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Audience</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Repetitive concept where the target audiences are written one by one.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Predetermined list: 01. Expert (High). 02. Knowledgeable (Medium). 03. General (Low).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_BaseElements"></a>Term Name  plic:BaseElements</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/BaseElements">http://rs.tdwg.org/plic/terms/BaseElements</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/BaseElements-2021-05-17">http://rs.tdwg.org/plic/terms/version/BaseElements-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Base Elements</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Basic information to identify the record.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Dataset"></a>Term Name  plic:Dataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Dataset">http://rs.tdwg.org/plic/terms/Dataset</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Dataset-2021-05-17">http://rs.tdwg.org/plic/terms/version/Dataset-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>dataset</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The dataset element is a wrapper for all other elements relating to a single dataset as defined in eml.xsd (eml/dataset).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td><a href="https://eml.ecoinformatics.org/schema/">https://eml.ecoinformatics.org/schema/</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Dataset_ID"></a>Term Name  plic:Dataset_ID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Dataset_ID">http://rs.tdwg.org/plic/terms/Dataset_ID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Dataset_ID-2021-05-17">http://rs.tdwg.org/plic/terms/version/Dataset_ID-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dataset ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dataset.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Metadata"></a>Term Name  plic:Metadata</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Metadata">http://rs.tdwg.org/plic/terms/Metadata</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Metadata-2021-05-17">http://rs.tdwg.org/plic/terms/version/Metadata-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Metadata</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Management: actions aimed at conserving or recovering species / Conservation: undertaken interventions designed to preserve species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_RecordMetadata"></a>Term Name  plic:RecordMetadata</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/RecordMetadata">http://rs.tdwg.org/plic/terms/RecordMetadata</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/RecordMetadata-2021-05-17">http://rs.tdwg.org/plic/terms/version/RecordMetadata-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Record Metadata</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>This element includes the information about the Version, Revision,the language and target audiences of the Taxon Record.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_References"></a>Term Name  plic:References</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/References">http://rs.tdwg.org/plic/terms/References</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/References-2021-05-17">http://rs.tdwg.org/plic/terms/version/References-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>From EOL. It represents the references that an element could have, in one or more of the different format and schemas: BICI, CODEN,DOI, EISSN, HANDLE, ISBN, ISSN, LSID, OCLC, SICI, URL, URN</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>eol:referenceType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Revision"></a>Term Name  plic:Revision</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Revision">http://rs.tdwg.org/plic/terms/Revision</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Revision-2021-05-17">http://rs.tdwg.org/plic/terms/version/Revision-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Revision</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Creators, revision status and dates of the record.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_TaxonRecord"></a>Term Name  plic:TaxonRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/TaxonRecord">http://rs.tdwg.org/plic/terms/TaxonRecord</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/TaxonRecord-2021-05-17">http://rs.tdwg.org/plic/terms/version/TaxonRecord-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Record</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container for all elements pertaining a certain view or instance of a taxon, for instance, Festuca glauca Vill. as in Flora iberica, or Panthera onca as in https://enciclovida.mx/especies/34460-panthera-onca.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_abstract"></a>Term Name  plic:abstract</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/abstract">http://rs.tdwg.org/plic/terms/abstract</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/abstract-2021-05-17">http://rs.tdwg.org/plic/terms/version/abstract-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Abstract</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A brief summary of the most relevant or attractive features of this taxón to the general public.  Could point to any kind of information. </td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: Blue whale is the largest mammal in the world.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ancillaryData
"></a>Term Name  plic:ancillaryData
</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ancillaryData
">http://rs.tdwg.org/plic/terms/ancillaryData
</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ancillaryData
-2021-05-17">http://rs.tdwg.org/plic/terms/version/ancillaryData
-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Ancillary Data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The AncillaryData element contains information that could be an image, an audio, a list of references, a list of agents, rights, licenses...related with the element that belongs. It`s a redefinition of DataObject element from EOL scheme.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_audiencesUnstructured"></a>Term Name  plic:audiencesUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/audiencesUnstructured">http://rs.tdwg.org/plic/terms/audiencesUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/audiencesUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/audiencesUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Audiences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>List audience codes separated by means of comma or /.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_created"></a>Term Name  plic:created</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/created">http://rs.tdwg.org/plic/terms/created</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/created-2021-05-17">http://rs.tdwg.org/plic/terms/version/created-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Created</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the resource was created.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_dateStamp"></a>Term Name  plic:dateStamp</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/dateStamp">http://rs.tdwg.org/plic/terms/dateStamp</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/dateStamp-2021-05-17">http://rs.tdwg.org/plic/terms/version/dateStamp-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>dateStamp</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date the metadata document was created or modified.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_language"></a>Term Name  plic:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/language">http://rs.tdwg.org/plic/terms/language</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/language-2021-05-17">http://rs.tdwg.org/plic/terms/version/language-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Language</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The language of the taxon record, according to ISO 639.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_resourceLogoUrl"></a>Term Name  plic:resourceLogoUrl</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/resourceLogoUrl">http://rs.tdwg.org/plic/terms/resourceLogoUrl</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/resourceLogoUrl-2021-05-17">http://rs.tdwg.org/plic/terms/version/resourceLogoUrl-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>resourceLogoUrl</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The URI of an icon/logo symbolizing the project.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_taxonRecordID"></a>Term Name  plic:taxonRecordID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/taxonRecordID">http://rs.tdwg.org/plic/terms/taxonRecordID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/taxonRecordID-2021-05-17">http://rs.tdwg.org/plic/terms/version/taxonRecordID-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Record id</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Unique identifier of the record within the database.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_version"></a>Term Name  plic:version</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version">http://rs.tdwg.org/plic/terms/version</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/version-2021-05-17">http://rs.tdwg.org/plic/terms/version/version-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Version</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Number and date of the current version.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.2 Nomenclature And Classification

Information on the taxons name, synomyms, nomenclatural status, common names, and taxonomic hierarchy; plus misc. details and ancillary data<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Hierarchy"></a>Term Name  plic:Hierarchy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Hierarchy">http://rs.tdwg.org/plic/terms/Hierarchy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Hierarchy-2021-05-17">http://rs.tdwg.org/plic/terms/version/Hierarchy-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Hierarchy</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Hierarchical categories. Modified from Linnean Core.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Option: fill all or principal ranks and optionally provide keys.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Language"></a>Term Name  plic:Language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Language">http://rs.tdwg.org/plic/terms/Language</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Language-2021-05-17">http://rs.tdwg.org/plic/terms/version/Language-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Language</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Language used to write the species information, ISO 639-2 according to GBIF Metadata Profile.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Name"></a>Term Name  plic:Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Name">http://rs.tdwg.org/plic/terms/Name</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Name-2021-05-17">http://rs.tdwg.org/plic/terms/version/Name-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the common name.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_NomenclatureAndClassification"></a>Term Name  plic:NomenclatureAndClassification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/NomenclatureAndClassification">http://rs.tdwg.org/plic/terms/NomenclatureAndClassification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/NomenclatureAndClassification-2021-05-17">http://rs.tdwg.org/plic/terms/version/NomenclatureAndClassification-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Nomenclature and Classification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Structured Information on the taxon's  name, synomyms, nomenclatural status, common names, and taxonomic hierarchy; plus  misc. details and ancillary data.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_NomenclatureAndClassificationUnstructured"></a>Term Name  plic:NomenclatureAndClassificationUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/NomenclatureAndClassificationUnstructured">http://rs.tdwg.org/plic/terms/NomenclatureAndClassificationUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/NomenclatureAndClassificationUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/NomenclatureAndClassificationUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Nomenclature and Classification Unstructured</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on the taxon's  name, synomyms, nomenclatural status, common names, and taxonomic hierarchy; plus  misc. details and ancillary data.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ScientificName"></a>Term Name  plic:ScientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ScientificName">http://rs.tdwg.org/plic/terms/ScientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ScientificName-2021-05-17">http://rs.tdwg.org/plic/terms/version/ScientificName-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Canonical name enforcing strict inclusion of only nomenclatural information - not taxonomic information. The name entered here must comply with rules and recommendations of the international nomenclatural code pertaining to the organisms (Zoological, Botanical, of Cultivated Pants, or Bacteriological).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ScientificName"></a>Term Name  plic:ScientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ScientificName">http://rs.tdwg.org/plic/terms/ScientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ScientificName-2021-05-17">http://rs.tdwg.org/plic/terms/version/ScientificName-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Canonical name enforcing strict inclusion of only nomenclatural information - not taxonomic information. The name entered here must comply with rules and recommendations of the international nomenclatural code pertaining to the organisms (Zoological, Botanical, of Cultivated Pants, or Bacteriological).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SynonymName "></a>Term Name  plic:SynonymName </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SynonymName ">http://rs.tdwg.org/plic/terms/SynonymName </a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SynonymName -2021-05-17">http://rs.tdwg.org/plic/terms/version/SynonymName -2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Synonym name </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Scientific name of the synonym.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>tcs: ScientificName. An object that represents a single scientific biological name that either is, or appears to be, governed by one of the biological codes of nomenclature. These are not taxa. Taxa, whether accepted or not, are represented by TaxonConcept objects. Vernacular names are also dealt with under taxon concepts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SynonymStatus"></a>Term Name  plic:SynonymStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SynonymStatus">http://rs.tdwg.org/plic/terms/SynonymStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SynonymStatus-2021-05-17">http://rs.tdwg.org/plic/terms/version/SynonymStatus-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Synonym status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Nomenclatural Status</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>dc:nomenclaturalStatus. <a href="http://rs.tdwg.org/dwc/terms/index.htm#nomenclaturalStatus">http://rs.tdwg.org/dwc/terms/index.htm#nomenclaturalStatus</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Synonyms"></a>Term Name  plic:Synonyms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Synonyms">http://rs.tdwg.org/plic/terms/Synonyms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Synonyms-2021-05-17">http://rs.tdwg.org/plic/terms/version/Synonyms-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>synonyms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Different names for this taxon.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsedBy"></a>Term Name  plic:UsedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsedBy">http://rs.tdwg.org/plic/terms/UsedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsedBy-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsedBy-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Used By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Sometimes names used by one group of people are adopted by another.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property


</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsedIn"></a>Term Name  plic:UsedIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsedIn">http://rs.tdwg.org/plic/terms/UsedIn</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsedIn-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsedIn-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Used In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Location where de common name is used.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_commonNames"></a>Term Name  plic:commonNames</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/commonNames">http://rs.tdwg.org/plic/terms/commonNames</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/commonNames-2021-05-17">http://rs.tdwg.org/plic/terms/version/commonNames-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Common Names</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the common name.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_commonNamesAtomized"></a>Term Name  plic:commonNamesAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/commonNamesAtomized">http://rs.tdwg.org/plic/terms/commonNamesAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/commonNamesAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/commonNamesAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Common Names</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>commonNames element in structured format.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_commonNamesUnstructured"></a>Term Name  plic:commonNamesUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/commonNamesUnstructured">http://rs.tdwg.org/plic/terms/commonNamesUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/commonNamesUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/commonNamesUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured common names</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>CommonNames element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_detailAtomized"></a>Term Name  plic:detailAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/detailAtomized">http://rs.tdwg.org/plic/terms/detailAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/detailAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/detailAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Detail</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>MiscDetail element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_detailUnstructured"></a>Term Name  plic:detailUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/detailUnstructured">http://rs.tdwg.org/plic/terms/detailUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/detailUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/detailUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Detail Unstructured</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>MiscDetail element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_synonymsAtomized"></a>Term Name  plic:synonymsAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/synonymsAtomized">http://rs.tdwg.org/plic/terms/synonymsAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/synonymsAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/synonymsAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>atomized synonyms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>list of synonyms in a structured format.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>tsc:ScientificName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_synonymsAtomizedType"></a>Term Name  plic:synonymsAtomizedType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/synonymsAtomizedType">http://rs.tdwg.org/plic/terms/synonymsAtomizedType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/synonymsAtomizedType-2021-05-17">http://rs.tdwg.org/plic/terms/version/synonymsAtomizedType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>synonyms Atomized Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Type for atomized synonyms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Los "Type" los eliminamos ¿no? (FP)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_synonymsType"></a>Term Name  plic:synonymsType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/synonymsType">http://rs.tdwg.org/plic/terms/synonymsType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/synonymsType-2021-05-17">http://rs.tdwg.org/plic/terms/version/synonymsType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>synonyms type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A type of sequence of sequences of zero or more Atomized and Unstructured synonyms, each one with their optional ancillary data.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Los "Type" los eliminamos ¿no? (FP)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_synonymsUnstructured"></a>Term Name  plic:synonymsUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/synonymsUnstructured">http://rs.tdwg.org/plic/terms/synonymsUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/synonymsUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/synonymsUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured synonyms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>list of synonyms elements in a text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_targetAudiences"></a>Term Name  plic:targetAudiences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/targetAudiences">http://rs.tdwg.org/plic/terms/targetAudiences</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/targetAudiences-2021-05-17">http://rs.tdwg.org/plic/terms/version/targetAudiences-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>target audiences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Type of sequence of sequences of zero or more Atomized and Unstructured synonyms, each one with their optional ancillary data.</td>
		</tr>
		<tr>
			<td>Usage</td>
			<td>Biodiversity researchers, teachers and students, decision makers, professionals from another areas and general public.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_taxonRecordName"></a>Term Name  plic:taxonRecordName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/taxonRecordName">http://rs.tdwg.org/plic/terms/taxonRecordName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/taxonRecordName-2021-05-17">http://rs.tdwg.org/plic/terms/version/taxonRecordName-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>taxon recordname</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Complete information about the name of the taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>tsc:ScientificName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.3 Taxonomic Description

Description of Taxon: Brief description, Full description, Identification keys and Ancillary Data<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_FullDescription"></a>Term Name  plic:FullDescription</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/FullDescription">http://rs.tdwg.org/plic/terms/FullDescription</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/FullDescription-2021-05-17">http://rs.tdwg.org/plic/terms/version/FullDescription-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Full Description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Complete and detailed account of the taxonomic and systematic characters, i.e. those that define and allow to recognize an organism.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_IdentificationKeys"></a>Term Name  plic:IdentificationKeys</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/IdentificationKeys">http://rs.tdwg.org/plic/terms/IdentificationKeys</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/IdentificationKeys-2021-05-17">http://rs.tdwg.org/plic/terms/version/IdentificationKeys-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Keys</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Tool for the identification of organisms, comprising a series of steps, each of which represents a question about one or more characters of the organism. Each step offers multiple alternatives, choosing one of them will lead us to the next step until ending, finally, in the name of the organism.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Most printed keys have only two alternatives, so called dichotomous keys. A taxon includes a key or an identification of key in the subordinate taxons. If we are in a register of a genre, this register would include the keys of the species that this register includes, and if itÂ´s one specie, then it would include the key of the infraspecific rank (For plants: subspecies, variety forms)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Keys"></a>Term Name  plic:Keys</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Keys">http://rs.tdwg.org/plic/terms/Keys</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Keys-2021-05-17">http://rs.tdwg.org/plic/terms/version/Keys-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Keys</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Dichotomic or multi-access key.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_briefDescription"></a>Term Name  plic:briefDescription</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/briefDescription">http://rs.tdwg.org/plic/terms/briefDescription</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/briefDescription-2021-05-17">http://rs.tdwg.org/plic/terms/version/briefDescription-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Brief Description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Brief description which reflect only the diagnostic characters, i.e. those that distinguish a taxon from other related or close taxa.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_fullDescriptionAtomized"></a>Term Name  plic:fullDescriptionAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/fullDescriptionAtomized">http://rs.tdwg.org/plic/terms/fullDescriptionAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/fullDescriptionAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/fullDescriptionAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Full Description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>fullDescription element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_fullDescriptionUnstructured"></a>Term Name  plic:fullDescriptionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/fullDescriptionUnstructured">http://rs.tdwg.org/plic/terms/fullDescriptionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/fullDescriptionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/fullDescriptionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Full Description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>fullDescription element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_keys"></a>Term Name  plic:keys</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/keys">http://rs.tdwg.org/plic/terms/keys</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/keys-2021-05-17">http://rs.tdwg.org/plic/terms/version/keys-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Keys</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Dichotomic or multientrance keys.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_taxonomicDescriptionType"></a>Term Name  plic:taxonomicDescriptionType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/taxonomicDescriptionType">http://rs.tdwg.org/plic/terms/taxonomicDescriptionType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/taxonomicDescriptionType-2021-05-17">http://rs.tdwg.org/plic/terms/version/taxonomicDescriptionType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>taxonomic description type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Brief description, Full description, Identification keys and Ancillary Data.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Los "Type" los eliminamos ¿no? (FP)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2000/01/rdf-schema#Class
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_taxonomicDescriptionUnstructured"></a>Term Name  plic:taxonomicDescriptionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/taxonomicDescriptionUnstructured">http://rs.tdwg.org/plic/terms/taxonomicDescriptionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/taxonomicDescriptionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/taxonomicDescriptionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured taxonomic description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>TaxonomicDescription element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_taxonomicalDescription"></a>Term Name  plic:taxonomicalDescription</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/taxonomicalDescription">http://rs.tdwg.org/plic/terms/taxonomicalDescription</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/taxonomicalDescription-2021-05-17">http://rs.tdwg.org/plic/terms/version/taxonomicalDescription-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>taxonomic description</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Description of Taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Description of Taxon: Brief description, Full description, Identification keys and Ancillary Data</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>


### 4.4 Life Form

General appearance. Characteristic mode of growth or occurrence associated to the environment, particularly for plants. Comprising the size, shape, texture and orientation<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_LifeForm"></a>Term Name  plic:LifeForm</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/LifeForm">http://rs.tdwg.org/plic/terms/LifeForm</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/LifeForm-2021-05-17">http://rs.tdwg.org/plic/terms/version/LifeForm-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Form</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>General appearance. Characteristic mode of growth or occurrence associated to its environment, particularly for plants. Comprising its size, shape, texture and orientation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: tree, shrubs, herbs.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>


### 4.5 Life Cycle

Life history of a living organism: The course of developmental changes in an organism from fertilized zygote to maturity or stages through which an organism passes.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_LifeCycle"></a>Term Name  plic:LifeCycle</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/LifeCycle">http://rs.tdwg.org/plic/terms/LifeCycle</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/LifeCycle-2021-05-17">http://rs.tdwg.org/plic/terms/version/LifeCycle-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Life history of a living organism: The course of developmental changes in an organism from fertilized zygote to maturity or stages through which an organism passes.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_lifeCycleAtomized"></a>Term Name  plic:lifeCycleAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/lifeCycleAtomized">http://rs.tdwg.org/plic/terms/lifeCycleAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/lifeCycleAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/lifeCycleAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Life Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>lifeCycle element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_lifeCycleUnstructured"></a>Term Name  plic:lifeCycleUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/lifeCycleUnstructured">http://rs.tdwg.org/plic/terms/lifeCycleUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/lifeCycleUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/lifeCycleUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Life Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>lifeCycle element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_lifeFormAtomized"></a>Term Name  plic:lifeFormAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/lifeFormAtomized">http://rs.tdwg.org/plic/terms/lifeFormAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/lifeFormAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/lifeFormAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Life Form</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>lifeCycleForm element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_lifeFormUnstructured"></a>Term Name  plic:lifeFormUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/lifeFormUnstructured">http://rs.tdwg.org/plic/terms/lifeFormUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/lifeFormUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/lifeFormUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Life Form</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>lifeCycleForm element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.6 Reproduction

All data related to the generation of offspring<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Reproduction"></a>Term Name  plic:Reproduction</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Reproduction">http://rs.tdwg.org/plic/terms/Reproduction</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Reproduction-2021-05-17">http://rs.tdwg.org/plic/terms/version/Reproduction-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>reproduction</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>All data related to the production of offspring.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_reproductionAtomized"></a>Term Name  plic:reproductionAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/reproductionAtomized">http://rs.tdwg.org/plic/terms/reproductionAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/reproductionAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/reproductionAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>atomized reproduction</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Reproduction element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_reproductionUnstructured"></a>Term Name  plic:reproductionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/reproductionUnstructured">http://rs.tdwg.org/plic/terms/reproductionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/reproductionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/reproductionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured reproduction</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Reproduction element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.7 Annual Cycles

Set of changes or events that recurrently take place at the same time of year and are influenced by seasonal and interannual climate variations. For example: reproduction, flowering, fruiting, emergence of insects, etc. Also called phenology, mainly in plants. In the case of migration, it only makes reference to the timing; other data about this are gathered in MigratoryData.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AnnualCycleAtomized"></a>Term Name  plic:AnnualCycleAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AnnualCycleAtomized">http://rs.tdwg.org/plic/terms/AnnualCycleAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AnnualCycleAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/AnnualCycleAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Annual Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>AnnualCycles element in structured format.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AnnualCycleUnstructured"></a>Term Name  plic:AnnualCycleUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AnnualCycleUnstructured">http://rs.tdwg.org/plic/terms/AnnualCycleUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AnnualCycleUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/AnnualCycleUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Annual Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>AnnualCyles element in text block format.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AnnualCycles"></a>Term Name  plic:AnnualCycles</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AnnualCycles">http://rs.tdwg.org/plic/terms/AnnualCycles</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AnnualCycles-2021-05-17">http://rs.tdwg.org/plic/terms/version/AnnualCycles-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Annual Cycle</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Set of changes or events that recurrently take place at the same time of year and are influenced by seasonal and interannual climate variations. Also called phenology, mainly in plants. In the case of migration, it only makes reference to the timing; other data about this are gathered in MigratoryClass.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For example: reproduction, flowering, fruiting, emergence of insects, etc.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_EndTimeInterval "></a>Term Name  plic:EndTimeInterval </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/EndTimeInterval ">http://rs.tdwg.org/plic/terms/EndTimeInterval </a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/EndTimeInterval -2021-05-17">http://rs.tdwg.org/plic/terms/version/EndTimeInterval -2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>End Time Interval</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date-time or interval at which an event ends. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).

A controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>e.g. "1963-03-08T14:07-0600" is 8 Mar 1963 2:07pm in the time zone six hours earlier than UTC, "2009-02-20T08:40Z" is 20 Feb 2009 8:40am UTC, "1809-02-12" is 12 Feb 1809, "1906-06" is Jun 1906, "1971" is just that year, "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z" is the interval between 1 Mar 2007 1pm UTC and 11 May 2008 3:30pm UTC, "2007-11-13/15" is the interval between 13 Nov 2007 and 15 Nov 2007.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Event"></a>Term Name  plic:Event</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Event">http://rs.tdwg.org/plic/terms/Event</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Event-2021-05-17">http://rs.tdwg.org/plic/terms/version/Event-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An action that occurs at some location during some time.

A controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_StartTimeInterval"></a>Term Name  plic:StartTimeInterval</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/StartTimeInterval">http://rs.tdwg.org/plic/terms/StartTimeInterval</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/StartTimeInterval-2021-05-17">http://rs.tdwg.org/plic/terms/version/StartTimeInterval-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Start Time Interval</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date-time or interval at which an event starts. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).

A controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>e.g. "1963-03-08T14:07-0600" is 8 Mar 1963 2:07pm in the time zone six hours earlier than UTC, "2009-02-20T08:40Z" is 20 Feb 2009 8:40am UTC, "1809-02-12" is 12 Feb 1809, "1906-06" is Jun 1906, "1971" is just that year, "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z" is the interval between 1 Mar 2007 1pm UTC and 11 May 2008 3:30pm UTC, "2007-11-13/15" is the interval between 13 Nov 2007 and 15 Nov 2007.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.8 Feeding

Information related to the food supply for the development and sustenance of the individual and/or its offspring<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Feeding"></a>Term Name  plic:Feeding</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Feeding">http://rs.tdwg.org/plic/terms/Feeding</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Feeding-2021-05-17">http://rs.tdwg.org/plic/terms/version/Feeding-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Feeding</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information related to the food supply for the development and sustenance of the individual and/or its offspring.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Strategy"></a>Term Name  plic:Strategy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Strategy">http://rs.tdwg.org/plic/terms/Strategy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Strategy-2021-05-17">http://rs.tdwg.org/plic/terms/version/Strategy-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Trophic Strategy</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Tactic used to obtain energy or nutrients. A controlled vocabulary is 
recommended. e.g. Chemosynthetic organisms,Photosynthetic 
organisms,Parasites,Decomposers,Suspension feeders,Substrate feeders, 
Grazers,Fluid-feeders,Predators...</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_StrategyRemarks"></a>Term Name  plic:StrategyRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/StrategyRemarks">http://rs.tdwg.org/plic/terms/StrategyRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/StrategyRemarks-2021-05-17">http://rs.tdwg.org/plic/terms/version/StrategyRemarks-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Trophic Strategy Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information notes about specific feeding strategies.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_feedingAtomized"></a>Term Name  plic:feedingAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/feedingAtomized">http://rs.tdwg.org/plic/terms/feedingAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/feedingAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/feedingAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Feeding</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>feeding elemento in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_feedingUnstructured"></a>Term Name  plic:feedingUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/feedingUnstructured">http://rs.tdwg.org/plic/terms/feedingUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/feedingUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/feedingUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Feeding</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>feeding element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.9 Dispersal

The permanent spreading of individuals away from each other not including return. Dispersal determines the range over which genetic mixing occurs, and thus, the degree of homogeneity and inbreeding in a population.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Dispersal"></a>Term Name  plic:Dispersal</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Dispersal">http://rs.tdwg.org/plic/terms/Dispersal</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Dispersal-2021-05-17">http://rs.tdwg.org/plic/terms/version/Dispersal-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dispersal</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The permanent spreading of individuals away from each other not including return. Dispersal determines the range over which genetic mixing occurs, and thus, the degree of homogeneity and inbreeding in a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DispersalUnstructured"></a>Term Name  plic:DispersalUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DispersalUnstructured">http://rs.tdwg.org/plic/terms/DispersalUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DispersalUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/DispersalUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Dispersal</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Dispersal element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Distance"></a>Term Name  plic:Distance</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Distance">http://rs.tdwg.org/plic/terms/Distance</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Distance-2021-05-17">http://rs.tdwg.org/plic/terms/version/Distance-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Dispersal distance. e.g. 450 m.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The distance reached by the structured dispersed.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>de tipo MeasurementOrFactClass
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Purpose"></a>Term Name  plic:Purpose</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Purpose">http://rs.tdwg.org/plic/terms/Purpose</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Purpose-2021-05-17">http://rs.tdwg.org/plic/terms/version/Purpose-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Purpose</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Makes reference to any data being measured.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>De tipo MeasurementOrFactClass</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_StructureDispersed"></a>Term Name  plic:StructureDispersed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/StructureDispersed">http://rs.tdwg.org/plic/terms/StructureDispersed</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/StructureDispersed-2021-05-17">http://rs.tdwg.org/plic/terms/version/StructureDispersed-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Structure Dispersed </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>VCR: Seed, Fruit, Vegetative structure, Spores, Gametes, Eggs, Offspring and Individuals.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Structured that is dispersed for a given biologial propuse, a controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Type"></a>Term Name  plic:Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Type">http://rs.tdwg.org/plic/terms/Type</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Type-2021-05-17">http://rs.tdwg.org/plic/terms/version/Type-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>VCR. Zoochory, Anemochory, Hydrochory, Barochory, Autochory.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Type of dispersal, a controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Type"></a>Term Name  plic:Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Type">http://rs.tdwg.org/plic/terms/Type</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Type-2021-05-17">http://rs.tdwg.org/plic/terms/version/Type-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Primary diet source. A controlled vocabulary is recommended.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.10 Behavior

Responses, reactions or movements made by an organism in a particular situation<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Behavior"></a>Term Name  plic:Behavior</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Behavior">http://rs.tdwg.org/plic/terms/Behavior</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Behavior-2021-05-17">http://rs.tdwg.org/plic/terms/version/Behavior-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Behavior</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Responses, reactions or movements made by an organism in a particular situation.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_behaviorAtomized"></a>Term Name  plic:behaviorAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/behaviorAtomized">http://rs.tdwg.org/plic/terms/behaviorAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/behaviorAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/behaviorAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Behavior</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Responses, reactions or movements made by an organism in a particular situation.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_behaviorUnstructured"></a>Term Name  plic:behaviorUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/behaviorUnstructured">http://rs.tdwg.org/plic/terms/behaviorUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/behaviorUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/behaviorUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Behavior</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Responses, reactions or movements made by an organism in a particular situation.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.11 Interactions

Mutual or reciprocal actions or influences. For example, predation, parasitism, mutualism, etc. Relations with products grown and stored by man (plagues) are also included.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_InteractionSpeciesType"></a>Term Name  plic:InteractionSpeciesType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/InteractionSpeciesType">http://rs.tdwg.org/plic/terms/InteractionSpeciesType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/InteractionSpeciesType-2021-05-17">http://rs.tdwg.org/plic/terms/version/InteractionSpeciesType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Species Interaction Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>String with the type of interaction. Each element is seperated by comma and each list of elements by.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Interactions"></a>Term Name  plic:Interactions</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Interactions">http://rs.tdwg.org/plic/terms/Interactions</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Interactions-2021-05-17">http://rs.tdwg.org/plic/terms/version/Interactions-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Interactions</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Mutual or reciprocal actions or influences. Relations with products grown and stored by man (plagues) are also included.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For example, predation, parasitism, mutualism, etc.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SpeciesInteraction"></a>Term Name  plic:SpeciesInteraction</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SpeciesInteraction">http://rs.tdwg.org/plic/terms/SpeciesInteraction</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SpeciesInteraction-2021-05-17">http://rs.tdwg.org/plic/terms/version/SpeciesInteraction-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Species Interaction </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information category concerning relations between resources (instances or records, such as Occurrences, Taxa, Locations, Events,...).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_interactionAtomized"></a>Term Name  plic:interactionAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/interactionAtomized">http://rs.tdwg.org/plic/terms/interactionAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/interactionAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/interactionAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Interaction</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>interaction element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_interactionUnstructured"></a>Term Name  plic:interactionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/interactionUnstructured">http://rs.tdwg.org/plic/terms/interactionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/interactionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/interactionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Interaction</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>interaction element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.12 Molecular Data

Information on the chemical structures and biological processes at the molecular level: DNA and proteins sequences, protein structures, expression profiles of genes protein domains, families of genes, mutations, polymorphisms, involvement in disease, ... Placeholder for connecting with standards developed by specialists, e.g. Standards for Data Exchange and Management from Scalalife (http://www.scalalife.eu/content/data.html).<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MolecularData"></a>Term Name  plic:MolecularData</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MolecularData">http://rs.tdwg.org/plic/terms/MolecularData</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MolecularData-2021-05-17">http://rs.tdwg.org/plic/terms/version/MolecularData-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>molecular data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on the chemical structures and biological processes at the molecular level: DNA and proteins sequences, protein structures, expression profiles of genes protein domains, families of genes, mutations, polymorphisms, involvement in disease, ...</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Undeveloped. Placeholder for connecting with standards developed by specialists. For example, Standards for Data Exchange and Management from Scalalife (<a href="http://www.scalalife.eu/content/data">http://www.scalalife.eu/content/data</a>)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MolecularDataAtomized"></a>Term Name  plic:MolecularDataAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MolecularDataAtomized">http://rs.tdwg.org/plic/terms/MolecularDataAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MolecularDataAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/MolecularDataAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>atomized molecular data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>MolecularData element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MolecularDataUnstructured"></a>Term Name  plic:MolecularDataUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MolecularDataUnstructured">http://rs.tdwg.org/plic/terms/MolecularDataUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MolecularDataUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/MolecularDataUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured molecular data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>MolecularData as a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_RelatedTo"></a>Term Name  plic:RelatedTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/RelatedTo">http://rs.tdwg.org/plic/terms/RelatedTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/RelatedTo-2021-05-17">http://rs.tdwg.org/plic/terms/version/RelatedTo-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>RelatedTo</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Specifies to which PlinianCore term the information contained under MolecularDataAtomized refers to. The controlled vocabulary is list of content-bearing PlinianCore elements.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.13 Migratory

The regular, usually seasonal, movement of all or part of an animal population to and from a given area, which can occur in variable periods of time and even involve more than one generation.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Causes"></a>Term Name  plic:Causes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Causes">http://rs.tdwg.org/plic/terms/Causes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Causes-2021-05-17">http://rs.tdwg.org/plic/terms/version/Causes-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Causes</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Reasons for the species to move from one place to another in a specific lap.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Migratory"></a>Term Name  plic:Migratory</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Migratory">http://rs.tdwg.org/plic/terms/Migratory</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Migratory-2021-05-17">http://rs.tdwg.org/plic/terms/version/Migratory-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>migratory</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The regular, usually seasonal, movement of all or part of an animal population of and from a given area, which can occur in variable periods of time and even involve more than one generation.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MigratoryAtomized"></a>Term Name  plic:MigratoryAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MigratoryAtomized">http://rs.tdwg.org/plic/terms/MigratoryAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MigratoryAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/MigratoryAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>atomized migratory</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The regular, usually seasonal, movement of all or part of an animal population to and from a given area, which can occur in variable periods of time and even involve more than one generation broken down in specific elements. </td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Patterns"></a>Term Name  plic:Patterns</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Patterns">http://rs.tdwg.org/plic/terms/Patterns</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Patterns-2021-05-17">http://rs.tdwg.org/plic/terms/version/Patterns-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Patterns</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Displacement of the species in space.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Routes"></a>Term Name  plic:Routes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Routes">http://rs.tdwg.org/plic/terms/Routes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Routes-2021-05-17">http://rs.tdwg.org/plic/terms/version/Routes-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Routes</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Trajectory followed by the species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Season"></a>Term Name  plic:Season</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Season">http://rs.tdwg.org/plic/terms/Season</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Season-2021-05-17">http://rs.tdwg.org/plic/terms/version/Season-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Season</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Time of year in which a species migrates.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_migratoryUnstructured"></a>Term Name  plic:migratoryUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/migratoryUnstructured">http://rs.tdwg.org/plic/terms/migratoryUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/migratoryUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/migratoryUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured migratory</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The regular, usually seasonal, movement of all or part of an animal population to and from a given area, which can occur in variable periods of time and even involve more than one generation as text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.14 Ecological Significance

Ecological importance of the taxon<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_EcologicalSignificance"></a>Term Name  plic:EcologicalSignificance</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/EcologicalSignificance">http://rs.tdwg.org/plic/terms/EcologicalSignificance</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/EcologicalSignificance-2021-05-17">http://rs.tdwg.org/plic/terms/version/EcologicalSignificance-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Ecological Significance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ecological importance of the taxon. (Placeholder).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ecologicalSignificanceAtomized"></a>Term Name  plic:ecologicalSignificanceAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ecologicalSignificanceAtomized">http://rs.tdwg.org/plic/terms/ecologicalSignificanceAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ecologicalSignificanceAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/ecologicalSignificanceAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Ecological Significance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ecological Significance element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ecologicalSignificanceUnstructured"></a>Term Name  plic:ecologicalSignificanceUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ecologicalSignificanceUnstructured">http://rs.tdwg.org/plic/terms/ecologicalSignificanceUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ecologicalSignificanceUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/ecologicalSignificanceUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Ecological Significance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ecological Significance element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.15 Misc Details

Miscellaneous: notes attached to the natural history information of the taxon
### 4.16 Environmental Envelope

Set of environmental conditions within which it is believed that the species can persist; i.e. where its environmental requirements can be satisfied.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_EnvironmentalEnvelope"></a>Term Name  plic:EnvironmentalEnvelope</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/EnvironmentalEnvelope">http://rs.tdwg.org/plic/terms/EnvironmentalEnvelope</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/EnvironmentalEnvelope-2021-05-17">http://rs.tdwg.org/plic/terms/version/EnvironmentalEnvelope-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Environmental Envelope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Set of environmental conditions within which it is believed that the species can persist; that is, where its environmental requirements can be satisfied.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_environmentalEnvelopeAtomized"></a>Term Name  plic:environmentalEnvelopeAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/environmentalEnvelopeAtomized">http://rs.tdwg.org/plic/terms/environmentalEnvelopeAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/environmentalEnvelopeAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/environmentalEnvelopeAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Environmental Envelope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Environmental envelope of a species expressed as an enumeration of measures and parameters.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_environmentalEnvelopeUnstructured"></a>Term Name  plic:environmentalEnvelopeUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/environmentalEnvelopeUnstructured">http://rs.tdwg.org/plic/terms/environmentalEnvelopeUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/environmentalEnvelopeUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/environmentalEnvelopeUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Environmental Envelope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>environmentalEnvelopeas a a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.17 Natural History Unstructured

NaturalHistory element in text block format
### 4.18 Invasiveness

Information about invasive exotic species that could threaten ecosystems, habitats and species<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Invasiveness"></a>Term Name  plic:Invasiveness</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Invasiveness">http://rs.tdwg.org/plic/terms/Invasiveness</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Invasiveness-2021-05-17">http://rs.tdwg.org/plic/terms/version/Invasiveness-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Invasiveness</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about invasive exotic species that could threaten to ecosystem, habitats and species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Route"></a>Term Name  plic:Route</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Route">http://rs.tdwg.org/plic/terms/Route</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Route-2021-05-17">http://rs.tdwg.org/plic/terms/version/Route-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Route</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>This is equivalent and probably replaceable by gisin:route.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_WhatImpact"></a>Term Name  plic:WhatImpact</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/WhatImpact">http://rs.tdwg.org/plic/terms/WhatImpact</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/WhatImpact-2021-05-17">http://rs.tdwg.org/plic/terms/version/WhatImpact-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>What Impact</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An indication of the actual impact as a free text string. e.g. destroys 
riparian vegetation, destroys irrigation systems, displaces Arvicola 
sapidus.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_abundance"></a>Term Name  plic:abundance</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/abundance">http://rs.tdwg.org/plic/terms/abundance</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/abundance-2021-05-17">http://rs.tdwg.org/plic/terms/version/abundance-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Abundance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Dominant, Common, Rare, Zero, Unknown, Monoculture.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_citation"></a>Term Name  plic:citation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/citation">http://rs.tdwg.org/plic/terms/citation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/citation-2021-05-17">http://rs.tdwg.org/plic/terms/version/citation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Citation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Publication date of the current version.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_countryCode"></a>Term Name  plic:countryCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/countryCode">http://rs.tdwg.org/plic/terms/countryCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/countryCode-2021-05-17">http://rs.tdwg.org/plic/terms/version/countryCode-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The standard code for the country in which the Location occurs. Recommended best practice is to use ISO 3166-1-alpha-2 country codes.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_county"></a>Term Name  plic:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/county">http://rs.tdwg.org/plic/terms/county</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/county-2021-05-17">http://rs.tdwg.org/plic/terms/version/county-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>County</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region 
than stateProvince (county, shire, department, etc.) in which the 
Location occurs.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_distribution"></a>Term Name  plic:distribution</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/distribution">http://rs.tdwg.org/plic/terms/distribution</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/distribution-2021-05-17">http://rs.tdwg.org/plic/terms/version/distribution-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Widespread, Moderate, Localized, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_endValidDate"></a>Term Name  plic:endValidDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/endValidDate">http://rs.tdwg.org/plic/terms/endValidDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/endValidDate-2021-05-17">http://rs.tdwg.org/plic/terms/version/endValidDate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>End Valid Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The StartValidDate and EndValidDate represent the range of when a "status" data Model is valid. Data providers should return an empty element for the EndValidDate if the status is still current.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From GISIN: SpeciesStatus. <a href="http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1">http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_harmful"></a>Term Name  plic:harmful</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/harmful">http://rs.tdwg.org/plic/terms/harmful</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/harmful-2021-05-17">http://rs.tdwg.org/plic/terms/version/harmful-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Harmful</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Yes, No, Potentially, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_impactMechanism"></a>Term Name  plic:impactMechanism</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/impactMechanism">http://rs.tdwg.org/plic/terms/impactMechanism</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/impactMechanism-2021-05-17">http://rs.tdwg.org/plic/terms/version/impactMechanism-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Impact Mechanism</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Mechanism of introduction or impact to a new location.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_impactTarget"></a>Term Name  plic:impactTarget</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/impactTarget">http://rs.tdwg.org/plic/terms/impactTarget</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/impactTarget-2021-05-17">http://rs.tdwg.org/plic/terms/version/impactTarget-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Impact Target</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>This is equivalent and probably replaceable by gisin:impactTarget.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_invasivenessAtomized"></a>Term Name  plic:invasivenessAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/invasivenessAtomized">http://rs.tdwg.org/plic/terms/invasivenessAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/invasivenessAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/invasivenessAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Invasiveness</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>invasiveness element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_invasivenessUnstructured"></a>Term Name  plic:invasivenessUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/invasivenessUnstructured">http://rs.tdwg.org/plic/terms/invasivenessUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/invasivenessUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/invasivenessUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Invasiveness</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>invasiveness element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_language"></a>Term Name  plic:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/language">http://rs.tdwg.org/plic/terms/language</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/language-2021-05-17">http://rs.tdwg.org/plic/terms/version/language-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Language</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Language used to write the species information, use ISO 639-2 vocabulary.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_localityName"></a>Term Name  plic:localityName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/localityName">http://rs.tdwg.org/plic/terms/localityName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/localityName-2021-05-17">http://rs.tdwg.org/plic/terms/version/localityName-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Locality Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Protocol Specification on Locations.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_localityType"></a>Term Name  plic:localityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/localityType">http://rs.tdwg.org/plic/terms/localityType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/localityType-2021-05-17">http://rs.tdwg.org/plic/terms/version/localityType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Locality Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Term borroewed from GISIN. An indication of the scope of the place referred under LocalityName. </td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_memo"></a>Term Name  plic:memo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/memo">http://rs.tdwg.org/plic/terms/memo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/memo-2021-05-17">http://rs.tdwg.org/plic/terms/version/memo-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Memo</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A GISIN term, part of its "SpeciesStaus" protocol , defined as  "An unsearchable field for providers to add anything else they think is important"</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_modified"></a>Term Name  plic:modified</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/modified">http://rs.tdwg.org/plic/terms/modified</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/modified-2021-05-17">http://rs.tdwg.org/plic/terms/version/modified-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Modified</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The Modified is the last date that the record was changed.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From GISIN: SpeciesStatus. <a href="http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1">http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_origin"></a>Term Name  plic:origin</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/origin">http://rs.tdwg.org/plic/terms/origin</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/origin-2021-05-17">http://rs.tdwg.org/plic/terms/version/origin-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Origin</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Indigenous, Exotic, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_persistence"></a>Term Name  plic:persistence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/persistence">http://rs.tdwg.org/plic/terms/persistence</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/persistence-2021-05-17">http://rs.tdwg.org/plic/terms/version/persistence-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Persistence</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Persistent, Temporary, Transient, DiedOut, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_presence"></a>Term Name  plic:presence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/presence">http://rs.tdwg.org/plic/terms/presence</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/presence-2021-05-17">http://rs.tdwg.org/plic/terms/version/presence-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Presence </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Absent, SometimesPresent, Present, Unknown, Reported.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_publicationDate"></a>Term Name  plic:publicationDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/publicationDate">http://rs.tdwg.org/plic/terms/publicationDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/publicationDate-2021-05-17">http://rs.tdwg.org/plic/terms/version/publicationDate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Publication Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Publication date of the current version.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From GISIN: SpeciesStatus. <a href="http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1">http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_rateOfSpread"></a>Term Name  plic:rateOfSpread</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/rateOfSpread">http://rs.tdwg.org/plic/terms/rateOfSpread</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/rateOfSpread-2021-05-17">http://rs.tdwg.org/plic/terms/version/rateOfSpread-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Rate of Spread</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Rapid, Moderate, Slow, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_regulatoryListing"></a>Term Name  plic:regulatoryListing</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/regulatoryListing">http://rs.tdwg.org/plic/terms/regulatoryListing</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/regulatoryListing-2021-05-17">http://rs.tdwg.org/plic/terms/version/regulatoryListing-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Regulatory Listing</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Prohibited, Restricted, NotConsidered, Unknown.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_startValidDate"></a>Term Name  plic:startValidDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/startValidDate">http://rs.tdwg.org/plic/terms/startValidDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/startValidDate-2021-05-17">http://rs.tdwg.org/plic/terms/version/startValidDate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Start Valid Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The StartValidDate and EndValidDate represent the range of when a "status" data Model is valid. Data providers should return an empty element for the EndValidDate if the status is still current.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From GISIN: SpeciesStatus. <a href="http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1">http://www.gisin.org/cwis438/websites/GISINDirectory/Tech/ProtocolSpecification.php#4.4.1.1</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_stateProvince"></a>Term Name  plic:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/stateProvince">http://rs.tdwg.org/plic/terms/stateProvince</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/stateProvince-2021-05-17">http://rs.tdwg.org/plic/terms/version/stateProvince-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>State Province</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, 
province, canton, department, region, etc.) in which the Location 
occurs.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_trend"></a>Term Name  plic:trend</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/trend">http://rs.tdwg.org/plic/terms/trend</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/trend-2021-05-17">http://rs.tdwg.org/plic/terms/version/trend-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Trend</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Controlled vocabulary: Stable, Declining, Unknown, Expanding.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_vector"></a>Term Name  plic:vector</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/vector">http://rs.tdwg.org/plic/terms/vector</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/vector-2021-05-17">http://rs.tdwg.org/plic/terms/version/vector-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vector</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>By which means a species occupies a new territory. e.g. fishing boats; dirty boots, cars (Aedes albopictus).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.19 Habitat And Distribution

Habitat and Distribution of the species<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Distribution"></a>Term Name  plic:Distribution</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Distribution">http://rs.tdwg.org/plic/terms/Distribution</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Distribution-2021-05-17">http://rs.tdwg.org/plic/terms/version/Distribution-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Species geographical distribution.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DistributionAtomized"></a>Term Name  plic:DistributionAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DistributionAtomized">http://rs.tdwg.org/plic/terms/DistributionAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DistributionAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/DistributionAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Distribution element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DistributionScope"></a>Term Name  plic:DistributionScope</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DistributionScope">http://rs.tdwg.org/plic/terms/DistributionScope</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DistributionScope-2021-05-17">http://rs.tdwg.org/plic/terms/version/DistributionScope-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distribution Scope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>List of regions structured and categorized.</td>
		</tr>
		<tr>
			<td>Usage</td>
			<td>
</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A controlled vocabulary is recommended.
e.g. Historical, Current, Restricted and Wide.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2000/01/rdf-schema#Class


</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DistributionScopeType"></a>Term Name  plic:DistributionScopeType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DistributionScopeType">http://rs.tdwg.org/plic/terms/DistributionScopeType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DistributionScopeType-2021-05-17">http://rs.tdwg.org/plic/terms/version/DistributionScopeType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distribution Scope Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Categorization of scope qualifying the distribution presented in time (e.g. "prior 1900", "current", "projected", "winter"), in space (e.g. "in the Canary Islands", "Boreal"), by biological activity (e.g., "foraging distribution", "reproductive area"), or any other criteria . A controled vocabulary is recommended. 
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2000/01/rdf-schema#Class

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DistributionType"></a>Term Name  plic:DistributionType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DistributionType">http://rs.tdwg.org/plic/terms/DistributionType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DistributionType-2021-05-17">http://rs.tdwg.org/plic/terms/version/DistributionType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Distribution Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the distribution of the species based on the studied specimens collection sites data.

</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2000/01/rdf-schema#Class
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DistributionUnstructured"></a>Term Name  plic:DistributionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DistributionUnstructured">http://rs.tdwg.org/plic/terms/DistributionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DistributionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/DistributionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Distribution element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Endemic"></a>Term Name  plic:Endemic</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Endemic">http://rs.tdwg.org/plic/terms/Endemic</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Endemic-2021-05-17">http://rs.tdwg.org/plic/terms/version/Endemic-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Endemic</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ecological importance of the taxon. (Placeholder).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_EndemicIn"></a>Term Name  plic:EndemicIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/EndemicIn">http://rs.tdwg.org/plic/terms/EndemicIn</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/EndemicIn-2021-05-17">http://rs.tdwg.org/plic/terms/version/EndemicIn-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Endemic In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The area that works as a context for specifying endemic areas of a species. A controlled vocabulary is recommended. The term may go from local to above-country levels.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>If not specified, the Earth as a whole is assumed as the geographical context. Examples:  Vicuña (Vicugna vicugna Molina, 1782) endemic to the Andean region **in South America**. Manzanilla Real (Artemisia granatensis Boiss.) endemic in the peaks of Sierra Nevada (**in Spain**).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_EndemicTo"></a>Term Name  plic:EndemicTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/EndemicTo">http://rs.tdwg.org/plic/terms/EndemicTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/EndemicTo-2021-05-17">http://rs.tdwg.org/plic/terms/version/EndemicTo-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Endemic To</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A territory in which an endemic species appear. A controlled vocabulary is recommended. The term may go from local to above-country levels.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: Giant panda (Ailuropoda melanoleuca (David, 1869) endemic to China. Quetzal Resplendent (Pharomachrus mocinno de la Llave, 1832) endemic to Mexico, Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica and Panama.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_GeographicEntity"></a>Term Name  plic:GeographicEntity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/GeographicEntity">http://rs.tdwg.org/plic/terms/GeographicEntity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/GeographicEntity-2021-05-17">http://rs.tdwg.org/plic/terms/version/GeographicEntity-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geographic Entity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Name of the geographic entity. </td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A controlled vocabulary --as specified in the Catalogue element-- is recommended.
e.g. Spain; Aguascalientas; Alabama; Ambon</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property
</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_HabitatAndDistribution"></a>Term Name  plic:HabitatAndDistribution</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/HabitatAndDistribution">http://rs.tdwg.org/plic/terms/HabitatAndDistribution</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/HabitatAndDistribution-2021-05-17">http://rs.tdwg.org/plic/terms/version/HabitatAndDistribution-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitat And Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Distribution of the species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Habitats"></a>Term Name  plic:Habitats</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Habitats">http://rs.tdwg.org/plic/terms/Habitats</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Habitats-2021-05-17">http://rs.tdwg.org/plic/terms/version/Habitats-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitats</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>General description of the sites where the species is found (ecosystem, environment or microhabitat).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_country"></a>Term Name  plic:country</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/country">http://rs.tdwg.org/plic/terms/country</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/country-2021-05-17">http://rs.tdwg.org/plic/terms/version/country-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the country or major administrative unit in which the Location occurs.
</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>It is recommended to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_county"></a>Term Name  plic:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/county">http://rs.tdwg.org/plic/terms/county</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/county-2021-05-17">http://rs.tdwg.org/plic/terms/version/county-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>County</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_endemicAtomized"></a>Term Name  plic:endemicAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/endemicAtomized">http://rs.tdwg.org/plic/terms/endemicAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/endemicAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/endemicAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Endemic</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>List of areas structured and categorized by territories in which the endemic species appears (EndemicTo) in relation to a wider area (EndemicIn) given as geographical context.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_endemicUnstructured"></a>Term Name  plic:endemicUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/endemicUnstructured">http://rs.tdwg.org/plic/terms/endemicUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/endemicUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/endemicUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Endemic</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on the endemicity of a species as a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_geographicEntity
"></a>Term Name  plic:geographicEntity
</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/geographicEntity
">http://rs.tdwg.org/plic/terms/geographicEntity
</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/geographicEntity
-2021-05-17">http://rs.tdwg.org/plic/terms/version/geographicEntity
-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geographic Entity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>
Name of the geographic entity. A controlled vocabulary --as specified in the Catalogue element-- is recommended.
</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>
e.g. Spain; Aguascalientas; Alabama; Ambon
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_habitatAndDistributionUnstructured"></a>Term Name  plic:habitatAndDistributionUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/habitatAndDistributionUnstructured">http://rs.tdwg.org/plic/terms/habitatAndDistributionUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/habitatAndDistributionUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/habitatAndDistributionUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Habitat And Distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>habitatAndDistribution element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_habitatAtomized"></a>Term Name  plic:habitatAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/habitatAtomized">http://rs.tdwg.org/plic/terms/habitatAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/habitatAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/habitatAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Habitat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>habitatAndDistribution element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_habitatUnstructured"></a>Term Name  plic:habitatUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/habitatUnstructured">http://rs.tdwg.org/plic/terms/habitatUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/habitatUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/habitatUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Habitat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>habitat element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_locality"></a>Term Name  plic:locality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/locality">http://rs.tdwg.org/plic/terms/locality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/locality-2021-05-17">http://rs.tdwg.org/plic/terms/version/locality-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Locality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific description of the place. Less specific geographic information can be provided in other geographic terms (higherGeography, continent, country, stateProvince, county, municipality, waterBody, island, islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_municipality"></a>Term Name  plic:municipality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/municipality">http://rs.tdwg.org/plic/terms/municipality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/municipality-2021-05-17">http://rs.tdwg.org/plic/terms/version/municipality-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Municipality </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the Location occurs. Do not use this term for a nearby named place that does not contain the actual location.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_stateProvince"></a>Term Name  plic:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/stateProvince">http://rs.tdwg.org/plic/terms/stateProvince</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/stateProvince-2021-05-17">http://rs.tdwg.org/plic/terms/version/stateProvince-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>State Province </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/1999/02/22-rdf-syntax-ns#Property

</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_temporalCoverage"></a>Term Name  plic:temporalCoverage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/temporalCoverage">http://rs.tdwg.org/plic/terms/temporalCoverage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/temporalCoverage-2021-05-17">http://rs.tdwg.org/plic/terms/version/temporalCoverage-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Temporal Coverage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>This field specifies temporal coverage of the distribution, and allows coverages to be a single point in time, multiple points in time, or a range of dates.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.20 Demography And Threat

Information concerning the demographic aspects of the species: Territory, Population Biology, Threat Status, Direct Threats, Legislation and Ancillary Data<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AbundanceData"></a>Term Name  plic:AbundanceData</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AbundanceData">http://rs.tdwg.org/plic/terms/AbundanceData</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AbundanceData-2021-05-17">http://rs.tdwg.org/plic/terms/version/AbundanceData-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>AbundanceData</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The relative representation of a species population in relation to other species or multiple species in a particular territory.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AppliesTo"></a>Term Name  plic:AppliesTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AppliesTo">http://rs.tdwg.org/plic/terms/AppliesTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AppliesTo-2021-05-17">http://rs.tdwg.org/plic/terms/version/AppliesTo-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Applies to</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Location where the status is used.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AppliesTo"></a>Term Name  plic:AppliesTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AppliesTo">http://rs.tdwg.org/plic/terms/AppliesTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AppliesTo-2021-05-17">http://rs.tdwg.org/plic/terms/version/AppliesTo-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Applies to</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Location where the status is used.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AreaOfOccupancy"></a>Term Name  plic:AreaOfOccupancy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AreaOfOccupancy">http://rs.tdwg.org/plic/terms/AreaOfOccupancy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AreaOfOccupancy-2021-05-17">http://rs.tdwg.org/plic/terms/version/AreaOfOccupancy-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Area of occupancy</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Area within its 'extent of occurrence' (see EOO) which is occupied by a taxon, excluding cases of vagrancy. The measure reflects the fact that a taxon will not usually occur throughout the area of its extent of occurrence, which may contain unsuitable or unoccupied habitats.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Authority"></a>Term Name  plic:Authority</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Authority">http://rs.tdwg.org/plic/terms/Authority</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Authority-2021-05-17">http://rs.tdwg.org/plic/terms/version/Authority-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Authority</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Organism or institution that assess the status.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AverageDensity"></a>Term Name  plic:AverageDensity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AverageDensity">http://rs.tdwg.org/plic/terms/AverageDensity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AverageDensity-2021-05-17">http://rs.tdwg.org/plic/terms/version/AverageDensity-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Average density</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Average of the densities obtained for a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_BirthRate"></a>Term Name  plic:BirthRate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/BirthRate">http://rs.tdwg.org/plic/terms/BirthRate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/BirthRate-2021-05-17">http://rs.tdwg.org/plic/terms/version/BirthRate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Birth rate</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ratio of births to the total number of individuals in a population in a time period.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_CarryingCapacity"></a>Term Name  plic:CarryingCapacity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/CarryingCapacity">http://rs.tdwg.org/plic/terms/CarryingCapacity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/CarryingCapacity-2021-05-17">http://rs.tdwg.org/plic/terms/version/CarryingCapacity-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Carrying capacity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Maximum population density possible as limited by the resources available for the population in the absence of predators and parasites.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DensityData"></a>Term Name  plic:DensityData</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DensityData">http://rs.tdwg.org/plic/terms/DensityData</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DensityData-2021-05-17">http://rs.tdwg.org/plic/terms/version/DensityData-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>DensityData</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Population size in relation to a defined space unit.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DescriptionLifeStages"></a>Term Name  plic:DescriptionLifeStages</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DescriptionLifeStages">http://rs.tdwg.org/plic/terms/DescriptionLifeStages</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DescriptionLifeStages-2021-05-17">http://rs.tdwg.org/plic/terms/version/DescriptionLifeStages-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Description life stages</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Sex/age categories or life stages of a species; can be size in the case of plants.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DirectThreatAtomized"></a>Term Name  plic:DirectThreatAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DirectThreatAtomized">http://rs.tdwg.org/plic/terms/DirectThreatAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DirectThreatAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/DirectThreatAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Direct Threat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>directThreats element in structured format.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DirectThreats"></a>Term Name  plic:DirectThreats</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DirectThreats">http://rs.tdwg.org/plic/terms/DirectThreats</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DirectThreats-2021-05-17">http://rs.tdwg.org/plic/terms/version/DirectThreats-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Direct Threats</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Direct threats are the proximate human activities or processes that have caused, are causing, or may cause the destruction, degradation, and/or impairment of biodiversity targets. Direct threats are synonymous with sources of stress and proximate pressures.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: unsustainable fishing or logging. Threats can be past (historical), ongoing, and/or likely to occur in the future.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_DispersalAtomized"></a>Term Name  plic:DispersalAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/DispersalAtomized">http://rs.tdwg.org/plic/terms/DispersalAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/DispersalAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/DispersalAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Dispersal</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Dispersal element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Emigration"></a>Term Name  plic:Emigration</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Emigration">http://rs.tdwg.org/plic/terms/Emigration</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Emigration-2021-05-17">http://rs.tdwg.org/plic/terms/version/Emigration-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Emigration</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on  individuals leaving a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ExtentOfOccurrence"></a>Term Name  plic:ExtentOfOccurrence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ExtentOfOccurrence">http://rs.tdwg.org/plic/terms/ExtentOfOccurrence</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ExtentOfOccurrence-2021-05-17">http://rs.tdwg.org/plic/terms/version/ExtentOfOccurrence-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Extent of occurrence</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Area contained within the shortest continuous imaginary boundary which can be drawn to encompass all the known, inferred or projected sites of present occurrence of a taxon, excluding cases of vagrancy.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Fecundity"></a>Term Name  plic:Fecundity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Fecundity">http://rs.tdwg.org/plic/terms/Fecundity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Fecundity-2021-05-17">http://rs.tdwg.org/plic/terms/version/Fecundity-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Fecundity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>In the context of a population, is the combined maximum potential of its individuals to produce offspring.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Immigration"></a>Term Name  plic:Immigration</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Immigration">http://rs.tdwg.org/plic/terms/Immigration</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Immigration-2021-05-17">http://rs.tdwg.org/plic/terms/version/Immigration-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Immigration</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on individuals entering a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Legislation"></a>Term Name  plic:Legislation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Legislation">http://rs.tdwg.org/plic/terms/Legislation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Legislation-2021-05-17">http://rs.tdwg.org/plic/terms/version/Legislation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Legislation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A national proposed law or group of laws. A regional proposed law or group of laws.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_LegislationName"></a>Term Name  plic:LegislationName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/LegislationName">http://rs.tdwg.org/plic/terms/LegislationName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/LegislationName-2021-05-17">http://rs.tdwg.org/plic/terms/version/LegislationName-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Legislation Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Word or phrase to designate the law or group of laws.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_LegislationRead"></a>Term Name  plic:LegislationRead</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/LegislationRead">http://rs.tdwg.org/plic/terms/LegislationRead</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/LegislationRead-2021-05-17">http://rs.tdwg.org/plic/terms/version/LegislationRead-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Legislation Read</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The oficial document in which the user can read the legislation.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_LegislationType"></a>Term Name  plic:LegislationType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/LegislationType">http://rs.tdwg.org/plic/terms/LegislationType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/LegislationType-2021-05-17">http://rs.tdwg.org/plic/terms/version/LegislationType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Legislation Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>National and/or regional law or group of laws.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MortalityRate"></a>Term Name  plic:MortalityRate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MortalityRate">http://rs.tdwg.org/plic/terms/MortalityRate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MortalityRate-2021-05-17">http://rs.tdwg.org/plic/terms/version/MortalityRate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Mortality rate</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Probability of dying; the ratio between the number of deaths in a given time interval to the number of subjects alive at the start of this interval.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Norm"></a>Term Name  plic:Norm</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Norm">http://rs.tdwg.org/plic/terms/Norm</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Norm-2021-05-17">http://rs.tdwg.org/plic/terms/version/Norm-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Norm</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Norms are general legal principles that are widely accepted. This acceptance is evidenced in a number of ways, such as international agreements, national legislation, domestic and international judicial decisions, and scholarly writings.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_NumberIndividualsPerObservation"></a>Term Name  plic:NumberIndividualsPerObservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/NumberIndividualsPerObservation">http://rs.tdwg.org/plic/terms/NumberIndividualsPerObservation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/NumberIndividualsPerObservation-2021-05-17">http://rs.tdwg.org/plic/terms/version/NumberIndividualsPerObservation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Number individuals per observation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Mean number of individuals per observation event or unit.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PatternDistribution"></a>Term Name  plic:PatternDistribution</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PatternDistribution">http://rs.tdwg.org/plic/terms/PatternDistribution</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PatternDistribution-2021-05-17">http://rs.tdwg.org/plic/terms/version/PatternDistribution-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Pattern distribution</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The spatial arrangement of the individuals of a population in the territory it occupies.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PopulationBiology"></a>Term Name  plic:PopulationBiology</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PopulationBiology">http://rs.tdwg.org/plic/terms/PopulationBiology</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PopulationBiology-2021-05-17">http://rs.tdwg.org/plic/terms/version/PopulationBiology-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>population biology</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Description of the variations in time and space, as well as in the size and density of populations, and the factors that cause such variations.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PopulationBiologyAtomized"></a>Term Name  plic:PopulationBiologyAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PopulationBiologyAtomized">http://rs.tdwg.org/plic/terms/PopulationBiologyAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PopulationBiologyAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/PopulationBiologyAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>atomized population biology</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Population biology data in structured form.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PopulationGrowthRate"></a>Term Name  plic:PopulationGrowthRate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PopulationGrowthRate">http://rs.tdwg.org/plic/terms/PopulationGrowthRate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PopulationGrowthRate-2021-05-17">http://rs.tdwg.org/plic/terms/version/PopulationGrowthRate-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Population growth rate</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Growth rate of a population in a given time period, based on births, deaths, emigration and immigration.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PopulationTrend"></a>Term Name  plic:PopulationTrend</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PopulationTrend">http://rs.tdwg.org/plic/terms/PopulationTrend</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PopulationTrend-2021-05-17">http://rs.tdwg.org/plic/terms/version/PopulationTrend-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Population trend</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Changes of a population over time and can include changes in  distribution, biogeography (e.g., size of population), life-history (e.g., birth and death rates), etc.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ProportionIndividualsPerStageLife"></a>Term Name  plic:ProportionIndividualsPerStageLife</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ProportionIndividualsPerStageLife">http://rs.tdwg.org/plic/terms/ProportionIndividualsPerStageLife</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ProportionIndividualsPerStageLife-2021-05-17">http://rs.tdwg.org/plic/terms/version/ProportionIndividualsPerStageLife-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>ProportionIndividuals per stage life</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Percentage of individuals that belong to each life stage in a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ProtectionLegalStatus"></a>Term Name  plic:ProtectionLegalStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ProtectionLegalStatus">http://rs.tdwg.org/plic/terms/ProtectionLegalStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ProtectionLegalStatus-2021-05-17">http://rs.tdwg.org/plic/terms/version/ProtectionLegalStatus-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Protection Legal Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Description of the legal status.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Recruitment"></a>Term Name  plic:Recruitment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Recruitment">http://rs.tdwg.org/plic/terms/Recruitment</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Recruitment-2021-05-17">http://rs.tdwg.org/plic/terms/version/Recruitment-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recruitment</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information on the process by which young individuals (e.g., seedlings, larvae, propagules) become part of the adult population. It can be rate, scale, a description, etc.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SexRatio"></a>Term Name  plic:SexRatio</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SexRatio">http://rs.tdwg.org/plic/terms/SexRatio</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SexRatio-2021-05-17">http://rs.tdwg.org/plic/terms/version/SexRatio-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>SexRatio</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Relative number of males to females in a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Size"></a>Term Name  plic:Size</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Size">http://rs.tdwg.org/plic/terms/Size</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Size-2021-05-17">http://rs.tdwg.org/plic/terms/version/Size-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Size</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Number of individual organisms in a population.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Status"></a>Term Name  plic:Status</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Status">http://rs.tdwg.org/plic/terms/Status</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Status-2021-05-17">http://rs.tdwg.org/plic/terms/version/Status-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Whether a piece of legislation is in force, or superseded, etc.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ThreatCategory"></a>Term Name  plic:ThreatCategory</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ThreatCategory">http://rs.tdwg.org/plic/terms/ThreatCategory</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ThreatCategory-2021-05-17">http://rs.tdwg.org/plic/terms/version/ThreatCategory-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Threat category</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Description of the conservation status.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ThreatStatus"></a>Term Name  plic:ThreatStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ThreatStatus">http://rs.tdwg.org/plic/terms/ThreatStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ThreatStatus-2021-05-17">http://rs.tdwg.org/plic/terms/version/ThreatStatus-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>threat status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the conservation status of the taxon.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Type"></a>Term Name  plic:Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Type">http://rs.tdwg.org/plic/terms/Type</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Type-2021-05-17">http://rs.tdwg.org/plic/terms/version/Type-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Category of the piece of legislation.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_demographyAndThreat"></a>Term Name  plic:demographyAndThreat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/demographyAndThreat">http://rs.tdwg.org/plic/terms/demographyAndThreat</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/demographyAndThreat-2021-05-17">http://rs.tdwg.org/plic/terms/version/demographyAndThreat-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Demography And Threat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information concerning the demographic aspects of the species, as well as the conservation status.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_demographyAndThreatUnstructured"></a>Term Name  plic:demographyAndThreatUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/demographyAndThreatUnstructured">http://rs.tdwg.org/plic/terms/demographyAndThreatUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/demographyAndThreatUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/demographyAndThreatUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Demography And Threat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>demographyAndThreat element in unstructured format.
</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_directThreatUnstructured"></a>Term Name  plic:directThreatUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/directThreatUnstructured">http://rs.tdwg.org/plic/terms/directThreatUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/directThreatUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/directThreatUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Direct Threat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>directThreats element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_legislationAtomized"></a>Term Name  plic:legislationAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/legislationAtomized">http://rs.tdwg.org/plic/terms/legislationAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/legislationAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/legislationAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Legislation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>legislation element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_legislationUnstructured"></a>Term Name  plic:legislationUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/legislationUnstructured">http://rs.tdwg.org/plic/terms/legislationUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/legislationUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/legislationUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Legislation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>legislation element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_populationBiologyUnstructured"></a>Term Name  plic:populationBiologyUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/populationBiologyUnstructured">http://rs.tdwg.org/plic/terms/populationBiologyUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/populationBiologyUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/populationBiologyUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured population biology</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Population biology data as a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_territory"></a>Term Name  plic:territory</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/territory">http://rs.tdwg.org/plic/terms/territory</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/territory-2021-05-17">http://rs.tdwg.org/plic/terms/version/territory-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>territory</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information, mostly associated to vertebrates, referring to the territorial extension of the individual or group in terms of its activities (feeding, mating, etc.).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_territoryAtomized"></a>Term Name  plic:territoryAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/territoryAtomized">http://rs.tdwg.org/plic/terms/territoryAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/territoryAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/territoryAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>territory atomized </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Territory element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_territoryUnstructured"></a>Term Name  plic:territoryUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/territoryUnstructured">http://rs.tdwg.org/plic/terms/territoryUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/territoryUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/territoryUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured territory</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information associated mostly to vertebrates, referring to the territorial extension of the individual or group in terms of its activities (feeding, mating, etc.). As a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_threatStatusAtomized"></a>Term Name  plic:threatStatusAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/threatStatusAtomized">http://rs.tdwg.org/plic/terms/threatStatusAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/threatStatusAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/threatStatusAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>threat Status Atomized</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>ThreatStatus element in structured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_threatStatusUnstructured"></a>Term Name  plic:threatStatusUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/threatStatusUnstructured">http://rs.tdwg.org/plic/terms/threatStatusUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/threatStatusUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/threatStatusUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>unstructured threat status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the status of the taxon.As a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.21 Uses Management And Conservation

Uses: Ways in which species are utilized by people, including Folklore, Management: actions aimed at conserving or recovering species. Conservation statu<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Actions"></a>Term Name  plic:Actions</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Actions">http://rs.tdwg.org/plic/terms/Actions</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Actions-2021-05-17">http://rs.tdwg.org/plic/terms/version/Actions-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Actions</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Individual tasks in which a management project can be atomized. Each action must be separated by ;</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ActionsType"></a>Term Name  plic:ActionsType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ActionsType">http://rs.tdwg.org/plic/terms/ActionsType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ActionsType-2021-05-17">http://rs.tdwg.org/plic/terms/version/ActionsType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Actions Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Each action must have one type. In the case that one action doesn't have type then put blank.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Conservation-ExplotationData"></a>Term Name  plic:Conservation-ExplotationData</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Conservation-ExplotationData">http://rs.tdwg.org/plic/terms/Conservation-ExplotationData</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Conservation-ExplotationData-2021-05-17">http://rs.tdwg.org/plic/terms/version/Conservation-ExplotationData-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Conservation-Explotation Data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Frequency record of plants, details of regeneration, sustainability or over-exploitation and any locally imposed bans on felling or harvesting.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Economics"></a>Term Name  plic:Economics</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Economics">http://rs.tdwg.org/plic/terms/Economics</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Economics-2021-05-17">http://rs.tdwg.org/plic/terms/version/Economics-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Economics</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Real or potential existence of trade in live plants, plant parts or derivatives and, if so, the trade scale.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_HumanAndEnvironmentalrelevance"></a>Term Name  plic:HumanAndEnvironmentalrelevance</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/HumanAndEnvironmentalrelevance">http://rs.tdwg.org/plic/terms/HumanAndEnvironmentalrelevance</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/HumanAndEnvironmentalrelevance-2021-05-17">http://rs.tdwg.org/plic/terms/version/HumanAndEnvironmentalrelevance-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Human and Environmental Relevance</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Impact or value an species has either on the environment or on humans, and that justify management measures.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ManagementAndConservation"></a>Term Name  plic:ManagementAndConservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ManagementAndConservation">http://rs.tdwg.org/plic/terms/ManagementAndConservation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ManagementAndConservation-2021-05-17">http://rs.tdwg.org/plic/terms/version/ManagementAndConservation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Management and Conservation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Management: actions directed at conserving or restoring species / Conservation: interventions undertaken designed to preserve species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ManagementAndConservationAtomized"></a>Term Name  plic:ManagementAndConservationAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ManagementAndConservationAtomized">http://rs.tdwg.org/plic/terms/ManagementAndConservationAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ManagementAndConservationAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/ManagementAndConservationAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Management and Conservation Atomized</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Management: actions directed at conserving or restoring species / Conservation: interventions undertaken designed to preserve species in an structured manner.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ManagementAndConservationType"></a>Term Name  plic:ManagementAndConservationType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ManagementAndConservationType">http://rs.tdwg.org/plic/terms/ManagementAndConservationType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ManagementAndConservationType-2021-05-17">http://rs.tdwg.org/plic/terms/version/ManagementAndConservationType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Management and Conservation Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Management: actions aimed at conserving or recovering species / Conservation: undertaken interventions designed to preserve species.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ManagementAndConservationUnstructured"></a>Term Name  plic:ManagementAndConservationUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ManagementAndConservationUnstructured">http://rs.tdwg.org/plic/terms/ManagementAndConservationUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ManagementAndConservationUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/ManagementAndConservationUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Management and Conservation Unstructured</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Management: actions directed at conserving or restoring species / Conservation: interventions undertaken designed to preserve species as a text block.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ManagementPlan"></a>Term Name  plic:ManagementPlan</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ManagementPlan">http://rs.tdwg.org/plic/terms/ManagementPlan</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ManagementPlan-2021-05-17">http://rs.tdwg.org/plic/terms/version/ManagementPlan-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Management Plan</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>plan guiding the overall management project.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_MeansOfApplication-Administration"></a>Term Name  plic:MeansOfApplication-Administration</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/MeansOfApplication-Administration">http://rs.tdwg.org/plic/terms/MeansOfApplication-Administration</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/MeansOfApplication-Administration-2021-05-17">http://rs.tdwg.org/plic/terms/version/MeansOfApplication-Administration-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Means of Application-Administration</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. This is specific relevant for medicines, poisons .</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Objetives"></a>Term Name  plic:Objetives</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Objetives">http://rs.tdwg.org/plic/terms/Objetives</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Objetives-2021-05-17">http://rs.tdwg.org/plic/terms/version/Objetives-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Objetives</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Specific purposes of the management actions. Each objective must be separated by ;</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Organisms"></a>Term Name  plic:Organisms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Organisms">http://rs.tdwg.org/plic/terms/Organisms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Organisms-2021-05-17">http://rs.tdwg.org/plic/terms/version/Organisms-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organisms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Organisms which use the plant/plant parts.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_PartUsed"></a>Term Name  plic:PartUsed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/PartUsed">http://rs.tdwg.org/plic/terms/PartUsed</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/PartUsed-2021-05-17">http://rs.tdwg.org/plic/terms/version/PartUsed-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Part Used</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Which plant parts are used, or have any negative values.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Potential"></a>Term Name  plic:Potential</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Potential">http://rs.tdwg.org/plic/terms/Potential</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Potential-2021-05-17">http://rs.tdwg.org/plic/terms/version/Potential-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Potential</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Potential increase in the use, cultivation or production or possibility of introduction in other areas or social groups.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_ProductionDetails"></a>Term Name  plic:ProductionDetails</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/ProductionDetails">http://rs.tdwg.org/plic/terms/ProductionDetails</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/ProductionDetails-2021-05-17">http://rs.tdwg.org/plic/terms/version/ProductionDetails-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Production Details</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Definition:        Acc. TDWG Economic Botany. (where relevant). Give details of protection, cultivation, harvesting, yields, processing and storage methods used and take note of special tools, timing etc.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Properties"></a>Term Name  plic:Properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Properties">http://rs.tdwg.org/plic/terms/Properties</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Properties-2021-05-17">http://rs.tdwg.org/plic/terms/version/Properties-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Properties</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Details of properties which influence its value for a specified purpose.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_RatingPopularity"></a>Term Name  plic:RatingPopularity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/RatingPopularity">http://rs.tdwg.org/plic/terms/RatingPopularity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/RatingPopularity-2021-05-17">http://rs.tdwg.org/plic/terms/version/RatingPopularity-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Rating Popularity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Assessment of the plant for its use and possible preference to other species, pointing out, in this case, which species are they.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SeasonOfAvailability-Use"></a>Term Name  plic:SeasonOfAvailability-Use</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SeasonOfAvailability-Use">http://rs.tdwg.org/plic/terms/SeasonOfAvailability-Use</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SeasonOfAvailability-Use-2021-05-17">http://rs.tdwg.org/plic/terms/version/SeasonOfAvailability-Use-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Season of Availability-Use</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. The season in which the plant is available/is used and, if relevant, the time of day.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_SourceOfInformation"></a>Term Name  plic:SourceOfInformation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/SourceOfInformation">http://rs.tdwg.org/plic/terms/SourceOfInformation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/SourceOfInformation-2021-05-17">http://rs.tdwg.org/plic/terms/version/SourceOfInformation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Source of Information</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Where does the observation come from? Reference citations should be given. Where appropriate, voucher specimen details should be provided (collector, number, date, herbarium) as well as details of the recorded informant (name, gender, approximate age, occupation, ethnic identity, locality and spoken language).</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Use-Value"></a>Term Name  plic:Use-Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Use-Value">http://rs.tdwg.org/plic/terms/Use-Value</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Use-Value-2021-05-17">http://rs.tdwg.org/plic/terms/version/Use-Value-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Use-Value</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>What is the plant used for, or what negative values does it have.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UseNotes"></a>Term Name  plic:UseNotes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UseNotes">http://rs.tdwg.org/plic/terms/UseNotes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UseNotes-2021-05-17">http://rs.tdwg.org/plic/terms/version/UseNotes-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Use Notes</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Notes about how species are utilized by people.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UseTypeAtomized"></a>Term Name  plic:UseTypeAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UseTypeAtomized">http://rs.tdwg.org/plic/terms/UseTypeAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UseTypeAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/UseTypeAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Use Type Atomized</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. Type of use: traditional, modern, industrial or just a possible use.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Users"></a>Term Name  plic:Users</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Users">http://rs.tdwg.org/plic/terms/Users</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Users-2021-05-17">http://rs.tdwg.org/plic/terms/version/Users-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Users</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. The user group who recognizes the value and/or use of the plant.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_Uses"></a>Term Name  plic:Uses</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/Uses">http://rs.tdwg.org/plic/terms/Uses</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/Uses-2021-05-17">http://rs.tdwg.org/plic/terms/version/Uses-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Uses</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ways in which species are utilized by people.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsesAtomized"></a>Term Name  plic:UsesAtomized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsesAtomized">http://rs.tdwg.org/plic/terms/UsesAtomized</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsesAtomized-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsesAtomized-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Atomized Uses</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ways in which species are utilized by people, including Folklore. Also applied to Animals and Fungi.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsesManagementAndConservation"></a>Term Name  plic:UsesManagementAndConservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsesManagementAndConservation">http://rs.tdwg.org/plic/terms/UsesManagementAndConservation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsesManagementAndConservation-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsesManagementAndConservation-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Uses Management and Conservation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Ways in which species are utilized by people, including Folklore.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsesManagementAndConservationUnstructured"></a>Term Name  plic:UsesManagementAndConservationUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsesManagementAndConservationUnstructured">http://rs.tdwg.org/plic/terms/UsesManagementAndConservationUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsesManagementAndConservationUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsesManagementAndConservationUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Uses Management and Conservation Unstructured </td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>UsesManagementAndConservation element in text block format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_UsesUnstructured"></a>Term Name  plic:UsesUnstructured</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/UsesUnstructured">http://rs.tdwg.org/plic/terms/UsesUnstructured</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/UsesUnstructured-2021-05-17">http://rs.tdwg.org/plic/terms/version/UsesUnstructured-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Unstructured Uses</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Uses in a unstructured format.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_VernacularNameUseAnnotations"></a>Term Name  plic:VernacularNameUseAnnotations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/VernacularNameUseAnnotations">http://rs.tdwg.org/plic/terms/VernacularNameUseAnnotations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/VernacularNameUseAnnotations-2021-05-17">http://rs.tdwg.org/plic/terms/version/VernacularNameUseAnnotations-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vernacular Name Use Annotations</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Acc. TDWG Economic Botany. The name of the taxon must be distinguished from the name of theplant parts, the names of any processing stages, and the final product name. Names used in trade should be identified. It should also be mentioned if any vernacular name refers to more than one taxon. The use of some names may be restricted to a time of year or occasion, or have sacred connotations. The language or dialect to which the names belong should be stated along with details of the ethnic group. Care should be taken with transliteration into the Roman alphabet; if a standard system exists, use it and note which one it is.</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


### 4.22 Associated Party

A party associated with the resource. Parties have particular role. (EML-RESOURCE)<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_associatedPartyType"></a>Term Name  plic:associatedPartyType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/associatedPartyType">http://rs.tdwg.org/plic/terms/associatedPartyType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/associatedPartyType-2021-05-17">http://rs.tdwg.org/plic/terms/version/associatedPartyType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>associatedPartyType</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Term borrowed from EML. This element provides the full name of other people, organizations, or positions who should be associated with the resource. </td>
		</tr>
		<tr>
			<td>Notes</td>
			<td><a href="https://eml.ecoinformatics.org/schema/eml-resource_xsd.html#ResourceGroup_associatedParty">https://eml.ecoinformatics.org/schema/eml-resource_xsd.html#ResourceGroup_associatedParty</a></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>


### 4.23 References

It represents the references that an element could have, in different formats
### 4.24 Ancillary Data

The AncillaryData element contains information that could be an image, an audio, a list of references, a list of agents, rights, licenses...related with the element it belongs. Its definition is borrowed from the dataObjectBaseType element of the EOL scheme.<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_AncillaryData"></a>Term Name  plic:AncillaryData</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/AncillaryData">http://rs.tdwg.org/plic/terms/AncillaryData</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/AncillaryData-2021-05-17">http://rs.tdwg.org/plic/terms/version/AncillaryData-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Ancillary Data</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The AncillaryData element contains information that could be an image, an audio, a list of references, a list of agents, rights, licenses...related with the element it belongs.</td>
		</tr>
		<tr>
			<td>Usage</td>
			<td>AncillaryData should be information related with the element it belongs</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>eol:dataObjectBaseType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="plic_dataObjectBaseType"></a>Term Name  plic:dataObjectBaseType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/dataObjectBaseType">http://rs.tdwg.org/plic/terms/dataObjectBaseType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-05-17</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/plic/terms/version/dataObjectBaseType-2021-05-17">http://rs.tdwg.org/plic/terms/version/dataObjectBaseType-2021-05-17</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>AncillaryData</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>From EOL</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>eol:dataObjectBaseType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>




___

## EML

**EML** o Ecological Metadata Language, es un estándar para metadatos que consolida información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en ‘metadatos’ —es decir, la información sobre los datos— y utilizan el estándar **EML** de código abierto, que administra y mantiene The Knowledge Network for Biocomplexity.

 
Cada *Darwin Core Archive* incluye como uno de sus componentes un archivo **EML** (escrito en formato XML), que contiene un perfil específico para estos conjuntos de datos. Este perfil del EML es conocido como **Perfil de Metadatos de GBIF** o **GMP** (GBIF *Metadata Profile*)

- [Conoce más sobre el EML](https://eml.ecoinformatics.org/){:target="_blank"}.
- [Conoce más sobre el GMP, Perfil de Metadatos de GBIF](https://github.com/gbif/ipt/wiki/GMPHowToGuide){:target="_blank"}.
