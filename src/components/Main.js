import styled from 'styled-components'
import Nav from './pages/Nav'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'

export default function Main({Switch, Link, Route}){

    const MainCont = styled.div`
        width:100%;
        height:100%;
        font-size:3rem;
        display:flex;
        align-items:center;
        justify-content:center;
    `

    return<MainCont>
        <Nav {...{Link}}/>
        <Switch>
            <Route path={'/'} exact ><div>Home</div></Route>
            <Route path={'/one'}><One /></Route>
            <Route path={'/two'}><Two /></Route>
            <Route path={'/three'}><Three /></Route>
        </Switch>
    </MainCont>
}