import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {UsersType, UserType} from './HW3'
import {keyboard} from "@testing-library/user-event/dist/keyboard";

type GreetingContainerPropsType = {
    users: UsersType
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError:(value:string)=>void,
                            setName: (value:string)=>void, addUserCallback: (name: string) => void) => {
   if(!name.trim()){
       setError("Ошибка! Введите имя!")
   }
   else{
   addUserCallback(name)
       setName(name)

   }

}

export const pureOnBlur = (name: string, setError: (value:string)=>void) => {
    if(!name.trim()){
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e:React.KeyboardEvent<HTMLElement>, addUser: ()=>void) => {
if(e.key === 'Enter'){
    addUser()
}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [totalUsers,setTotalUsers]=useState<number>(0)
    const [lastUserName,setLastUserName]=useState<string>("some name")


    const setNameCallback = (e:React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setTotalUsers(totalUsers+1)
        setLastUserName(name)
        setName("")
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e:React.KeyboardEvent<HTMLElement>) => {
        pureOnEnter(e, addUser)
    }



    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
