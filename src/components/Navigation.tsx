import { montserrat, roboto } from '@/library/fonts'
import Link from 'next/link'

/**
 * A container with links to the main pages of the application. 
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface InternalLink {
    name: string
    route: string
}

const links: InternalLink[] = [
    { name: 'Home', route: '/' },
    { name: 'Tools', route: '/tools' },
    { name: 'Analytics', route: '/analytics' },
    { name: 'Resources', route: '/resources' },
]

export default function Navigation() {
    return (
        <nav className='flex items-center md:justify-between'>
            <Link className={ `hidden md:inline ${ roboto.className } text-3xl font-bold` } href='/'>3L</Link>
            <ul className={ `flex justify-between ml-4 w-full md:w-2/5 list-none
                ${ montserrat.className } text-xl text-gray-600 font-light` 
            }>
                {
                    links.map((link: InternalLink, index: number) => (
                        <li key={ index }>
                            <Link href={ link.route }>{ link.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}