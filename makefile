.PHONY: build test clean

default: clean build test

build:
	cd packages/core && yarn build

test:
	cd testing && yarn test

clean:
	cd packages/core && yarn clean
