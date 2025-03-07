function Student (props) {
    return(
        <section>
            
            <div>
                <div className="student">
                    <table>
                        <tr>
                            <th>
                                Name
                            </th>
                            <td>
                                {props.Name}
                            </td>
                        </tr>
                    
                        <tr>
                            <th>
                                Age
                            </th>
                            <td>
                                {props.Age}
                            </td>
                        </tr>
                    
                        <tr>
                            <th>
                                Is Married 
                            </th>
                            <td>
                                {props.Married? "Yes":"No"}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
        
    )
}

Student.defaultProps={
    Name:"No Name",
    Age:0,
    Married:false
}

export default Student;


