import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  return (
    <View style={styles.container}>
     
     {/* Today's Tasks */}
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>Today's tasks</Text>

       <View style={styles.items}>
         {/* This is where the tasks wiil go ! */}
         {
           taskItems.map((item, index)=> {
          return  <Task key={index} text={item}/>
           })
         }
         {/* <Task text={'Task 1'}/>
         <Task text={'Task 2'}/>
         <Task text={'Task 3'}/>
         <Task text={'Task 4'}/> */}

       </View>
     </View>

     {/* write a task */}

     <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.writeTaskWrapper}
     >
       <TextInput style={styles.input} placeholder={'Write a task ...'} value={task} onChangeText={text => setTask(text)}></TextInput>

       <TouchableOpacity   onPress={() => handleAddTask()} >
        <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
        </View>
       </TouchableOpacity>

     </KeyboardAvoidingView>
      

      {/* <StatusBar style="auto" /> */}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper:{
    paddingTop: 50,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop:30,
  },
  // bold: {fontWeight: 'bold'},

  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:12,
    paddingHorizontal:12,
    width:250,

    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper:{
    height:60,
    width:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{
    
  },

  
});
