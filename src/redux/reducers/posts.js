let posts = [
    {
      'id': '0',
      'title': 'Post0'
    },
    {
      'id': '1',
      'title': 'Post1'
    },
    {
      'id': '2',
      'title': 'Post2'
    }
]

export default function postsReducer(state = posts, action) {
  switch (action.type) {
    case 'WHATEVER':
      return state
    default:
      return state
  }
}
