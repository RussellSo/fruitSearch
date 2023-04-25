const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let ul = document.querySelector("ul")

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 
'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 
'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 
'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 
'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 
'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) { 
	let results = [];

	// TODO --
	
	let filtered = fruit.filter((item) => {
		lowercased = item.toLowerCase()
		if (lowercased.includes(str)) {
			return fruit
		}
	})
	
	filtered5 = filtered.slice(0,5)
	return filtered5
}

function searchHandler(e) {
	// TODO -- 
	showSuggestions(search(e.target.value), e.target.value)

}

function showSuggestions(results, inputVal) {

	// TODO 
	//resets li forms when user types or erase
	let allLi = document.querySelectorAll("li")
	for (let oneLi of allLi) {
		oneLi.remove()
	}
	
	//creates dropdown list
	for (let val of results) {
		let lowerVal = val.toLowerCase()
		 if (lowerVal.indexOf(input.value) !== -1 && input.value !== "") {
		// if (lowerVal.startsWith(input.value)) {
			let li = document.createElement("li")
			li.className = "list-item"
			li.innerText = val
			ul.append(li)
		}
	}
	//bolds the matching letters
	// (failed code - only bolded by index) let word = "<b>" + val.slice(0, input.value.length) + "</b>" + val.slice(input.value.length)
		
	}


function useSuggestion(e) {
	// TODO --- this will make the innerText of the text input the users clicked suggestion
	input.value = e.target.innerText

}

input.addEventListener('keyup', searchHandler)



suggestions.addEventListener('click', useSuggestion);