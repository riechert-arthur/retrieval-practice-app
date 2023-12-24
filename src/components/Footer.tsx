import { montserrat } from '@/library/fonts'
import Link from 'next/link'

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface InternalLink {
    name: string
    url: string
}

interface SocialLink {
    name: string
    icon: string
    url: string
}

const internalLinks: InternalLink[] = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Analytics', url: '/analytics' },
    { name: 'Resources', url: '/resources' },
]

const socials: SocialLink[] = [
    { name: 'Twitter', icon: 'bg-twitter-icon', url: 'https://twitter.com/ArtieRiechert' },
    { name: 'Github', icon: 'bg-github-icon', url: 'https://github.com/riechert-arthur' },
    { name: 'Linkedin', icon: 'bg-linkedin-icon', url: 'https://www.linkedin.com/in/arthur-riechert-4b1414224/' },
]

export default function Footer() {
    return (
        <footer className={ `${ montserrat.className }` }>
            <div className='h-20 w-full  bg-layered-peaks bg-cover'></div>
            <div className='flex flex-col items-center px-5 pt-5 pb-2 w-full bg-green-400'>
                <div className='flex justify-between px-1 w-1/3 md:w-1/6'>
                    {
                        socials.map((social, index) => (
                            <Link 
                                className={ `w-8 h-8 ${ social.icon } bg-cover` }
                                key={ index }
                                href={ social.url }
                            />
                        ))
                    }
                </div>
                <div className='flex justify-between mt-6 w-4/5 md:w-2/5 md:text-lg text-white font-extralight'>
                    {
                        internalLinks.map((link, index) => (
                            <Link
                                key={ index }
                                href={ link.url }
                            >
                                { link.name }
                            </Link>
                        ))
                    }
                </div>
                <button className='w-10 h-10'></button>
                <text className='text-white font-light'>©2023 3L | All Rights Reserved</text>
            </div>
        </footer>
    )
}