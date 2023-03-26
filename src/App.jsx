import React from "react";

import "./App.css";
import FirstComponent from "./components/basic/First";
import WithParameter from "./components/basic/WithParameter";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import Card from "./components/layout/Card";
import StudentsList from "./components/Repeat/StudentsList";
import ProductsTable from "./components/Repeat/ProductsTable";
import EvenOrOdd from "./components/Conditional/EvenOrOdd";
import UserInfo from "./components/Conditional/UserInfo";
import DirectFather from "./components/Comunication/DirectFather";
import IndirectFather from "./components/Comunication/IndirectFather";
import Input from "./components/Form/Input";
import Counter from "./components/Counter/Counter";
import Mega from "./components/Mega/Mega";

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
      <Card title="#13 Mega" color="#FA6900">
        <Mega />
      </Card>

      <Card title="#12 Counter" color="#FA6900">
        <Counter initialNumber={10} />
      </Card>

      <Card title="#11 Cards" color="#FA6900">
        <Input />
      </Card>

      <Card title="#10 Indirect Comunication" color="#FA6900">
        <IndirectFather />
      </Card>

      <Card title="#09 Direct Comunication" color="#FA6900">
        <DirectFather />
      </Card>

      <Card title="#08 Even or Odd" color="#FA6900">
        <EvenOrOdd number={20} />
        <UserInfo user={{ name: "Matheus" }} />
        <UserInfo user={{}} />
      </Card>

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
