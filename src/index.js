import './index.css';
import numeral from 'numeral';

const version = numeral(1).format("0.00");
console.log(`index.js called version: ${version}`);