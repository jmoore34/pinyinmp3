import type { APIRoute } from "astro";
import {markToNumber} from 'pinyin-utils';
export const prerender = false;


export const GET: APIRoute = async ({ params, request, redirect }) => {
    const markedPinyin = params["pinyin"]
    const numberedPinyin = markToNumber(markedPinyin, false)
        .replace("5", "")
        .replace("ü", "v")
    return redirect(`/${numberedPinyin}.mp3`, 301);
}