import React, { useState } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { Button } from 'react-native-elements';
import CTbutton from '../../Custom/button'
import LBModal from 'react-native-modal'
import { Audio } from 'expo-av';

const Notification = () => {
  const [modalView, setmodalView] = useState(false);

  const turnOnModal = () => {
    setmodalView(!modalView);
  };

  const RingBell = async () => {
    const { sound } = await Audio.Sound.createAsync(
    require('./notification_sound.mp3'));
    await sound.playAsync();
  };

  const Vibrate = () => {
    Vibration.vibrate(1000);
  };

  return (
    <View style={styles.container}>
      <CTbutton
        title="Choose"
        handlePress={turnOnModal}
      />
      <LBModal isVisible={modalView}>
        <View style={{justifyContent: 'center',
                      flex: 1,
                      backgroundColor: '#fff'}}>
          <View style={{flexDirection:'row',
                        justifyContent:'space-around',
                        }}>
            <Button
              buttonStyle={{
                backgroundColor: '#663300',
              }}
              title="Ring bell"
              onPress={RingBell}
            />
            <Button
              buttonStyle={{
                backgroundColor: '#663300',
              }}
              title=" Vibrate"
              onPress={Vibrate}
            />
          </View>
          <Button
            titleStyle={{
              color: '#663300',
            }}
            type="clear"
            title="Back"
            onPress={turnOnModal}
          />
        </View>
      </LBModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Notification;