import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NAV = [
  ["/", "الرئيسية"],
  ["/tarif", "تعريف الصحة واللياقة"],
  ["/ahamiya", "أهمية اللياقة"],
  ["/bahth", "بحث علمي"],
  ["/maqal", "مقالات"],
  ["/sabahak", "صباحك صحة ولياقة"],
  ["/calculator", "الحاسبة"],
];

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link to="/" className="brand"><span className="dot"></span> نبض الصحة</Link>
          <div className="nav-links">
            {NAV.map(([href, label]) => (
              <Link key={href} to={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            ))}
          </div>
          <Link to="/calculator"><button className="nav-cta">جرّب الحاسبة</button></Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ color: "#fff" }}>
                <span className="dot"></span> نبض الصحة
              </div>
              <p style={{ color: "#B9CFC6", maxWidth: "34ch", marginTop: 10 }}>
                مرجع عربي شامل حول الصحة واللياقة البدنية، وأداة مجانية تُحسب
                بالكامل داخل متصفحك دون إرسال أي بيانات.
              </p>
            </div>
            <div>
              <h4>خريطة الموضوع</h4>
              <Link to="/tarif">تعريف الصحة واللياقة البدنية</Link>
              <Link to="/ahamiya">أهمية الصحة واللياقة البدنية</Link>
              <Link to="/bahth">بحث عن الصحة واللياقة البدنية</Link>
              <Link to="/maqal">مقال عن الصحة واللياقة البدنية</Link>
            </div>
            <div>
              <h4>موارد</h4>
              <Link to="/sabahak">صباحك صحة ولياقة</Link>
              <Link to="/calculator">حاسبة اللياقة المجانية</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 نبض الصحة (nabdsaha.com)</span>
          </div>
        </div>
      </footer>
    </>
  );
}
