import '../menu-item/menu-item.styles.scss'
import React from 'react'


const MenuItem = ({title, imageUrl, size}) =>(
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
    
    className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default MenuItem;