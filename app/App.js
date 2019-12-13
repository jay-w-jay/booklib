import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

const TabNavigator = createBottomTabNavigator({
  Bookcase: Bookcase,
  AddBook: AddBook,
  Explore: Explore,
  Lists: Lists,
  Profile: Profile
});


export default createAppContainer(TabNavigator);