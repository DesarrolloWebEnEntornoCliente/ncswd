#!/bin/sh

declare -A array
saveIFS=$IFS
IFS='=&'
parm=($QUERY_STRING)
IFS=$saveIFS

for ((i=0; i<${#parm[@]}; i+=2)) ; do
    array[${parm[i]}]=${parm[i+1]}
done

echo "Content-type: text/plain"
echo ""
echo "Tipo: Texto"
echo "Numero: 1"
echo "Booleano: true"
echo "${array[type]}"
