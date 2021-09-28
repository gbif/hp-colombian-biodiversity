var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
   		{
        "type":"equals",
        "key": "publishingCountry",
        "value": "CO"
      },
      {
        "type": "equals",
        "key": "notIssues",
        "value": "COUNTRY_COORDINATE_MISMATCH"
      },
      {
        "type":"equals",
        "key": "country",
        "value": "CO"
      },
    ]
  },
  highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince','elevation','year', 'basisOfRecord', 'recordedBy','publishingOrg','datasetKey','datasetName','occurrenceIssue']
};
