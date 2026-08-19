import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  const email = 'admin@marediasoft.com';
  const password = 'adminpassword123';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
      },
      create: {
        email,
        password: hashedPassword,
        name: 'Admin',
        role: 'admin',
      },
    });

    return NextResponse.json({ message: "Admin user created successfully", email: user.email });
  } catch (error) {
    return NextResponse.json({ message: "Error seeding admin", error: error.message }, { status: 500 });
  }
}
