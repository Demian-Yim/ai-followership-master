
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const WelcomePage: React.FC = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const setUserName = useStore(state => state.setUserName);
  const navigate = useNavigate();

  const handleStart = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError('이름을 입력해 주세요.');
      return;
    }
    setUserName(trimmed);
    navigate('/app/tutorial');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="whiteboard-card max-w-md w-full p-8 md:p-12 transform -rotate-1">
        <header className="text-center mb-8">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-2 uppercase tracking-widest">
            AI Mastery Series
          </div>
          <h1 className="text-4xl font-bold marker-font mb-2 text-slate-800">팔로워십 마스터</h1>
          <p className="text-slate-600 italic">Demian 임정훈이 설계한 미래형 리더십</p>
        </header>

        <div className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-bold text-slate-700 mb-2 marker-font text-lg">당신의 이름을 알려주세요</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder="예: 홍길동"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg transition shadow-inner"
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
            />
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
          </div>

          <button 
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_5px_0_rgb(30,58,138)] hover:shadow-[0_2px_0_rgb(30,58,138)] transform active:translate-y-1 transition-all duration-150 text-xl marker-font"
          >
            여정 시작하기
          </button>

          <p className="text-center text-xs text-slate-400 mt-8">
            데미안과 함께하는 1:1 팔로워십 코칭 앱
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
