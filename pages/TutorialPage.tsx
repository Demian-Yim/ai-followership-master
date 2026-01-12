
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const slides = [
  {
    title: "1. 팔로워십 진단 📋",
    description: "로버트 켈리의 팔로워십 모델을 기반으로 당신의 현재 위치를 파악합니다. 소외형부터 모범형까지, 당신은 어떤 팔로워일까요?",
    color: "bg-blue-50",
    icon: "🎯"
  },
  {
    title: "2. 상황 시뮬레이션 🎭",
    description: "실제 회사에서 일어날 법한 위기 상황! 당신의 선택에 따라 시나리오가 바뀝니다. 최선의 팔로워십을 발휘해 보세요.",
    color: "bg-green-50",
    icon: "🚀"
  },
  {
    title: "3. AI 코치 에바 & 리포트 🤖",
    description: "데미안의 철학을 학습한 AI 코치 에바가 당신의 선택을 분석하고 피드백을 줍니다. 성장을 위한 맞춤형 학습 자료도 제공됩니다.",
    color: "bg-yellow-50",
    icon: "⭐"
  }
];

const TutorialPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const completeTutorial = useStore(state => state.completeTutorial);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    completeTutorial();
    navigate('/app/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 p-4">
      <div className={`whiteboard-card max-w-2xl w-full p-8 md:p-12 transition-colors duration-500 ${slides[currentSlide].color} dark:bg-slate-800`}>
        <div className="flex justify-between items-center mb-10">
          <div className="flex space-x-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 w-8 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button onClick={handleFinish} className="text-slate-500 hover:text-slate-800 text-sm font-bold">SKIP</button>
        </div>

        <div className="text-center space-y-6">
          <div className="text-7xl mb-4">{slides[currentSlide].icon}</div>
          <h2 className="text-3xl font-bold marker-font text-slate-800 dark:text-white">{slides[currentSlide].title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed min-h-[100px]">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className="mt-12 flex space-x-4">
          {currentSlide > 0 && (
            <button 
              onClick={() => setCurrentSlide(prev => prev - 1)}
              className="flex-1 py-4 px-6 rounded-xl border-2 border-slate-300 font-bold hover:bg-white transition text-slate-700"
            >
              이전
            </button>
          )}
          <button 
            onClick={handleNext}
            className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all"
          >
            {currentSlide === slides.length - 1 ? '시작하기!' : '다음 단계'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
