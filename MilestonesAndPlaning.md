# Milestones

## What is ShareHub?

A web application where users can share things that are not in use, e.g. furniture, home appliances, books etc.

## Scope and Foundations

- **Front-End** &ndash; React
- **Back-End** &ndash; nodeJs
- **Database** &ndash; Mongo

## Schedule- starts on Sunday, May 30

[A] MVP Planing - 2 hr

- list all relevant technologies and libraries
- specify minimal features and entities
- create Mockups and site map
- map minimal front-end code architecture-**missing**
- map back-end code architecture - map database modals and their relations- **missing**

[B] Front-end MVP implementation, documentation and testing - 2 days- 1st of may 2021

- create json files with dummy back-end data
- construct dummy components
- add documentation for each component
- construct dummy tests for components **missing**
- implement components according to tests and clarify documentation accordingly **missing**

Known bugs and issues:

- on home page the "request" button follows the link to the item's page instead of opening the modal
  suggested solutions did not work-`event.stopPropagation`- did not have any effect
  `e.nativeEvent.stopImmediatePropagation`-prevented the opening of the modal
  final temporary solution- change the incorporation of the link in the component structure.
- styling needs refactoring: spacing, add animations, complete responsiveness
- what data is new and revealed in the item's page?

  [B] Front-end MVP implementation, documentation and testing - 2 days- 3rd of may 2021

- create add item form
- implement filtration and search functionalities
- create redux actions and reducers and connect the app state management to redux
- unit testing **missing**
- documentation **missing**

[D] Back-end implementation, documentation and testing-2 days-7th of may 2021

- create simple mockup for the server - 2hr
- construct dummy routes for: getting items, specific item, creating item, all users
- add documentation for each route
- unit testing

[E] Back-end implementation, documentation and testing-2.5 days-10th of may 2021

- use mongo and mongoose for creating models for items and users
- add documentation for each route
- construct dummy tests for routes
- implement routes according to tests and clarify documentation accordingly

\*\* MVP Improvement cycles: stages A through E, with:

- Redux state management
- mongo db modals
- Login-logout system
- finally update ui styling: colors, typography etc...
  --> update mockups and maps accordingly

C. End to End or integration testing &ndash; 4+1 days

#### Notes

- MVP &ndash; Minimal Viable Product
- working day &ndash; 7 or 8 hr

# MVP Technologies-

(delivered on 1st of may 2021)

1. Client technologies

- Redux- state management
- jest- testing
- styled components- styling
- material ui - component library
- JSDocs - documentation
- prop-types - type checking
- axios- handle network requests

2. Back end technologies

- Mongo and mongoose- manage database
- jest- testing
- axios- handle network requests
- express server
- swagger - documentation
