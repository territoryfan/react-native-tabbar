import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
export default class TabBarCenter extends Component {
  render() {
    const style = this.props.setBtn ==0 ? styles.centerView : styles.centerViewBtn;
    return (
        <View style={[style,styles.eqView]}>
            <Text style={styles.centerViewText}>+</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    eqView: {
        width: 50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgb(148, 148, 148)",
        borderRadius:80,
    },
    centerView: {
        position: "absolute",
        left: Dimensions.get('window').width/2,
        bottom:15,
        right:0,
        marginLeft:-25,        
    },
    centerViewBtn: {
        position: "absolute",
        bottom:15,  
    },
    centerViewText: {
        color: "#fff",
        fontSize: 34,
    },
});

