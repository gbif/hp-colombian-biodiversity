var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
   		{
        "type":"equals",
        "key": "countryCode",
        "value": "CO"
      },
      {
        "type": "equals",
        "key": "notIssues",
        "value": "COUNTRY_COORDINATE_MISMATCH"
      }
    ]
  },
  highlightedFilters: ['keyword','taxonKey', 'gadmGid', 'stateProvince','elevation','year', 'basisOfRecord', 'recordedBy','datasetKey','datasetName','occurrenceIssue']
};
