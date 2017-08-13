function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.getElementById('nested').getElementsByClassName('target')[0] 
}

function deepestChild(){
}

function increaseRankBy(n){
	const rankedList = document.getElementById("app").querySelectorAll('ul.ranked-list li')
	for (let i = 0; i < rankedList.length; i++){
		rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
	}
}


 