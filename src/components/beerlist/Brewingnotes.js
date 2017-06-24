import React from 'react';
import PropTypes from 'prop-types'

const BrewingNotes = (props) => {
    let  maltKey = 0;
    let hopKey = 0;
    const malts = props.malts.map((malt) => <tr key={maltKey++  }><td >{malt.name}</td><td>{malt.amount.value}</td><td>{malt.amount.unit}</td></tr>)
    const hops = props.hops.map((hop) =>
        <tr key={hopKey++}><td >{hop.name}</td><td>{hop.amount.value}</td><td>{hop.amount.unit}</td><td>{hop.add}</td><td>{hop.attribute}</td></tr>)
    return (
        <div className={props.reveal ? 'open' : 'close'}>
            <dl>
                <dt>abv</dt><dd>{props.abv || 'n/a'}</dd>
                <dt>ibu</dt><dd>{props.ibu || 'n/a'}</dd>
                <dt>ebc</dt><dd>{props.ebc || 'n/a'}</dd>
                <dt>ph</dt><dd>{props.ph || 'n/a'}</dd>
            </dl>
            <h5>Malts</h5>
            <div className="table_wrap">
                <table>
                    <thead><tr><th>Name</th><th>Value</th><th>Unit</th></tr></thead>
                    <tbody>{malts}</tbody>
                </table>
            </div>
            <h5>Hops</h5>
            <div className="table_wrap">
                <table>
                    <thead><tr><th>Name</th><th>Value</th><th>Unit</th><th>Add</th><th>Attribute</th></tr></thead>
                    <tbody>{hops}</tbody>
                </table>
            </div>
            {props.yeast &&
            <div>
                <h5>Yeast</h5>
                <p>{props.yeast}</p>
            </div>
            }
            <h5>Brewer tips</h5>
            <p>{props.tips}</p>
        </div>
    );
}

BrewingNotes.propTypes = {
    reveal: PropTypes.bool,
    abv: PropTypes.number,
    ibu: PropTypes.number,
    ebc: PropTypes.number,
    ph: PropTypes.number,
    malts: PropTypes.array,
    hops: PropTypes.array,
    tips: PropTypes.string,
    yeast: PropTypes.string,
};


export default BrewingNotes