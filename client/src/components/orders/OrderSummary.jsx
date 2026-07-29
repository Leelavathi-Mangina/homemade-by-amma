import OrderStatusBadge from "./OrderStatusBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";

export default function OrderSummary({ order }) {
  const orderDate = new Date(order.createdAt).toLocaleDateString();

  const deliveryDate = order.preferredDeliveryDate
    ? new Date(order.preferredDeliveryDate).toLocaleDateString()
    : "Not Selected";

  const address = order.deliveryAddress;

  return (
    <div className="rounded-2xl bg-white p-6 shadow lg:sticky lg:top-24">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-5 text-sm">
        <div>
          <p className="font-semibold">Order ID</p>
          <p>{order.orderId}</p>
        </div>

        <div>
          <p className="font-semibold">Ordered On</p>
          <p>{orderDate}</p>
        </div>

        <div>
          <p className="font-semibold">Delivery Address</p>

          <p>{address.fullName}</p>
          <p>{address.houseNo}</p>
          <p>{address.street}</p>
          <p>{address.villageOrCity}</p>
          <p>{address.district}</p>
          <p>{address.state}</p>
          <p>{address.pincode}</p>

          {address.landmark && <p>Landmark: {address.landmark}</p>}
        </div>

        <div>
          <p className="font-semibold">Phone</p>
          <p>{order.phone}</p>
        </div>

        <div>
          <p className="font-semibold">Preferred Delivery Date</p>
          <p>{deliveryDate}</p>
        </div>

        <div>
          <p className="font-semibold">Order Notes</p>
          <p>{order.orderNotes || "No Notes"}</p>
        </div>

        <div>
          <p className="font-semibold">Order Status</p>
          <OrderStatusBadge status={order.status} />
        </div>

        <div>
          <p className="font-semibold">Payment Status</p>

          <PaymentStatusBadge status={order.paymentStatus} />
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{order.totalAmount}</span>
        </div>
      </div>
    </div>
  );
}
