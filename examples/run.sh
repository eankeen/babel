#!/bin/sh -eu

for folder in api config; do
	cd "$folder"
	yarn start
	cd ..
done
