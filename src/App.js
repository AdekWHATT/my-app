import './App.css';
import Car from './Car/Car'
import {Component} from "react";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                // {name: 'Audi', year: 2016},
                // {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'Это объект в state PageTitle',
            showCars: false
    
        }
        }
    
       
    // toggleCarsHandler метод кнопки Toggle Cars, ничего не получает в параметры
    toggleCarsHandler = () => {


        this.setState({
            //  и будет менять состояние параметра showCars  false на true
            //  с помощью инверсии
            showCars: !this.state.showCars
        })
    }
    onChangeName = (name, index) => {
       const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
        }

        deleteHandler(index) {
            const cars = this.state.cars.concat()
            cars.splice(index, 1)
            this.setState({cars})
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
    // 4 возращаем нам список элементов
    return (
        <ErrorBoundary  key={index}>
        <Car
          
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
        /></ErrorBoundary> 
        )
        
    } )
}

        return (
            <div style={divStyle}>
                   
                {/* <h1>{this.state.pageTitle}</h1> */}
                <h1>{this.props.title}</h1>

                <Counter/>
                <hr/>

                     <button 
                     style={{
                         marginTop: '20px'
                     }}
                    onClick={this.toggleCarsHandler}>
                    Toggle Cars
                    </button>
                    <div style={{
                        width: '400px',
                        margin: 'auto',
                        paddingTop: '20px'
                    }

                    }>
                    { cars }
                    </div> 
                </div>
        )
    }
}


export default App;
