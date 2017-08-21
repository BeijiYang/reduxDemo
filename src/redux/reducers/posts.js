let posts = [
    {
      'id': '0',
      'title': 'Post0',
      'like': 3
    },
    {
      'id': '1',
      'title': 'Post1',
      'like': 4
    },
    {
      'id': '2',
      'title': 'Post2',
      'like': 3
    }
]

export default function postsReducer(state = posts, action) {
  switch (action.type) {
    case 'ADD_LIKE':
      let newState = state.map(
        (item) => {
          if(item.id === action.postId){
            return {...item, like: item.like + 1}
          }
          return item
        }
      )
      return newState
    default:
      return state
  }
}
