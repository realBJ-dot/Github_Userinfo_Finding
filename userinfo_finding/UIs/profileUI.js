import React from 'react';
import {
    StyleSheet, Text, View, TextInput,
    Button, Alert, Image
  } from 'react-native';
import requestInfo from '../model/parse_profile';


class profileUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : "realBJ-dot",
            user_Name : null,
            avatar_ : null,
            createAt_ : null,
            userLogin_ : null,
            followers_ : null,
            follwing_ : null,
            repo_ : null,
            website_ : null
        }
    }
        
     
    Display() {
        const  {user}  = this.state;
        requestInfo(user)
          .then((model) => {
            if (model.userLogin === null) {
                console.log(model);
                Alert.alert({
                    "The user does not exist":
                    "Please try again"
                })
            } else {
                this.setState({
                    user : user,
                    user_Name : model.userName,
                    avatar_ : model.avatar,
                    createAt_ : model.createdAt,
                    userLogin_ : model.userLogin,
                    followers_ : model.followers,
                    follwing_ : model.following,
                    repo_ : model.repo,
                    website_ : model.website
                })
                
            }
        });
      }
  
    styles = StyleSheet.create({
        header: {
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '15%',
            fontSize: 16,
        },
        inputBox: {
            fontSize: 16,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            color: '#A52A2A',
            borderRadius: 5,
            marginTop: '8%',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 200,
            height: 50
        },
        submit: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
        },
        tinyLogo: {
            width: 90,
            height: 90,
            borderRadius: 90 / 2
          }
    })
    render() {
        const { user } = this.state;
        const textStyle = {
            color: "blue"
          };
        return (
            <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}> 
                <Image style={this.styles.tinyLogo} source={{uri: this.state.avatar_}}/>
                <TextInput
                    style={this.styles.inputBox}
                    onChangeText={(text) => this.setState({ user: text })}
                    defaultValue={user}
                />
                
                <Button title = {"Search"} onPress={() => this.Display() }></Button>
                <Text style={textStyle}>
                    User Name: {this.state.user_Name}
                </Text>
                <Text style={textStyle}>
                    User Login: {this.state.userLogin_}
                </Text>
                <Text style={textStyle}>
                    Created At: {this.state.createAt_}
                </Text>
                <Text style={textStyle}>
                    User Website: {this.state.website_}
                </Text>
                <Text style={textStyle}>
                    User Avatar link: {this.state.avatar_}
                </Text>
            

            </View>
            
        )
    }
    


  

}
export default profileUI;