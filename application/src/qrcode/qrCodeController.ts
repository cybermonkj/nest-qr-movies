import { Controller, Get, Render } from '@nestjs/common';

@Controller('qr-code')
export class QrCodeController {
  @Get()
  @Render('qr-code')
  async getQrCode(): Promise<{ qrCodeUrl: string }> {
    const qrCodeUrl = 'https://example.com/qr-code.png';
    return { qrCodeUrl };
  }
}
