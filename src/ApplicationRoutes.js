import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { MovieDetails } from './components/MovieDetails'
import  Movies  from './components/Movies'


export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/movie/:id" component={MovieDetails} />
    </>
)