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
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0IiBoZWlnaHQ9IjEwNCIgdmlld0JveD0iMCAwIDEwNCAxMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE3KSI+CjxwYXRoIGQ9Ik0yNi4wMTkyIDdDNDIuMDk2MiAtMi4yODIwMyA2MS45MDM4IC0yLjI4MjAzIDc3Ljk4MDggN0M5NC4wNTc3IDE2LjI4MiAxMDMuOTYyIDMzLjQzNTkgMTAzLjk2MiA1MkMxMDMuOTYyIDcwLjU2NDEgOTQuMDU3NyA4Ny43MTggNzcuOTgwOCA5N0M2MS45MDM4IDEwNi4yODIgNDIuMDk2MiAxMDYuMjgyIDI2LjAxOTIgOTdDOS45NDIyOSA4Ny43MTggMC4wMzg0NzUgNzAuNTY0MSAwLjAzODQ3NSA1MkMwLjAzODQ3NSAzMy40MzU5IDkuOTQyMjkgMTYuMjgyIDI2LjAxOTIgN1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNjQiLz4KPHBhdGggZD0iTTI2LjAxOTIgN0M0Mi4wOTYyIC0yLjI4MjAzIDYxLjkwMzggLTIuMjgyMDMgNzcuOTgwOCA3Qzk0LjA1NzcgMTYuMjgyIDEwMy45NjIgMzMuNDM1OSAxMDMuOTYyIDUyQzEwMy45NjIgNzAuNTY0MSA5NC4wNTc3IDg3LjcxOCA3Ny45ODA4IDk3QzYxLjkwMzggMTA2LjI4MiA0Mi4wOTYyIDEwNi4yODIgMjYuMDE5MiA5N0M5Ljk0MjI5IDg3LjcxOCAwLjAzODQ3NSA3MC41NjQxIDAuMDM4NDc1IDUyQzAuMDM4NDc1IDMzLjQzNTkgOS45NDIyOSAxNi4yODIgMjYuMDE5MiA3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfMTcpIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI2LjAxOTIgN0M0Mi4wOTYyIC0yLjI4MjAzIDYxLjkwMzggLTIuMjgyMDMgNzcuOTgwOCA3Qzk0LjA1NzcgMTYuMjgyIDEwMy45NjIgMzMuNDM1OSAxMDMuOTYyIDUyQzEwMy45NjIgNzAuNTY0MSA5NC4wNTc3IDg3LjcxOCA3Ny45ODA4IDk3QzYxLjkwMzggMTA2LjI4MiA0Mi4wOTYyIDEwNi4yODIgMjYuMDE5MiA5N0M5Ljk0MjI5IDg3LjcxOCAwLjAzODQ3NSA3MC41NjQxIDAuMDM4NDc1IDUyQzAuMDM4NDc1IDMzLjQzNTkgOS45NDIyOSAxNi4yODIgMjYuMDE5MiA3WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0wLjUzODQ3NSA1MkMwLjUzODQ3NSAzMy42MTQ2IDEwLjM0NyAxNi42MjU3IDI2LjI2OTIgNy40MzMwMUM0Mi4xOTE1IC0xLjc1OTcgNjEuODA4NSAtMS43NTk3IDc3LjczMDggNy40MzMwMUM5My42NTMgMTYuNjI1NyAxMDMuNDYyIDMzLjYxNDYgMTAzLjQ2MiA1MkMxMDMuNDYyIDcwLjM4NTQgOTMuNjUzIDg3LjM3NDMgNzcuNzMwOCA5Ni41NjdDNjEuODA4NSAxMDUuNzYgNDIuMTkxNSAxMDUuNzYgMjYuMjY5MiA5Ni41NjdDMTAuMzQ3IDg3LjM3NDMgMC41Mzg0NzUgNzAuMzg1NCAwLjUzODQ3NSA1MloiIHN0cm9rZT0idXJsKCNwYWludDFfcmFkaWFsXzFfMTcpIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgo8cGF0aCBkPSJNMC41Mzg0NzUgNTJDMC41Mzg0NzUgMzMuNjE0NiAxMC4zNDcgMTYuNjI1NyAyNi4yNjkyIDcuNDMzMDFDNDIuMTkxNSAtMS43NTk3IDYxLjgwODUgLTEuNzU5NyA3Ny43MzA4IDcuNDMzMDFDOTMuNjUzIDE2LjYyNTcgMTAzLjQ2MiAzMy42MTQ2IDEwMy40NjIgNTJDMTAzLjQ2MiA3MC4zODU0IDkzLjY1MyA4Ny4zNzQzIDc3LjczMDggOTYuNTY3QzYxLjgwODUgMTA1Ljc2IDQyLjE5MTUgMTA1Ljc2IDI2LjI2OTIgOTYuNTY3QzEwLjM0NyA4Ny4zNzQzIDAuNTM4NDc1IDcwLjM4NTQgMC41Mzg0NzUgNTJaIiBzdHJva2U9InVybCgjcGFpbnQyX2xpbmVhcl8xXzE3KSIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNNTEuODg3OCAzNy45MjYyQzQ0LjE4OTIgMzcuOTI2MiAzNy45MjU4IDQ0LjE4OTYgMzcuOTI1OCA1MS44ODgyQzM3LjkyNTggNTkuNTg2OCA0NC4xODkyIDY1Ljg1MDIgNTEuODg3OCA2NS44NTAyQzU5LjU4NjQgNjUuODUwMiA2NS44NDk4IDU5LjU4NjggNjUuODQ5OCA1MS44ODgyQzY1Ljg0OTggNDQuMTg5NiA1OS41ODY0IDM3LjkyNjIgNTEuODg3OCAzNy45MjYyWk01MS44ODc4IDU5LjExMzZDNDcuODk2OCA1OS4xMTM2IDQ0LjY2MjQgNTUuODc5MiA0NC42NjI0IDUxLjg4ODJDNDQuNjYyNCA0Ny44OTcyIDQ3Ljg5NjggNDQuNjYyOCA1MS44ODc4IDQ0LjY2MjhDNTUuODc4OCA0NC42NjI4IDU5LjExMzIgNDcuODk3MiA1OS4xMTMyIDUxLjg4ODJDNTkuMTEzMiA1NS44NzkyIDU1Ljg3ODggNTkuMTEzNiA1MS44ODc4IDU5LjExMzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUzLjA1ODEgMzUuNjMzVjMwLjQyQzY0LjM4ODkgMzEuMDI1OCA3My4zOTAxIDQwLjQwNjYgNzMuMzkwMSA1MS44ODgyQzczLjM5MDEgNjMuMzY5OCA2NC4zODg5IDcyLjc0OCA1My4wNTgxIDczLjM1NjRWNjguMTQzNEM2MS41MDI5IDY3LjU0MDIgNjguMTkwMSA2MC40ODM4IDY4LjE5MDEgNTEuODg4MkM2OC4xOTAxIDQzLjI5MjYgNjEuNTAyOSAzNi4yMzYyIDUzLjA1ODEgMzUuNjMzWk0zOS41NzQ1IDYyLjU0ODJDMzcuMzM1OSA1OS45NjM4IDM1Ljg5MjkgNTYuNjcyMiAzNS42MzU1IDUzLjA1ODJIMzAuNDE5OUMzMC42OTAzIDU4LjExNTIgMzIuNzEzMSA2Mi43MDQyIDM1Ljg4MjUgNjYuMjM3NkwzOS41NzE5IDYyLjU0ODJIMzkuNTc0NVpNNTAuNzE4MiA3My4zNTY0VjY4LjE0MzRDNDcuMTAxNiA2Ny44ODYgNDMuODEgNjYuNDQ1NiA0MS4yMjU2IDY0LjIwNDRMMzcuNTM2MiA2Ny44OTM4QzQxLjA3MjIgNzEuMDY1OCA0NS42NjEyIDczLjA4NiA1MC43MTU2IDczLjM1NjRINTAuNzE4MloiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8xXzE3KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMV8xNyIgeDE9IjUyIiB5MT0iLTgiIHgyPSI1MiIgeTI9IjExMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzI4NkYxIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M0M0FDNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfMV8xNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg1MiAtNy45OTk5OSkgcm90YXRlKDkwKSBzY2FsZSgxNTQuMjg2IDE1NC4yODYpIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8xNyIgeDE9Ii04IiB5MT0iLTgiIHgyPSIxOC4yNSIgeTI9IjQwLjc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMV8xNyIgeDE9IjUzLjkwMDciIHkxPSIzMy40Mzg5IiB4Mj0iMzIuNzY3OSIgeTI9IjU0LjU3MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwOTZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjFFNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzE3Ij4KPHJlY3Qgd2lkdGg9IjEwNCIgaGVpZ2h0PSIxMDQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
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
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkNhcGFfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUwIDE1MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFBNzNFODt9Cgkuc3Qxe2ZpbGw6I0VBNDMzNTt9Cgkuc3Qye2ZpbGw6IzQyODVGNDt9Cgkuc3Qze2ZpbGw6I0ZCQkMwNDt9Cgkuc3Q0e2ZpbGw6IzM0QTg1Mzt9Cgkuc3Q1e2ZpbGw6IzRDQUY1MDt9Cgkuc3Q2e2ZpbGw6IzFFODhFNTt9Cgkuc3Q3e2ZpbGw6I0U1MzkzNTt9Cgkuc3Q4e2ZpbGw6I0M2MjgyODt9Cgkuc3Q5e2ZpbGw6I0ZCQzAyRDt9Cgkuc3QxMHtmaWxsOiMxNTY1QzA7fQoJLnN0MTF7ZmlsbDojMkU3RDMyO30KCS5zdDEye2ZpbGw6I0Y2QjcwNDt9Cgkuc3QxM3tmaWxsOiNFNTQzMzU7fQoJLnN0MTR7ZmlsbDojNDI4MEVGO30KCS5zdDE1e2ZpbGw6IzM0QTM1Mzt9Cgkuc3QxNntjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MTd7ZmlsbDojMTg4MDM4O30KCS5zdDE4e29wYWNpdHk6MC4yO2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDE5e29wYWNpdHk6MC4zO2ZpbGw6IzBENjUyRDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDIwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3QyMXtvcGFjaXR5OjAuMztmaWxsOnVybCgjXzQ1X3NoYWRvd18xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QyMntjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyk7fQoJLnN0MjN7ZmlsbDojRkE3QjE3O30KCS5zdDI0e29wYWNpdHk6MC4zO2ZpbGw6IzE3NEVBNjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI1e29wYWNpdHk6MC4zO2ZpbGw6I0E1MEUwRTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI2e29wYWNpdHk6MC4zO2ZpbGw6I0UzNzQwMDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI3e2ZpbGw6dXJsKCNGaW5pc2hfbWFza18xXyk7fQoJLnN0Mjh7ZmlsbDojRkZGRkZGO30KCS5zdDI5e2ZpbGw6IzBDOUQ1ODt9Cgkuc3QzMHtvcGFjaXR5OjAuMjtmaWxsOiMwMDRENDA7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMXtvcGFjaXR5OjAuMjtmaWxsOiMzRTI3MjM7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMntmaWxsOiNGRkMxMDc7fQoJLnN0MzN7b3BhY2l0eTowLjI7ZmlsbDojMUEyMzdFO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MzR7b3BhY2l0eTowLjI7fQoJLnN0MzV7ZmlsbDojMUEyMzdFO30KCS5zdDM2e2ZpbGw6dXJsKCNTVkdJRF83Xyk7fQoJLnN0Mzd7ZmlsbDojRkJCQzA1O30KCS5zdDM4e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzlfKTtmaWxsOiNFNTM5MzU7fQoJLnN0Mzl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTFfKTtmaWxsOiNGQkMwMkQ7fQoJLnN0NDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTNfKTtmaWxsOiNFNTM5MzU7fQoJLnN0NDF7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTVfKTtmaWxsOiNGQkMwMkQ7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDE0IiBkPSJNMTIwLDc2LjFjMC0zLjEtMC4zLTYuMy0wLjgtOS4zSDc1Ljl2MTcuN2gyNC44Yy0xLDUuNy00LjMsMTAuNy05LjIsMTMuOWwxNC44LDExLjUgICBDMTE1LDEwMS44LDEyMCw5MCwxMjAsNzYuMUwxMjAsNzYuMXoiLz48cGF0aCBjbGFzcz0ic3QxNSIgZD0iTTc1LjksMTIwLjljMTIuNCwwLDIyLjgtNC4xLDMwLjQtMTEuMUw5MS41LDk4LjRjLTQuMSwyLjgtOS40LDQuNC0xNS42LDQuNGMtMTIsMC0yMi4xLTguMS0yNS44LTE4LjkgICBMMzQuOSw5NS42QzQyLjcsMTExLjEsNTguNSwxMjAuOSw3NS45LDEyMC45eiIvPjxwYXRoIGNsYXNzPSJzdDEyIiBkPSJNNTAuMSw4My44Yy0xLjktNS43LTEuOS0xMS45LDAtMTcuNkwzNC45LDU0LjRjLTYuNSwxMy02LjUsMjguMywwLDQxLjJMNTAuMSw4My44eiIvPjxwYXRoIGNsYXNzPSJzdDEzIiBkPSJNNzUuOSw0Ny4zYzYuNS0wLjEsMTIuOSwyLjQsMTcuNiw2LjlMMTA2LjYsNDFDOTguMywzMy4yLDg3LjMsMjksNzUuOSwyOS4xYy0xNy40LDAtMzMuMiw5LjgtNDEsMjUuMyAgIGwxNS4yLDExLjhDNTMuOCw1NS4zLDYzLjksNDcuMyw3NS45LDQ3LjN6Ii8+PC9nPjwvc3ZnPg=="
                    width="200"
                    height="200"
                    alt="Vercel"
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
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0IiBoZWlnaHQ9IjEwNCIgdmlld0JveD0iMCAwIDEwNCAxMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE3KSI+CjxwYXRoIGQ9Ik0yNi4wMTkyIDdDNDIuMDk2MiAtMi4yODIwMyA2MS45MDM4IC0yLjI4MjAzIDc3Ljk4MDggN0M5NC4wNTc3IDE2LjI4MiAxMDMuOTYyIDMzLjQzNTkgMTAzLjk2MiA1MkMxMDMuOTYyIDcwLjU2NDEgOTQuMDU3NyA4Ny43MTggNzcuOTgwOCA5N0M2MS45MDM4IDEwNi4yODIgNDIuMDk2MiAxMDYuMjgyIDI2LjAxOTIgOTdDOS45NDIyOSA4Ny43MTggMC4wMzg0NzUgNzAuNTY0MSAwLjAzODQ3NSA1MkMwLjAzODQ3NSAzMy40MzU5IDkuOTQyMjkgMTYuMjgyIDI2LjAxOTIgN1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNjQiLz4KPHBhdGggZD0iTTI2LjAxOTIgN0M0Mi4wOTYyIC0yLjI4MjAzIDYxLjkwMzggLTIuMjgyMDMgNzcuOTgwOCA3Qzk0LjA1NzcgMTYuMjgyIDEwMy45NjIgMzMuNDM1OSAxMDMuOTYyIDUyQzEwMy45NjIgNzAuNTY0MSA5NC4wNTc3IDg3LjcxOCA3Ny45ODA4IDk3QzYxLjkwMzggMTA2LjI4MiA0Mi4wOTYyIDEwNi4yODIgMjYuMDE5MiA5N0M5Ljk0MjI5IDg3LjcxOCAwLjAzODQ3NSA3MC41NjQxIDAuMDM4NDc1IDUyQzAuMDM4NDc1IDMzLjQzNTkgOS45NDIyOSAxNi4yODIgMjYuMDE5MiA3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfMTcpIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI2LjAxOTIgN0M0Mi4wOTYyIC0yLjI4MjAzIDYxLjkwMzggLTIuMjgyMDMgNzcuOTgwOCA3Qzk0LjA1NzcgMTYuMjgyIDEwMy45NjIgMzMuNDM1OSAxMDMuOTYyIDUyQzEwMy45NjIgNzAuNTY0MSA5NC4wNTc3IDg3LjcxOCA3Ny45ODA4IDk3QzYxLjkwMzggMTA2LjI4MiA0Mi4wOTYyIDEwNi4yODIgMjYuMDE5MiA5N0M5Ljk0MjI5IDg3LjcxOCAwLjAzODQ3NSA3MC41NjQxIDAuMDM4NDc1IDUyQzAuMDM4NDc1IDMzLjQzNTkgOS45NDIyOSAxNi4yODIgMjYuMDE5MiA3WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0wLjUzODQ3NSA1MkMwLjUzODQ3NSAzMy42MTQ2IDEwLjM0NyAxNi42MjU3IDI2LjI2OTIgNy40MzMwMUM0Mi4xOTE1IC0xLjc1OTcgNjEuODA4NSAtMS43NTk3IDc3LjczMDggNy40MzMwMUM5My42NTMgMTYuNjI1NyAxMDMuNDYyIDMzLjYxNDYgMTAzLjQ2MiA1MkMxMDMuNDYyIDcwLjM4NTQgOTMuNjUzIDg3LjM3NDMgNzcuNzMwOCA5Ni41NjdDNjEuODA4NSAxMDUuNzYgNDIuMTkxNSAxMDUuNzYgMjYuMjY5MiA5Ni41NjdDMTAuMzQ3IDg3LjM3NDMgMC41Mzg0NzUgNzAuMzg1NCAwLjUzODQ3NSA1MloiIHN0cm9rZT0idXJsKCNwYWludDFfcmFkaWFsXzFfMTcpIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgo8cGF0aCBkPSJNMC41Mzg0NzUgNTJDMC41Mzg0NzUgMzMuNjE0NiAxMC4zNDcgMTYuNjI1NyAyNi4yNjkyIDcuNDMzMDFDNDIuMTkxNSAtMS43NTk3IDYxLjgwODUgLTEuNzU5NyA3Ny43MzA4IDcuNDMzMDFDOTMuNjUzIDE2LjYyNTcgMTAzLjQ2MiAzMy42MTQ2IDEwMy40NjIgNTJDMTAzLjQ2MiA3MC4zODU0IDkzLjY1MyA4Ny4zNzQzIDc3LjczMDggOTYuNTY3QzYxLjgwODUgMTA1Ljc2IDQyLjE5MTUgMTA1Ljc2IDI2LjI2OTIgOTYuNTY3QzEwLjM0NyA4Ny4zNzQzIDAuNTM4NDc1IDcwLjM4NTQgMC41Mzg0NzUgNTJaIiBzdHJva2U9InVybCgjcGFpbnQyX2xpbmVhcl8xXzE3KSIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNNTEuODg3OCAzNy45MjYyQzQ0LjE4OTIgMzcuOTI2MiAzNy45MjU4IDQ0LjE4OTYgMzcuOTI1OCA1MS44ODgyQzM3LjkyNTggNTkuNTg2OCA0NC4xODkyIDY1Ljg1MDIgNTEuODg3OCA2NS44NTAyQzU5LjU4NjQgNjUuODUwMiA2NS44NDk4IDU5LjU4NjggNjUuODQ5OCA1MS44ODgyQzY1Ljg0OTggNDQuMTg5NiA1OS41ODY0IDM3LjkyNjIgNTEuODg3OCAzNy45MjYyWk01MS44ODc4IDU5LjExMzZDNDcuODk2OCA1OS4xMTM2IDQ0LjY2MjQgNTUuODc5MiA0NC42NjI0IDUxLjg4ODJDNDQuNjYyNCA0Ny44OTcyIDQ3Ljg5NjggNDQuNjYyOCA1MS44ODc4IDQ0LjY2MjhDNTUuODc4OCA0NC42NjI4IDU5LjExMzIgNDcuODk3MiA1OS4xMTMyIDUxLjg4ODJDNTkuMTEzMiA1NS44NzkyIDU1Ljg3ODggNTkuMTEzNiA1MS44ODc4IDU5LjExMzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUzLjA1ODEgMzUuNjMzVjMwLjQyQzY0LjM4ODkgMzEuMDI1OCA3My4zOTAxIDQwLjQwNjYgNzMuMzkwMSA1MS44ODgyQzczLjM5MDEgNjMuMzY5OCA2NC4zODg5IDcyLjc0OCA1My4wNTgxIDczLjM1NjRWNjguMTQzNEM2MS41MDI5IDY3LjU0MDIgNjguMTkwMSA2MC40ODM4IDY4LjE5MDEgNTEuODg4MkM2OC4xOTAxIDQzLjI5MjYgNjEuNTAyOSAzNi4yMzYyIDUzLjA1ODEgMzUuNjMzWk0zOS41NzQ1IDYyLjU0ODJDMzcuMzM1OSA1OS45NjM4IDM1Ljg5MjkgNTYuNjcyMiAzNS42MzU1IDUzLjA1ODJIMzAuNDE5OUMzMC42OTAzIDU4LjExNTIgMzIuNzEzMSA2Mi43MDQyIDM1Ljg4MjUgNjYuMjM3NkwzOS41NzE5IDYyLjU0ODJIMzkuNTc0NVpNNTAuNzE4MiA3My4zNTY0VjY4LjE0MzRDNDcuMTAxNiA2Ny44ODYgNDMuODEgNjYuNDQ1NiA0MS4yMjU2IDY0LjIwNDRMMzcuNTM2MiA2Ny44OTM4QzQxLjA3MjIgNzEuMDY1OCA0NS42NjEyIDczLjA4NiA1MC43MTU2IDczLjM1NjRINTAuNzE4MloiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8xXzE3KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMV8xNyIgeDE9IjUyIiB5MT0iLTgiIHgyPSI1MiIgeTI9IjExMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzI4NkYxIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M0M0FDNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfMV8xNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg1MiAtNy45OTk5OSkgcm90YXRlKDkwKSBzY2FsZSgxNTQuMjg2IDE1NC4yODYpIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8xNyIgeDE9Ii04IiB5MT0iLTgiIHgyPSIxOC4yNSIgeTI9IjQwLjc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMV8xNyIgeDE9IjUzLjkwMDciIHkxPSIzMy40Mzg5IiB4Mj0iMzIuNzY3OSIgeTI9IjU0LjU3MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwOTZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjFFNTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzE3Ij4KPHJlY3Qgd2lkdGg9IjEwNCIgaGVpZ2h0PSIxMDQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
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
