# ContaAzul Challenge

[![Build Status](https://travis-ci.org/darkfrontcode/conta-azul-challenge.svg?branch=master)](https://travis-ci.org/darkfrontcode/conta-azul-challenge)


### Description

<br>

> A simple CRUD actions vehicles dashboard

I have deployed a clone of this repo at heroku level right on this link https://conta-azul.herokuapp.com/.

<br>

> General information

The application runs above ts-node which is nothing more than a strongly typed node version. 

I have chosen express to manage all the routes and middlewares and Pug Template for an easier and faster code.

In development mode webpack-middleware makes the major part of the work, hot-reloading components, styles, assets and make awesome async bundles.

In production we can rely with all ts-node powers to maintain and scale the application to the top.

At front-end level, I have used angular 5 with some extras animation libs like GSAP and CSS3 @keyframes to makes the magic and stylus to a really faster coding.

For tests you can count on a new facebook library Jest. Check it out, it worth.

I have used Figma and Proto.io to design extra layouts.

<br>



### Instructions

> How to install

* Install all dependencies with yarn. This is a very important thing cause I have locked all my packages version in yarnlock file.

<br>


> How to use

* <b>npm start</b>				=> Serve the aplication in localhost:3000 in production mode
* <b>npm run prod</b>  			=> Serve the aplication in localhost:3000 in production mode
* <b>npm run dev</b> 			=> Triggers webpack-middlewares and serve application in localhost:3000 in development mode
* <b>npm run dev:mon</b> 		=> Just in case if you want to play around with nodemon
* <b>npm run build</b>			=> build front-end application at public folder
* <b>npm run test</b>			=> a delightful tests with jest according to documentation =}
* <b>npm run test:watch</b>		=> delightful tests in watchmode