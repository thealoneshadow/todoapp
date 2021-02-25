import React, { Component } from 'react'

class Header extends Component {
    state ={
        users: [
        {id: 1,name: "Me",class: "A"},
        {id:2,name: "Sh",class: "B"}
        ]
    }
    
    render() {
       const users = this.state.users.map((user)=>{
        return <h1>{user.name}</h1>
    });
        return (
            <div>
                <h1>{users}</h1>
                <button >Hit me</button>
            </div>
        )
    }
}

export default Header
