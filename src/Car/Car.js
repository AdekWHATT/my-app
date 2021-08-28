export default props => (
    <div>
        <h3>Car Name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)


// const Car = () => {
//     return (
//     <div>
//         This is car component
//     </div>
//     )
// }
//
// export default Car