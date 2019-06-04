import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import TeamsScreen from '../screens/TeamsScreen';
import TeamCardScreen from '../screens/TeamCardScreen';
import AboutScreen from '../screens/AboutScreen';

const LeaderboardStack = createStackNavigator({
  Leaderboard: {
    screen: TeamsScreen,
    navigationOptions: {
      headerTitle: 'Leaderboard'
    }
  },
  TeamCard: {
    screen: TeamCardScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('item', {}).teamName
    })
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      headerTitle: 'About'
    }
  }
});

const Tabs = createBottomTabNavigator({
  Leaderboard: {
    screen: LeaderboardStack
  },
  About: AboutStack
});

export default createAppContainer(Tabs);
