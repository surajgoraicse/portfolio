import fs from "fs/promises";
import path from "path";

export async function GET() {
	// Example: read a file from the local filesystem
	const filePath = path.join(process.cwd(), "public/suraj.pdf");
	const buffer = await fs.readFile(filePath);

	// Set headers to trigger a download
	const headers = new Headers();
	headers.append("Content-Disposition", 'attachment; filename="suraj.pdf"');
	headers.append("Content-Type", "application/pdf");

	return new Response(buffer, { headers });
}
