declare module 'emailjs-com' {
    export function send(
      serviceId: string,
      templateId: string,
      variables: any,
      userId: string
    ): Promise<any>;
  }
  