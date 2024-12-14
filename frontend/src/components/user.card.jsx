import React from 'react';
import './user.card.css';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <b>{user.name}</b><br/>
      <small>Email: {user.email}</small><br/>
      <small>Phone: {user.phone}</small>
      <small style={{float:'right', fontSize:'9px', color:'#bbb'}}>Created At:{new Date(user.created_at).toLocaleString()}</small>

      {/* <div style={{flexDirection: 'row'}}>
        <button onClick={() => onEdit(user)} disabled>Editar</button>
        <button onClick={() => onDelete(user.id)} disabled>Eliminar</button>
      </div> */}
 
    </div>
  );
};

export default UserCard;