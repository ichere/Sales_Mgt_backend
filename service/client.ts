import { SES } from 'aws-sdk';

import { NotificationClient } from 'interfaces/service';
import { EmailPayload } from 'interfaces/service/client'; 
import { EMAIL_CONFIG } from 'utils/config/email'; 
import { stripHtml } from 'utils/config/html'; 

export class EmailService implements NotificationClient {
  public constructor(
    private emailService = new SES({ apiVersion: '2010-12-01', region: 'us-east-1' }),
    private emailConfig = EMAIL_CONFIG,
  ) {}

  public async sendEmail(
    _recipientAddress: string,
    { body, subject }: EmailPayload,
  ): Promise<void> {
    const { charset, defaultFromEmail } = this.emailConfig;
    const params: SES.Types.SendEmailRequest = {
      Source: defaultFromEmail,
      Destination: {
        ToAddresses: [defaultFromEmail],
      },
      Message: {
        Body: {
          Html: {
            Charset: charset,
            Data: body,
          },
          Text: {
            Charset: charset,
            Data: stripHtml(body),
          },
        },
        Subject: {
          Charset: charset,
          Data: subject,
        },
      },
    };

    await this.emailService.sendEmail(params).promise();
  }
}
