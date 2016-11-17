// VERSION: 1.4 LAST UPDATE: 23.06.2010
/*
 * THIS IS FREE SCRIPT BUT LEAVE THIS COMMENT IF
 * YOU WANT USE THIS CODE ON YOUR SITE
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * http://wilq32.blogspot.com
 * 
 */
/*
Description:

This is an final product of a Wilq32.PhotoEffect Snippet. Actually you can
 use this simple and tiny script to get effect of rotated images directly 
 from client side (for ex. user generated content), and animate them using
 own functions. 


Notices:

Include script after including main jQuery. Whole plugin uses jQuery
namespace and should be compatible with older version (unchecked). 

Usage:

jQuery(imgElement).rotate(angleValue)
jQuery(imgElement).rotate(parameters)
jQuery(imgElement).rotateAnimation(parameters)
jQuery(imgElement).rotateAnimation(parameters)



Returns:

jQueryRotateElement - !!! NOTICE !!! function return rotateElement
instance to help connect events with actually created 'rotation' element.

Parameters:

    ({angle:angleValue,
     [animateAngle:animateAngleValue],
     [maxAngle:maxAngleValue],
     [minAngle:minAngleValue],
     [callback:callbackFunction],
	 [animatedGif:animatedGifBoolean],
     [bind:[{event: function},{event:function} ] })
jQuery(imgElement).rotateAnimation

Where:

- angleValue - clockwise rotation given in degrees,
- [animateAngleValue] - optional parameter, animate rotating into this value,
- [maxAngleValue] - optional parameter, maximum angle possible for animation,
- [minAngleValue] - optional parameter, minimum angle possible for animation,
- [callbackFunction] - optional function to run after animation is done
- [animatedGifBoolean](boolean)  - optional set to display animated gif in firefox/chrome/safari
            !!! this might slow down browser because it need to render image again and
			again to display animation,
- [bind: [ {event: function}...] -optional parameter, list of events binded
  to newly created rotateable object

Examples:

		$(document).ready(function()
		{
			$('#image').rotate(-25);			
		});

		$(document).ready(function()
		{
			$('#image2').rotate({angle:5});	
		});

		$(document).ready(function()
		{
			var rot=$('#image3').rotate({maxAngle:25,minAngle:-55,
			bind:
				[
					{"mouseover":function(){rot[0].rotateAnimation(85);}},
					{"mouseout":function(){rot[0].rotateAnimation(-35);}}
				]
			});
		});
*/

