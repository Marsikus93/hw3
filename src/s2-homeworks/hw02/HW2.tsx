import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


// types

export type AffairPriorityType =
    "high" | "low" | "middle"
// need to fix any
export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType
export type AffairTypeArray = Array<AffairType>
// constants
const defaultAffairs: AffairTypeArray = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairTypeArray, filter: FilterType): AffairTypeArray => { // need to fix any
    if (filter === "all") {
        return affairs
    }
      else  return affairs.filter(el => el.priority === filter)
    // need to fix
}
export const deleteAffair = (affairs: AffairTypeArray, _id: number): AffairTypeArray => { // need to fix any

    return affairs.filter(el => el._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairTypeArray>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number): void => { // need to fix any
        setAffairs(deleteAffair(filteredAffairs, _id))

    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
