import React from 'react';

const BrewingNotes = (props) => {

    const malts = props.malts.map((malt) => <p key={malt.name}>{malt.name} - {malt.amount.value} - {malt.amount.unit}</p>)

    return (
        <div className={props.reveal ? 'open' : 'close'}>
            <dl>
                <dt>abv</dt><dd>{props.abv}</dd>
                <dt>ibu</dt><dd>{props.ibu}</dd>
                <dt>ebc</dt><dd>{props.ebc}</dd>
                <dt>ph</dt><dd>{props.ph}</dd>
            </dl>
            <h5>Brewer tips</h5>
            <p>{props.tips}</p>
            {malts}

        </div>
    );
}

export default BrewingNotes