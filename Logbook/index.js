import React from 'react'
import {View} from 'react-native'
import CTbutton from '../Custom/button'
import CTchar from '../Custom/char'

const Index = ({navigation}) => {
    
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, alignItems: 'center'}}>

                <CTchar
                text="RentalZ"
                />

                <CTbutton 
                title="Notification" 
                handlePress={() => navigation.navigate('Notification')}
                />

                <CTbutton 
                title="Create Infor" 
                handlePress={() => navigation.navigate('Create')}
                />
            </View>
        </View>
    )
}

export default Index