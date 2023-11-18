import Invoice from "@components/templates/invoice";

export default function Page() {
  return (
    <Invoice
      {...{
        email: "nsvegur01@gmail.com",
        invoiceDate: new Date(),
        amount: "99.85",
        orderId: "ML4F5L8522",
        billing: "India",
        recipient: "App Store",
      }}
    />
  );
}
