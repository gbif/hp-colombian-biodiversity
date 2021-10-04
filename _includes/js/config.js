var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  // along with whatever other properties you have. E.g. your 'rootPredicate'
  occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY,'DATASETS'], // possible values are TABLE, MAP, GALLERY, DATASETS
};

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
