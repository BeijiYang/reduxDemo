import postsReducer from './posts' //对比下面的简写形式
import comments from './comments' //因为是默认导出，所以名字无所谓
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments //因为此处key,value一样了，可以如此简写
})

export default rootReducer
