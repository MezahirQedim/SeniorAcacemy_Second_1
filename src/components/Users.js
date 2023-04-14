import React, { useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = React.useState([])
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState('')

    // React.useEffect (() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response =>
    //          response.json()    
    //     )
    //     .then(melumat => 
    //         setUsers(melumat)    
    //     )
    //     .catch(err => console.log(err))
    // }, [])

    

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const movies = await response.json();
        return movies;

        console.log(movies)






        // if (!response.ok) {
        //   throw new Error('Data coud not be fetched!')
        // } else {
        //   return response.json()
        // }

        // if(response.ok && response.status === 200) {
        //     return await response.json()
        //     console.log(response)

        // }

      }


      React.useEffect(() => {
        // fetchData().then(movies => {
        //     movies; // fetched movies
        //   })

      }, [])
    


    // const add = (e) => {
    //     e.preventDefault()
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title: title,
    //             description: description
    //         })
    //     })
    //     .then( res => res.json)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // }


    


    // add({
    //     userIswqdqw: "123o2jn342",
    //     id: "912hen2u",
    //     title: "Mezahir",
    //     body: "Qedimovs"
    // })






    const handleFetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setUsers(data)
    }
    
    useEffect(() => {
        handleFetchData();
    },[])


  return (
    <div>
        <form className='form-control w-50 bg-warning mt-2'>
            <label>Title</label>
            <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>
                Description
            </label>
            <input className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button className='btn btn-dark mt-2 w-100'
                // onClick={add}
            >
                Add API
            </button>
        </form>

        <ul className='mt-5'>
            {users?.map((item, key) => (
                <li key={key} className="mt-1 mx-5 p-3" style={{color: "#fff", backgroundColor: "grey" }}>
                      {item.address.street}  
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Users