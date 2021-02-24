import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, Platform } from "react-native";
import { SvgUri } from 'react-native-svg';

const Liste = () => {
    const [countries, setCountries] = useState([]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text>{item.name}</Text>
                <Text>{item.capital}</Text>
                <Text>
                    {Platform.OS === 'android' ? (
                        <View>
                            <SvgUri
                                width="200"
                                height="100"
                                uri={`${item.flag}`}
                            ></SvgUri>
                        </View>
                    ) : (
                            <View>
                                <Image
                                    style={styles.drapeau}
                                    source={{ uri: item.flag }}
                                ></Image>
                            </View>
                        )}
                </Text>



            </View>

        );
    };

    useEffect(() => {
        fetch("http://restcountries.eu/rest/v2/all")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setCountries(response);
            });

    }, []);

    if (countries.length === 0) {
        return <Text style={styles.titles}>Cela arrive Dave</Text>;
    } else {
        return (
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            ></FlatList>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,

    },
    drapeau: {
        width: 300,
        height: 150

    },
    titles: {
        paddingVertical: 40,
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default Liste;