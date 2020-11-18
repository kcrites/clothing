import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);
//brings in the first 4 items from the collection - could cause a performance issue if rerendered often
export default withRouter(CollectionPreview);