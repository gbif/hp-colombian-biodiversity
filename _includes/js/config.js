var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  routes: {
    alwaysUseHrefs: true,
    enabledRoutes: ['occurrenceSearch', 'publisherSearch', 'publisherKey', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch', 'literatureSearch'], // Se omite 'institutionKey', 'institutionSearch' porque no se llama
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/data`,
      isHref: true,
      route: '/data' // the route you are currently using for occurrence search
    }
  },
  
  availableCatalogues: ['OCCURRENCE', 'DATASET', 'COLLECTION', 'PUBLISHER',  'LITERATURE'], // Se omite 'INSTITUTION'. También se podría algo como 'SPECIES' pero no se tiene configuración 
    
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
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS'],
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince','publisherKey','elevation','year', 'basisOfRecord','datasetName','occurrenceIssue']
    
  },
  
  dataset: {
    rootFilter: {publishingCountry: 'CO'},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'] // Se excluyen los filtros de país ya que todos son de CO
  },
  
  collection: {
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
  
//  institution: {
//    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
//    excludedFilters: ['countrySingleGrSciColl'],
//    rootFilter: {
//      displayOnNHCPortal: true,
//      country: "CO",
//     active: true
//    },
//    mapSettings: {
//      enabled: true,
//      lat: 4.456122273408877,
//      lng: -73.58256164862134,
//      zoom: 5.654
//    },
//  },
  
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['CO']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['CO']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'year']
  },
      
  maps: {
    locale: 'es'
  }
};
