import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL_TO;

export async function POST(req: NextRequest) {
  if (!toEmail) {
    return NextResponse.json({ error: 'Email tujuan tidak dikonfigurasi di server.' }, { status: 500 });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Semua field harus diisi.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Smile Kids Contact Form <onboarding@resend.dev>', // Alamat ini harus diverifikasi di Resend
      to: [toEmail],
      subject: `Pesan Baru dari ${name} melalui Website Smile Kids`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2 style="color: #0056b3;">Pesan Baru dari Formulir Kontak Website</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Pesan:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email berhasil dikirim!', id: data?.id });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
} 