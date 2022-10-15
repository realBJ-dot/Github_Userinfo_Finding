import React, { useState } from "react";
import {
    StyleSheet, Text, View, TextInput, Button, TouchableOpacity
  } from 'react-native';
import requestInfo from '../model/parse_profile';
import FlexDirectionBasics from '../utilities/flex_directions';

class followerUI extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = { 
            user : "realBJ-dot",
            followers_list : [],
            user1Avatar : null,
            user1Name : null,
            user1UserName : null
        }
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
        container: {
            flex: 1,
            padding: 20,
        },
    })
        
    Display() {
        const  {user}  = this.state;
        this.setState({followers_list : []});
        requestInfo(user)
          .then((model) => {
            if (model.userLogin === null) {
                console.log(model);
                Alert.alert({
                    "The user does not exist":
                    "Please try again"
                })
            } else {
                //console.log(model.followers.edges[0]["node"]["login"]);
                for (var i = 0; i < model.followers.edges.length; i++) {
                    if (i === model.followers.edges.length - 1) { // if it is the last one, dont add "," at the end
                        this.setState({ 
                            followers_list : [this.state.followers_list, model.followers.edges[i]["node"]["login"]]
                        })
                    } else {
                        this.setState({
                            followers_list : [this.state.followers_list, model.followers.edges[i]["node"]["login"] + " ,"]
                        })
                    }  
                }
                
            }

        });
      }
      Display_follower_info() {

        for (var i = 0; i < this.followers_list.length; i++) {
            const {thisUser} = this.followers_list[i];
            requestInfo(thisUser)
            .then((model) => { //no need to check null since it is already a name of a user
                this.setState({
                    user1Avatar : model.avatar,
                    user1UserName : model.userName,
                    user1Name : model.userName
                })

            })
        }
    }
    render() {
        const { user } = this.state;
        const textStyle = {
            color: "blue"
          };
        
        return (
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                    }}>
                    <TextInput
                        style={this.styles.inputBox}
                        onChangeText={(text) => this.setState({ user: text })}
                        defaultValue={user}
                    />
                    <Button title = {"Search"} onPress={() => this.Display() }/>
                    <Text style={textStyle}>
                        Followers: {this.state.followers_list}
                    </Text>
                    <TouchableOpacity component={FlexDirectionBasics}></TouchableOpacity>
                    
                </View>
            
            </View>
            
            
        )
    }
}
export default followerUI;