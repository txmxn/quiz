# Projektbeschreibung
Frontend für ein Quiz in [Vue.js](https://vuejs.org/) auf Basis von [Node.js](https://nodejs.org/en/).

# Vorbereitungen
Folgende Tools werden benötigt:
* [Node.js 14.17.1](https://nodejs.org/en/)
* [Docker 20.10.7 (Inklusive Docker-Compose)](https://www.docker.com/products/docker-desktop)
* Optional Vue CLI installieren: *npm install -g @vue/cli*

# Build
Die Datei *build.bat* im Basis-Verzeichnis ausführen.

Dabei wird der Quellcode kompiliert, die Vue runtime vorbereitet und anschließend die Anwendung in einem Docker-Container verpackt.
Das Tag des Containers lautet *tkayser/quiz-frontend:latest*.

# IDE
Das Projekt wird durch *npm install* initialisiert.
Die Anwendung wird über den Befehl *npm run serve* gestartet.

# Docker-Compose
Um die Quiz-Anwendung im Ganzen zu starten, benötigt man die *docker-compose.yml* Datei.

Starten: docker-compose up -d
Beenden: docker-compose down

Zugriff über [localhost](http://localhost).