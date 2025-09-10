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
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince','publisherKey','elevation','year', 'basisOfRecord','datasetName','occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS'],
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION']
  },
  dataset: {
    availableCatalogues: ['DATASET', 'PUBLISHER'],
    rootFilter: {publishingCountry: 'CO'},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION']
  },
  collection: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl','country'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "CO",
      active: true
    }
  },
  publisher: {
    rootFilter: {
      country: 'CO'
    },
    excludedFilters: ['countrySingle'],
  },
  institution: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "CO",
      active: true
    },
    mapSettings: {
      enabled: true,
      lat: 4.456122273408877,
      lng: -73.58256164862134,
      zoom: 5.654
    },
  },
  maps: {
    locale: 'es'
  }
};
