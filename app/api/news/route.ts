import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('b6c82bb9bc37415f9c46564673df59bf');

  const res = await newsapi.v2.everything({
    q: 'sustainable living, earth',
    language: 'en',
    pageSize: 12
  })

  return NextResponse.json(res);
}
