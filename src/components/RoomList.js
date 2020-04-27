import React from 'react'

class RoomList extends React.Component {
    render () {
    const { rooms,subcribeToRoom, roomId } = this.props 
    return (
        <div className="rooms-list">
            <h3> Your rooms:</h3>
            {rooms.map(room => {
                const active = roomId === room.id ? "active" : "";
                return (
                    <li key = {room.id} className = {"room" + active}>
                        <button 
                            onClick = {() => subcribeToRoom(room.id)}
                            href="#">
                            {room.name}
                        </button>
                    </li>
                )
            })}
        </div>
    )
    }
}

export default RoomList