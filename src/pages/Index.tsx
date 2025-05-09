
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/image-generator/PageHeader";
import GeneratorForm from "@/components/image-generator/GeneratorForm";
import HowItWorks from "@/components/image-generator/HowItWorks";
import NewImageButton from "@/components/image-generator/NewImageButton";
import ResultGallery from "@/components/ResultGallery";

const Index = () => {
  const [showResults, setShowResults] = useState(false);

  const handleGenerationComplete = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col">
      {/* Верхняя навигация */}
      <Header />

      {/* Основной контент */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Заголовок и описание */}
          <PageHeader />

          {/* Основной интерфейс */}
          <GeneratorForm onGenerationComplete={handleGenerationComplete} />

          {/* Результаты генерации */}
          <ResultGallery isVisible={showResults} />

          {/* Как это работает */}
          <HowItWorks />
        </div>
      </main>

      {/* Плавающая кнопка */}
      <NewImageButton />

      {/* Подвал */}
      <Footer />
    </div>
  );
};

export default Index;
