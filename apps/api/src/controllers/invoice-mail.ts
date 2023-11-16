import catchAsync from "@api/utils/catch-async";
import type { Email } from "@api/types";
import type { NextFunction, Request, Response } from "express";
import { google, gmail_v1 } from "googleapis";

const getEmailInfo = function (
  headers: gmail_v1.Schema$MessagePartHeader[],
  searchTerm: string
) {
  const info: Email = {
    subject: "",
    date: "",
    senderName: "",
    senderMail: "",
    body: "",
    hasInvoice: false,
  };
  for (const header of headers) {
    if (header.name === "Subject") {
      if (header.value?.toLowerCase().includes(searchTerm)) {
        info.hasInvoice = true;
      }
      info.subject = header.value ?? "";
    }
    if (header.name == "From") {
      const sender = header.value?.match(/(.+)<(.+)>/);
      if (sender && sender.length === 3) {
        info.senderName = sender[1].trim();
        info.senderMail = sender[2].trim();
      } else {
        info.senderMail = header.value?.trim() ?? "";
      }
    }
    if (header.name === "Date") {
      info.date = header.value ?? "";
    }
  }
  return info;
};

const getEmails = async function ({
  searchTerm,
  access_token,
  refresh_token,
}: {
  searchTerm: string;
  access_token?: string | null;
  refresh_token?: string | null;
}) {
  const client = new google.auth.OAuth2();
  client.setCredentials({ access_token, refresh_token });
  const gmail = google.gmail({ version: "v1", auth: client });
  const response = await gmail.users.messages.list({
    userId: "me",
    maxResults: 50,
    q: "in:inbox",
  });
  const messages = response?.data.messages;
  const emails: Email[] = [];
  if (!messages) {
    return emails;
  }
  for (const message of messages) {
    const email = await gmail.users.messages.get({
      userId: "me",
      id: message.id!,
    });
    const headers = email.data.payload?.headers;
    if (!headers) continue;
    const info = getEmailInfo(headers, searchTerm);
    info.body = email.data.snippet || "";
    if (
      !info.hasInvoice ||
      !email.data.snippet?.toLowerCase().includes(searchTerm)
    ) {
      continue;
    }
    emails.push(info);
  }
  return emails;
};

export const getSpecificEmails = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken, accessToken } = req.user as any;
    const searchTerm = req.query.searchTerm as string;
    const emails = await getEmails({
      searchTerm,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully fetched emails",
      emails,
    });
  }
);
