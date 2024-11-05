import { NextRequest, NextResponse } from "next/server";

export const dashboardMiddleware = async (request: NextRequest): Promise<NextResponse> => {
  console.log("Middleware active for dashboard page 🐼🐼❤️💡", `url: ${request.url}`);
  return NextResponse.next();
};

export const dashboardConfig = {
  matcher: ['/dashboard'],
  handler: dashboardMiddleware,
};