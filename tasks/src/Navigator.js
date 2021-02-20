import { createAppContainer, createSwitchNavigator} from 'react-navigation'

import Auth from './screens/Auth'
import TasksList from './screens/TasksList'

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: TasksList
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})
export default createAppContainer(mainNavigator)