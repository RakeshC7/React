import React from "react";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            term: ""
        };
        componentDidMount() {
            const fetchData = async () => {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/${entity}`
                );
                const jsonData = await response.json();
                if (Array.isArray(jsonData)) {
                    // Check if the fetched data is an array
                    this.setState({ data: jsonData });
                }
            };
            fetchData();
        }
        render() {
            const { data, term } = this.state;
            let filteredData = data.filter((d) => {
                if (entity === "users") {
                    const { name } = d;
                    return name.indexOf(term) >= 0;
                }

                if (entity === "todos") {
                    const { title } = d;
                    return title.indexOf(term) >= 0;
                }
            });

            return (
                <div>
                    <h2>{entity}</h2>
                    <input
                        value={term}
                        type="text"
                        placeholder={`search here`}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <WrappedComponent data={filteredData} />
                </div>
            );
        }
    };
};

export default HOC;
