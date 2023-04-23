import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { faHome, faSquarePlus, faDatabase, faUserGear, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomePage from './homepage/hpRoute';
import BotOperation from './botOperation/botOperation';
import Database from './database/dataBase';
import Organization from './organization/orgroute';
import CreateHotspot from './homepage/createHotspot';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor='#000000'
        inactiveColor="#434242"
        //labeled={false}
        barStyle={{
          backgroundColor: '#DAF3FF',
          padding: '1%',
          margin:'1%',
          position: 'relative',
          overflow: 'hidden',
          //borderRadius: 25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <Tab.Screen
          name="HomePage"
          component={CreateHotspot}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={20} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Create Hotspot"
          component={CreateHotspot}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faSquarePlus} color={color} size={20} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Bot Operation"
          component={BotOperation}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserGear} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Database"
          component={Database}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faDatabase} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Organization"
          component={Organization}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faPeopleGroup} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
