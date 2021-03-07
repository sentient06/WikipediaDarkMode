//
// BSD 3-Clause Licence
//
// Copyright (c) 2021, Giancarlo Mariot
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its
//    contributors may be used to endorse or promote products derived from
//    this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

const colourNames = {
	// Red colours
	lightsalmon: "#ffa07a",
	salmon: "#fa8072",
	darksalmon: "#e9967a",
	lightcoral: "#f08080",
	indianred: "#cd5c5c",
	crimson: "#dc143c",
	firebrick: "#b22222",
	red: "#ff0000",
	darkred: "#8b0000",
	// Orange colours
	coral: "#ff7f50",
	tomato: "#ff6347",
	orangered: "#ff4500",
	gold: "#ffd700",
	orange: "#ffa500",
	darkorange: "#ff8c00",
	// Yellow colours
	lightyellow: "#ffffe0",
	lemonchiffon: "#fffacd",
	lightgoldenrodyellow: "#fafad2",
	papayawhip: "#ffefd5",
	moccasin: "#ffe4b5",
	peachpuff: "#ffdab9",
	palegoldenrod: "#eee8aa",
	khaki: "#f0e68c",
	darkkhaki: "#bdb76b",
	yellow: "#ffff00",
	// Green colours
	lawngreen: "#7cfc00",
	chartreuse: "#7fff00",
	limegreen: "#32cd32",
	lime: "#00ff00",
	forestgreen: "#228b22",
	green: "#008000",
	darkgreen: "#006400",
	greenyellow: "#adff2f",
	yellowgreen: "#9acd32",
	springgreen: "#00ff7f",
	mediumspringgreen: "#00fa9a",
	lightgreen: "#90ee90",
	palegreen: "#98fb98",
	darkseagreen: "#8fbc8f",
	mediumseagreen: "#3cb371",
	seagreen: "#2e8b57",
	olive: "#808000",
	darkolivegreen: "#556b2f",
	olivedrab: "#6b8e23",
	// Cyan colours
	lightcyan: "#e0ffff",
	cyan: "#00ffff",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	mediumaquamarine: "#66cdaa",
	paleturquoise: "#afeeee",
	turquoise: "#40e0d0",
	mediumturquoise: "#48d1cc",
	darkturquoise: "#00ced1",
	lightseagreen: "#20b2aa",
	cadetblue: "#5f9ea0",
	darkcyan: "#008b8b",
	teal: "#008080",
	// Blue colours
	powderblue: "#b0e0e6",
	lightblue: "#add8e6",
	lightskyblue: "#87cefa",
	skyblue: "#87ceeb",
	deepskyblue: "#00bfff",
	lightsteelblue: "#b0c4de",
	dodgerblue: "#1e90ff",
	cornflowerblue: "#6495ed",
	steelblue: "#4682b4",
	royalblue: "#4169e1",
	blue: "#0000ff",
	mediumblue: "#0000cd",
	darkblue: "#00008b",
	navy: "#000080",
	midnightblue: "#191970",
	mediumslateblue: "#7b68ee",
	slateblue: "#6a5acd",
	darkslateblue: "#483d8b",
	// Purple colours
	lavender: "#e6e6fa",
	thistle: "#d8bfd8",
	plum: "#dda0dd",
	violet: "#ee82ee",
	orchid: "#da70d6",
	fuchsia: "#ff00ff",
	magenta: "#ff00ff",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	blueviolet: "#8a2be2",
	darkviolet: "#9400d3",
	darkorchid: "#9932cc",
	darkmagenta: "#8b008b",
	purple: "#800080",
	indigo: "#4b0082",
	// Pink colours
	pink: "#ffc0cb",
	lightpink: "#ffb6c1",
	hotpink: "#ff69b4",
	deeppink: "#ff1493",
	palevioletred: "#db7093",
	mediumvioletred: "#c71585",
	// White colours
	white: "#ffffff",
	snow: "#fffafa",
	honeydew: "#f0fff0",
	mintcream: "#f5fffa",
	azure: "#f0ffff",
	aliceblue: "#f0f8ff",
	ghostwhite: "#f8f8ff",
	whitesmoke: "#f5f5f5",
	seashell: "#fff5ee",
	beige: "#f5f5dc",
	oldlace: "#fdf5e6",
	floralwhite: "#fffaf0",
	ivory: "#fffff0",
	antiquewhite: "#faebd7",
	linen: "#faf0e6",
	lavenderblush: "#fff0f5",
	mistyrose: "#ffe4e1",
	// Grey colours
	gainsboro: "#dcdcdc",
	lightgray: "#d3d3d3",
	silver: "#c0c0c0",
	darkgray: "#a9a9a9",
	gray: "#808080",
	dimgray: "#696969",
	lightslategray: "#778899",
	slategray: "#708090",
	darkslategray: "#2f4f4f",
	black: "#000000",
	// Brown colours
	cornsilk: "#fff8dc",
	blanchedalmond: "#ffebcd",
	bisque: "#ffe4c4",
	navajowhite: "#ffdead",
	wheat: "#f5deb3",
	burlywood: "#deb887",
	tan: "#d2b48c",
	rosybrown: "#bc8f8f",
	sandybrown: "#f4a460",
	goldenrod: "#daa520",
	peru: "#cd853f",
	chocolate: "#d2691e",
	saddlebrown: "#8b4513",
	sienna: "#a0522d",
	brown: "#a52a2a",
	maroon: "#800000",
};


