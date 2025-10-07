var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
    "version": 3,
    "pages": [
        {
            "id": "occurrenceSearch",
            "path": "data"
        },
        {
            "id": "publisherSearch"
        },
        {
            "id": "publisherKey"
        },
        {
            "id": "collectionKey"
        },
        {
            "id": "collectionSearch",
            "path": "colecciones"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "datasetSearch"
        },
        {
            "id": "literatureSearch"
        }
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE",
        "DATASET",
        "COLLECTION",
        "PUBLISHER",
        "LITERATURE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": themeStyle.colors.primary,
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "locale": "es",
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "es",
            "localeCode": "es",
            "label": "Español",
            "default": true,
            "textDirection": "ltr",
            "cmsLocale": "es",
            "vocabularyLocale": "es-ES",
            "iso3LetterCode": "spa",
            "gbifOrgLocalePrefix": "/es",
            "grSciCollLocalePrefix": "/es",
            "mapTileLocale": "es"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
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
        "highlightedFilters": [
            "taxonKey",
            "gadmGid",
            "stateProvince",
            "publishingOrg",
            "elevation",
            "year",
            "basisOfRecord",
            "datasetName",
            "issue"
        ],
        "tabs": [
            "table",
            "map",
            "gallery",
            "datasets",
            "download"
        ],
        "mapSettings": {
            "lat": 4.6482836,
            "lng": -74.2482353,
            "zoom": 4.5
        }
    },
    "collectionSearch": {
        "scope": {
            "displayOnNHCPortal": true,
            "country": "CO",
            "active": true
        },
        "excludedFilters": [
            "countrySingleGrSciColl",
            "country"
        ]
    },
    "institutionSearch": {},
    "datasetSearch": {
        "scope": {
            "publishingCountry": "CO"
        },
        "highlightedFilters": [
            "q",
            "publishingOrg",
            "type",
            "license"
        ],
        "excludedFilters": [
            "publishingCountry"
        ]
    },
    "publisherSearch": {
        "scope": {
            "country": "CO"
        },
        "excludedFilters": [
            "country"
        ]
    },
    "literatureSearch": {
        "scope": {
            "type": "or",
            "predicates": [
                {
                    "type": "in",
                    "key": "countriesOfResearcher",
                    "values": [
                        "CO"
                    ]
                },
                {
                    "type": "in",
                    "key": "countriesOfCoverage",
                    "values": [
                        "CO"
                    ]
                }
            ]
        },
        "highlightedFilters": [
            "q",
            "year"
        ]
    }
};

var siteConfig_old = {
  routes: {
    alwaysUseHrefs: true,
    enabledRoutes: ['occurrenceSearch', 'publisherSearch', 'publisherKey', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch', 'literatureSearch'], // Se omite 'institutionKey', 'institutionSearch' porque no se llama
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/data`,
      isHref: true,
      route: '/data' // the route you are currently using for occurrence search
    },
    collectionSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/coleccion`,
      isHref: true,
      route: '/coleccion' // the route you are currently using for colection search
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
