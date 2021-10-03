# Variables

swaggerFile := docs/swagger.yaml
swaggerFileOutput := docs/swagger-resolved.yaml

integrationTestFiles = $(shell find tests/integration -name "*.spec.ts")
unitTestFiles = $(shell find tests/unit -name "*.spec.ts")

# Rules

node_modules: package.json
	npm install && touch node_modules

install: node_modules

docs-resolve-dependencies:
	npx speccy resolve $(swaggerFile) -o $(swaggerFileOutput)

compile: docs-resolve-dependencies
	npx tsc -p ./tsconfig.build.json

watch:
	npx tsc -w -p ./tsconfig.build.json

run: compile
	node ./dist/cluster

develop:
	npx nodemon --watch src --ext ts --exec "make run" | npx pino-pretty
