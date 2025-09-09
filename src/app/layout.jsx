export const metadata = {
    title: 'Puzzle Platformer',
    description: 'A 2D puzzle platformer game made with Phaser and Next.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <script src="/socket.io/socket.io.js"></script>
            <body>{children}</body>
        </html>
    )
}
