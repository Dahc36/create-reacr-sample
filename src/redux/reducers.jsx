export let numReducer = (state = 34, action) => {
	switch(action.type){
		case 'ADD':
			return ++state;
		case 'SUB':
			return --state;
		default:
			return state;
	}
};