import React, {useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App =() => {
    //[currentValue, setCurrentValue] = useState(initialValue)
    const [resource, setResource] = useState('posts');
    //another example: const [currentCount, setCount] = useState(0);
    return(
        <div>
            <UserList />
            <div>
                <button onClick={()=> setResource('posts')}>Posts</button>
                <button onClick={()=> setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )
    
}

export default App;