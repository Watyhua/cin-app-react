// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film
    return (
      <View style={styles.globale_container}>
        <View>
          <Image
            style={styles.Image}
            source={{ uri: getImageFromApi(film.poster_path) }}
          />
        </View>
        <View style={styles.main_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.Vote}>{film.vote_average}</Text>
          </View>
          <View style={styles.Description}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.Sorti}>
            <Text>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  globale_container: {
    flexDirection: 'row',
    margin: 7,
    //   backgroundColor:'black'
  },
  main_container: {
    flex: 1,
    flexDirection: 'column',
    height: 190,

  },
  header_container: {
    //titre et vote
    flexDirection: 'row',
    flex: 1,
  },
  title_text: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 5,
    flexDirection: 'row',
    marginLeft: 10,
    fontSize: 20,
     color:'#fff'
  },
  Vote: {
    flex: 1,
    flexDirection: 'row',
    color:'#fff'
  },
  Description: {
    flex: 4,
    margin: 10
  },
  description_text: {
    fontStyle: 'italic',
    color: '#fff'
  },
  Sorti: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    color: 'green'
  },
  Image: {
    height: 190,
    width: 120
  }
})

export default FilmItem