export type SendEmailConfirmationEmailVariables = {
    firstName: string;
    lastName: string;
    toEmail: string;
    expirationDate: string;
    url: string;
};

export type SendRecoverPasswordEmailVariables = {
    firstName: string;
    lastName: string;
    toEmail: string;
    url: string;
    expirationDate: string;
};

export interface NotificationService {
    sendVerificationEmail(vars: SendEmailConfirmationEmailVariables): Promise<void>;
    sendRecoverPasswordEmail(vars: SendRecoverPasswordEmailVariables): Promise<void>;
}
  