import React, {useState, useEffect} from 'react'
import { View, Alert, ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CTwriting from '../Custom/writing';
import CTbutton from '../Custom/button';
import { DbConnect } from '../Database/Db-Connect'
import CTchar from '../Custom/char';

const db = DbConnect.getConnection()

const CreateHome = ({navigation}) => {
    const [property, setProperty] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [datetime, setDatetime] = useState("")
    const [monthlyprice, setMonthlyprice] = useState("")
    const [furniture, setFurniture] = useState("")
    const [notes, setNotes] = useState("")
    const [namereporter, setNamereporter] = useState("")

    const create = () => {
        if(!property) {
            Alert.alert("Please enter all information !")
            return
        }
        if(!bedrooms) {
            Alert.alert("Please enter all information !")
            return
        }
        if(!datetime) {
            Alert.alert("Please enter all information!")
            return
        }
        if(!monthlyprice) {
            Alert.alert("Please enter all information!")
            return
        }
        if(!namereporter) {
            Alert.alert("Please enter all information!")
            return
        } else {
            db.transaction(function(tx){
                tx.executeSql(
                    "INSERT INTO table_user (Property, Bedrooms, Datetime, Monthlyprice, Furniture, Notes, Namereporter) VALUES (?,?,?,?,?,?,?)", 
                    [property, bedrooms, datetime, monthlyprice, furniture, notes, namereporter],
                    (tx, results) => {
                        console.log(results.rowsAffected)
                    }
                )
            })
            navigation.navigate("Index")
        }
    }

    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(Id INTEGER PRIMARY KEY AUTOINCREMENT, Property TEXT , Bedrooms INTEGER, Datetime INTEGER, Monthlyprice INTEGER, Furniture TEXT, Notes TEXT, Namereporter TEXT)',
                  []
                );
              }
            }
          );
        });
      }, []);

    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user',
            [],
            (tx, results) => {
              console.log(JSON.stringify(results.rows))
            }
          );
        });
      }, []);   

    return (
    <View style={{flex :1, backgroundColor: 'white'}}>
        <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <CTchar text="Create"/>
            
            <CTwriting
                placeholder="Property type"
                style={{padding: 10}}
                onChangeText={(property) => setProperty(property)}
            />

            <Picker
                selectedValue={bedrooms}
                style={{ padding: 10, 
                        width: 280,
                        marginTop: 15,
                        borderColor: 'black',
                         }}
                onValueChange={(itemValue, itemIndex) => setBedrooms(itemValue)}>

                <Picker.Item label="Bedrooms" value="" />
                <Picker.Item label="Bedrooms simple" value="1" />
                <Picker.Item label="Bedrooms flex" value="2" />
                <Picker.Item label="Bedrooms vip" value="3" />
            </Picker>

            <CTwriting
                placeholder="Date and Time"
                style={{padding: 10}}
                onChangeText={(datetime) => setDatetime(datetime)}
            />
            <CTwriting
                placeholder="Monthly rent price"
                style={{padding: 10}}
                onChangeText={(monthlyprice) => setMonthlyprice(monthlyprice)}
            />

            <Picker
                selectedValue={furniture}
                style={{ padding: 20, 
                        width: 280,
                        marginTop: 30,
                        borderColor: 'black',
                        
                         }}
                onValueChange={(itemValue, itemIndex) => setFurniture(itemValue)}>

                <Picker.Item label="Furniture" value="" />
                <Picker.Item label="Smart furniture" value=" smart Furnished" />
                <Picker.Item label="Furnished part" value="Furnished part" />
            </Picker>

            <CTwriting
                placeholder="note"
                style={{ padding: 20}}
                multiline={true}
                numberOfLines={5}
                onChangeText={(notes) => setNotes(notes)}
            />
            <CTwriting
                placeholder="Name of the reporter"
                style={{padding: 20}}
                onChangeText={(namereporter) => setNamereporter(namereporter)}
            />
            <CTbutton title="Create" handlePress={create}/>
        </View>
        </ScrollView>
    </View>
    )
}


export default CreateHome;