import React from 'react';

const DestinationDetailsPage = ({params}) => {
    const {id} = params;
    return (
        <div>
            hello from destination details page {id}
        </div>
    );
};

export default DestinationDetailsPage;