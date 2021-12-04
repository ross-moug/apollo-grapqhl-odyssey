import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const apollo = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apollo}>
            <GlobalStyles/>
            <Pages/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
