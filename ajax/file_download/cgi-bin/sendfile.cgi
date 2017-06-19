#!/bin/sh

echo "Content-type: text/plain"
echo "Content-Length: 1000000"
#echo "Access-Control-Allow-Origin: *"

echo ""
dd if=/dev/urandom bs=1K count=1000

