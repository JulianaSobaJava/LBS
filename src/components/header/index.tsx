import Link from 'next/link';


export function Header() {
    return (
        <header className='flex '>
            <div >
                <span>Logo da Aplicação</span>
                <nav>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Posts</Link>
                </nav>
            </div>
        </header>
    );
}