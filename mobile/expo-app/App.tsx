import React, { FunctionComponent, useState } from 'react';

// components
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, FlatList, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';

// styles
import styleApp from './styleApp';


interface State {
   text: string;
   todos: Array<ToDo>;
}

interface ToDo {
   key: number;
   content: string;
}

let counter: number = 0;

const App: FunctionComponent = () => {

   const [state, setState] = useState<State>({
      text: '',
      todos: []
   });

   const setText = (value: string): void => {
      setState({
         ...state,
         text: value
      })
   }

   const createToDo = (): void => {
      let newTodos = state.todos;
      console.log(newTodos);
      newTodos.push({
         key: counter,
         content: state.text
      });
      console.log(newTodos);
      setState({
         ...state,
         text: '',
         todos: newTodos
      })
      counter = counter + 1;
   }

   const renderItem: ListRenderItem<ToDo> = ({ item }: ListRenderItemInfo<ToDo>) => {
      // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      // const color = item.id === selectedId ? 'white' : 'black';

      return (
         <TouchableOpacity
         // onPress={onPress} 
         // style={[styles.item, backgroundColor]}
         >
            <Text
            // style={[styles.title, textColor]}
            >{item.content}</Text>
         </TouchableOpacity>
      );
   };

   return (
      <View style={styleApp.container}>
         <Text style={styleApp.title}>Your ToDos</Text>
         <FlatList data={state.todos} renderItem={renderItem} />
         <View style={styleApp.rowContainer}>
            <TextInput style={styleApp.input} onChangeText={setText} value={state.text} />
            <Button title={'Create'} onPress={createToDo} color={'#767676'} />
         </View>
         <StatusBar style="auto" />
      </View>
   );
}

export default App;