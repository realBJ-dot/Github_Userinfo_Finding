import { Alert } from "react-native";

export class parseModel {
    constructor (json) {
        this.getInfo(json);
    }
    getInfo(json) {
        
        const data = json.data.user
        if (data === null) { //fixed non existant user
          Alert.alert(
            "User not Exist",
            "You might want to try again"
          );
        } else {
          this.userName = data.name;
          this.userLogin = data.login;
          this.email = data.email;
          this.avatar = data.avatarUrl;
          this.createdAt = data.createdAt;
          this.updatedAt = data.updatedAt;
          this.followers = data.followers;
          this.following = data.following;
          this.repo = data.repositories;
          this.website = data.websiteUrl;
        }
    }
}
const QUERY = `{
    user(login: "{:USER_LOGIN:}") {
        login
        name
        email
        avatarUrl
        bio
        websiteUrl
        createdAt
        updatedAt
        following(first: 100) {
          totalCount
          edges {
            node {
              login
              name
              avatarUrl
            }
          }
        }
        followers(first: 100) {
          edges {
            node {
              login
              name
              avatarUrl
            }
          }
        }
        repositories(first: 100) {
          edges {
            node {
              url
              name
              owner {
                login
              }
              description
            }
          }
        }
      }
  
}`;



const requestInfo = async function
requestInfo(user,  AUTH = "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") {
    const thisQ = QUERY.replace(/\n/g, ' ').replace('{:USER_LOGIN:}', user);
    const url = 'https://api.github.com/graphql';
    let data;
    const queryData = JSON.stringify({query: thisQ});
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `bearer ${AUTH}`,
        },
        body: queryData
    }).then((response) => response.json()).then((json) => {
        data = json
    }).catch((error) => {
        console.error(error);
    });
    const model = new parseModel(data)
    return model
}
export default requestInfo
