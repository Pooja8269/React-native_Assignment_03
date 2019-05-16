import React,{Component} from 'react';
import { ScrollView, ActivityIndicator, View} from 'react-native';
import AlbumDetail from './AlbumDetail';
import ComponentStyle from './ComponentStyle'

class AlbumList extends Component{
state = { data:[], loading: true };

              /** Another way to fetch API through npm plugin */
             // import axios from 'axios'; first  need to import this plugin
             // componentWillMount(){
             //   axios.get('https://picsum.photos/v2/list?page=2&limit=100')
             //   .then(response => this.setState({data: response.data}));
             // }

  componentWillMount(){
    fetch('https://picsum.photos/v2/list?page=2&limit=100').then(response => response.json())
      .then((responseJson)=> {
        this.setState({ loading: false, data: responseJson})
      }).catch(error=>console.log(error))
  }

  renderAlbums(){
    var size = 15;
    var data = this.state.data.slice(0,size);
    return data.map(data => <AlbumDetail key={data.id} data={data} />);
  }

  render(){
    if(this.state.loading){
      return( 
        <View style={ComponentStyle.loader}> 
           <ActivityIndicator size="large" color='#03255b'/>
        </View>
    )}
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView> 
    );
  } 
}

export default AlbumList;