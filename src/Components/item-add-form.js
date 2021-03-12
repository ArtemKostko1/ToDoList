import React, {Component} from 'react';

export default class ItemAddFormComponent extends Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddedToDoListItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form" onSubmit={ this.onSubmit }>
                <div className="input-group my-3">
                    <input type="text" className="form-control" placeholder="Enter a note" onChange={ this.onLabelChange } value={ this.state.label } required/>
                    <button className="btn btn-outline-primary" type="submit" id="button-addon2">Add</button>
                </div>
            </form>
        );
    }
};