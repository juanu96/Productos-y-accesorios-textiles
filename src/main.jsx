// add the beginning of your app entry
import React from "react";
import "vite/modulepreload-polyfill";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppBackEnd from "./AppBackEnd.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

if (document.getElementById("textiles")) {
  ReactDOM.createRoot(document.getElementById("textiles")).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
} else if (document.getElementById("textiles-options")) {
  ReactDOM.createRoot(document.getElementById("textiles-options")).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <AppBackEnd />
      </ApolloProvider>
    </React.StrictMode>
  );
}
