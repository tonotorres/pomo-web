import { gsap } from "gsap";

const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

const getScrollValues = () => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    const x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return {x,y};
}

// wrap each element of an array
// elems - the array of elements to wrap
// wrapType - type of wrapper ('div', 'span' etc)
// wrapClass - wrapper class(s) 
const wrapLines = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        // add a wrap for every char (overflow hidden)
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}

const adjustedBoundingRect = el => {
    var rect = el.getBoundingClientRect();
    var style = getComputedStyle(el);
    var tx = style.transform;
  
    if (tx) {
      var sx, sy, dx, dy;
      if (tx.startsWith('matrix3d(')) {
        var ta = tx.slice(9,-1).split(/, /);
        sx = +ta[0];
        sy = +ta[5];
        dx = +ta[12];
        dy = +ta[13];
      } else if (tx.startsWith('matrix(')) {
        var ta = tx.slice(7,-1).split(/, /);
        sx = +ta[0];
        sy = +ta[3];
        dx = +ta[4];
        dy = +ta[5];
      } else {
        return rect;
      }
  
      var to = style.transformOrigin;
      var x = rect.x - dx - (1 - sx) * parseFloat(to);
      var y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
      var w = sx ? rect.width / sx : el.offsetWidth;
      var h = sy ? rect.height / sy : el.offsetHeight;
      return {
        x: x, y: y, width: w, height: h, top: y, right: x + w, bottom: y + h, left: x
      };
    } else {
      return rect;
    }
}

// Returns the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

// Returns the window width and height
const getWinSize = () => {
    return { 
        width: window.innerWidth, 
        height: window.innerHeight 
    };
};

const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};


// Helper function that lets you dynamically figure out a grid's rows/columns as well as further refine those with "odd" or "even" ones
// https://greensock.com/forums/topic/34808-how-can-i-animate-the-odd-and-even-columns-rows-of-a-grid-with-gsapto/?do=findComment&comment=174346
const getGrid = selector => {
	let elements = gsap.utils.toArray(selector),
		bounds,
		getSubset = (axis, dimension, alternating, merge) => {
		  	let a = [], 
			  	subsets = {},
			  	onlyEven = alternating === "even",
			  	p;
			bounds.forEach((b, i) => {
				let position = Math.round(b[axis] + b[dimension] / 2),
					subset = subsets[position];
				subset || (subsets[position] = subset = []);
				subset.push(elements[i]);
			});
			for (p in subsets) {
				a.push(subsets[p]);
			}
			if (onlyEven || alternating === "odd") {
				a = a.filter((el, i) => !(i % 2) === onlyEven);
			}
		  	if (merge) {
				let a2 = [];
				a.forEach(subset => a2.push(...subset));
				return a2;
		  	}
		  	return a;
		};
	elements.refresh = () => bounds = elements.map(el => el.getBoundingClientRect());
	elements.columns = (alternating, merge) => getSubset("left", "width", alternating, merge);
	elements.rows = (alternating, merge) => getSubset("top", "height", alternating, merge);
	elements.refresh();

	return elements;
}
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
export {
    preloadImages,
    getGrid,
	getMousePos,
    getWinSize,
    isFirefox,
	calcWinsize,
    getScrollValues,
    wrapLines,
    adjustedBoundingRect,
    map,
    clamp
};