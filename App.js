import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Progress from "react-native-progress";
import { useEffect } from 'react/cjs/react.development';
import Cart from './src/component/Cart'

const App = () => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState();  
  const [totalItems, setTotalItems] = useState(0)
  const [deviceId, setDeviceId] = useState("")
  const [loadingText, setLoadingText] = useState("Loading, Please Wait...")
  const [sizeMultiplier, setSizeMultiplier] = useState(1)

  useEffect(() => {
    loadingProgress(0)
  }, [])

  const loadingProgress = (currentProgress) => {
    setLoadingText(progress == 0 ? "Loading, Please Wait..." : "Oke lanjut lagi...")
    let progressTemp = currentProgress
    let interval = setInterval(() => {
      
      progressTemp += 0.02;
      if (progressTemp > 1) {
        console.log(progressTemp)
        progressTemp = 1
        clearInterval(interval)
      } 
        if (progressTemp > 0.8) {
        setLoadingText("Sebentar lagi selesai...")
      }
        setProgress(progressTemp)
      
    }, 100)
    setProgress(progressTemp)
   
    setIntervalId(interval)
  }

  const onLongPressed = () => {
    setLoadingText("Loh loh berhenti!")
    clearInterval(intervalId)
  }

  const onPressOut = () => {
    loadingProgress(progress)
  }

  const resetProgressBar = () => {
    setTotalItems(0)
  }

  const addItems = () => {
    setTotalItems(totalItems+1)
  }

  const decreaseItems = () => {
    if (totalItems > 0) setTotalItems(totalItems-1)
  }

  const zoomInText = () => {
    setSizeMultiplier(1.2)
  }

  const zoomOutText = () => {
    setSizeMultiplier(1)
  }

  return (
    <View style={styles.wrapper}>

      {progress<1 ? (<Pressable 
          style={[styles.container, {flex:1}]}
          onPressIn={onLongPressed}
          onPressOut={onPressOut}
          >
          <View style={styles.logBox}>
            <Text style={{marginBottom:16, fontSize:32, color: "black"}}>{loadingText}</Text>

            <Progress.Bar color={"blue"} progress={progress} width={300} height={10}></Progress.Bar>

            <Text style={{marginTop:32}}> Press and hold to pause loading, release to resume</Text>
          </View>
        </Pressable>) : (
        <>
        <View style={styles.container}>
          <Text >Welcome, user : {deviceId}</Text>
        </View>
        
          <Cart totalItems = {totalItems}/>
          <Text style={
            {
              fontSize:24 * sizeMultiplier,
              padding:20,
              position: 'absolute',
              left:130,
              top:350
            }
            }>Bismillah</Text>
      
          

          <View 
            style={[styles.container, {flexDirection:'row'}]}>
            <TouchableOpacity 
              onPressIn={zoomInText}
              onPressOut={zoomOutText}
              disabled={totalItems <= 0}  underlayColor='#fff' style={
              totalItems > 0 ?
              [styles.button, styles.bgColorRed] : [styles.button, styles.bgColorGrey]
              } activeOpacity={0.8} onPress={decreaseItems}>
                <Text style={{color:"white", fontSize: 32}}>-</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPressIn={zoomInText}
              onPressOut={zoomOutText}
              style={[styles.button, styles.bgColorGreen]} activeOpacity={0.8} onPress={addItems}>
                <Text style={{color:"white", fontSize: 32}}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.restartButton} activeOpacity={0.8} onPress={resetProgressBar}>
              <Text style={{color:"white", fontSize:16}}>Reset</Text>
            </TouchableOpacity>
          </View>  
        </>
      )}
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    alignItems:"center",
    justifyContent: 'space-evenly',
  },
  restartButton: {
    marginTop:24,
    backgroundColor: "orange",
    padding: 8,
    borderRadius:8,
  },
  button: {
    width:70,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  bgColorRed: {
    backgroundColor: "red"
  },
  bgColorGrey: {
    backgroundColor: "grey"
  },
  bgColorGreen: {
    backgroundColor: "green"
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
    alignItems:"center"
  }
});

export default App;