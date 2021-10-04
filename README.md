# Mock Premier League

This repository contains an API that serves the latest scores of fixtures of matches in a “Mock Premier League”. A primer to TypeScript, Objection.js, Docker and maybe Terraform

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
