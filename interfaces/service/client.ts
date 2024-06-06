export type EmailPayload = { subject: string; body: string };

export interface NotificationClient {
  sendEmail(email: string, data: EmailPayload): Promise<void>;
}