const allElementsWithBespokeBackground = document.querySelectorAll('*[style*="background"], *[style*="color"]');
const allElementsWithOldBackground = document.querySelectorAll('[bgcolor]');
console.log('→', allElementsWithBespokeBackground.length + allElementsWithOldBackground.length, 'elements with inline colours.');

const skippedColourCodes = [
	"transparent",
	"none",
	"inherit",
	"none transparent"
];

// console.log(allElementsWithBespokeBackground);

const backgroundRegex = /(?:background(?:-color)?:\s*)([^;.]*)/gm;
const foregroundRegex = /(?<!-)(?:color:\s*)([^;.]*)/gm;
const rgbRegex = /rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/gm;

function changeLuminosity(colourParam, luminosityParam) {
	// Test colour code:
	let colour = new String(colourParam).replace(/[^0-9a-f]/gi, '');
	if (colour.length < 6) {
		colour = colour[0]+ colour[0]+ colour[1]+ colour[1]+ colour[2]+ colour[2];
	}
	let luminosity = luminosityParam || 0;

	// Convert to decimal and change luminosity
	let newColour = "#", c, black = 0, white = 255;
	for (let j = 0; j < 3; j++) {
		c = parseInt(colour.substr(j*2,2), 16);
		c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
		newColour += ("00"+c).substr(c.length);
	}
	return newColour;
}

function newStyleFromPattern(oldStyle, styleRegex, luminosityLevel, debugName) {
	// const regexResult = styleRegex.exec(oldStyle);
	const regexResult = [...oldStyle.matchAll(styleRegex)]?.[0] ?? [];
	// console.log(regexResult2);

	// if (regexResult !== null) {
	if (regexResult.length > 0) {
		console.log(debugName.toUpperCase());
		// Trim:
		let oldColour = regexResult[1].replace(/^\s|\s$/, '').toLowerCase();
		console.log('oldColour:', oldColour);

		// Test validity:
		if (skippedColourCodes.indexOf(oldColour) > -1) {
			console.log(`${debugName} is ${oldColour}. Continue.`);
			return null;
		}

		let newColour;
		let newStyle = oldStyle;

		if (/#[0-9a-f]{3,7}/.test(oldColour) === false) {
			console.log(`${debugName} is NOT in HEX format: ${oldColour}`);
			oldColour = colourNames?.[oldColour] || oldColour;
			console.log(`Colour names returned ${oldColour}`);
		}

		if (/#[0-9a-f]{3,7}/.test(oldColour) === false) {
			console.log(`${debugName} is still NOT in HEX format.`);
			const matchesRgb = [...oldColour.matchAll(rgbRegex)]?.[0] ?? [];
			if (matchesRgb.length > 0) {
				console.log(`${debugName} is in RGB format.`);
				console.log(matchesRgb);
				const r = 255 - parseInt(matchesRgb[1]);
				const g = 255 - parseInt(matchesRgb[2]);
				const b = 255 - parseInt(matchesRgb[3]);
				newColour = `rgb(${r}, ${g}, ${b})`;
				oldColour = matchesRgb[0]; // only for the substitution below!
			} else {
				console.log(`${debugName} colour not recognised:`, oldColour);
				console.log(item);
				return null;
			}
		} else {
			newColour = changeLuminosity(oldColour, luminosityLevel);
			console.log(`${debugName} is in HEX format.`, oldColour, '→', newColour);
		}

		console.log('→ OLD', newStyle);
		newStyle = newStyle.replace(styleRegex, (match, p1) => {
			return match.replace(p1, newColour);
		});
		console.log('→ NEW', newStyle);

		return newStyle;
	}

	console.log('REGEX failed:', regexResult);
	console.log(oldStyle);

	return null;
}

console.group('Style');

let i = 0;

for (let item of allElementsWithBespokeBackground) {
  	// Get the style:
  	const style = item.getAttribute('style');
	let newStyle = style;

	console.log('-----------------------------------');
	console.log(item);
	newStyle = newStyleFromPattern(newStyle, backgroundRegex, -0.75, 'BACKGROUND') || style;
	// console.log(' → new style:', newStyle);
	console.log('- - - - - - - - - - - - - - - - - -');
	newStyle = newStyleFromPattern(newStyle, foregroundRegex,  0.75, 'FOREGROUND') || newStyle;
	// console.log(' → new style:', newStyle);

	item.style = newStyle;

	i++;
}
console.groupEnd();
console.group('HTML');
for (let item of allElementsWithOldBackground) {
	console.log('===================================');
	console.log(item);
	const oldBgcolour = item.getAttribute('bgcolor').toLowerCase();
	let oldHex = null;
	let newHex = null;
	if (/#[0-9a-f]{3,7}/.test(oldBgcolour) === false) {
		console.log('Old colour is', oldBgcolour);
		oldHex = colourNames?.[oldBgcolour];
	} else {
		oldHex = oldBgcolour;
	}
	if (oldHex) {
		console.log('Old HEX is', oldHex);
		newHex = changeLuminosity(oldHex, -0.75);
	} else {
		console.log('Old HEX is not set.')
	}
	if (newHex) {
		console.log('New HEX is', newHex);
		item.setAttribute('bgcolor', newHex);
		i++;
	} else {
		console.log('New HEX is not set.')
	}
}
console.groupEnd();


console.log('→', i, 'element colours changed programmatically.');
