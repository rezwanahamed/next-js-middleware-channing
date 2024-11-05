import { NextResponse } from "next/server";


export const aboutPageMiddleware =async ():Promise<NextResponse>=>{
    console.log("about page is  running ⚠️⚠️⚠️⚠️")
    return NextResponse.next()
}

export const aboutConfig = {
    matcher: ['/dashboard', '/about'],
    handler: aboutPageMiddleware
}