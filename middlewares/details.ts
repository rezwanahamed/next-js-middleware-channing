// middlewares/details.ts
import { NextRequest, NextResponse } from "next/server";

export const detailsMiddleware = async (request: NextRequest): Promise<NextResponse> => {
  console.log("Middleware active for details page 😂😊", `url: ${request.url}`);
  return NextResponse.next();
};

export const detailsConfig = {
  matcher: '/details',
  handler: detailsMiddleware,
};