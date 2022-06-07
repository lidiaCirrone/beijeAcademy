import React, { FunctionComponent, useEffect, useState } from 'react';

// components
import { Button, Text, View, TextInput, FlatList, Image, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';

// modules
import AsyncStorage from '@react-native-async-storage/async-storage';

// styles
import styleApp from './styleApp';


interface State {
   text: string;
   todos: Array<Todo>;
}

interface Todo {
   key: number;
   content: string;
   datetime: string;
}

let counter: number = 0;

const App: FunctionComponent = () => {

   const [state, setState] = useState<State>({
      text: '',
      todos: []
   });

   const _getStorage = async (): Promise<void> => {
      let storageTodos = await AsyncStorage.getItem('todos');
      storageTodos = storageTodos !== null ? JSON.parse(storageTodos) : [];
      let startingKey = 0;
      if (storageTodos.length > 0) {
         let lastTodo = storageTodos.length - 1;
         startingKey = storageTodos[lastTodo].key + 1;
      }
      counter = startingKey;
      setState({
         ...state,
         todos: storageTodos
      })
   }

   useEffect(() => {
      _getStorage();
   }, [])

   const setText = (value: string): void => {
      setState({
         ...state,
         text: value
      })
   }

   const _addTodo = async (): Promise<void> => {
      let updatedTodos = state.todos;
      let currentDatetime = new Date().toLocaleString('it-IT', {
         dateStyle: 'full'
      });
      updatedTodos.push({
         key: counter,
         content: state.text,
         datetime: `— ${currentDatetime}`
      });
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
      setState({
         ...state,
         text: '',
         todos: updatedTodos
      })
      counter = counter + 1;
   }

   const _deleteTodo = (key: number) => async (): Promise<void> => {
      let updatedTodos = state.todos;
      let todoIndex = updatedTodos.findIndex(todo => todo.key === key);
      updatedTodos.splice(todoIndex, 1);
      if (updatedTodos.length === 0) counter = 0;
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
      setState({
         ...state,
         todos: updatedTodos
      })
   }

   const renderItem: ListRenderItem<Todo> = ({ item }: ListRenderItemInfo<Todo>) => {

      return (
         <View style={styleApp.todoContainer}>
            <View style={styleApp.todoHeader}>
               <Text style={styleApp.todoDatetime}>{item.datetime}</Text>
               <TouchableOpacity onPress={_deleteTodo(item.key)} >
                  <Image source={require('./assets/bin.png')} style={styleApp.binIcon} />
               </TouchableOpacity>
            </View>
            <View>
               <Text>{item.content}</Text>
            </View>
         </View>
      );
   };

   return (
      <View style={styleApp.container}>
         <Text style={styleApp.title}>Your Tasks</Text>
         <FlatList data={state.todos} renderItem={renderItem} style={styleApp.toDoList} />
         <View style={styleApp.rowContainer}>
            <TextInput style={styleApp.input} onChangeText={setText} value={state.text} placeholder={'Write some text...'} />
            <Button title={'Add'} onPress={_addTodo} color={'#767676'} />
         </View>
      </View>
   );
}

export default App;