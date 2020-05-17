import React, { Component } from 'react'
import InputItem from './InputItem'
import ItemList from './ItemList'
import {v4 as uuidv4} from 'uuid'

export default class Todo extends Component {

    state = {
        newItem: {
            id: '',
            name: ''
        },

        itemList: []
    }

    handleChange = (e) => {

            this.setState({
                newItem: {
                    id: uuidv4(),
                    name: e.target.value
                }
            })
    }

    addToList = () => {
        this.setState({
            newItem: {
                id: '',
                name: ''
            },
            itemList: [...this.state.itemList, this.state.newItem]
        })
    }

    removeItem = (id) => {
            const newList = this.state.itemList.filter(item => {return item.id !==id})

            this.setState({
                itemList: newList
            })
    }
    
    


    render() {
        return (
            <div className='container'>
              <h1>To Do List</h1>
              <div className='container'>
                <InputItem handleChange={this.handleChange} addToList={this.addToList} emptyInput={this.state.newItem} />
                </div>
                <div className='container'>
                <ItemList items={this.state.itemList} removeItem={this.removeItem} />
              </div>
              <div>
                  <h2>You have {this.state.itemList.length} tasks.</h2>
              </div>  
            </div>
        )
    }
}
