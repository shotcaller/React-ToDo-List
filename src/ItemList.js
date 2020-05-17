import React from 'react'

export default function ItemList(props) {

    const itemList = props.items.map((item) => {
        return <Item itemName={item.name} key={item.id} id={item.id} removeItem={props.removeItem} />
    })


    return (
        <div>
            <ul>
            {itemList}
            </ul>
        </div>
    )
}


const Item = (props) =>  {
    return (
        <li>
                <h3>{props.itemName}</h3>
                <button>Done</button>
                <button onClick={() => props.removeItem(props.id)}>Remove</button>
        </li>
    )
}

