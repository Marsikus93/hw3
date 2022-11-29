import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*

* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UsersType=UserType[]
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: (users:UsersType)=>void, users:UsersType) => {
    // need to fix any
    const user = {_id:v1(), name: name}
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UsersType>([])

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
