import React, { Component } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import SingleTeam from './SingleTeam';

export default class TeamList extends Component {

  static propTypes = {
    teams: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.list} >
        <FlatList
          data={this.props.teams}
          renderItem={({item}) => <SingleTeam single={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eee',
    padding: 50,
  }
});