// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, StatusBar } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
// import { } from ... car c'est un export nommé dans TMDBApi.js

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            searchedText: "", // initialisation de notre donnée searched Text dans notre State 
            isLoading: false // initialisation du loader 
        }
    }

    _loadFilms() {
        console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        if (this.state.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            this.setState({ isLoading: true }) // Lancement du chargement
            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
                this.setState({ films: data.results, isLoading: false })
            })
        }
    }
    _displayLoading() { // fonction du loader
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }
    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
    render() {
        //  console.log(this.state.isLoading)
        return (
           <View>
                <StatusBar backgroundColor="black" />
            </View> 
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()} />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
                {this._displayLoading()}
            </View>
                )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#000100'
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5,
        backgroundColor: '#FBFBFF',
        color: '#000100'
    },
    /* button: {
                    backgroundColor:'grey'
              }*/
    // Components/Search.js
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Search