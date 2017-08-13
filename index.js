function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.getElementById('nested').getElementsByClassName('target')[0] 
}

function deepestChild(){
	let current = document.getElementById("grand-node")

	while(current) {

		if(current.children.length === 0) {
			return current
		}

		if (current.children) {
			current = current.children[0]
		}
	}
	return null
}

function increaseRankBy(n){
	const rankedList = document.getElementById("app").querySelectorAll('ul.ranked-list li')
	for (let i = 0; i < rankedList.length; i++){
		rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
	}
}