import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
	const filePath = path.join(process.cwd(), "private", "suraj.pdf");
	const fileBuffer = await readFile(filePath);

	return new NextResponse(fileBuffer, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": "inline; filename=resume.pdf",
		},
	});
}
