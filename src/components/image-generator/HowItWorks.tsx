
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Edit3",
    title: "Опишите ваш товар",
    description: "Введите детальное описание товара, укажите его особенности и свои пожелания"
  },
  {
    icon: "Settings",
    title: "Выберите параметры",
    description: "Укажите маркетплейс, размер и другие настройки для идеального результата"
  },
  {
    icon: "Download",
    title: "Получите результат",
    description: "Скачайте готовое изображение и используйте его на выбранном маркетплейсе"
  }
];

const HowItWorks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Как это работает</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Icon name={feature.icon} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
