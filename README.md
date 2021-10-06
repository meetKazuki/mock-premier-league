# mock-premier-league
An API that serves the latest scores of fixtures of matches in a “Mock Premier League”. A primer to TypeScript, Objection.js, Docker and maybe Terraform

# Swagger Client <img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png" height="50" align="right">

[![Build Status](https://github.com/swagger-api/swagger-js/actions/workflows/nodejs.yml/badge.svg)](https://github.com/swagger-api/swagger-js/actions)

**Swagger Client** is a JavaScript module that allows you to fetch, resolve, and interact with Swagger/OpenAPI documents.

## New!

**This is the new version of swagger-js, 3.x.** The new version supports Swagger 2.0 as well as OpenAPI 3.

Want to learn more? Check out our [FAQ](docs/migration/migration-2-x-to-3-x.md).

For features known to be missing from 3.x please see the [Graveyard](docs/migration/graveyard-3-x.md).


For the older version of swagger-js, refer to the [*2.x branch*](https://github.com/swagger-api/swagger-js/tree/2.x).

> *The npm package is called `swagger-client` and the GitHub repository is `swagger-js`.
We'll be consolidating that soon. Just giving you the heads up. You may see references to both names.*

## Compatibility
The OpenAPI Specification has undergone multiple revisions since initial creation in 2010. 
Compatibility between Swagger Client and the OpenAPI Specification is as follows:

Swagger Client Version | Release Date | OpenAPI Spec compatibility | Notes
------------------ | ------------ | -------------------------- | -----
3.10.x | 2020-01-17 | 2.0, 3.0.0, 3.0.1, 3.0.2, 3.0.3 | [tag v3.10.0](https://github.com/swagger-api/swagger-js/tree/v3.10.0)
2.1.32 | 2017-01-12 | 1.0, 1.1, 1.2 | [tag v2.1.32](https://github.com/swagger-api/swagger-js/tree/v2.1.32). This [release](https://github.com/swagger-api/swagger-js/releases/tag/v2.1.32) is only available on GitHub.

## Table of Contents

- [Mock Premier API](#mock-premier-api)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
    - [Folder Structure](#folder-structure)
    - [HTTP Response Codes](#http-response-codes)
    - [Sample HTTP Response](#sample-http-response)
  - [Project Status](#project-status)
  - [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
    - [Running Tests](#running-tests)
    - [Getting the Source](#getting-the-source)
  - [How to Get Help](#how-to-get-help)
  - [Contributing](#contributing)
  - [Setting up](docs/development/setting-up.md)
  - [Scripts](docs/development/scripts.md)
  - [License](#license)
  - [Authors](#authors)

## About the Project

This is a simple RESTful API for a mock premiere league. It allows a user to:

- Get the latest scores of fixtures of matches from the league

### Folder Structure

```bash
.
├── @types                      # Typescript typings
├── docs                        # Documentation files
├── src                         # Source files
├── .env.example
├── .eslintrc
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── LICENSE
├── README.md
├── makefile
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad` Request There was a problem with the request (security, malformed)
- `401` `Unauthorized` The supplied API credentials are invalid
- `403` `Forbidden` The credentials provided do not have permissions to access the requested resource
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occurred

### Sample HTTP Response

The API response, to the best of my ability, is structure after JSEnd specifications.

For a success response, the server will return a response of this format:

```
{
  "status": "success",
  "message": "success message from the API server"
  "data": { ... }
}
For an error response, the server will return a response of this format. The trace key in the error object is returned if NODE_ENV === development.
{
  "status": "error",
  "error": {
    "message": "error message from the API server",
    "trace": {
      "statusCode": <status-code>
    }
  }
}
```


## Project Status

In development

## Getting Started

### Dependencies

This project uses [Express.js](https://expressjs.com/) v4.17. It has the following dependencies:

[Node.js `>=` 14.0.0](https://nodejs.org/en/download)

Third party Services

Github Actions for Continuous Integration and Deployment.

Heroku for hosting the API.

### Getting the Source
This project is hosted on [Github](https://github.com/meetKazuki/mock-premier-league). You can clone this project directly using this command:

git clone https://github.com/meetKazuki/address-book.git

### Running Tests
To run tests, run


```bash
npm test
```
## How to Get Help
Notice a bug? Please open an issue. Need more clarification on any part of the code base? Contact [Desmond](https://github.com/meetKazuki).

## Contributing
To contribute to this project, start by raising an issue. There are issue templates for bug and feature request. Once this issue has been agreed upon, you can create a feature or hotfix branch off develop or master (for hotfix) and raise PR. There is also a PR template.

## License
This project is licensed under the MIT License

## Authors
[Desmond Edem](https://github.com/meetKazuki) - Initial work