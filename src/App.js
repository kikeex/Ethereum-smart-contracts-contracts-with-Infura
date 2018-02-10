import React from 'react';
import Web3 from 'web3';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {myTheme} from './styles/';
import { InfuraList } from './resources/infura';

var web3 = new Web3(new Web3.providers.HttpProvider('http://mainnet.infura.io/vllQ1Bhmqnh9n1sAUEDi :8545'));


const balance = web3.eth.getBalance("0xf8e386eda857484f5a12e4b5daa9984e06e73705");
console.log(balance);

const App = () => (
    <Admin title="Ethereum API" restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')} theme={getMuiTheme(myTheme)}>
        <Resource options={{ label: 'Ethereum' }} name="posts" list={InfuraList} />
    </Admin>
);

export default App;
