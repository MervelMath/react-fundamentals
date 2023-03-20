import React from 'react'
import students from '../../data/students'

export default props =>{

    const studentsLi = students.map((student)=>{
        return <li key={student.id}> {student.name} - score: {student.score} </li>
    })
    return (
      <div>
        <ul style={{listStyle: '-moz-initial'}}>
          {studentsLi}
        </ul>
      </div>
    );
}