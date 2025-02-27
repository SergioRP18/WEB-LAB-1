import React from "react";
import "./User.css";

const Users = ({users}) => {
    return (
        <div className="content-users">
            <h2>What subscribers are achieving through learning</h2>
            <div className="cards-users">
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <div className="card">
                                <img src={user.image}/>
                                <h3>{user.name}</h3>
                            </div>
                            <p>{user.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;