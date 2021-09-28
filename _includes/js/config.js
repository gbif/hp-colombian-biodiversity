var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "or",
    "predicates": [
      {
        "key": "publishingCountry",
        "type": "equals",
        "value": "CO"
      },
      {
        "type": "and",
        "predicates": [
          {
            "key": "country",
            "type": "equals",
            "value": "CO"
          },
          {
            "key": "notIssues",
            "type": "equals",
            "value": "COUNTRY_COORDINATE_MISMATCH"
          }
        ]
      }
    ]
  },
  highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince','elevation','year', 'basisOfRecord', 'recordedBy','publishingOrg','datasetKey','datasetName','occurrenceIssue']
};
