import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './pages/homepage';
import LoginPage from './pages/login_page';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Settings" component={LoginPage} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}