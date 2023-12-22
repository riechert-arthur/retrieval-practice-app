import { montserrat } from '@/library/fonts'
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
        <nav>
            <ul className={ `flex w-full list-none
                ${ montserrat.className } text-xl text-gray-600 font-light` 
            }>
                {
                    links.map((link: InternalLink, index: number) => (
                        <li key={ index } className='ml-4'>
                            <Link href={ link.route }>{ link.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}