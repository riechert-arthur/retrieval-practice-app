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
        <ul className='flex w-full list-none text-xs'>
            {
                links.map((link: InternalLink, index: number) => (
                    <li key={ index }>
                        <Link href={ link.route }>{ link.name }</Link>
                    </li>
                ))
            }
        </ul>
    )
}