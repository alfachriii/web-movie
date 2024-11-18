import { useEffect, useState } from "react";
import { Router, Route, Redirect, useLocation } from "wouter";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieListGenre";
import { Provider } from "react-redux";
import store from "./features/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieListGenre from "./pages/MovieListGenre";

function App() {
  const queryClient = new QueryClient()

  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === '/') {
      setLocation('/home'); // Redirect ke /home jika berada di path utama
    }
  }, [location, setLocation]);
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/genre/:genre/:id">
              <MovieListGenre />
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
