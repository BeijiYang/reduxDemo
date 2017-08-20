let comments = [
  'comment1',
  'comment2'
]

export default function rootReducer(state=comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...comments, action.comment]
    default:
      return state
  }
}
