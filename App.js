import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Progress from "react-native-progress"
import { useEffect } from 'react/cjs/react.development';


const App = () => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(999)

  useEffect(() => {
    console.log("useEffect")
    loadingProgress(0)
  }, [])

  const loadingProgress = (currentProgress) => {
    let progressTemp = currentProgress
    let interval = setInterval(() => {
      
      progressTemp += 0.01;
      if (progressTemp > 1) {
        console.log(progressTemp)
        progressTemp = 1
        clearInterval(interval)
      }
        setProgress(progressTemp)
      
    }, 100)
    setProgress(progressTemp)
   
    setIntervalId(interval)
  }

  const onLongPressed = () => {
    clearInterval(intervalId)
  }

  const onPressOut = () => {
    loadingProgress(progress)
  }

  const resetProgressBar = () => {
    clearInterval(intervalId)
    loadingProgress(0)
  }

  return (
    
      <Pressable 
        style={styles.container}
        onPressIn={onLongPressed}
        onPressOut={onPressOut}
        >
        <View style={styles.logBox}>
          <Progress.Bar color={"white"}progress={progress} width={300}></Progress.Bar>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={resetProgressBar}>
          <Text style={{color:"white", fontSize:16}}>Restart</Text>
        </TouchableOpacity>


      </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
  },
  button: {
    marginTop:24,
    backgroundColor: "green",
    padding: 8,
    borderRadius:8,
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    borderRadius:10,
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: 'red',
   alignItems:"center"
  }
});

export default App;