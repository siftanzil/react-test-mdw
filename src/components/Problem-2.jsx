import React, { useEffect, useState } from "react";
import services from "../services/contacts";
import InfiniteScroll from 'react-infinite-scroll-component';


const Problem2 = () => {
    const [contacts, setContacts] = useState( [] );
    const [checkFiltered, setCheckFiltered] = useState( contacts );
    const [filtered, setFiltered] = useState( contacts );

    // fetch data from server
    const fetchData = async () => {
        services.getAll().then( ( contacts ) => {
            setContacts( contacts.results );
            console.log( contacts.results[0] );
        } );
    };

    useEffect( () => {
        fetchData();
    }, [] );


    const handleClick = ( e ) => {
        const filterTerm = e.target.value;
        if ( filterTerm === "all" ) {
            setFiltered( checkFiltered );
        } else {
            setFiltered(
                checkFiltered.filter(
                    ( contact ) => contact.country.name === filterTerm,
                ),
            );
        }
    };


    const handleCheck = ( e ) => {
        if ( e.target.checked ) {
            setCheckFiltered(
                contacts.filter( ( contact ) => contact.id % 2 === 0 ),
            );
        } else {
            setCheckFiltered( contacts );
        }
    };

    useEffect( () => {
        setFiltered( contacts );
        setCheckFiltered( contacts );
    }, [contacts] );

    useEffect( () => {
        setFiltered( checkFiltered );
    }, [checkFiltered] );

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" value="all" onClick={ handleClick }>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" value="United States" onClick={ handleClick }>US Contacts</button>
                </div>
                <div>
                    <input type="checkbox" value="true" onChange={ handleCheck } />
                    <span> even id only</span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Number</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filtered.map( ( contact ) => (
                            <tr key={ contact.id }>
                                <td>{ contact.id }</td>
                                <td>{ contact.phone }</td>
                                <td>{ contact.country.name }</td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default Problem2;