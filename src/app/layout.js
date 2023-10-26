"use client";

import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page";
import PostPage from "./posts/page";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
    title: "Blog App",
    description: "Blog Web Application",
}; */

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <title>Blog App</title>
                <meta name='description' content='Blog Web Application'></meta>
            </head>
            <body className={inter.className}>
                <Providers>
                    <Container maxWidth='90%'>
                        <Router>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route
                                    path='/posts/:id'
                                    element={<PostPage />}
                                />
                            </Routes>
                        </Router>
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
