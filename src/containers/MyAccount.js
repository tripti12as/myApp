import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import fire  from './Fire';
import Loading from './Loading';

export default class MyAccount extends React.Component {

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View>
         <Text style = {styles.row} onPress= {this.logout}>
          Logout
         </Text>
        </View>
/*        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 16 }}>User Name</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              emailAddOfUser@domain
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <View>
          <ListItem
            title="Email Address"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Contact Number"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Country"
            rightTitle="India"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            rightIcon={<Chevron />}
          />
        </View>*/
      </ScrollView>
    );
  }

  static navigationOptions = {
    headerLeft: null
  }

  logout =() =>{
    fire.auth().signOut()
    .then(function(){
      alert('Logout Successfull');
    })
    .catch(function(error){
      alert(error);
    })
    this.props.navigation.navigate('Loading');
  }

}



const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Cochin'
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#3B5699',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 100
  },
  scroll: {
    backgroundColor: 'white',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  listItemContainer: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})
