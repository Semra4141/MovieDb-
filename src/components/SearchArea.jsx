import React from "react";

const SearchArea = props => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-4">
                    <form action="" onSubmit={e => props.handleSubmit(e)}>
                        <div className="input-field">
                            <input
                                placeholder="Search movie"
                                type="text"
                                onChange={e => props.handleChange(e)}
                            />
                            <button class="btn btn-outline-light mt-2 ms-5 me-5" type="submit">
                                Ara
            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SearchArea;
