import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required().max(80),
    email: yup.string().required().email().max(120),
    message: yup.string().required().max(2000),
  })
  .required();

type Payload = yup.InferType<typeof schema>;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    await schema.validate(body, { abortEarly: false, stripUnknown: true });
  } catch {
    return NextResponse.json(
      { error: "Validation failed" },
      { status: 422 },
    );
  }

  // Placeholder for sending email (Resend/SendGrid) or saving to a DB.
  // Keep this as a no-op to stay deploy-ready without secrets.

  return NextResponse.json({ ok: true });
}
