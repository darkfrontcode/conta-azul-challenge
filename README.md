# ContaAzul Challenge

[![Heroku](https://heroku-badge.herokuapp.com/?app=conta-azul)](https://conta-azul.herokuapp.com)
[![Coveralls github](https://img.shields.io/coveralls/github/jekyll/jekyll.svg)](https://github.com/darkfrontcode/conta-azul-challenge)
[![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg)](https://github.com/darkfrontcode/conta-azul-challenge)

</br>

<p align="center">
	<img src="https://github.com/darkfrontcode/conta-azul-challenge/blob/master/midias/01.gif">
	</br>
	<img src="https://github.com/darkfrontcode/conta-azul-challenge/blob/master/midias/02.gif">
	</br>
	<img src="https://github.com/darkfrontcode/conta-azul-challenge/blob/master/midias/03.gif">
</p>

</br>


### Release 2.0.0

<br>

> :boom: :tada: :confetti_ball: Updates
* ts-node server moved to a new instance of API which you can find here: [Vehicles API](https://github.com/darkfrontcode/vehicles-api)
* application full integrated with Vehicles API
* ts-server out webpack-dev-server in for a clean structure
* http-server added for a simpler run
* TravisCI removed to stick only with herokuCI
* ForkJoin, BehaviorSubject and observer operators from rxJS added
* Jest collectCoverage added to code coverage
* Commented unit tests
* SOLID concepts and Design Patterns applied
* hard refactoring and general re-orders

### Description

<br>

> A simple vehicle dashboard with CRUD actions

I have deployed a clone of this repo at heroku in the link below:
<br>
* [Heroku ContaAzul](https://conta-azul.herokuapp.com/)

<br>

You can visit the API in the link below. It have basic CRUD operations and it's totally open.
<br>
* [Vehicle API](http://vehicles-api.herokuapp.com/vehicles)
* [Github Reposity](https://github.com/darkfrontcode/vehicles-api)

<br>

I also have a docker image from this repo uploaded at DockerHub if you want to play around with it.
<br>
* [Docker Image](https://hub.docker.com/r/darkfrontcode/conta-azul/)

<br>

> General information

Webpack-dev-server makes all the work, hot-reloading components, templates, styles, assets and making awesome async bundles.

I have used angular 5 with some extras animation libs like GSAP and MorphSVGPlugin to makes the magic happens.

For tests you can count on a new facebook library Jest.

I also have used Figma and Proto.io to design extra layouts.

<br>



### Instructions

> How to install

* Install all dependencies with yarn. This is a very important thing cause I have locked all my packages version in yarnlock file.

<br>


> How to use

* npm start				=>  Serve the aplication in localhost:8080 in production mode
* npm run prod			=>  Serve the aplication in localhost:8080 in production mode
* npm run dev			=>  Triggers webpack-dev-server and serve application in localhost:8080 in development mode
* npm run build			=>  build front-end application in **/build** folder
* npm run test			=>  a delightful tests with jest according to documentation =}
* npm run test:watch	=>  delightful tests in watchmode
