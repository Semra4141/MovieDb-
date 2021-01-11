import React from "react";

const MovieInfo = props => {
    return (
        <div className="container">
            <div
                className="row"
                onClick={props.closeMovieInfo}
                style={{ cursor: "pointer", paddingTop: 50 }}
            >
                <i className="fas fa-arrow-left">
                    <span style={{ marginLeft: 10 }}>Geri Dön</span>
                </i>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {props.currentMovie.poster_path == null ? (
                        <img
                            src={"https://picsum.photos/200/300"}
                            alt=" "
                            style={{ width: "100%", height: 360 }}
                        />
                    ) : (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path
                                    }`}
                                alt=" "
                                style={{ width: "100%", height: 360 }}
                            />
                        )}
                </div>
            </div>
            <div className="col s12 m8">
                <div className="info-container">
                    <p>{props.currentMovie.title}</p>
                    <p>
                        {props.currentMovie.release_date
                            .substring(5)
                            .split("_")
                            .concat(props.currentMovie.release_date.substring(0, 4))
                            .join("/")}
                    </p>
                    <p>{props.currentMovie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
