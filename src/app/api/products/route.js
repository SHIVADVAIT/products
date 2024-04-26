import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/db";

export async function GET(){
   let  data = []
   try{
    await mongoose.connect(connectionSrt)
    data =  await Product.find();
   console.log(data);
}
catch (error){
     data = {success: false}
}
    return NextResponse.json({result:data , success: true})
}