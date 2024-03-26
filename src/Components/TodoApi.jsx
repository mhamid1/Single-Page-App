import React, { useEffect, useState } from 'react';
import '../App.css';

const TodoApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false); // Set loading to false once data is fetched
        });
    }, []);

    return (
        <>
            <h1>This is Todos Page</h1>
            {loading ? (
                <h1 class="spinner-border" role="status">
              </h1>
            ) : (
                <div className='d-flex flex-wrap'>
                    {data.map(dataobj => (
                        <div className="todo" key={dataobj.id}>
                            <div className='d-flex justify-content-center'><b>ID: </b>{dataobj.id}</div>
                            <div className='d-flex'><b></b>title:{dataobj.title}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default TodoApi;
