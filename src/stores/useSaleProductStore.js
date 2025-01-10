import { create } from "zustand";

const useSaleProductStore = create((set) => ({
  records: [],
  addRecord: (newRecord) => {
    set((state) => ({ records: [...state.records, newRecord] }));
  },
  removeRecord: (product_id) => {
    set((state) => ({
      records: state.records.filter((record) => record.product_id !== product_id),
    }));
  },
  changeQuantity: (id, quantity) => {
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          const newCost = record.product.price * newQuantity;
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    }));
  },

  resetRecord: () => set({ records: [] }),
}));

export default useSaleProductStore;
