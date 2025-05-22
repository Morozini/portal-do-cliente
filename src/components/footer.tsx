import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-4 justify-center flex relative flex-col items-center'>
      <div className='container flex flex-col items-center justify-between gap-x-3 gap-y-1 text-center text-sm text-muted-foreground sm:flex-row'>
        <p>Total Life Brasil &copy;{new Date().getFullYear()}. All rights reserved.</p>
        <p className='text-xs'>
          Developed by{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary transition-colors hover:text-accent-foreground '
            href='https://totallifebrasil.com.br/'
          >
            Total Life System
          </Link>
        </p>
      </div>
    </footer>
  )
}