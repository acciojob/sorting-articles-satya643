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

// Function to remove leading articles
function stripArticle(bandName) {
	return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands ignoring articles
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Display in the UL
document.getElementById('band').innerHTML = sortedBands
	.map(band => `<li>${band}</li>`)
	.join('');
