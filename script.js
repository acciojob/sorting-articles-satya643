const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

// Remove leading articles
function stripArticle(bandName) {
	return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring articles
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Display in UL
document.getElementById('bands').innerHTML = sortedBands
	.map(band => `<li>${band}</li>`)
	.join('');
