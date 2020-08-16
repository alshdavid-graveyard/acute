.PHONY: build test clean

default: clean build test

build:
	cd packages/compiler && yarn build
	cd packages/core && yarn build
	cd packages/platform && yarn build

test:
	cd testing && yarn test

clean:
	cd packages/compiler && yarn clean
	cd packages/core && yarn clean
	cd packages/platform && yarn clean
