// /private/* keeps the old Tailwind app (the private resume page); every other path is the redesigned portfolio.
;(async () => {
  if (location.pathname.startsWith('/private')) {
    await import('./index.css')
    const [{ createRoot }, { default: App }] = await Promise.all([import('react-dom/client'), import('./App.jsx')])
    createRoot(document.getElementById('root')).render(<App />)
  } else {
    const { default: mount } = await import('./site/mount.jsx')
    await mount()
  }
})()
