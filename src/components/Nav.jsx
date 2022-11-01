import React from 'react'

import {
    NavLink
} from "react-router-dom";

export default function Nav({list})
{
    return (

        <nav>
            <ul>
                {
                    list.map(function(data,index)
                    {
                        return <li id={index} key={index}>
                            <NavLink className={ ({isActive}) => isActive ? data.class : undefined } to={data.route}>{data.text}</NavLink>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
