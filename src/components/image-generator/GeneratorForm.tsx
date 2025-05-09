
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface GeneratorFormProps {
  onGenerationComplete?: () => void;
}

const GeneratorForm = ({ onGenerationComplete }: GeneratorFormProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Имитация процесса генерации
    setTimeout(() => {
      setIsGenerating(false);
      if (onGenerationComplete) {
        onGenerationComplete();
      }
    }, 3000);
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="generate">Создать изображение</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate">
            <GeneratorControls 
              prompt={prompt}
              setPrompt={setPrompt}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />
          </TabsContent>
          
          <TabsContent value="history">
            <EmptyHistory />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface GeneratorControlsProps {
  prompt: string;
  setPrompt: (value: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

const GeneratorControls = ({ prompt, setPrompt, isGenerating, onGenerate }: GeneratorControlsProps) => {
  return (
    <div className="space-y-6">
      {/* Ввод промпта */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Опишите желаемое изображение
        </label>
        <Textarea 
          placeholder="Например: Профессиональное фото красной женской сумки на белом фоне, вид спереди с хорошим освещением, высокое качество" 
          className="min-h-32 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      
      {/* Настройки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MarketplaceSelector />
        <ImageSizeSelector />
      </div>
      
      {/* Кнопка генерации */}
      <Button 
        className="w-full py-6" 
        onClick={onGenerate}
        disabled={isGenerating || !prompt.trim()}
      >
        {isGenerating ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Генерируем...
          </>
        ) : (
          <>
            <Icon name="Sparkles" className="mr-2 h-4 w-4" />
            Сгенерировать
          </>
        )}
      </Button>
    </div>
  );
};

const MarketplaceSelector = () => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Маркетплейс</label>
      <Select defaultValue="wildberries">
        <SelectTrigger>
          <SelectValue placeholder="Выберите маркетплейс" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="wildberries">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span>
              Wildberries
            </div>
          </SelectItem>
          <SelectItem value="ozon">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
              Ozon
            </div>
          </SelectItem>
          <SelectItem value="yandex">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              Яндекс.Маркет
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const ImageSizeSelector = () => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Размер изображения</label>
      <Select defaultValue="square">
        <SelectTrigger>
          <SelectValue placeholder="Выберите размер" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="square">1000×1000 (Квадрат)</SelectItem>
          <SelectItem value="wide">1200×800 (Горизонтальный)</SelectItem>
          <SelectItem value="tall">800×1200 (Вертикальный)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const EmptyHistory = () => {
  return (
    <div className="text-center py-12">
      <Icon name="History" className="mx-auto h-12 w-12 text-gray-300 mb-4" />
      <h3 className="text-lg font-medium text-gray-600">История генераций пуста</h3>
      <p className="text-gray-500 mt-2">Здесь будут отображаться ваши сгенерированные изображения</p>
    </div>
  );
};

export default GeneratorForm;
