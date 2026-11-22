const test = require('node:test');
const assert = require('node:assert/strict');
const invoice = require('../lib/invoice');

test('invoice matches checkout HSN GST and capped coupon totals', () => {
  const figures = invoice.computeInvoiceFigures({
    coupon: 'SAVE10',
    items: [
      { name: 'Rice', sku: 'RICE', hsn: '1006', price: 640, qty: 1 },
      { name: 'Tea', sku: 'TEA', hsn: '0902', price: 140, qty: 1 }
    ],
    total: 753.48
  });

  assert.equal(figures.subtotal, 780);
  assert.equal(figures.discount, 78);
  assert.equal(figures.tax, 51.48);
  assert.equal(figures.cgst, 25.74);
  assert.equal(figures.sgst, 25.74);
  assert.equal(figures.total, 753.48);
  assert.deepEqual(figures.rows.map((row) => row.gstPercent), [5, 18]);
  assert.deepEqual(figures.rows.map((row) => row.lineTax), [28.8, 22.68]);
});
