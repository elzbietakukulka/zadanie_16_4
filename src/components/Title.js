import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const dataNumber = this.props.dataNumber
        return (
            <div className={style.TodoTitle}>
                <h1>To do list</h1>
                <p>Number of added tasks:  {dataNumber.length}</p>
            </div>
        )
    }
}

export default Title;