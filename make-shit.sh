#!/bin/bash

echo $RANDOM >> garbage/iamafile.txt

git add .
git commit -am "wrote garbage $RANDOM"

git push
