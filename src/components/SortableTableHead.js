import React from 'react';

class SortableTableHead extends React.Component {

    render() {
        const { columnToSort, asc, title, name, type, handleSortChange } = this.props;

        return (
            <th onClick={() => handleSortChange(name)} style={{cursor:'pointer'}}>
                {title} &nbsp;
                {
                    columnToSort === name ? 
                    <i className={asc? `sort ${type} down icon` : `sort ${type} up icon`} /> :
                    null
                }
            </th>
        )
    }
}

export default SortableTableHead;