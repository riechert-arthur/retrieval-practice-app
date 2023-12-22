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
        <div className={ `flex flex-col justify-center items-center 
            w-60 h-60 rounded-full border-2`
        }>
            <text className='w-fit'><i>Next: Rest</i></text>
            <text className='w-fit text-4xl'>3:29:20</text>
            <div className='flex'>
                <ResetButton />
                <PlayButton />
                <FastForwardButton />
            </div>
        </div>
    )
}