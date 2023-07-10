import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Upload'
import { HeaderOnly } from '~/components/layout'

const publicRoutes= [
    {path : '/', component : Home},
    {path : '/following', component : Following},
    {path : '/upload', component : Upload,layout:null},
    {path : '/profile', component : Profile},
    {path : '/search', component : Search}
]
const privateRoutes=[

]

export {publicRoutes,privateRoutes} 