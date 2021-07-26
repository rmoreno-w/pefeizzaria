import { Route, Switch } from "react-router"

import { Home } from './pages/Home'
import { Sales } from './pages/Sales'
import { Payments } from './pages/Payments'

import { Employees } from './pages/Employees' //Funcionários
import { AddEmployee } from './cruds/employees/AddEmployee'
import { UpdateEmployee } from './cruds/employees/UpdateEmployee'
import { DeleteEmployee } from './cruds/employees/DeleteEmployee'

import { Pizzas } from './pages/Pizzas' //Pizzas
import { AddPizza } from './cruds/pizzas/AddPizza'
import { UpdatePizza } from './cruds/pizzas/UpdatePizza'
import { DeletePizza } from './cruds/pizzas/DeletePizza'

import { Accompaniments } from './pages/Accompaniments'
import { Combos } from './pages/Combos'

export function Router() {
    return (
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/employees" exact component={ Employees }/>
            <Route path="/employees/add" component={ AddEmployee }/>
            <Route path="/employees/update/:id" component={ UpdateEmployee }/>
            <Route path="/employees/delete/:id" component={ DeleteEmployee }/>

            <Route path="/pizzas" exact component={ Pizzas }/>
            <Route path="/pizzas/add" component={ AddPizza }/>
            <Route path="/pizzas/update/:id" component={ UpdatePizza }/>
            <Route path="/pizzas/delete/:id" component={ DeletePizza }/>

            <Route path="/accompaniments" exact component={ Accompaniments }/>

            <Route path="/combos" exact component={ Combos }/>

            <Route path="/sales" exact component={ Sales }/>
            
            <Route path="/payments" exact component={ Payments }/>
        </Switch>
    )
}