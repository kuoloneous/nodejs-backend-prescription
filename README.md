# Canoo JS (Typescript) Server Application Prescription
This repo serves as a boilerplate for JS applications that we are running in the backend.

Some features that are already integrated:
## Testing
- `ts-mocha`, `chai` for unit testing
- `nyc` for code coverage metrics
- `eslint` w/ Airbnb Coding Style Guide for code linting


## Development
- `typescript` for better code quality
- `ts-node` for running typescript without needing to compile
- `nodemon` live reloading of updates to typescript
- `rimraf` for easy builds


## Commands
- `npm run start` production execution
- `npm run start:dev` development execution
- `npm run build` builds the typescript into production build
- `npm run test` test the typescript 
- `npm run test:coverage` test the typescript & runs code coverage
- `npm run lint` runs eslint of the src/ folder