let arr = [ 1,2,7]

function sevenBoom(arr) {
	let str = arr.join()
	let newsplit = str.split('')
	for(let i = 0; i < newsplit.length; i++){
		if ( arr[i] === 7){
			return 'Boom!'
		} else {
			return 'there is no 7 in the array'
		}
	}
}

sevenBoom(arr)