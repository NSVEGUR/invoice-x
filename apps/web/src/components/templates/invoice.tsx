import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import Gradient from "./gradient";
import { getFormattedDate } from "@/lib/utils/date";

export default function Invoice({
  email,
  invoiceDate,
  orderId,
  billing,
  recipient,
  amount,
}: {
  email: string;
  invoiceDate: Date;
  orderId: string;
  billing: string;
  recipient: string;
  amount: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>InvoiceX Receipt</Preview>

      <Body style={body}>
        <Container
          style={{
            ...container,
            position: "relative",
          }}
        >
          <Gradient>
            <main
              style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100px",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/NSVEGUR/invoice-x/main/apps/web/public/turborepo.svg"
                  width="42"
                  height="42"
                  alt="Apple Logo"
                />
                <h1 style={heading}>Receipt</h1>
              </div>
              <Section>
                <Text style={cupomText}>
                  Save 3% on all your InvoiceX purchases with UPI Transactions.
                </Text>
              </Section>
              <Section style={informationTable}>
                <Row style={informationTableRow}>
                  <Column colSpan={2}>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>
                        Email:{" "}
                        <Link
                          style={{
                            ...informationTableValue,
                            color: "#15c",
                            textDecoration: "underline",
                          }}
                          href={`mailto:${email}`}
                        >
                          {email}
                        </Link>
                      </Text>
                      <Text style={informationTableLabel}>
                        Invoice Date: {getFormattedDate(invoiceDate)}
                      </Text>
                    </Column>
                  </Column>
                  <Column style={informationTableColumn} colSpan={2}>
                    <Text style={informationTableLabel}>
                      Order ID:{" "}
                      <Text
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          display: "inline",
                        }}
                      >
                        {orderId}
                      </Text>
                    </Text>

                    <Text style={informationTableLabel}>
                      Billing Address: {billing}
                    </Text>
                  </Column>
                </Row>
              </Section>
              <Section style={productTitleTable}>
                <Text style={productsTitle}>Purchased</Text>
              </Section>
              <Section>
                <Column style={{ width: "64px" }}>
                  <Img
                    src="https://raw.githubusercontent.com/NSVEGUR/invoice-x/main/apps/web/public/google.svg"
                    width="200"
                    height="200"
                    alt={recipient}
                    style={productIcon}
                  />
                </Column>
                <Column style={{ paddingLeft: "22px" }}>
                  <Text style={productTitle}>{recipient}</Text>
                  <Text style={productDescription}>TensorGo (InvoiceX)</Text>
                  <Link href="" style={productLink}>
                    Write a Review
                  </Link>
                  <span style={divisor}>|</span>
                  <Link href="" style={productLink}>
                    Report a Problem
                  </Link>
                </Column>

                <Column style={productPriceWrapper} align="right">
                  <Text style={productPrice}>&#8377;{amount}</Text>
                </Column>
              </Section>
              <Hr style={productPriceLine} />
              <Section align="right">
                <Column style={tableCell} align="right">
                  <Text style={productPriceTotal}>TOTAL</Text>
                </Column>
                <Column style={productPriceVerticalLine}></Column>
                <Column style={productPriceLargeWrapper}>
                  <Text style={productPriceLarge}>&#8377;{amount}</Text>
                </Column>
              </Section>
              <Hr style={productPriceLineBottom} />
              <Section>
                <Column align="center" style={footerIcon}>
                  <Img
                    src="https://raw.githubusercontent.com/NSVEGUR/invoice-x/main/apps/web/public/turborepo.svg"
                    width="26"
                    height="26"
                    alt="Invoice X"
                  />
                </Column>
              </Section>
              <Text style={footerLinksWrapper}>
                <Link href="">Account Settings</Link>•{" "}
                <Link href="">Terms of Sale</Link> •{" "}
                <Link href="">Privacy Policy </Link>
              </Text>
              <Text style={footerCopyright}>
                Copyright © 2023 InvoiceX Inc. <br />{" "}
                <Link href="">All rights reserved</Link>
              </Text>
            </main>
          </Gradient>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#000000",
};

const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "660px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const tableCell = { display: "table-cell" };

const heading = {
  fontSize: "32px",
  fontWeight: "300",
  color: "#c2c5c8",
};

const cupomText = {
  textAlign: "center" as const,
  margin: "36px 0 40px 0",
  fontSize: "14px",
  fontWeight: "500",
  color: "#ffffff",
};

const informationTable = {
  border: "1px solid #1a191a",
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "#c2c5c8",
  backgroundColor: "#1f1f1f",
  borderRadius: "3px",
};

const informationTableRow = {
  height: "46px",
};

const informationTableColumn = {
  padding: "20px",
  borderStyle: "solid",
  borderColor: "#1f1f1f",
  borderWidth: "0px 1px 1px 0px",
  height: "44px",
};

const informationTableLabel = {
  ...resetText,
  color: "#c2c5c8",
  fontSize: "15px",
  fontWeight: "500",
};

const informationTableValue = {
  fontSize: "14px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: "30px 0 15px 0",
  height: "24px",
};

const productsTitle = {
  background: "#1f1f1f",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  padding: "10px",
};

const productIcon = {
  margin: "0 0 0 20px",
  borderRadius: "14px",
  border: "1px solid #1a191a",
};

const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText };

const productDescription = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  ...resetText,
};

const productLink = {
  fontSize: "12px",
  color: "rgb(0,112,201)",
  textDecoration: "none",
};

const divisor = {
  marginLeft: "4px",
  marginRight: "4px",
  color: "rgb(51,51,51)",
  fontWeight: 200,
};

const productPriceTotal = {
  margin: "0",
  color: "rgb(102,102,102)",
  fontSize: "10px",
  fontWeight: "600",
  padding: "0px 30px 0px 0px",
  textAlign: "right" as const,
};

const productPrice = {
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
};

const productPriceLarge = {
  margin: "0px 20px 0px 0px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap" as const,
  textAlign: "right" as const,
};

const productPriceWrapper = {
  display: "table-cell",
  padding: "0px 20px 0px 0px",
  width: "100px",
  verticalAlign: "top",
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
  height: "48px",
  borderLeft: "1px solid",
  borderColor: "#1f1f1f",
};

const productPriceLargeWrapper = { display: "table-cell", width: "90px" };

const productPriceLineBottom = { margin: "0 0 75px 0" };

const footerIcon = { display: "block", margin: "40px 0 0 0" };

const footerLinksWrapper = {
  margin: "8px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};

const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};
