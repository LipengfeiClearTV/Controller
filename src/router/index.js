import Vue from 'vue'
import Router from 'vue-router'
import LiveList from '@/components/Live/LiveList'
import MovieList from '@/components/Movie/MovieList'
import MovieDetail from '@/components/Movie/MovieDetail'
import ButtonControl from '@/components/RemoteControl/ButtonControl'
import ButtonAndRoomControl from '@/components/RemoteControl/ButtonAndRoomControl'
import NoMenuButtonControl from '@/components/RemoteControl/NoMenuButtonControl'
import NoMenuAndRoomControl from '@/components/RemoteControl/NoMenuAndRoomControl'
import Login from '@/components/Login'
// import Index from '@/components/Index'


Vue.use(Router)
var routes = [
  // {path: "/", component: Index, meta: { title: '登录中'}},
  {name:"Login",path: "/Login", component: Login, meta: { title: '登录中'}},
  {name:"ButtonControl",path: "/ButtonControl", component: ButtonControl, meta: { title: '遥控器'}},
  {name:"ButtonAndRoomControl",path: "/ButtonAndRoomControl", component: ButtonAndRoomControl, meta: { title: '遥控器'}},
  {name:"NoMenuButtonControl",path: "/NoMenuButtonControl", component: NoMenuButtonControl, meta: { title: '遥控器'}},
  {name:"NoMenuAndRoomControl",path: "/NoMenuAndRoomControl", component: NoMenuAndRoomControl, meta: { title: '遥控器'}},
  {name:"MovieList",path: "/MovieList", component: MovieList, meta: { title: '电影列表'}},
  {name:"MovieDetail",path: "/MovieDetail", component: MovieDetail, meta: { title: '电影详情'}},
  {name:"LiveList",path: "/LiveList", component:LiveList, meta: { title: '直播列表'}}
]

export default new Router({
  routes
})
