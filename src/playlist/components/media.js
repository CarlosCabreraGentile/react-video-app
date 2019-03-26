import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {
    //ES6
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    // }
    
    //ES7
    state = {
        author: "Carlos Cabrera"
    }

    handleClick = (event) => {
        // console.log(this.props.title);
        // this.setState({
        //     author: 'Author 2',
        // }) 
        this.props.openModal(this.props);
    }
    render(){
        const styles ={
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

//Define types of data received as parameter from index.js
Media.propTypes = {
    //https://reactjs.org/docs/typechecking-with-proptypes.html
    //example function: Proptypes.func
    //example number: Proptypes.number.isRequired check also to be required
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['audio', 'video'])
}

export default Media;