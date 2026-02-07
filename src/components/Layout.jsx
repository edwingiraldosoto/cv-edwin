function Layout({ sidebar, children }) {
  return (
    <div className="layout">
      <aside className="sidebar">{sidebar}</aside>
      <section className="content">{children}</section>
    </div>
  );
}

export default Layout;
