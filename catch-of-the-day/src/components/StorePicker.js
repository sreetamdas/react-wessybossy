import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    goToStore (event) {
        event.preventDefault();
        console.log("Hey Hey Hey!");
        const href = this.storeInput.value;

        console.log(`Going to ${href}`);
        this.context.router.transitionTo(`/store/${href}`);
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

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
