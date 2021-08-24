import React, { useState } from "react"
import { StyleSheet, Text, View,StatusBar,FlatList,Image, TextInput, TouchableOpacity } from "react-native";

const data=[{id:1,ingredient:"1 Kg Yogurt"},{id:2,ingredient:"2 Litre Milk"},{id:3,ingredient:"50 Kg Flour"},{id:4,ingredient:"5 Kg Rice"}]

const App=()=>  {

  const [text,setText] = useState("");
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const renderEmpty = () => (
    <View style={{marginTop:30,flex:1}}>
      <Text>No Ingredients</Text>
    </View>
  );

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={{fontSize:22}}>{item.ingredient}</Text>
      <TouchableOpacity style={{alignSelf:'center'}}>
        <Image style={styles.icon} source={require('./assets/trash.png')}/>
      </TouchableOpacity>
    </View>
  );

		return (
      <>
      <StatusBar backgroundColor="#009300"/>
			<View style={styles.container}>
        <View style={styles.header}>
         <Text style={styles.mainHeading}>Ingredients</Text>
        </View>
        <View style={styles.mainView}>
          <Text style={{fontSize:24,fontWeight:'500'}}> All Ingredients</Text>
          <View style={{paddingVertical:10}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            keyExtractor={item => item.id}
          />
          </View>
        </View>
        <View style={{padding:20,borderTopWidth:1,flexDirection:'row',justifyContent:'space-between'}}>
          <TextInput
           value={text}
           onChange={(text)=>setText(text)}
           style={styles.input}
           placeholder="Enter Ingredients..."
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{color:'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      </>
		)
	}


const styles = StyleSheet.create({
	container:{
    flex:1,
  },
  header:{
    paddingHorizontal:20,
    backgroundColor:'#009300',
    paddingVertical:45,
  },
  mainView:{
    flex:1,
    backgroundColor:'white',
    padding:20,
  },
  mainHeading:{
    fontSize:28,
    color:'white',
    fontWeight:'600',
    fontStyle:'italic'
  },
  icon:{
    height:22,
    width:22,
    alignSelf:'center'
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  input:{
   fontSize:18,
   borderBottomWidth:0.5,
   padding:2,
   width:'70%'
  },
  button:{
   backgroundColor:'#009300',
   padding:5,
   paddingHorizontal:15,
   borderRadius:5
  }
})

export default App