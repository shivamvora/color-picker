import React from 'react';
import PropTypes from 'prop-types';

class Colors extends React.Component {
    static propTypes = {
            colorNames : PropTypes.array.isRequired
    }
    render(){
        return(
            <div className="row">
                {this.props.colorNames.map(color => ( 
                        <div className="col" key={color} style={{backgroundColor:color}}>
                            {color}
                        </div>
                ))}
            </div>
        )
    }
}

export default Colors;
