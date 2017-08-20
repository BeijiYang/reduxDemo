let comments = [
  'comment0',
  'comment1'
]

export default function commentsReducer(state=comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}
