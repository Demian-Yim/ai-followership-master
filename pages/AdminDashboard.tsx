
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold font-mono">ADMIN | Followership Master</h1>
        <Link to="/app/home" className="text-xs bg-slate-700 px-3 py-1 rounded hover:bg-slate-600">학습자 모드로 전환</Link>
      </header>
      
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 space-y-2">
          <nav className="space-y-1">
            <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded font-medium">대시보드 홈</button>
            <button className="w-full text-left px-4 py-2 hover:bg-white rounded transition text-slate-600">사용자 관리</button>
            <button className="w-full text-left px-4 py-2 hover:bg-white rounded transition text-slate-600">진단 데이터</button>
            <button className="w-full text-left px-4 py-2 hover:bg-white rounded transition text-slate-600">시나리오 설정</button>
          </nav>
        </aside>

        <section className="md:col-span-3 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
              <span className="text-xs text-slate-400 block uppercase">총 학습자</span>
              <span className="text-2xl font-bold">1,284명</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
              <span className="text-xs text-slate-400 block uppercase">오늘 활성</span>
              <span className="text-2xl font-bold text-green-600">142명</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
              <span className="text-xs text-slate-400 block uppercase">평균 XP</span>
              <span className="text-2xl font-bold text-blue-600">420 pts</span>
            </div>
          </div>

          <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 font-bold">진단 유형 분포</div>
            <div className="p-12 text-center text-slate-400 italic">
              (차트 영역 - Recharts 데이터 시각화 라이브러리 연동 대기)
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-32 bg-rose-200 rounded-t relative">
                    <div className="w-full h-1/4 bg-rose-500 absolute bottom-0 rounded-t"></div>
                  </div>
                  <span className="text-[10px] mt-2">소외형</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-32 bg-amber-200 rounded-t relative">
                    <div className="w-full h-1/2 bg-amber-500 absolute bottom-0 rounded-t"></div>
                  </div>
                  <span className="text-[10px] mt-2">순응형</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-32 bg-blue-200 rounded-t relative">
                    <div className="w-full h-3/4 bg-blue-500 absolute bottom-0 rounded-t"></div>
                  </div>
                  <span className="text-[10px] mt-2">모범형</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
