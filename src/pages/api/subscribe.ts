import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company } = body;

    // Validate required fields
    if (!name || !email || !phone || !company) {
      return new Response(
        JSON.stringify({
          error: 'Todos os campos são obrigatórios.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: 'E-mail inválido.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Initialize Resend
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({
          error: 'Serviço de e-mail não configurado. Entre em contato com o suporte.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const resend = new Resend(resendApiKey);
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'sms@nexuscomunicacao.com';

    // Send email notification
    // Use Resend test domain in development, verified domain in production
    const fromEmail = 'Black Friday NEXUS <noreply@nexuscomunicacao.com>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `[BLACK FRIDAY] Novo Lead: ${name} - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #034BD3 0%, #FF7C1A 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .badge {
                background: #FFD700;
                color: #000;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                display: inline-block;
                margin-top: 10px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-left: 4px solid #034BD3;
                border-radius: 5px;
              }
              .field-label {
                font-weight: bold;
                color: #034BD3;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #333;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #ddd;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
              .cta {
                background: #FF7C1A;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 25px;
                display: inline-block;
                margin-top: 20px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🎯 Novo Lead Black Friday</h1>
              <span class="badge">PRIORIDADE ALTA</span>
            </div>
            <div class="content">
              <p style="font-size: 16px; color: #666;">
                Um novo lead se cadastrou para receber as ofertas da Black Friday NEXUS! Veja os detalhes abaixo:
              </p>

              <div class="field">
                <div class="field-label">Nome Completo</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">E-mail</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #034BD3;">${email}</a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">WhatsApp</div>
                <div class="field-value">
                  <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #25D366;">
                    ${phone}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Empresa</div>
                <div class="field-value">${company}</div>
              </div>

              <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
                <strong>⏰ Ação recomendada:</strong> Entre em contato em até 24 horas para maximizar a conversão!
              </p>

              <div style="text-align: center;">
                <a href="https://wa.me/${phone.replace(/\D/g, '')}" class="cta">
                  💬 Enviar WhatsApp
                </a>
              </div>
            </div>
            <div class="footer">
              <p>Este e-mail foi gerado automaticamente pela Landing Page Black Friday NEXUS</p>
              <p style="color: #999; margin-top: 10px;">
                Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          error: 'Erro ao enviar e-mail. Por favor, tente novamente.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        message: 'Cadastro realizado com sucesso! Em breve você receberá nossas ofertas exclusivas.',
        data: data,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return new Response(
      JSON.stringify({
        error: 'Erro ao processar sua solicitação. Por favor, tente novamente.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
