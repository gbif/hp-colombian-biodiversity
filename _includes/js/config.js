var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});


var siteConfig = {
  occurrence: {
     mapSettings: {
      lat: 4.6482836,
      lng: -74.2482353,
      zoom: 0.9115440763665068
    }
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
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince','elevation','year', 'basisOfRecord', 'recordedBy','publishingOrg','datasetKey','datasetName','occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE',  'MAP','GALLERY', 'DATASETS']
  }
};
