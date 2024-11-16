import { useState } from "react";
import { Router, Route, Redirect } from "wouter";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";
import { Provider } from "react-redux";
import store from "./features/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/movielist">
              <MovieList />
            </Route>
            <Route path="/moviedetails/:id">
              <MovieDetails />
            </Route>
          </Router>
          {/* <MovieDetails /> */}
          {/* <MovieList /> */}
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
