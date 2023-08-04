import React, {useEffect, useState} from 'react';
import {Button, Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {IconButton} from "react-native-paper";


export default function App() {
    const [score, setScore] = useState(0);
    const [clickPower, setClickPower] = useState(1)
    const [cookieDisable, setCookieDisable] = useState(true)
    const [chocolatDisable, setChocolatDisable] = useState(true)
    const [resetDisable, setResetDisable] = useState(true)
    const [cookieUpgradeCost, setCookieUpgradeCost] = useState(10)
    const [chocolatUpgradeCost, setChocolatUpgradeCost] = useState(500)


    function reset() {
        setScore(0)
        setClickPower(1)
        setCookieDisable(true)
        setChocolatDisable(true)
        setResetDisable(true)
        setCookieUpgradeCost(10)
        setChocolatUpgradeCost(500)
    }


    function cookieUpgrade() {
        setClickPower(clickPower * 2);
        setScore(score - cookieUpgradeCost);
        setCookieUpgradeCost(cookieUpgradeCost * 2);
    }

    useEffect(() => {
        if (score >= cookieUpgradeCost) {
            setCookieDisable(false)
        } else {
            setCookieDisable(true)
        }
    })

    function chocolatUpdate() {
        setClickPower(clickPower * 5);
        setScore(score - chocolatUpgradeCost);
        setChocolatUpgradeCost(chocolatUpgradeCost * 2);
    }

    useEffect(() => {
        if (score >= chocolatUpgradeCost) {
            setChocolatDisable(false)
        } else {
            setChocolatDisable(true)
        }
    })


    useEffect(() => {
        if (score === 0) {
            setResetDisable(true)
        } else {
            setResetDisable(false)
        }
    });


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={styles.text}>
                        Score : {score}
                    </Text>
                </View>

                <View style={styles.clicker}>
                    <Pressable
                        onTouchEnd={() => {
                            setScore(score + clickPower);
                        }}>
                        <Image
                            style={styles.cookie}
                            source={{uri: "https://st4.depositphotos.com/1002351/30883/i/450/depositphotos_308837614-stock-photo-one-chocolate-chip-cookie-isolated.jpg"}}/>
                    </Pressable>

                </View>

                <View style={styles.upgradeContainer}>
                    <View style={styles.upgradeStyles}>
                        <View style={styles.upgradeCookie}>
                            <Button onPress={() => {
                                cookieUpgrade();
                            }}
                                    title={"Améliorer le cookie"}
                                    color={"red"}
                                    disabled={cookieDisable}
                            />
                        </View>
                        <View style={styles.upgradeCookie}>
                            <Button onPress={() => {
                                chocolatUpdate()
                            }}
                                    title={"Améliorer le chocolat"}
                                    color={"red"}
                                    disabled={chocolatDisable}
                            />
                        </View>
                        <View style={styles.upgradeCookie}>
                            <IconButton
                                onPress={reset}
                                title={"Reset le score"}
                                color={"red"}
                                icon={"restart"}
                                disabled={resetDisable}
                            />
                        </View>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    );
};

let size = Dimensions.get("screen")

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "red",
        width: size.width,
        height: size.height / 5,
        justifyContent: "center",
    },
    upgradeContainer: {

        borderRadius: 5,
        height: size.height / 1.8,
        width: size.width,
        alignItems: "center",

    },
    upgradeStyles: {

        width: size.width - (size.width / 15) * 2,
        height: size.height / 2.5,
        marginTop: size.height / 2 - size.height / 2.15,
        borderRadius: size.width / 25,
        backgroundColor: 'white'
    },
    container: {
        height: size.height,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    clicker: {
        justifyContent: "center",
        alignItems: "center",
        width: size.width,
        height: size.height / 3,


    },
    cookie: {
        width: size.width / 2,
        height: size.width / 2,
    },
    text: {
        textAlign: "center",
        textTransform: "uppercase",
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    upgradeCookie: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 25,
        borderRadius: 5,
    }

})