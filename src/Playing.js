import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';



const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b9839d30d81ad403d05f7a051e8f64e7&language=en-US&page=1';

export default class Playing extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: (
      <View style={{ marginRight: 20 }}>
        <Icon
          name='search'
          type='evilicon'
          reverseColor='true'
          onPress={() => { navigation.navigate('Search'); }}
        />
      </View>
    ),
  });


  constructor(props) {
    super(props);

    this.state = {
      resultsData: null,
      filteredData: null,
      loading: null,
    }
  }

  componentWillMount() {
    this.requestData();
  };

  requestData = () => {
    fetch(url).then(res => {
      return res.json().then(data => {
        this.setState({ resultsData: data.results, filteredData: data.results, loading: false });
        console.log(this.state.filteredData)
      })
    })
  }



  render() {
    return (
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
                {item.overview}
              </Text>
              <Button
                icon={{ name: 'play-arrow' }}
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='Watch Trailer' 
                onPress={() => this.props.navigation.navigate('Search')}
                />
                
            </Card>
          )
        }
        }
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
