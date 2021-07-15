#!/bin/bash

echo This script is intended to build quiz frontend
echo
echo Settings:
echo JAVA_HOME=$JAVA_HOME
#$JAVA_HOME/bin/java -version
echo M2_HOME=$M2_HOME
#$M2_HOME/bin/mvn -version
echo
echo Running command:
echo npm  run build
echo docker build --tag quiz-frontend:latest .
echo
echo Executing:
npm run build
docker build  --tag quiz-frontend:latest .
