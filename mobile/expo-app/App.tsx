import React, { FunctionComponent, useState } from 'react';

// components
import { Button, Text, View, TextInput, FlatList, Image, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';

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

   const setText = (value: string): void => {
      setState({
         ...state,
         text: value
      })
   }

   const addTodo = (): void => {
      let newTodos = state.todos;
      let currentDatetime = new Date().toLocaleString('it-IT', {
         dateStyle: 'full'
      });
      console.log(newTodos);
      newTodos.push({
         key: counter,
         content: state.text,
         datetime: `— ${currentDatetime}`
      });
      console.log(newTodos);
      setState({
         ...state,
         text: '',
         todos: newTodos
      })
      counter = counter + 1;
   }

   const deleteTodo = (): void => {
      let newTodos = state.todos;
      console.log(newTodos);
   }

   const renderItem: ListRenderItem<Todo> = ({ item }: ListRenderItemInfo<Todo>) => {

      return (
         <View style={styleApp.todoContainer}>
            <View style={styleApp.todoHeader}>
               <Text style={styleApp.todoDatetime}>{item.datetime}</Text>
               <TouchableOpacity onPress={deleteTodo} >
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
         <FlatList data={state.todos} renderItem={renderItem} />
         <View style={styleApp.rowContainer}>
            <TextInput style={styleApp.input} onChangeText={setText} value={state.text} placeholder={'Write some text...'} />
            <Button title={'Add'} onPress={addTodo} color={'#767676'} />
         </View>
      </View>
   );
}

export default App;