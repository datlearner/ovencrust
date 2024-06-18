import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "order Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false }
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

export default Order;