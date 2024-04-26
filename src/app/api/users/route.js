import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, {content}){
    // console.log(request)
    const data = user;
    return NextResponse.json(data, {status: 200})
}

export async  function POST(request){
    // console.log(request);
    let payload = await request.json();
    console.log(payload);
    if(!payload.name || !payload.age || !payload.email){
     return NextResponse.json({result:"require field not found ", success: false}, {status: 400})
    }
    return NextResponse.json({result:`new user ${payload.name} created`, success: true}, {status: 201})
}

export function DELETE(request,content){
    let id = content.params.id;
    console.log(id);

    if(id){
        return NextResponse.json({ result: "User Deleted", success: true}, {status: 200})
    }
    else{
        return NextResponse.json({result: "Internal Error, please retry", success: false}, {status: 400})
    }
}