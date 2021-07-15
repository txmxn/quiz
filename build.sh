#!/bin/bash

echo This script is intended to build quiz frontend
echo
echo Settings:
echo npm version
npm -version
echo
echo Running command:
echo npm  run build
echo docker build --tag tkayser/quiz-frontend:latest .
echo
echo Executing:
npm run build
docker build --tag tkayser/quiz-frontend:latest .
