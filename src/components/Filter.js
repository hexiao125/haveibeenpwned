import React from 'react';

class Filter extends React.Component {

    render() {
        const { handleFilterChange, isVerified, isSensitive, isSpam } = this.props;

        return (
            <div className="filter-container">
                <div className="checkbox-container">
                    <div className="ui checkbox">
                        <input type="checkbox" name="isVerified"
                            checked={isVerified}
                            onChange={handleFilterChange('isVerified')}
                        />
                        <label>Verified</label>
                    </div>
                </div>
                <div className="checkbox-container">
                    <div className="ui checkbox">
                        <input type="checkbox" name="isSensitive"
                            checked={isSensitive}
                            onChange={handleFilterChange('isSensitive')}
                        />
                        <label>Sensitive</label>
                    </div>
                </div>
                <div className="checkbox-container">
                    <div className="ui checkbox">
                        <input type="checkbox" name="isSpam"
                            checked={isSpam}
                            onChange={handleFilterChange('isSpam')}
                        />
                        <label>SpamList</label>
                    </div>
                </div>
            </div>

        );
    }
}

export default Filter;