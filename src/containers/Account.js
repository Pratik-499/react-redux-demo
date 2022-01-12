import React from 'react';

const Account = ({data:{logout}}) => {
    return (
        <div className='ui container'>
            <h2>Account Page</h2>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}

export default Account;