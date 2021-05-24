import react from 'react'

import api from './api'
class Todo_List extends react.Component{
    
    componentDidMount() {
        api.get_all_todos()
    }
    
    render(){
        
        return (<p></p>)
    }
    

}

export default Todo_List