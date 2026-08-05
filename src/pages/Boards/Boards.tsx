import React from 'react';
import './Boards.css';
import { useLanguage } from '../../store/LanguageProvider';

const BOARD_COLORS = [
  '#00D1FF',
  '#FFD700',
  '#808080',
  '#7000FF',
  '#000000',
  '#00A859',
  '#E70013',
  '#FF6B00',
];

const Boards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="boards-scroll-wrapper bg-industrial-white">
      <div className="boards-container">
        <header className="section-header-compact">
          <h2 className="header-title">{t.boards.nationalTitle}</h2>
          <div className="header-divider"></div>
          <span className="header-meta">{t.boards.nationalMeta}</span>
        </header>

        <div className="boards-grid">
          {t.boards.institutions.map((board, index) => (
            <div key={board.id} className="mini-report board-card">
              <div className="ribbon-strip" style={{ backgroundColor: BOARD_COLORS[index] }}></div>

              <div className="mini-report-header">
                <span className="mini-id">{board.id}</span>
                <div className="mini-seal board-seal"></div>
              </div>

              <div className="mini-content">
                <h3 className="mini-title">{board.name}</h3>
                <div className="board-focus-tag">
                  {t.boards.primaryFocusPrefix}: {board.focus}
                </div>
                <div className="mini-lines">
                  <div className="line-long"></div>
                  <div className="line-short"></div>
                  <div className="line-long"></div>
                </div>
              </div>

              <div className="mini-footer">
                <span>{t.common.draft}</span>
                <span className="view-link">{t.common.directives}</span>
              </div>
            </div>
          ))}
        </div>

        <header className="section-header-compact" style={{ marginTop: '100px' }}>
          <h2 className="header-title">{t.boards.regionalTitle}</h2>
          <div className="header-divider"></div>
          <span className="header-meta">{t.boards.regionalMeta}</span>
        </header>

        <div className="boards-grid">
          <div className="mini-report board-card">
            <div
              className="ribbon-strip"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #ddd' }}
            ></div>
            <div className="mini-report-header">
              <span className="mini-id">{t.boards.regional.id}</span>
              <div className="mini-seal board-seal"></div>
            </div>
            <div className="mini-content">
              <h3 className="mini-title">{t.boards.regional.name}</h3>
              <div className="board-focus-tag">
                {t.boards.primaryFocusPrefix}: {t.boards.regional.focus}
              </div>
              <p className="regional-note">{t.boards.regional.note}</p>
              <div className="mini-lines">
                <div className="line-long"></div>
                <div className="line-short"></div>
              </div>
            </div>
            <div className="mini-footer">
              <span>{t.common.draft}</span>
              <span className="view-link">{t.common.localMap}</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="compact-footer">
        <div className="footer-line"></div>
        <div className="footer-meta-row">
          <div className="f-brand">{t.boards.footerBrand}</div>
          <div className="f-copy">{t.boards.footerCopy}</div>
        </div>
      </footer>
    </div>
  );
};

export default Boards;
