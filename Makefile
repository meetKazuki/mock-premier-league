OUTPUT_DIR=build

node_modules: package.json
	npm install

install: node_modules

compile:
	rm -rf ${OUTPUT_DIR}
	npx tsc -p ./tsconfig.build.json
