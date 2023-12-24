'use client'

import { kulimPark } from "@/library/fonts"
import { useState } from "react"
import FastForwardButton from "./FastForwardButton"
import PauseButton from "./PauseButton"
import PlayButton from "./PlayButton"
import ResetButton from "./ResetButton"

/**
 * A basic pomodoro timer.
 *
 * NOTE:
 * - Refer to Figma design V1.0.0 in README.md for design.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function Timer() {
    return (
        <div className='p-1 rounded-full bg-gradient-to-b from-green-400 to-sky-500'>
            <div className={ `flex flex-col justify-center items-center 
                w-64 h-64 rounded-full ${ kulimPark.className } bg-white`
            }>
                <text className='w-fit text-2xl text-gray-600'><i>Next: Rest</i></text>
                <text className='w-fit text-6xl'>3:29:20</text>
                <div className='flex items-center mt-4'>
                    <ResetButton />
                    <PlayButton />
                    <FastForwardButton />
                </div>
            </div>
        </div>
    )
}