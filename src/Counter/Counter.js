import React, {Component} from "react";

export default class Counter extends Component {
  // локальный стейт для счетчика где счетчик
  // изначально будет равен нулю
    state = {
       counter: 0
   }
   // создаем метод который передадим в кнопку + обработчику событий onClick
   // при каждом нажатии на которую счетчик будет увеличен на 1
   addCounter =() => {
       this.setState({
           counter: this.state.counter + 1
       })
   }
   
    render() {
        // return (
        //     <div>
        //         <h2>Счетчик "{this.state.counter}"</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         {/* В этой кнопке не передаем метод а передадим callback и при нажатии
        //         счетчик будет отнимать по -1  */}
        //         <button onClick={() => this.setState({counter: this.state.counter -1 })}>-</button>
        //     </div>
        return [
            <h2 key={'1'}>Счетчик "{this.state.counter}"</h2>,
                <button key={'2'} onClick={this.addCounter}>+</button>,
               <button key={'3'} onClick={() => this.setState({counter: this.state.counter -1 })}>-</button>
           ]
    }
}