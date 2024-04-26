import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content){
    console.log(content.params.id);
    
    const data = user;
    console.log(data.id);

    const userData = data.filter((item)=>item.id == content.params.id)
    return NextResponse.json(userData.length == 0 ? {result: "No Data found", success: false} :{result: userData[0], success: true},{status: 200})
}
export async  function POST(request, content){
    console.log(content);
    let payload = await request.json();
    console.log(payload);
    if(!payload.name || !payload.age || !payload.email){
     return NextResponse.json({result:"require field not found ", success: false}, {status: 400})
    }
    return NextResponse.json({result:payload, success: true}, {status: 201})
}


export async function PUT(request, content){
    let payload = await request.json();
    payload.id = content.params.id;
    if(!payload.id || !payload.name || !payload.email){
        return NextResponse.json({result:"request data is not available", success: true}, {status: 200})
    }

   
return NextResponse.json({result:payload, success: true},{status: 200})
}
