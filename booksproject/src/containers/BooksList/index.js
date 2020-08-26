import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchListBooks} from '../../actions/index'
import BooksData from '../../components/BooksData'

class BooksList extends Component
{
    componentDidMount() {
        this.props.fetchListBooks(typeof(this.props.match.params.id) === 'undefined' ?  1 : this.props.match.params.id);
    }
    render() {
        return(
            <div>
               {this.props.books &&
               <BooksData booksList={this.props.books} />
               }
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchListBooks}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BooksList);