(function($) {
var supportedCSS,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform".split(" "); //MozTransform <- firefox="" works="" slower="" with="" css!!!="" for="" (var="" a="0;a<toCheck.length;a++)" if="" (styles[tocheck[a]]="" !="=" undefined)="" supportedcss="toCheck[a];" jquery.fn.extend({="" imagerotate:function(parameters)="" {="" (this.wilq32&&this.wilq32.photoeffect)="" return;="" var="" paramclone="$.extend(true," {},="" parameters)="" return="" (new="" wilq32.photoeffect(this.get(0),paramclone))._temp;="" },="" rotate:function(parameters)="" (this.length="==0)" (typeof="" parameters="="undefined")" returned="[];" i="0,i0=this.length;i<i0;i++)" element="this.get(i);" element.wilq32="=" "undefined")="" returned.push($($(element).imagerotate(parameters)));="" else="" element.wilq32.photoeffect._rotate(parameters.angle);="" }="" returned;="" rotateanimation:function(parameters)="" element.wilq32.photoeffect._parameters.animateangle="parameters.angle;" element.wilq32.photoeffect._parameters.callback="parameters.callback" ||="" function(){};="" element.wilq32.photoeffect._animatestart();="" });="" wilq32="{};" wilq32.photoeffect="(function(){" (supportedcss)="" function(img,parameters){="" this._img="img;" this._parameters="parameters" {};="" this._parameters.animateangle="0;" this._parameters.angle="parameters.angle" 0;="" this._angle="0;" img.wilq32="{" photoeffect:="" this="" };="" this._bindevents(this._img,this._parameters.bind);="" this._rotate(this._parameters.angle);="" function(img,parameters)="" this._parameters.classname="img.className;" this._parameters.id="img.getAttribute('id');" this._temp="document.createElement('span');" this._temp.style.display="inline-block" ;="" this._temp.wilq32="{" img.parentnode.insertbefore(this._temp,img);="" this._img._ref="this;" (this._img.complete)="" this._loader();="" else{="" jquery(this._img).bind("load",="" function()="" this._ref._loader.call(this._ref);="" })();="" (jquery.browser.msie)="" wilq32.photoeffect.prototype.createvmlnode="(function(){" document.createstylesheet().addrule(".rvml",="" "behavior:url(#default#vml)");="" try="" !document.namespaces.rvml="" &&="" document.namespaces.add("rvml",="" "urn:schemas-microsoft-com:vml");="" function="" (tagname)="" document.createelement('<rvml:'="" +="" tagname="" '="" class="rvml">');
            };
        } catch (e) {
            return function (tagName) {
                return document.createElement('<' +="" tagname="" '="" xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
        }
		
})();
}

Wilq32.PhotoEffect.prototype._BindEvents=function(element,events){
	if (events) 
	{
		for (var a in events) if (events.hasOwnProperty(a)) 
			for (var b in events[a]) if (events[a].hasOwnProperty(b)) 
				jQuery(element).bind(b,events[a][b]);
	}
}

Wilq32.PhotoEffect.prototype._Loader=
(function()
{
	if (jQuery.browser.msie)
	return function()
	{
		var src=this._img.src;
		//this._IEfix.src=""; // Fixes endless loading
		this._temp.setAttribute('id',this._parameters.id);
		this._temp.className=this._parameters.className;
		var width=this._img.width;
		var height=this._img.height;
		this._img.parentNode.removeChild(this._img);
			
		this._img._widthMax=this._img._heightMax=Math.sqrt((height)*(height) + (width) * (width));
		this._img._heightMax=Math.sqrt((height)*(height) + (width) * (width));
		
		this._vimage = this.createVMLNode('image');
		this._vimage._ref=this;
		this._vimage.style.height=height+"px";
		this._vimage.style.width=width+"px";
		this._temp.style.position="relative"; // FIXES IE PROBLEM
		this._vimage.style.position="absolute"; // FIXES IE PROBLEM - its only rendered if its on absolute position!
		
		this._temp.style.width=this._temp.style.height=this._img._heightMax+"px";
		this._vimage.src=src;
		this._temp.appendChild(this._vimage);
		//this._vimage.outerHTML = this._vimage.outerHTML;
		//if (this._parameters.preservePosition){
			this._temp.style.width=width+"px";
			this._temp.style.height=height+"px";
			this._vimage.style.top = "0px";
			this._vimage.style.left = "0px";
		/*} else {
			this._vimage.style.top = (this._img._heightMax-height)/2;
			this._vimage.style.left = (this._img._widthMax-width)/2;
		}*/
		
		var self = this;
		this._BindEvents(this._temp,this._parameters.bind);
		this._rotate(this._parameters.angle);		
		
	}
	else
	return function ()
	{
		this._temp.setAttribute('id',this._parameters.id);
		this._temp.className=this._parameters.className;
		var width=this._img.width;
		var height=this._img.height;
		this._img.parentNode.removeChild(this._img);	
		this._img._widthMax=this._img._heightMax=Math.sqrt((height)*(height) + (width) * (width));

		this._canvas=document.createElement('canvas');
		this._canvas._ref=this;
		this._canvas.height=height;
		this._canvas.width=width;

		this._canvas.setAttribute('width',width);

		this._canvas.Wilq32 = this._temp.Wilq32;	
		this._temp.appendChild(this._canvas);
		//if (this._parameters.preservePosition){
			this._temp.style.width=width+"px";
			this._temp.style.height=height+"px";
			this._canvas.style.position="relative";
			this._canvas.style.left = -(this._img._widthMax - width)/2 + "px";
			this._canvas.style.top = -(this._img._widthMax - height)/2 + "px";
		//}

		var self = this;
		this._BindEvents(this._canvas,this._parameters.bind);
		this._cnv=this._canvas.getContext('2d');
		this._rotate(this._parameters.angle);
	}

})();

Wilq32.PhotoEffect.prototype._animateStart=function()
{	
	if (this._timer) {
		clearTimeout(this._timer);
	}
	this._animate();
}
Wilq32.PhotoEffect.prototype._animate=function()
{
	if (this._canvas||this._vimage||this._img) this._angle-=(this._angle-this._parameters.animateAngle)*0.1;
	if (typeof this._parameters.minAngle!="undefined") if (this._angle<this._parameters.minangle) this._angle="this._parameters.minAngle;" if="" (typeof="" this._parameters.maxangle!="undefined" )="" (this._angle="">this._parameters.maxAngle) this._angle=this._parameters.maxAngle; 
	var checkEnd = !!(Math.round(this._angle * 100 - this._parameters.animateAngle * 100)) == 0 && !!this._timer;

	if (this._parameters.callback && checkEnd){
		this._parameters.callback();
	}
	
	if (checkEnd && !this._parameters.animatedGif) 
		{
			clearTimeout(this._timer);
		}
		else 
		{
			if (this._canvas||this._vimage||this._img) this._rotate((~~(this._angle*10))/10);
			var self = this;
			this._timer = setTimeout(function()
			{
				self._animate.call(self);
			}, 10);
		}
}

Wilq32.PhotoEffect.prototype._rotate = (function()
{
	if (jQuery.browser.msie)
	return function(angle)
	{
		this._vimage.style.rotation=angle;
		//var radians=angle*Math.PI/180;
		//this._vimage.style.top=  (this._img._heightMax - this._img.height)/2- (this._vimage.offsetHeight-this._img.height)/2 +"px";
		//this._vimage.style.left= (this._img._widthMax - this._img.width)/2- (this._vimage.offsetWidth-this._img.width)/2 +"px";
	}
	else if (supportedCSS)
	return function(angle){
		this._img.style[supportedCSS]="rotate("+angle+"deg)";
	}
	else 
	return function(angle)

	{

		if (!this._img.width) return;
		if (typeof angle!="number") return;
		angle=(angle%360)* Math.PI / 180;
		var width=this._img.width;
		var height=this._img.height;
		var widthAdd = this._img._widthMax - width;
		var heightAdd = this._img._heightMax - height;
		// clear canvas	
		this._canvas.width = width+widthAdd;
		this._canvas.height = height+heightAdd;

		//this._cnv.scale(0.8,0.8); // SCALE - if needed ;)
		
		// REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
		this._cnv.save();
		this._cnv.translate(widthAdd/2,heightAdd/2); // at least center image on screen
		this._cnv.translate(width/2,height/2);		  // we move image back to its orginal 
		this._cnv.rotate(angle);					  // rotate image
		this._cnv.translate(-width/2,-height/2);	  // move image to its center, so we can rotate around its center
		this._cnv.drawImage(this._img, 0, 0);		  // First - we draw image
		this._cnv.restore();
	}


})();
})(jQuery);</this._parameters.minangle)></'></->