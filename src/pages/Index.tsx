
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Имитация процесса генерации
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col">
      {/* Верхняя навигация */}
      <header className="bg-white border-b shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Image" className="text-primary w-6 h-6" />
            <h1 className="text-xl font-bold text-primary">MarketImage</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Примеры</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            <Icon name="User" className="mr-2 h-4 w-4" /> Войти
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Заголовок и описание */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Создавайте идеальные изображения для маркетплейсов
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Просто опишите желаемое изображение, выберите маркетплейс и получите готовый результат за секунды
            </p>
          </div>

          {/* Основной интерфейс */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <Tabs defaultValue="generate" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="generate">Создать изображение</TabsTrigger>
                  <TabsTrigger value="history">История</TabsTrigger>
                </TabsList>
                <TabsContent value="generate">
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
                    </div>
                    
                    {/* Кнопка генерации */}
                    <Button 
                      className="w-full py-6" 
                      onClick={handleGenerate}
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
                </TabsContent>
                
                <TabsContent value="history">
                  <div className="text-center py-12">
                    <Icon name="History" className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-600">История генераций пуста</h3>
                    <p className="text-gray-500 mt-2">Здесь будут отображаться ваши сгенерированные изображения</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Превью результатов */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Как это работает</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="Edit3" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Опишите ваш товар</h3>
                <p className="text-gray-600 text-sm">
                  Введите детальное описание товара, укажите его особенности и свои пожелания
                </p>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="Settings" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Выберите параметры</h3>
                <p className="text-gray-600 text-sm">
                  Укажите маркетплейс, размер и другие настройки для идеального результата
                </p>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="Download" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Получите результат</h3>
                <p className="text-gray-600 text-sm">
                  Скачайте готовое изображение и используйте его на выбранном маркетплейсе
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Плавающая кнопка */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full shadow-xl flex items-center justify-center gap-2">
          <Icon name="Plus" className="h-5 w-5" />
          <span>Новое изображение</span>
        </Button>
      </div>

      {/* Подвал */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Image" className="text-primary w-5 h-5" />
              <span className="font-semibold text-gray-700">MarketImage</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} MarketImage. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
