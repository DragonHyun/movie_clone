import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';


function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie-detail" component={Detail}/>
        </HashRouter>
    );
}

/*
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies: movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return(
            <section className="container">
                {isLoading ? (
                    <div className="loaser">
                        <span clasclassNames="loader__text">Loading...</span>
                    </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    )}
            </section>
        );
    }
}
*/

export default App;
