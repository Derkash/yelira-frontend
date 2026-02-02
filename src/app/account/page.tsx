'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'login' | 'register';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('login');
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Redirect to WooCommerce login with return URL
    const returnUrl = encodeURIComponent(window.location.origin);
    window.location.href = `https://wp.yelira.fr/mon-compte/?redirect_to=${returnUrl}`;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Redirect to WooCommerce registration
    window.location.href = 'https://wp.yelira.fr/mon-compte/';
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-[11px] text-gray-500 tracking-[0.1em] uppercase">
            <Link href="/" className="hover:text-[#997a6e] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Mon compte</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[500px] mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-2">
            Mon Compte
          </h1>
          <p className="text-[14px] text-gray-600">
            Connectez-vous ou créez un compte pour gérer vos commandes
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors ${
              activeTab === 'login'
                ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors ${
              activeTab === 'register'
                ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Inscription
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#997a6e]" />
                <span className="text-[13px] text-gray-600">Se souvenir de moi</span>
              </label>
              <a
                href="https://wp.yelira.fr/mon-compte/lost-password/"
                className="text-[13px] text-[#997a6e] hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a1a1a] text-white py-4 text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-[#997a6e] transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={registerFirstName}
                  onChange={(e) => setRegisterFirstName(e.target.value)}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={registerLastName}
                  onChange={(e) => setRegisterLastName(e.target.value)}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                minLength={8}
                className="w-full border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-[#997a6e] transition-colors"
                placeholder="Minimum 8 caractères"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="w-4 h-4 mt-0.5 accent-[#997a6e]" />
              <span className="text-[13px] text-gray-600">
                J&apos;accepte les{' '}
                <Link href="/cgv" className="text-[#997a6e] hover:underline">
                  conditions générales de vente
                </Link>{' '}
                et la{' '}
                <Link href="/confidentialite" className="text-[#997a6e] hover:underline">
                  politique de confidentialité
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a1a1a] text-white py-4 text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-[#997a6e] transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Inscription...' : 'Créer mon compte'}
            </button>
          </form>
        )}

        {/* Benefits */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-6 text-center">
            Avantages de votre compte
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: 'Suivi de commandes',
                desc: 'Suivez vos commandes en temps réel',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Liste de souhaits',
                desc: 'Sauvegardez vos articles préférés',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Offres exclusives',
                desc: 'Accédez à des promotions réservées',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-4 p-4 bg-white">
                <div className="text-[#997a6e]">{benefit.icon}</div>
                <div>
                  <h4 className="text-[13px] font-medium">{benefit.title}</h4>
                  <p className="text-[12px] text-gray-500">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
