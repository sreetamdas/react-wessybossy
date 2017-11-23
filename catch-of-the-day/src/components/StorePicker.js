import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    goToStore (event) {
        event.preventDefault();
        console.log("Hey Hey Hey!");
        console.log(this.storeInput.value);
    }

    render () {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)} >
                <h2>Please enter a store</h2>
                <input type="text" placeholder="Store Name" required defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;
