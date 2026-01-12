
import React, { useState } from 'react';
import { useStore } from '../store';
import { Link, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { user, theme, toggleTheme } = useStore();
  const [showTutorialHint, setShowTutorialHint] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md border-b-2 border-slate-800 dark:border-slate-300 h-16 px-4">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link to="/app/home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl whiteboard-card">F</div>
          <span className="text-xl font-bold marker-font hidden md:inline">Followership Master</span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full border border-gray-300">
            <span className="text-xs font-bold uppercase text-blue-600">LV.{user.level}</span>
            <div className="w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${user.xp % 100}%` }}></div>
            </div>
          </div>

          <button 
            onClick={() => setShowTutorialHint(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition"
            title="도움말"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.444 1.103m0 4.806h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {showTutorialHint && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="whiteboard-card p-6 max-w-md w-full animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-bold marker-font mb-4 text-blue-600">친절한 사용 가이드 💡</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li>📍 <strong>진단하기:</strong> 당신의 팔로워십 유형을 확인하세요.</li>
              <li>📍 <strong>시뮬레이션:</strong> 실제 상황에서 최선의 선택을 하세요.</li>
              <li>📍 <strong>AI 코칭:</strong> 에바(Eva)와 대화하며 성장하세요.</li>
              <li>📍 <strong>마이페이지:</strong> 획득한 뱃지와 XP를 확인하세요.</li>
            </ul>
            <div className="mt-6 flex justify-end space-x-2">
              <Link 
                to="/app/tutorial" 
                onClick={() => setShowTutorialHint(false)}
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                튜토리얼 다시보기
              </Link>
              <button 
                onClick={() => setShowTutorialHint(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700"
              >
                알겠어요!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
