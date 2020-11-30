export const initialState = {
	score: 0,
	screen: 'Home',
	square: 0,
}

function reducer(state, action) {
	switch(action.type){
		case 'ADD_SCORE':
			return {
				...state,
				score: state.score + 1
			}

		case 'RESET_SCORE':
			return {
				...state,
				score: 0
			}

		case 'SET_SCREEN':
			return {
				...state,
				screen: action.screen
			}

		case 'SET_SQUARE':
			return {
				...state,
				square: Math.floor(Math.random() * 12)
			}

		default:
			return state
	}
}

export default reducer