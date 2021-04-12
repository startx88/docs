import React from 'react'
import { fetch } from 'react-fetch';

function FetchData() {
    const data = fetch(`https://jsonplaceholder.typicode.com/posts`).json();
   // console.log(typeof data)
    const dataArray=JSON.parse(JSON.stringify(data));
    console.log(Array.isArray(dataArray))
    return (
        <div>
            {/* {JSON.stringify(note)} */}
            {
                dataArray.map(
                    (value, index) => {
                        return (<div>{value.title}</div>)
                    })
            }
        </div>
    )
}

export default FetchData
