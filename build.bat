@echo off

echo This script is intended to build quiz frontend
echo
echo Settings:
echo npm version
call npm -version
echo
echo Running command:
echo npm run build
echo docker build --tag tkayser/quiz-frontend:latest .
echo
echo Executing:
call npm run build
call docker build --tag tkayser/quiz-frontend:latest .
