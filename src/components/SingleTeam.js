import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';
import SVGImage from 'react-native-svg-image';

export default class SingleTeam extends Component {

  static propTypes = {
    single: PropTypes.object.isRequired,
  }

  render() {
    const { single } = this.props;
    return (
      <View>
        <SVGImage
          style={{ width: 100, height: 100 }}
          source={{uri:this.props.single.team.crestUrl}}
        />
        <Text>Position: {single.position}</Text>
        <Text>points: {single.points}</Text>
        <Text>Games Played: {single.playedGames}</Text>

        {
          // <SvgUri
          //   width="200"
          //   height="200"
          //   source={{uri: this.props.single.team.crestUrl}} 
          //   style={styles.image} 
          // />
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
});
