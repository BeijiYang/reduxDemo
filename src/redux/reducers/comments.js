let comments = [
  {
     text: '66666666',
     post: '0'
   },
   {
     text: '233333',
     post: '1'
   },
   {
     text: '6666699999',
     post: '1'
   }
]

export default function commentsReducer(state=comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}
