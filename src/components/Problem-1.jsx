import React, { useEffect, useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState( 'all' );
    const [todos, setTodos] = useState( [] );
    const [filtered, setFiltered] = useState( todos );
    const [formData, setFormData] = useState( {
        task: "",
        status: "",
    } );

    const handleClick = ( val ) => {
        setShow( val );
        if ( val === "all" ) {
            setFiltered( todos );
        } else {
            setFiltered( todos.filter( ( todo ) => todo.status === val ) );
        }
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        let sorted = todos.concat( formData );
        let statusOrder = { active: 0, completed: 1 };
        sorted.sort(
            ( { status: s1 }, { status: s2 } ) => ( statusOrder[s1] ?? Infinity ) - ( statusOrder[s2] ?? Infinity )
        );
        setTodos( sorted );
        setFormData( {
            task: "",
            status: "",
        } );
        // console.log( todos );
    };

    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setFormData( ( prevFormData ) => ( { ...prevFormData, [name]: value } ) );
        console.log( formData );
    };

    useEffect( () => {
        setFiltered( todos );
    }, [todos] );


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={ handleSubmit }>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name="task" value={ formData.task } onChange={ handleChange } />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status" value={ formData.status } onChange={ handleChange } />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={ `nav-link ${ show === 'all' && 'active' }` } type="button" onClick={ () => handleClick( 'all' ) }>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={ `nav-link ${ show === 'active' && 'active' }` } type="button" onClick={ () => handleClick( 'active' ) }>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={ `nav-link ${ show === 'completed' && 'active' }` } type="button" onClick={ () => handleClick( 'completed' ) }>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { filtered.map( ( todo, i ) => (
                                <tr key={ i }>
                                    <td>{ todo.task }</td>
                                    <td>{ todo.status }</td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;