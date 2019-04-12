import React from 'react';

const withClass = (WrappedComponent, className) => {
    const wrapper = (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    };
    return wrapper;
};

export default withClass;