import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import ajax from '../ajax';
import TeamList from './TeamList';

export default class App extends Component {

  state = {
    teams: [],
  }

  componentDidMount = async () => {
    const teams = await ajax.fetchInitialDeals();
    this.setState({ teams });
    console.log(data);
  };
  
  render() {
    return (
      <View style={styles.container} >
        {
          this.state.teams.length > 0 
          ? (<TeamList teams={this.state.teams} /> )
          : (<Text style={styles.header}>Hello React</Text>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  }
});
