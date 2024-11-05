// middleware.ts (in project root)
import { NextRequest } from "next/server";
import { aboutConfig } from "./middlewares/about";
import { dashboardConfig } from "./middlewares/dashboard";
import { detailsConfig } from "./middlewares/details";
import { MiddlewareChain } from "./utils/middlewareChain";

const middlewareChain = new MiddlewareChain();
middlewareChain.add(dashboardConfig).add(detailsConfig).add(aboutConfig)

export async function middleware(request: NextRequest) {
  return middlewareChain.execute(request);
}

export const config = {
  matcher:'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};