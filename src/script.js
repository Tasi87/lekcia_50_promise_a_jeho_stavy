//idea	Promise a jeho stavy

	// pending - prebiehajúce
	// fulfilled - splnené
	// rejected - odmietnuté

const p = document.createElement("p")
document.body.append(p)
	
const request = fetch("https://api.kanye.rest")
					.then( response => response.json())
					.then( data => p.textContent = data.quote)
	
