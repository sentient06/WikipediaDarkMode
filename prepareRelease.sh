#!/bin/bash

echo $1
if [[ $# -gt 0 ]]; then
	zip -r -X WikipediaDarkMode_$1.zip manifest.json replace_light.js theme.css wikipedia-dark-mode-icon.png
else
	echo "Need version number."
fi