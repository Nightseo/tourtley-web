'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">TOURTLEY</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              <a href="#tokenomics" className="text-white/90 hover:text-white transition-colors">Tokenomics</a>
              <a href="#roadmap" className="text-white/90 hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="text-white/90 hover:text-white transition-colors">Community</a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://x.com/turtleysolana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://t.me/tourtley"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
        
        {/* Sun rays effect */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
          <div className="sun-rays"></div>
        </div>
        
        {/* Hero wallpaper overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wallpaper-hero.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left flex-1 animate-slideInLeft">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                TOURTLEY
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                The Turtle Meme Coin on Solana
              </p>
              <p className="text-lg text-white/90 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Community-driven token with strong fundamentals and organic growth
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Buy $TRTL
                </a>
                <a
                  href="#"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                >
                  View Chart
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">100K+</div>
                  <div className="text-sm text-white/70">Holders</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">$10M</div>
                  <div className="text-sm text-white/70">Market Cap</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-sm text-white/70">Community</div>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 animate-slideInRight">
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/tourtley.png"
                    alt="Tourtley Mascot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Why TOURTLEY?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Strong Growth</h3>
              <p className="text-white/80 leading-relaxed">
                Consistent upward momentum backed by an active and growing community
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Resilience</h3>
              <p className="text-white/80 leading-relaxed">
                Strong holder base with low sell pressure and high conviction
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-6">🌊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Liquidity Locked</h3>
              <p className="text-white/80 leading-relaxed">
                100% liquidity locked ensuring long-term stability and investor confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Tokenomics
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Distribution</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Liquidity Pool</span>
                    <span className="text-xl font-bold text-blue-400">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Community Rewards</span>
                    <span className="text-xl font-bold text-purple-400">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Development</span>
                    <span className="text-xl font-bold text-pink-400">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Marketing</span>
                    <span className="text-xl font-bold text-green-400">10%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Token Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/60 text-sm mb-1">Total Supply</div>
                    <div className="text-xl font-bold text-white">1,000,000,000 TRTL</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Tax</div>
                    <div className="text-xl font-bold text-white">0% Buy / 0% Sell</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Contract</div>
                    <div className="text-sm font-mono text-blue-400 break-all">0x0000...0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Roadmap
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Launch Phase</h3>
                  <p className="text-white/70">Token launch, liquidity locked, CoinGecko & CMC listings</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Growth Phase</h3>
                  <p className="text-white/70">Major CEX listings, strategic partnerships, 50K holders milestone</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Expansion Phase</h3>
                  <p className="text-white/70">NFT collection launch, staking rewards, ecosystem expansion</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Domination Phase</h3>
                  <p className="text-white/70">DeFi integrations, institutional partnerships, global adoption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Community
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Be part of a growing ecosystem. Connect with thousands of holders and stay updated on the latest developments.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://x.com/turtleysolana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter / X
            </a>
            
            <a
              href="https://t.me/tourtley"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </a>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 TOURTLEY. All rights reserved. | Contract: 0x0000...0000
          </p>
        </div>
      </footer>
    </main>
  )
}