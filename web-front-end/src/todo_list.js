import react from 'react'

import api from './api'
class Todo_List extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            data: []
        };
    }
    // async componentDidMount() {
    //     const data = await api.get_all_todos()
    //     this.setState({data: data, fetching: false})
    //     console.log(this.state.data)
    // }

    async componentDidMount() {
        const response = await fetch('https://crsuhfhhz7.execute-api.us-east-1.amazonaws.com/dev/todos');
        const json = await response.json();
        this.setState({ data: json });
  }
    
    
    render(){
        
    //     return (<div className="users">
    //     {users.map((user, index) => (
    //       <div key={index}>
    //         <h3>{user.name}</h3>
    //         <p>{user.location}</p>
    //         <p>{user.car}</p>
    //       </div>
    //     ))}
    //   </div>)
    return(<div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.checked}: {el.text}
            </li>
          ))}
        </ul>
      </div>)
    }
    

}

export default Todo_List