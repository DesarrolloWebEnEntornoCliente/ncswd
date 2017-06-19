#!/bin/sh

echo "Content-type: text/plain"
echo "Content-Length: 20"
#echo "Access-Control-Allow-Origin: *"
echo
temp=$(mktemp)
echo "$temp"
cat > $temp

