
import React, { useState } from 'react';
import { useStore } from '../store';
import { getGeminiResponse } from '../geminiService';

const HomePage: React.FC = () => {
  const { user, addXP } = useStore();
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState('반가워요 데미안의 제자님! 오늘은 어떤 팔로워십 역량을 키워볼까요?');

  const askEva = async () => {
    setIsAiLoading(true);
    const res = await getGeminiResponse(`사용자 ${user.userName}님에게 오늘의 팔로워십 한마디를 격려와 함께 해줘.`);
    setAiMessage(res || "");
    setIsAiLoading(false);
    addXP(10);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold marker-font text-slate-800 dark:text-white">
            안녕하세요, <span className="marker-underline">{user.userName}</span> 님! 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">오늘도 최고의 팔로워로 성장할 준비가 되셨나요?</p>
        </div>
        <div className="flex items-center space-x-6">
          <StatBox label="STREAK" value={`${user.streak}일`} icon="🔥" />
          <StatBox label="RANK" value="루키" icon="🏆" />
          <StatBox label="XP" value={user.xp} icon="✨" />
        </div>
      </section>

      {/* AI Eva Welcome Card */}
      <section className="whiteboard-card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-blue-200">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-3xl shadow-lg border-2 border-white">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300 marker-font">AI 코치 에바 (Eva)</h3>
            <div className="mt-2 bg-white dark:bg-slate-900 p-4 rounded-lg border border-blue-100 shadow-sm relative italic text-slate-700 dark:text-slate-200">
              {isAiLoading ? "에바가 메시지를 작성 중입니다..." : `"${aiMessage}"`}
              <div className="absolute -left-2 top-4 w-4 h-4 bg-white dark:bg-slate-900 border-l border-t border-blue-100 rotate-45 transform"></div>
            </div>
            <button 
              onClick={askEva}
              disabled={isAiLoading}
              className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <span>에바에게 조언 구하기 (+10 XP)</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Main Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MenuCard 
          title="유형 진단" 
          description="나의 팔로워십 성향 분석" 
          icon="📋" 
          color="bg-rose-500" 
          status="지금 시작 가능"
        />
        <MenuCard 
          title="시뮬레이션" 
          description="실전 대응 능력 훈련" 
          icon="🕹️" 
          color="bg-amber-500" 
          status="Stage 1-1"
        />
        <MenuCard 
          title="데일리 학습" 
          description="매일 하나씩 배우는 팁" 
          icon="📚" 
          color="bg-emerald-500" 
          status="새 학습 도착"
        />
        <MenuCard 
          title="성장 리포트" 
          description="나의 변화 데이터 확인" 
          icon="📊" 
          color="bg-sky-500" 
          status="업데이트 완료"
        />
        <MenuCard 
          title="뱃지 보관함" 
          description="획득한 업적과 증표" 
          icon="🏅" 
          color="bg-purple-500" 
          status={`${user.badges.length}개 보유`}
        />
        <MenuCard 
          title="커뮤니티" 
          description="동료들과의 인사이트 공유" 
          icon="🤝" 
          color="bg-slate-500" 
          status="준비 중"
        />
      </section>

      {/* Roadmap / Progress Hint */}
      <section className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
        <h3 className="font-bold mb-4 flex items-center space-x-2">
          <span className="text-xl">🛤️</span>
          <span>나의 마스터리 로드맵</span>
        </h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                진행률
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                15%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div style={{ width: "15%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
        <p className="text-sm text-gray-500">진단 테스트를 완료하면 첫 번째 뱃지를 획득할 수 있어요!</p>
      </section>
    </div>
  );
};

const StatBox = ({ label, value, icon }: { label: string, value: string | number, icon: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{label}</span>
    <div className="flex items-center space-x-1 mt-1">
      <span className="text-sm">{icon}</span>
      <span className="font-bold text-slate-800 dark:text-white">{value}</span>
    </div>
  </div>
);

const MenuCard = ({ title, description, icon, color, status }: { title: string, description: string, icon: string, color: string, status: string }) => (
  <div className="whiteboard-card p-6 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-2xl text-white mb-4 shadow-inner group-hover:scale-110 transition`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold marker-font mb-1">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
    <div className="pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
      <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 dark:bg-slate-700 rounded text-gray-500">{status}</span>
      <span className="text-blue-500 group-hover:translate-x-1 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
);

export default HomePage;
