import './App.css';
import Car from './Car/Car'
import {Component} from "react";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'Это объект в state PageTitle'
    }
    changeTitleHandler = (newTitle) => {


      this.setState({
        pageTitle: newTitle
      })
    }
handleInput = (event) => {

  this.setState({
    pageTitle: event.target.value
  })
}
    render() {

        const divStyle = {
            textAlign: 'center'
        }
        return (
            <div style={divStyle}>

                <h1>{this.state.pageTitle}</h1>
              <input type="text" onChange={this.handleInput}/>

                <button
                    onClick={this.changeTitleHandler.bind(this, "Изменено!")}>
                  Кнопка изменения заголовка
                </button>

              {this.state.cars.map((car,index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}  
                    />
                )

              }) }
            </div>
        )
    }
}


//
// function App() {
// const state = {
//   [
//
//       ]
//
//
// }
//   return (
//     <div className="App">
//     <h1>Hello World</h1>
//       <Car name={'Ford'} year={2018}/>
//       <Car name='Audi' year={2016}/>
//       <Car name={'Mazda'} year={2010} />
//     </div>
//   );
// }

export default App;
