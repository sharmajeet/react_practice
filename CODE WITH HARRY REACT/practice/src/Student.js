
function Student (props){

    console.log(props);
    return(
        <div style={{backgroundColor: "skyblue" , margin :10}}>
            <h1>Student Component</h1>
            <h2>Hello , {props.name}</h2>
            {/* <h3>Course : {props.course}</h3>
            <h4>Address : {props.other.address}</h4> */}
        </div>
    )
}
export default Student

