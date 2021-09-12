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
        pageTitle: 'Это объект в state PageTitle',
        showCars: false

    }
    // toggleCarsHandler метод кнопки Toggle Cars, ничего не получает в параметры
    toggleCarsHandler = () => {


        this.setState({
            //  и будет менять состояние параметра showCars  false на true
            //  с помощью инверсии
            showCars: !this.state.showCars
        })
    }
   
    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }
    render() {

        const divStyle = {
            textAlign: 'center'
        }
        return (
            <div style={divStyle}>

                <h1>{this.state.pageTitle}</h1>
               
{/* Кнопка будет менять состояние showCars с false  на true */}
                     <button
                    onClick={this.toggleCarsHandler}>
                    Toggle Cars
                    </button>
                    {/* Если this.state.showCars (true ?) то отрисовываем список */}
                 { this.state.showCars 
                 ? this.state.cars.map((car, index) =>  {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={() => this.changeTitleHandler(car.name)}
                        /> )
                    } )
                    // Иначе возвращаем : null
                    : null 
                } 
                </div>
        )
    }
}


export default App;
