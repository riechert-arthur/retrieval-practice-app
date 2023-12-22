import { Montserrat, Roboto, Kulim_Park } from 'next/font/google'

/**
 * A centralized file from which fonts may be imported.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['200', '300']
})

export const roboto = Roboto({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700']
})

export const kulimPark = Kulim_Park({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400']
})