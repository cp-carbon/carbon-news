// import * as tf from '@tensorflow/tfjs-node'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const pred = {
        sentiment : 'positive',
        confidence : 0.82
    }
    return NextResponse.json(pred)
}