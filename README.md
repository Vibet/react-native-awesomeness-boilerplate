# React Native AWESOMENESS Boilerplate
The react-native-awesomeness-boilerplate is a simplifier to start a new react-native app. Its has the basics configuration so you can easily start. 

# What is included ?
* Redux structure ([redux](https://redux.js.org/), [react-redux](https://react-redux.js.org/introduction/quick-start))
* [Styled components](https://styled-components.com/) for theme support (dark, light)
* Navigation structure ([react-navigation](https://reactnavigation.org/))
* Vector icons with [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## How to use it

Clone the repository into a folder in your computer, then run:
```sh
$ yarn install
$ npx pod-install
$ node app
```

Maybe you'll need to link the vector icons, to do that:
```sh
$ react-native link react-native-vector-icons
```

Don't forget to remove the remote and rename the project:
```sh
$ git remote remove origin
$ npx react-native-rename "YOUR APP NAME HERE"
```