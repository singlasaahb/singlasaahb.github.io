Edit Spline Read Me
===
[Web page version]( http://va3c.github.io/viewer/cookbook/edit-spline/ ) - 
[Source code version]( https://github.com/va3c/viewer/tree/gh-pages/cookbook/edit-spline/ )


### Live Demo

<iframe src="http://va3c.github.io/viewer/cookbook/edit-spline/latest/index.html" width=100% height=500px class='overview' >
There is an `iframe` here. It is not visible when viewed on github.com. To view, please see 'Project Links' below.
</iframe>
_[Spline Editor Latest]( http://va3c.github.io/viewer/cookbook/edit-spline/latest/index.html )_  


The [Catmull Rom Spline](  http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline ) passes through its control points.

Original concept created by [zz85]( https://github.com/zz85/ThreeLabs/blob/master/spline3editor.html )


### Mission  
<!-- a statement of a rationale, applicable now as well as in the future -->

* Create, edit and export and import 3D Catmull Rom Splines 
	* Pan, rotate and zoom in real-time using your pointing device
	* Control point entities highlight when you mouseover
	* Update controls point positions in a fairly intuitive manner
	* Increment and decrement the number of control points
	* Select whether new points are placed randomly of as a projection of the two previous points
	* Toggle open and closed spline display
	* Export spline data to JSON file
	* Import JSON spline data with renewed ability to re-edit spline
	* Direct overhead light creating shadows helps locate control point objects

### Vision  
<!--  a descriptive picture of a desired future state -->


## Features
<!-- and benefits -->


## Road Map


## Issues / Bugs


## Project Links
vA3C is a [GitHub]( http://github.com) [organization account]( https://help.github.com/articles/what-s-the-difference-between-user-and-organization-accounts ) and has multiple owners and admins. 
All vA3EC scripts are [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ).
Scripts are hosted on GitHub and are viewable as web pages, as described in the 'Read Me' files and as source code.

## System Requirements

In order to run the script you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/)
WebGL is the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins. 

Generally this means a computer with an Intel Core i5 processor or better with an external GPU such as one made by Nvidia. 
Successful use of the script on a phone or tablet is highly unlikely. 
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.
 
The script is currently being built and tested with the Google Chrome browser. 
Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.


## Copyright and License

copyright &copy; 2014 vA3C authors ~ 
All work herein is under the [MIT License]( http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md )

This repository contains files that are at an early and volatile stage. Not all licensing requirements may have been fully met let alone identified. It is the intension of the authors to play fair and all such requirements will either be met or the feature in question will turned off.


## Change Log

2014-12-27 ~ Theo

* R8 ~ fully name-spaced
* Adding Tooltips
* Removes last control point properly
* Add 'extend' checkbox - new points are projected out half the opposite distance between ultimate and penultimate point.
* Add generate and delete spline buttons
* Export now exports control points (boxes) plus line as a single object
* Add import and re-edit spline capability

2014-12-26 ~ Theo

* R7 ~ rename to edit spline - part of 'edit object' series
* Add more name spacing
* Update draggable objects


2014-12-21 ~ Theo

* First commit