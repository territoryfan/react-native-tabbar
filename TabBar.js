import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableHighlight,
	Dimensions,
	Animated
} from 'react-native';
import React, { Component } from 'react';
import TabBarItem from "./TabBarItem";
import TabBarCenter from "./TabBarCenter";
export default class TabBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            defaultPage: 0,
            navFontSize: 12,
            navTextColor: "rgb(148, 148, 148)",
            navTextColorSelected: 'rgb(51, 163, 244)',
        }
    }
    
    render() {
        const {
            children,
        } = this.props;
        const {
            selectedIndex,
            navFontSize,
            navTextColor,
            navTextColorSelected,
        } = this.state;
        return(
            <View style={[styles.container,this.props.style]}>
                <TabBarCenter setBtn="0"/>
                {children[selectedIndex]}
                <View style={styles.content}>
                    {
                        React.Children.map(children,  (child,i) => {
                            const imgSrc = selectedIndex == i ? child.props.selectedIcon : child.props.icon;
                            const color = selectedIndex == i ? navTextColorSelected : navTextColor;
                            if(i==1) {
                                return (
                                    <TouchableHighlight
                                        key={i}
                                        underlayColor={"transparent"}
                                        style={[styles.navItem]}
                                        onPress = {
                                            () => {
                                                this.update(i);
                                            }
                                        }
                                    >
                                        <TabBarCenter setBtn="1"/>
                                    </TouchableHighlight> 
                                );
                            }else{
                                return (
                                    <TouchableHighlight
                                        key={i}
                                        underlayColor={"transparent"}
                                        style={styles.navItem}
                                        onPress = {
                                            () => {
                                                this.update(i);
                                            }
                                        }
                                    >
                                        <View style={styles.center}>
                                            <Image 
                                                style={styles.navImage}
                                                resizeMode="cover" 
                                                source={imgSrc}
                                            />
                                            <Text style={[styles.navText,{color: color,fontSize: navFontSize}]}>
                                                {child.props.title}
                                            </Text>
                                            
                                        </View>
                                    </TouchableHighlight> 
                                );
                            }
                            
                        })
                    }
                </View>
            </View>
        );
    }
    
    update(index) {
        this.setState({
            selectedIndex: index,
        });
    }
}
TabBar.Item = TabBarItem;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        height: 50,
        flexDirection:"row",
        backgroundColor:"#fff",
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
    },
    center: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navImage: {
        width: 22,
        height: 22,
    },
	navText: {
	marginTop: 3,
        alignSelf: 'center',
    }
});


