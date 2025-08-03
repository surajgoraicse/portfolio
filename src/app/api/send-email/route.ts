import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { resend } from '@/lib/resend';
import { count } from 'console';

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await resend.emails.send({
      from: 'Suraj <onboarding@resend.dev>',
      to: ['surajgoraicse@gmail.com'],
      subject: 'Message from Your Portfolio',
      react: EmailTemplate({ Email: email, Message: message }),
    });

    if (error) {
      console.log(error);
      return NextResponse.json(
        { success: false, message: `Something went wrong while sending email : ${error}` },
        { status: 501 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'I will get in touch with you soon :)' },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: `Server error occurred : ${error}` },
      { status: 501 }
    );
  }
}

