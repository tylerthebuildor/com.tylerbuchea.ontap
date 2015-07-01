#!/bin/bash
convert icon.png -resize 132x132! apple-touch-icon.png
convert icon.png -resize 192x192! chrome-touch-icon-192x192.png
convert icon.png -resize 128x128! icon-128x128.png
convert icon.png -resize 144x144! ms-icon-144x144.png
convert icon.png -resize 144x144! ms-touch-icon-144x144-precomposed.png
convert icon.png -resize 16x16! ../../favicon.ico