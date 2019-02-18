import React from 'react';
import Table from './Table';
import Filter from './Filter';
import api from '../apis/api';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'
import './custom.scss';

class App extends React.Component {
    state = {
        breaches: [], currentPage: 1, isVerified: false,
        isSensitive: false, isSpam: false, columnToSort: 'breachName', asc: true
    };

    async componentDidMount() {
        const response = await api.get();
        this.setState({ breaches: response.data});
        // console.log(this.state.breaches);
    }

    onPageChange = page => {
        //console.log(page);
        this.setState({
            currentPage: page,
        });
    }

    handleFilterChange = name => event => {
        this.setState({ [name]: event.target.checked })
    };

    handleSortChange = (columnName) => {
        if (this.state.columnToSort === columnName) {
            this.setState({asc: !this.state.asc});
        } else {
            this.setState({ columnToSort: columnName,
                            asc: true });
        }
    }

    displayBreachList = () => {
        let filteredData = (this.state.breaches
        .filter((breach) => this.state.isVerified ? breach.IsVerified : true)
        .filter((breach) => this.state.isSensitive ? breach.IsSensitive : true)
        .filter((breach) => this.state.isSpam ? breach.IsSpamList : true)
        );
        if (this.state.columnToSort === 'breachName') {
            if (this.state.asc) {
                return filteredData.sort((breachA, breachB) => (
                    breachA.Name.localeCompare(breachB.Name)
                ))
            } else {
                return filteredData.sort((breachA, breachB) => (
                    breachB.Name.localeCompare(breachA.Name)
                ))
            }
        } else {
            if (this.state.asc) {
                return filteredData.sort((breachA, breachB) => 
                    breachA.PwnCount - breachB.PwnCount
                )
            } else {
                return filteredData.sort((breachA, breachB) => 
                    breachB.PwnCount - breachA.PwnCount
                )
            }
        }
    }

    render() {
        const limit = 10;

        return (
            <div className="ui center aligned container">
                <h1>Breach Details</h1>
                    <Filter
                        handleFilterChange={this.handleFilterChange}
                        isVerified={this.state.isVerified}
                        isSensitive={this.state.isSensitive}
                        isSpam={this.state.isSpam}
                    />
                    <Table
                        displayBreachList={this.displayBreachList}
                        currentPage={this.state.currentPage}
                        limit={limit}
                        columnToSort={this.state.columnToSort}
                        asc={this.state.asc}
                        handleSortChange={this.handleSortChange}
                    />
                    <Pagination
                        total={this.displayBreachList().length}
                        current={this.state.currentPage}
                        onChange={this.onPageChange}
                        PageSize={limit}
                    />
            </div>
        );
    }
}

export default App;