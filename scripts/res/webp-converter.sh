#! /bin/bash

folder=$1

find $1 -type f -name "*.png" -exec sh -c 'filename="$1"; echo "Converting $filename"; convert "$filename" -quality 90 -define thread-level=4 -define webp:method=6 -set filename:normalized "%d/%t" "%[filename:normalized].webp" && rm "$filename"' _ {} \;