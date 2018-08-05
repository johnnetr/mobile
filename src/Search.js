import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import SearchBar from './components/SearchBar';


const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b9839d30d81ad403d05f7a051e8f64e7&language=en-US&page=1';


export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultsData: [],
            filteredData: [],
            searchText: '',
        }
    }


    componentWillMount() {
        this.requestData();
    };

    requestData = () => {
        fetch(url).then(res => {
            return res.json().then(data => {
                this.setState({ resultsData: data.results, filteredData: data.results, loading: false });
                console.log(this.state.resultsData)
            })
        })
    }

    filterMovies = async (text) => {
        let moviesCopy = await this.state.resultsData;
        let myText = await text.toLowerCase();
        let results = await moviesCopy.filter(movie => movie.title.toLowerCase().includes(myText));
        this.setState({ filteredData: results })
    }


    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <SearchBar handleChange={(searchText) => this.filterMovies(searchText)}
                />
                <FlatList
                    data={this.state.filteredData}
                    renderItem={({ item }) => {
                        const image = { uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }
                        return (
                            <Card
                                image={image}
                                imageStyle={{ height: 500 }}
                            >
                                <Text style={{ marginBottom: 10, fontSize: 12 }}>
                                    {item.title}
                                </Text>
                                <Button
                                    icon={{ name: 'play-arrow' }}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                    title='Watch Trailer' />
                            </Card>
                        )
                    }
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                <View>

                </View>
            </View>
        )
    }
}