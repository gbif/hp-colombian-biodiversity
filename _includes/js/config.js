var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/data`,
      isHref: true,
      route: '/data' // the route you are currently using for occurrence search
    }
  },
  occurrence: {
     mapSettings: {
      lat: 4.6482836,
      lng: -74.2482353,
      zoom: 4.5
    },
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
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS'],
    // availableCatalogues: ['OCCURRENCE', 'DATASET']
  },
  dataset: {
    rootFilter: {publishingCountry: 'CO', type: 'CHECKLIST'},
    highlightedFilters: ['q', 'publisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
    // availableCatalogues: ['OCCURRENCE', 'DATASET']
  }
};
