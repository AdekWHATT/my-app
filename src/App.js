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
// 1 Создаем переменную cars, по умолчанию будет null
let cars = null
//  2 Спрашиваем если текущее состояние this.state.showCars истина, то 
if (this.state.showCars) {
    // 3 определяем переменную cars на вывод
cars = this.state.cars.map((car, index) =>  {
    // 4 возращаем нам список эелементов
    return (
        <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
        /> )
    } )
}

        return (
            <div style={divStyle}>

                <h1>{this.state.pageTitle}</h1>
               

                     <button
                    onClick={this.toggleCarsHandler}>
                    Toggle Cars
                    </button>
                    {/* 5 А в JSX выводим просто переменную cars */}
                    { cars } 
                </div>
        )
    }
}


export default App;
