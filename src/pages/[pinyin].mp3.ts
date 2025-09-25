import type { APIRoute } from "astro";
import {markToNumber} from 'pinyin-utils';
// import { readdirSync } from 'fs';
export const prerender = false;


export const GET: APIRoute = async ({ params, request, redirect }) => {
    // const files = readdirSync("public").filter(file => file.endsWith(".mp3"))
    // console.log(files)
    const markedPinyin = params["pinyin"]
    const numberedPinyin = markToNumber(markedPinyin, true)
        .replace("5", "")
        .replace("ü", "uu")
        .replace("v", "uu")
    console.log(markedPinyin, numberedPinyin)
    if (numberedPinyin.length > markedPinyin.length) {
        return redirect(`/${numberedPinyin}.mp3`, 301);
    }
    return new Response(null, {
        status: 404,
        statusText: "Not found",
    });
}