import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, number, website, service, message } = body;

    const accessKey =
      process.env.FORM_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
      "1cbfea18-60e8-44fe-b580-5d84c46310b2";

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Missing FORM_ACCESS_KEY configuration." },
        { status: 500 }
      );
    }

    if (!name || !number) {
      return NextResponse.json(
        { success: false, message: "Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const payload = {
      access_key: accessKey,
      name: name.trim(),
      phone: number.trim(),
      website: website ? website.trim() : "Not provided",
      service: service || "General Consultation",
      message:
        message && message.trim().length > 0
          ? message.trim()
          : `Lead from Website - Interested in: ${service || "General Consultation"}`,
      subject: `New Lead: ${name.trim()} - ${service || "Project Inquiry"}`,
      from_name: "Sparklines Studio Website",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && (data.success || data.status === "success")) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "Failed to submit form to Web3Forms.",
        },
        { status: response.status || 400 }
      );
    }
  } catch (error: unknown) {
    console.error("Error submitting contact form:", error);
    const errMessage = error instanceof Error ? error.message : "An unexpected error occurred. Please try again.";
    return NextResponse.json(
      {
        success: false,
        message: errMessage,
      },
      { status: 500 }
    );
  }
}
