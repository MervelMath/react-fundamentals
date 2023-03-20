import React from 'react'

import './App.css'
import FirstComponent from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import Card from './components/layout/Card'
import StudentsList from './components/Repeat/StudentsList'
import ProductsTable from './components/Repeat/ProductsTable'

//Com export default, pode-se usar método anônimo (sem necessidade de nomear o método).
//Se remover o retorno "default", não pode-se usar método anônimo (sem nome).
//Pode-se substituir a palavra "function" por uma lâmbida (arrow function).
//Se tiver um só parâmetro, pode remover os parênteses.
//Com lâmbida, pode remover o return.
//Pode usar "_" ou () para não ter parâmetro.

export default () => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#07 Products Table" color="#FA6900">
        <ProductsTable />
      </Card>

      <Card title="#06 Repeat" color="#FA6900">
        <StudentsList />
      </Card>

      <Card title="#05 Component with children" color="#FA6900">
        <Family surname="Figueiredo">
          <FamilyMember name="Pedro"></FamilyMember>
          <FamilyMember name="João"></FamilyMember>
          <FamilyMember name="Maria"></FamilyMember>
        </Family>
      </Card>

      <Card title="#04 Random Challenge" color="#FA6900">
        <Random min={1} max={10} />
      </Card>

      <Card title="#03 Fragment" color="#E94C6F">
        <Fragment />
      </Card>

      <Card title="#02 With Parameter" color="#E8B71A">
        <WithParameter name="Maria" note={10} />
      </Card>

      <Card title="#01 First Component" color="#8f83D8">
        <FirstComponent></FirstComponent>
      </Card>
    </div>
  </div>
);