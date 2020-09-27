/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    qtyInput,
    priceInput,
    value,
    hitungdiskon,
    grandTotal
} = require('../helpers.js');

test('Qty 1 ditambah 1 harusnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 2 dikurangi 1 harusnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Subtotal harusnya price 50000 dikali qty 2 = 100000', () => {
    expect(recalculateSubtotal(50000, 2)).toBe(100000);
});

test('Total diskon barang seharga 50000 dan qty 2 (total 100000) adalah 25000', () => {
    expect(hitungdiskon(50000, 2, "HEMAT50")).toBe(25000);
}); 

test('Grandtotal dari barang dengan harga 50000 dan qty 2 dengan kode diskon KODE50 adalah 50000', () => {
    expect(grandTotal(50000, 2, "HEMAT50")).toBe(25000);
});

